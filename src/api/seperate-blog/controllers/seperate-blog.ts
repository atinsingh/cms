/**
 * seperate-blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::seperate-blog.seperate-blog' ,({ strapi }) => ({

    // Method 3: Replacing a core action
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::seperate-blog.seperate-blog').findOne({
            where: { slug: id }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
