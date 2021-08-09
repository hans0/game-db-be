# Game DB API

## Barcodes

### Endpoints

| Endpoint                    | What it does                                                                                                            |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `/barcodes/{barcode}/taken` | Returns a JSON with item information if taken, and a JSON with barcode if not taken. Both JSONs include a `taken` field |

## Boxes

### Endpoints

| Endpoint           | What it does                               |
| ------------------ | ------------------------------------------ |
| `/boxes/{barcode}` | Returns a JSON with `barcode` and `box_id` |
