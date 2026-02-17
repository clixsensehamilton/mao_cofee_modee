// Fastify server entrypoint
import Fastify from 'fastify';

const server = Fastify({ logger: true });

server.get('/health', async () => ({ status: 'ok' }));

export default server;

if (require.main === module) {
  server.listen({ port: Number(process.env.PORT) || 3000 }, (err, address) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
    server.log.info(`Server listening at ${address}`);
  });
}
