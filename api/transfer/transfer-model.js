const db = require("../data/db-config.js");

const transfer = async (objectBarcode, boxBarcode) => {
  // the await needs to be here, otherwise get an undefined for the box number
  const res = await db("boxes")
    .select("box_id")
    .where("barcode", boxBarcode)
    .first();
  const entry = {
    object_barcode: objectBarcode,
    box_id: res.box_id,
  };
  await db("barcodes_to_box")
    .insert(entry)
    .onConflict("object_barcode")
    .merge(entry);
  return db("barcodes_to_box as btb")
    .select("*")
    .leftJoin("boxes as b", "btb.box_id", "b.box_id")
    .where("object_barcode", objectBarcode)
    .first();
};

module.exports = {
  transfer,
};
