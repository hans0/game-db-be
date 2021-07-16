const db = require("../data/db-config.js");

const transfer = async (objectBarcode, boxBarcode) => {
  // the await needs to be here, otherwise get an undefined for the box number
  const res = await db("boxes").select().where("barcode", boxBarcode).first();
  console.log(res.box_id);
  const entry = {
    object_barcode: objectBarcode,
    box_id: res.box_id,
  };
  console.log(entry);
  const insertRes = await db("barcodes_to_box").insert(entry);
};

module.exports = {
  transfer,
};