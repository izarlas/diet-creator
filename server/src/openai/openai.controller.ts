import { Body, Controller, Post } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { SendPromptDto } from './dto/send-prompt.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Chat')
@Controller('chat')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post()
  @ApiOperation({ summary: 'Send user prompt' })
  @ApiResponse({ status: 201, description: 'Receives prompt response' })
  async sendPrompt(@Body() body: SendPromptDto) {
    const result = await this.openaiService.sendPrompt(body);

    return { response: result };
  }
}
