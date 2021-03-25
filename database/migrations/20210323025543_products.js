exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
        table.increments('id');
        table.decimal('price').notNullable();
        table.string('name', 1000).notNullable();
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('products');
}