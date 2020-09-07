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
        .then(() => res.json('Item added.'))
        .catch((err) => res.status(400).json('Error: '+err));
});

router.route('/:itemNumber').get((req, res) => {
    Item.findOne({itemNumber: req.params.itemNumber})
        .then((item) => res.json(item))
        .catch((err) => res.status(400).json('Error: '+err));
});

router.route('/:itemNumber').delete((req, res) => {
    Item.findOneAndDelete({itemNumber: req.params.itemNumber})
        .then(() => res.json('Item deleted.'))
        .catch((err) => res.status(400).json('Error: ')+err);
});

router.route('/update/:itemNumber').put((req, res) => {
    Item.findOneAndUpdate({itemNumber: req.params.itemNumber}, req.body.update)
        .then((item) => {
            item.save()
                .then(() => res.json("Item updated."))
                .catch((err) => res.status(400).json('Error: '+err));
        })
        .catch((err) => res.status(400).json('Error: '+err));
});

module.exports = router;