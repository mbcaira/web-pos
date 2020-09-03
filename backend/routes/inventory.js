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

    const newItem = new Item({
        itemNumber,
        itemName,
        description,
        price
    });

    newItem.save()
        .then(() => res.json('Item added.'))
        .catch((err) => res.status(400).json('Error: '+err));
});

router.route('/delete').delete((req, res) => {
    const itemNumber = req.body.itemNumber;

    Item.deleteOne({itemNumber: itemNumber})
        .then(() => res.json('Item successfully deleted.'))
        .catch((err) => res.status(400).json('Error: '+err));
});
module.exports = router;