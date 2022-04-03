'use strict';

/**
 *  shopping-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::shopping-list.shopping-list', ({ strapi }) => ({
    async find(ctx) {
        let { query } = ctx;
        const user = ctx.state.user;
        let entity;
        if (user) {
            query = { user: user.id }
            entity = await strapi.service('api::shopping-list.shopping-list').find({ where: query });
        }
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },
    async create(ctx) {
        const { data } = ctx.request.body;
        const user = ctx.state.user;
        let entity;
        data.user = user.id
        entity = await strapi.service('api::shopping-list.shopping-list').create({ data });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },
    async delete(ctx) {
        const { id } = ctx.params;
        const user = ctx.state.user;
        
        let entity;
        entity = await strapi.service('api::shopping-list.shopping-list').findOne(id, { populate: 'user'});

        if (user.id === entity.user.id) {
            entity = await strapi.entityService.delete('api::shopping-list.shopping-list', id);
        }
        
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },
    async update(ctx) {
        const { id } = ctx.params;
        const { data } = ctx.request.body;
        const user = ctx.state.user;
        
        let entity;
        data.todo.user = user.id
        entity = await strapi.service('api::shopping-list.shopping-list').findOne(id, { populate: 'user'});
        if (user.id === entity.user.id) {
            entity = await strapi.entityService.update('api::shopping-list.shopping-list', id, {
                data: data.todo
            });
        }
        
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));
