exports.up = async function (knex) {
  await knex.schema
    .createTable("boxes", (boxes) => {
      boxes.increments("box_id");
      boxes.string("barcode", 55);
    })
    .createTable("accessories", (accessories) => {
      accessories.increments("accessory_id");
      accessories.string("name", 200).notNullable();
      accessories.string("type", 200).notNullable();
      accessories.string("platform", 200);
      accessories.string("brand", 200);
      accessories.string("barcode", 55);
    })
    .createTable("games", (games) => {
      games.increments("game_id");
      games.string("name", 200);
      games.string("platform", 8);
      games.string("condition", 100);
      games.string("barcode", 55);
    })
    .createTable("object_tables", (tables) => {
      tables.increments("object_table_id");
      tables.string("object_table_name");
    })
    .createTable("barcodes", (barcodes) => {
      barcodes.string("barcode", 55).unique();
      barcodes
        .integer("object_table_id")
        .references("object_table_id")
        .inTable("object_tables");
    })
    .createTable("barcodes_to_box", (btb) => {
      btb.string("object_barcode", 55).unique();
      btb.integer("box_id").references("box_id").inTable("boxes");
    });
  /*
    .createTable('comments', (comments) => {
      comments.string('comment')
      comments.integer('object_table_id')
        .references('object_table_id')
        .inTable('object_tables')
      comments.integer('object_id')
    })
    */
};

exports.down = async function (knex) {
  await knex.schema
    //.dropTableIfExists('comments')
    .dropTableIfExists("barcodes_to_box")
    .dropTableIfExists("barcodes")
    .dropTableIfExists("object_tables")
    .dropTableIfExists("games")
    .dropTableIfExists("accessories")
    .dropTableIfExists("boxes");
};
