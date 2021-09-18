import { VM } from 'vm2';

process.on('message', (message: any) => {
  const funcIIFE = `(${message.func})()`;
  const result = new VM().run(funcIIFE);
  process.send({ result });
  process.exit(0);
})
