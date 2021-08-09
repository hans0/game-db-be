# Game DB API

## Barcodes

### Endpoints

| Endpoint                    | What it does                                                                                                                                                                     |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/barcodes/{barcode}/taken` | Returns a JSON with item information if taken, and a JSON with barcode if not taken. Both JSONs include a `taken` field                                                          |
| `/citypairs/airfares/{id}`  | Returns an array of Airfares based on unique identifier. Array will contain one airfare. (This is just for demonstration purpose. For City Pairs, the ID does not have meaning.) |

## Starting a New Project

- Create a new repository using this template, and clone it to your local.
- Create a `.env` file and follow the instructions inside `knexfile.js`.
- Fix the scripts inside `package.json` to use your Heroku app.

## Scripts

- **start**: Runs the app.
