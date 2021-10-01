const knex = require('../database');

module.exports = {
    
    find: () => {
        return knex.select().from('estados');
    },

    findById: (params) => {
        return knex.select().from('estados').where('id', params.id);
    }, 

    create: (params) => {
        return knex.insert(params).into('estados');
    },

    update: (params) => {
        return knex('estados').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('estados').del().where('id', params.id);
    }
}