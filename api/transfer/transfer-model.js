const db = require('../data/db-config.js')



function transfer(itemBarcode, boxBarcode){
  const [ boxId ] = db('boxes').select('box_id').where(boxBarcode, 'barcode')
  return db('barcodes_to_box').insert({ barcode: itemBarcode, box_barcode: boxBarcode, box_id: boxId })
}



module.exports = {
  transfer,
}