"use strict";

/**
 * good controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::good.good",
  ({ strapi }) => ({
    async find(ctx) {
      let result = await super.find(ctx);

      // отдаем в каталог только первое изображение у каждого item_good, чтобы не тащить кучу данных
      if (ctx.request.query.catalog == "true") {
        result.data.forEach(good => {
          good.attributes.item_goods.data.forEach(item_good => {
            item_good.attributes.images.data = item_good.attributes.images.data.slice(1);
          })
        });
      }

      return result;
    },
  })
);
