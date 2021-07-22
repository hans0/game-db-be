const db = require("../data/db-config.js");

const getObjectBoxByBarcode = (objectBarcode) => {
  return db("barcodes_to_box as btb")
    .leftJoin("boxes as b", "btb.box_id", "b.box_id")
    .select("btb.object_barcode", "btb.box_id", "b.barcode as box_barcode")
    .where("btb.object_barcode", objectBarcode)
    .first();
};

module.exports = {
  getObjectBoxByBarcode,
};
