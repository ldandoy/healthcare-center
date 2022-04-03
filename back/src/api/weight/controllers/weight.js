'use strict';

/**
 *  weight controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::weight.weight', ({ strapi }) => ({
    async find(ctx) {
        const sort = ctx.query.sort[0].split(':')
        let { query } = ctx;
        const user = ctx.state.user;
        let entity;
        if (user) {
            entity = await strapi.service('api::weight.weight').find({ 
                where: { user: user.id},
                populate: [query.populate],
                sort: [ctx.query.sort[0]]
            });
        }
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },
    async create(ctx) {
        const { data } = ctx.request.body;
        const user = ctx.state.user;
        let entity;
        data.user = user.id
        entity = await strapi.service('api::weight.weight').create({ data });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },
    async delete(ctx) {
        const { id } = ctx.params;
        const user = ctx.state.user;
        
        let entity;
        entity = await strapi.service('api::weight.weight').findOne(id, { populate: 'user'});

        if (user.id === entity.user.id) {
            entity = await strapi.entityService.delete('api::weight.weight', id);
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
        entity = await strapi.service('api::weight.weight').findOne(id, { populate: 'user'});
        if (user.id === entity.user.id) {
            entity = await strapi.entityService.update('api::weight.weight', id, {
                data: data.todo
            });
        }
        
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));
