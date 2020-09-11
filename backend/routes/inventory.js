const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const itemNumber = Number(req.body.itemNumber);
    const itemName = req.body.itemName;
    const description = req.body.description;
    const price = Number(req.body.price);
    const stock = Number(req.body.stock);

    const newItem = new Item({
        itemNumber,
        itemName,
        description,
        price,
        stock
    });

    newItem.save()
        .then(() => res.json('Request made successfully.'))
        .catch((err) => res.status(400).json('Error: '+err));
});

router.route('/:itemNumber').get((req, res) => {
    Item.findOne({itemNumber: req.params.itemNumber})
        .then((item) => res.json(item))
        .catch((err) => res.status(400).json('Error: '+err));
});

router.route('/:itemNumber').delete((req, res) => {
    Item.findOneAndDelete({itemNumber: req.params.itemNumber})
        .then(() => res.json('Request made successfully.'))
        .catch((err) => res.status(400).json('Error: ')+err);
});

router.route('/update/:itemNumber').post((req, res) => {
    Item.findOne({itemNumber: req.params.itemNumber})
        .then(item => {
            item.itemNumber = Number(req.params.itemNumber);

            if (req.body.itemName !== "") {
                item.itemName = req.body.itemName;
            }
            if (req.body.description !== "") {
                item.description = req.body.description;;
            }
            if (req.body.stock !== "") {
                item.stock = Number(req.body.stock);
            }
            if (req.body.price !== "") {
                item.price = Number(req.body.price);
            }

            item.save()
                .then(() => res.json('Item updated.'))
                .catch((err) => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;