import { FastifyInstance } from 'fastify';
import { postSampleHandler } from '../controllers/sampleController';

export default async function sampleRoutes(server: FastifyInstance) {
  server.post('/sample', postSampleHandler);
}
