const router = require("express").Router();

const Transfer = require("./transfer-model");

router.post("/", (req, res) => {
  const { objectBarcode, boxBarcode } = req.body;
  Transfer.transfer(objectBarcode, boxBarcode)
    .then((object) => {
      res.status(200).json(object);
    })
    .catch((err) => {
      // TODO: this needs to be expanded/updated
      console.log(err);
      res.status(207).json({
        httpCode: 207,
        message: `${boxBarcode} does not correspond to a box`,
      });
    });
});

module.exports = router;
