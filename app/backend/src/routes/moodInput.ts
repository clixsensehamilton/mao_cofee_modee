import { FastifyInstance } from 'fastify';
import { postMoodInputHandler } from '../controllers/moodInputController';

export default async function moodInputRoutes(fastify: FastifyInstance) {
  fastify.post('/api/mood-input', postMoodInputHandler);
}
