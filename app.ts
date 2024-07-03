import { Hono } from "hono";
import { logger } from "hono/logger"
import { router } from "./server/routes/expenses";
const app = new Hono();

app.get('*', logger())
app.get('/', (c) => {
    return c.json({
        message: "hello from hono"
    })
})

app.route('/api/expenses', router);

export default app;