exports.seed = function(knex) {
  return knex('boxes').del()
    .then(function() {
      return knex('boxes').insert([
        {
          nickname: 'Pikachu',
          barcode: 'PIKACHU'
        },
        {
          nickname: 'Bulbasaur',
          barcode: 'BULBASAUR'
        },
        {
          nickname: 'Charmander',
          barcode: 'CHARMANDER'
        }
      ])
    })
}