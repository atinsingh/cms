/**
 * seperate-career controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::seperate-career.seperate-career' , ({ strapi }) => ({

    // Method 3: Replacing a core action
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::seperate-career.seperate-career').findOne({
            where: { slug: id }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
