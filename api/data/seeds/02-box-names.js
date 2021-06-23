exports.seed = function(knex, Promise) {
  return knex('tables').del()
    .then(function() {
      return knex('tables').insert([
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