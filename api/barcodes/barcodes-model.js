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

const create = async (barcode) => {
  // console.log("hit", barcode);
  const isTaken = await taken(barcode);
  // console.log("isTaken", isTaken !== undefined);
  if (isTaken === undefined) {
    console.log(barcode, " is free");
    // TODO: can probably make this atomic
    await db("barcodes").insert({
      barcode: barcode,
      object_table_id: 4,
      object_id: 0,
    });
    await db("barcodes_to_box").insert({
      object_barcode: barcode,
      box_id: 4,
    });
    return db("barcodes").select("*").where("barcode", barcode);
  } else {
    // if barcode is taken
    return isTaken;
  }
};

module.exports = {
  taken,
  create,
};
