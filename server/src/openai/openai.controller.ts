import { Body, Controller, Post } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { SendPromptDto } from './dto/send-prompt.dto';

@Controller('chat')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post()
  async sendPrompt(@Body() body: SendPromptDto) {
    const result = await this.openaiService.sendPrompt(body);

    return { response: result };
  }
}
