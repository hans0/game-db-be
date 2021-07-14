const router = require("express").Router();

const Transfer = require("./transfer-model");
const Boxes = require("../boxes/boxes-model");

router.post("/", (req, res) => {
  console.log(req.body);
  const { objectBarcode, boxBarcode } = req.body;
  console.log(objectBarcode, boxBarcode);
  // Boxes.findByBarcode(boxBarcode)
  //   .then((boxId) => {
  //     res.status(200).json(boxId);
  //   })
  //   .catch((err) => {
  //     res.status(400).json(err);
  //   });
  Transfer.transfer(objectBarcode, boxBarcode)
    .then((object) => {
      res.status(200).json(object);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
