import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiController } from '../../../src/openai/openai.controller';
import { OpenaiService } from '../../../src/openai/openai.service';
import { SendPromptDto } from '../../../src/openai/dto/send-prompt.dto';

describe('OpenaiController', () => {
  let openaiController: OpenaiController;
  let openaiService: OpenaiService;
  const mockOpenaiService = {
    sendPrompt: jest.fn(),
  };

  describe('POST /chat', () => {
    beforeAll(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [OpenaiController],
        providers: [
          {
            provide: OpenaiService,
            useValue: mockOpenaiService,
          },
        ],
      }).compile();

      openaiController = module.get<OpenaiController>(OpenaiController);
      openaiService = module.get<OpenaiService>(OpenaiService);
    });

    it('returns a response and 201 statusCode', async () => {
      const mockSendPromptDto: SendPromptDto = { prompt: 'Mock prompt' };
      const mockResponse: { response: string } = { response: 'Mock response' };

      mockOpenaiService.sendPrompt.mockResolvedValue(mockResponse.response);
      const promptResult = await openaiController.sendPrompt(mockSendPromptDto);

      expect(promptResult).toEqual(mockResponse);
      expect(mockOpenaiService.sendPrompt).toHaveBeenCalledWith(
        mockSendPromptDto,
      );
    });
  });
});
