import { helpers, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { coloredResponse } from "../services/index.controllers.JS";

const router = new Router();

router.get('/', ctx => {
    ctx.response.body = 'Bienvenido al Server con Deno'
});

router.post('/', async ctx => {
    const colorCode = await ctx.request.body().value;
    const message = helpers.getQuery(ctx).message;
    coloredResponse(colorCode, message);
});

export default router;