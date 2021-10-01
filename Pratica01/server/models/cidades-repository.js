const knex = require('../database');

module.exports = {
    
    find: () => {
        //select * from product
        return knex.select('c.*', 'e.name as estados_name').from('cidades as c').innerJoin('estados as e', 'e.id', 'c.estados_id');
    },

    findById: (params) => {
        //select * from cidades where id = params.id
        return knex.select('c.*', 'e.name as estados_name').from('cidades as c').innerJoin('estados as e', 'e.id', 'c.estado_id').where('c.id', params.id);
    }, 

    create: (params) => {
        //insert into cidades(name, description, price, likes, group_id) values (params.name, params.description, params.price, params.likes, price.group_id)
        return knex.insert(params).into('cidades');
    },

    update: (params) => {
        
        return knex('cidades').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('cidades').del().where('id', params.id);
    }
}