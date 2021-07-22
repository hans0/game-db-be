const db = require("../data/db-config.js");

const taken = async (barcode) => {
  return await db("barcodes as b")
    .leftJoin("object_tables as ot", "b.object_table_id", "ot.object_table_id")
    .select(
      "b.barcode",
      "b.object_id as id",
      "ot.object_table_name as table_name"
    )
    .where("b.barcode", barcode)
    .first();
};

module.exports = {
  taken,
};
