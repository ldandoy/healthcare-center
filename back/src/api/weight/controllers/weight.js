'use strict';

/**
 *  weight controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::weight.weight', ({ strapi }) => ({
    async find(ctx) {
        let { query } = ctx;
        const user = ctx.state.user;
        let entity;
        if (user) {
            query = { user: { '$eq': user.id } }
            entity = await strapi.service('api::weight.weight').find({ filters: query });
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
        let { id } = ctx.params;
        const user = ctx.state.user;
        let entity;
        let query = { user: { '$eq': user.id }, id: { '$eq': id } }
        entity = await strapi.service('api::weight.weight').find({ filters: query });
        
        if (entity.results.length === 0) {
            return ctx.badRequest(null, [{ messages: [{ id: 'Nothing to delete !' }] }]);
        }

        entity = await strapi.service('api::weight.weight').delete(id);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },
}));
