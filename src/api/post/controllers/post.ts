/**
 * post controller
 */
import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::post.post");

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::post.post", async ({ strapi }) => {
//   return {
//     async create(ctx) {
//       // some logic here
//       //  const user = ctx.state.user;
//       const response = await super.create(ctx);

//       return response;
//     },
//   };
// });
