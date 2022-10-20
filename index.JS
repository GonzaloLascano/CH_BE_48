import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import router from './routes/index.routes.JS'

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());


console.log('Server running on port', 8080);
await app.listen({port: 8080});