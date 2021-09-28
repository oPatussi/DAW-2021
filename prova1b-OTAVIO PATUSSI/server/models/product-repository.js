const knex = require('../database');

module.exports = {
    
    find: () => {
        //select * from product
        return knex.select('n.*', 'l.name as logo_name').from('name as n').innerJoin('logo as l', 'l.id', 'n.brand_id');
    },

    findById: (params) => {
        //select * from product where id = params.id
        return knex.select('n.*', 'l.name as logo_name').from('name as n').innerJoin('logo as l', 'l.id', 'n.brand_id').where('n.id', params.id);
    }, 

    create: (params) => {
        //insert into product(name, description, price, likes, group_id) values (params.name, params.description, params.price, params.likes, price.group_id)
        return knex.insert(params).into('brand');
    },

    update: (params) => {
        
        return knex('brand').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('product').del().where('id', params.id);
    }
}