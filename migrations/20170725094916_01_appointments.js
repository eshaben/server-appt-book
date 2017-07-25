
exports.up = function(knex, Promise) {
  return knex.schema.createTable('appointment', (table) => {
    table.increments();
    table.text('firstName').notNullable();
    table.text('lastName').notNullable();
    table.text('phone').notNullable();
    table.text('email').unique()
    table.date('apptDate').notNullable();
    table.time('apptTime').notNullable();
    table.timestamps(true)
    table.boolean('newPatient')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('appointment')
};
