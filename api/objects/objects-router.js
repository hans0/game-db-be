const db = require("../data/db-config.js");

// this just belongs in an object router
const getObjectBoxByBarcode = async (objectBarcode) => {
  const objectQuery = await db("barcodes_to_box")
    .select()
    .where("object_barcode", objectBarcode);
  const result = {
    objectBarcode: objectBarcode,
    boxId: objectQuery[0]["box_id"],
  };
  return result;
};

module.exports = {
  getObjectBoxByBarcode,
};
