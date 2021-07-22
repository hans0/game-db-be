
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('barcodes').del()
    .then(function () {
      // Inserts seed entries
      return knex('barcodes').insert([
        {
          barcode: 'OUTOFBOX',
          object_table_id: 1,
          object_id: 1
        },
        {
          barcode: 'PIKACHU',
          object_table_id: 1,
          object_id: 2
        },
        {
          barcode: 'BULBASAUR',
          object_table_id: 1,
          object_id: 3
        },
        {
          barcode: 'CHARMANDER',
          object_table_id: 1,
          object_id: 4
        },
      ]);
    });
};
