import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { createMoodInput } from '../services/moodInputService';

const MoodInputSchema = z.object({
  userId: z.string().uuid(),
  moodText: z.string().optional(),
  // moodVoice will be handled as file upload (multipart)
});

export async function postMoodInputHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Support both JSON and multipart
    const contentType = request.headers['content-type'] || '';
    let data: any = {};
    let moodVoicePath: string | undefined = undefined;

    if (contentType.includes('multipart/form-data')) {
      // @ts-ignore
      const parts = request.parts();
      for await (const part of parts) {
        if (part.type === 'file' && part.fieldname === 'moodVoice') {
          // Save file to disk (implement actual storage logic)
          const filePath = `/tmp/${Date.now()}_${part.filename}`;
          await part.file.pipe(require('fs').createWriteStream(filePath));
          moodVoicePath = filePath;
        } else if (part.type === 'field') {
          data[part.fieldname] = part.value;
        }
      }
    } else {
      data = request.body;
    }

    // Validate
    const parseResult = MoodInputSchema.safeParse(data);
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'INVALID_INPUT', details: parseResult.error.issues });
    }
    const { userId, moodText } = parseResult.data;
    if (!moodText && !moodVoicePath) {
      return reply.status(400).send({ error: 'MISSING_MOOD_INPUT' });
    }

    const moodInput = await createMoodInput({ userId, moodText, moodVoicePath });
    return reply.status(201).send({ success: true, moodInput });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return reply.status(500).send({ error: 'INTERNAL_ERROR', details: message });
  }
}
