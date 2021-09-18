import * as Koa from 'koa';
import * as Router from 'koa-router';
import run from './handle';
const app = new Koa();
const router = new Router();

const trigger = async (ctx: Koa.Context) => {
  const res = ctx.request;
  const id: number = Number(res.query.id);
  const result = (await run(id) || 'error');
  ctx.response.body = result;

};


// http trigger

router.get('/trigger', trigger)
app.use(router.routes());

app.listen(8000)