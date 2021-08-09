const db = require("../data/db-config.js");
const upsert = require("knex-upsert");

const transfer = async (objectBarcode, boxBarcode) => {
  const res = await db("boxes")
    .select("box_id")
    .where("barcode", boxBarcode)
    .first();
  const entry = {
    object_barcode: objectBarcode,
    box_id: res.box_id,
  };
  await upsert({
    db,
    table: "barcodes_to_box",
    object: entry,
    key: "object_barcode",
  });
  return db("barcodes_to_box as btb")
    .select("*")
    .leftJoin("boxes as b", "btb.box_id", "b.box_id")
    .where("object_barcode", objectBarcode)
    .first();
};

module.exports = {
  transfer,
};
