
exports.up = async function(knex) {
  await knex.schema
    .createTable('boxes', (boxes) => {
      boxes.increments('box_id')
      boxes.string('nickname', 200).notNullable()
      boxes.string('barcode', 32)
    })
    .createTable('accessories', (accessories) => {
      accessories.increments('accessory_id')
      accessories.string('name', 200).notNullable()
      accessories.string('type', 200).notNullable()
      accessories.string('platform', 200)
      accessories.string('brand', 200)
      accessories.string('barcode', 32)
    })
    .createTable('games', (games) => {
      games.increments('game_id')
      games.string('name', 200)
      games.string('platform', 8)
      games.string('condition', 100)
      games.string('barcode', 32)
    })
    .createTable('tables', (tables) => {
      tables.increments('table_id')
      tables.string('table_name')
    })
    .createTable('barcodes', (barcodes) => {
      barcodes.string('barcode')
      barcodes.integer('table_id')
        .references('table_id')
        .inTable('tables')
    })
    .createTable('barcodes_to_box', (btb) => {
      btb.string('item_barcode')
      btb.string('box_barcode')
      btb.integer('box_id')
        .references('box_id')
        .inTable('boxes')
    })
    .createTable('comments', (comments) => {
      comments.string('comment')
      comments.integer('table_id')
        .references('table_id')
        .inTable('tables')
      comments.integer('item_id')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('comments')
    .dropTableIfExists('barcodes_to_box')
    .dropTableIfExists('barcodes')
    .dropTableIfExists('tables')
    .dropTableIfExists('games')
    .dropTableIfExists('accessories')
    .dropTableIfExists('boxes')
};