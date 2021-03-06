const router = require("express").Router();

const Boxes = require("./boxes-model.js");

router.get("/", (req, res) => {
  Boxes.getBoxes()
    .then((boxes) => {
      res.status(200).json(boxes);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/:barcode", (req, res) => {
  const { barcode } = req.params;
  console.log("searching box by barcode", barcode);
  Boxes.findByBarcode(barcode)
    .then((box) => {
      res.status(200).json(box);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.post("/", (req, res, next) => {
  const box = req.body;
  Boxes.add(box)
    .then((newBox) => {
      res.status(201).json(newBox);
    })
    .catch(next);
});

module.exports = router;
