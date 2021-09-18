import { fork } from 'child_process';
import { resolve } from 'path';
import { readFileSync } from 'fs';

async function run(id: number) {
  const child = fork(resolve(__dirname, './child.ts'));
  const funcPath = resolve(__dirname, `../function/func${id}.ts`);
  const func = readFileSync(funcPath, { encoding: 'utf-8' });
  child.send({ func })

  return new Promise((resolve) => {
    child.on('message', (data: any) => {
      resolve(`function result: ${data.result}`);
    })
  })
}

export default run;