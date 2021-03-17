const router = require('express').Router();
const bookController = require('../../controllers/bookController')

router.route("/")
    .get(bookController.findAll)
    .get(bookController.create)


router.route('/:id')
    .delete(bookController.remove)

module.exports = router