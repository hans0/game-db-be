const router = require("express").Router();

const Transfer = require("./transfer-model");
// const Boxes = require("../boxes/boxes-model");

router.post("/", (req, res) => {
  const { objectBarcode, boxBarcode } = req.body;
  Transfer.transfer(objectBarcode, boxBarcode)
    .then((object) => {
      res.status(200).json(object);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:barcode", (req, res) => {
  const { objectBarcode } = req.params.barcode;
  Transfer.getObjectBoxByBarcode(objectBarcode)
    .then((object) => {
      res.status(200).json(object);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
