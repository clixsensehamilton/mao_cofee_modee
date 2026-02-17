import { FastifyRequest, FastifyReply } from 'fastify';
import { SampleService } from '../services/sampleService';

export async function postSampleHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { data } = request.body as { data?: string };
    if (!data || typeof data !== 'string' || data.length < 1) {
      return reply.status(400).send({ error: 'Data is required and must be a non-empty string.' });
    }
    const result = await SampleService.saveSample(data);
    return reply.status(201).send({ success: true, sample: result });
  } catch (err) {
    request.log.error(err);
    return reply.status(500).send({ error: 'Failed to save data.' });
  }
}
