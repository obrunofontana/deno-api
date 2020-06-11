import { Application } from 'https://deno.land/x/oak/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import router from './src/routes/routes.ts';

const HOST = config().HOST ?? "127.0.0.1"
const PORT = config().PORT ??8080;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Deno is running: ${HOST}:${PORT}`);
app.listen(`${HOST}:${PORT}`);
