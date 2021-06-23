const db = require('../data/db-config.js')

module.exports = {
  add,
  findById,
  getBoxes,
}

function getBoxes() {
  return db('boxes');
}

async function add(box) {
  const [box_id] = await db('boxes').insert(box, 'box_id')
  return findById(box_id)
}

function findById(box_id) {
  return db('boxes').select('box_id', 'nickname', 'barcode')
    .where('box_id', box_id)
    .first()
}