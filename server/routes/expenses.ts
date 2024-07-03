import { Hono } from "hono"

const router = new Hono();


type Expenses = {
    id: number,
    title: string,
    amount: number
}

const fakeExpenses: Expenses[] = [
    { id: 1, title: 'underscore a', amount: 50 },
    { id: 2, title: 'underscore b', amount: 150 },
    { id: 3, title: 'underscore c', amount: 250 },
]

router.get('/', (c) => {
    return c.json({
        expenses: fakeExpenses
    })
})

router.post('/', async (c) => {
    const data = await c.req.json()
    console.log({ data });
    return c.json({
        data
    })
})


export {
    router
}
