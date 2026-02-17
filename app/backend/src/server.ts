// Fastify server entrypoint

import Fastify from 'fastify';

import sampleRoutes from './routes/sample';
import moodInputRoutes from './routes/moodInput';


const server = Fastify({ logger: true });


server.get('/health', async () => ({ status: 'ok' }));


// Legacy mood route removed
// Register sample routes
sampleRoutes(server);
// Register new mood input API
moodInputRoutes(server);

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
