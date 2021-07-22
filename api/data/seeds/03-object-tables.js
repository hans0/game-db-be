exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("object_tables")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("object_tables").insert([
        { object_table_name: "boxes" },
        { object_table_name: "games" },
        { object_table_name: "accessories" },
      ]);
    });
};
