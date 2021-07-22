const router = require("express").Router();

const Objects = require("./objects-model");

router.get("/:barcode", (req, res) => {
  Objects.getObjectBoxByBarcode(req.params.barcode)
    .then((object) => {
      res.status(200).json(object);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
