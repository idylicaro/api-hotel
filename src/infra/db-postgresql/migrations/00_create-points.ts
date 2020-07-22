import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  // Criar a tabela
  return await knex.schema.createTable('accounts', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('phone').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
  })
}
export async function down (knex: Knex): Promise<any> {
  // UNDO
  return await knex.schema.dropTable('accounts')
}