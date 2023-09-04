/**
 * skilldevelopment-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::skilldevelopment-page.skilldevelopment-page',
({ strapi }) => ({

    // Method 3: Replacing a core action
    async findOne(ctx: { params: { id: any; }; }) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::skilldevelopment-page.skilldevelopment-page').findOne({
            where: { slug: id }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
