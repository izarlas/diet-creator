import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';
import { SendPromptDto } from './dto/send-prompt.dto';

describe('OpenaiController', () => {
  let openaiController: OpenaiController;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      controllers: [OpenaiController],
      providers: [OpenaiService],
    }).compile();

    openaiController = testingModule.get<OpenaiController>(OpenaiController);
  });

  describe('sendPrompt', () => {
    it('sendPrompt returns response', async () => {
      const sendPromptDto: SendPromptDto = {
        prompt: 'Hello ChatGPT!',
      };

      const result = await openaiController.sendPrompt(sendPromptDto);

      expect(result.response).toBe('Hello! How can I assist you today?');
    });
  });
});
