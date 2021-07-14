const db = require("../data/db-config.js");

module.exports = {
  transfer,
};

async function transfer(objectBarcode, boxBarcode) {
  const bResponse = await db("boxes")
    .select("box_id")
    .where("barcode", boxBarcode)
    .first();
  console.log(bResponse.box_id);
  return await db("barcodes_to_box").insert({
    object_barcode: objectBarcode,
    box_id: bResponse.box_id,
  });
}
