const db = require("../data/db-config.js");

const getAll = () => {
  return db("barcodes").select("*");
};

const getAllLocations = () => {
  return db("barcodes_to_box as btb")
    .leftJoin("boxes as b", "btb.box_id", "b.box_id")
    .select("btb.object_barcode", "b.barcode as box_barcode");
};

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
  const isTaken = await taken(barcode);
  if (isTaken === undefined) {
    console.log(barcode, " is free");
    // TODO: can probably make this atomic
    await db("barcodes").insert({
      barcode: barcode,
      object_table_id: 1,
      object_id: 0,
    });
    await db("barcodes_to_box").insert({
      object_barcode: barcode,
      box_id: 1,
    });
    return db("barcodes").select("*").where("barcode", barcode).first();
  } else {
    // if barcode is taken
    return isTaken;
  }
};

module.exports = {
  getAll,
  getAllLocations,
  taken,
  create,
};
