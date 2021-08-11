exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("games")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("games")
        .insert([
          {
            name: "Everdrive N8 Pro",
            platform: "NES",
            condition: "Good",
            barcode: "NESEVRDRV",
          },
          {
            name: "Everdrive 64 X7",
            platform: "N64",
            condition: "Good",
            barcode: "N64EVRDRV",
          },
          {
            name: "FX Pak Pro",
            platform: "SNES",
            condition: "Good",
            barcode: "SNESFXPAK",
          },
        ])
        .then(function () {
          return knex("barcodes").insert([
            {
              barcode: "NESEVRDRV",
              object_table_id: 3,
              object_id: 1,
            },
            {
              barcode: "N64EVRDRV",
              object_table_id: 3,
              object_id: 2,
            },
            {
              barcode: "SNESFXPAK",
              object_table_id: 3,
              object_id: 3,
            },
          ]);
        })
        .then(function () {
          return knex("barcodes_to_box").insert([
            {
              object_barcode: "NESEVRDRV",
              box_id: 1,
            },
            {
              object_barcode: "N64EVRDRV",
              box_id: 1,
            },
            {
              object_barcode: "SNESFXPAK",
              box_id: 1,
            },
          ]);
        });
    });
};
