import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { SendPromptDto } from './dto/send-prompt.dto';

@Injectable()
export class OpenaiService {
  private openAiClient: OpenAI;

  constructor() {
    this.openAiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async sendPrompt(body: SendPromptDto): Promise<string> {
    const { prompt } = body;

    const response = await this.openAiClient.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });

    return response.choices[0].message.content || '';
  }
}
