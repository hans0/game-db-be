const router = require("express").Router();

const Barcodes = require("./barcodes-model");

router.get("/:barcode/taken", (req, res) => {
  Barcodes.taken(req.params.barcode)
    .then((object) => {
      if (!object) {
        res.status(206).json({
          barcode: req.params.barcode,
          taken: "False",
        });
      } else {
        res.status(200).json({
          ...object,
          taken: "True",
        });
      }
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.post("/create/:barcode", (req, res) => {
  Barcodes.create(req.params.barcode)
    .then((object) => {
      console.log(object);
      res.status(201).json(object);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
