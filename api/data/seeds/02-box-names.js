exports.seed = function(knex) {
  return knex('boxes').del()
    .then(function() {
      return knex('boxes').insert([
        {
          barcode: 'OUTOFBOX'
        },
        {
          barcode: 'PIKACHU'
        },
        {
          barcode: 'BULBASAUR'
        },
        {
          barcode: 'CHARMANDER'
        }
      ])
    })
}