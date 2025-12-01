import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiService } from '../../../src/openai/openai.service';
import OpenAI from 'openai';
import { SendPromptDto } from '../../../src/openai/dto/send-prompt.dto';

jest.mock('openai');

const mockApiKey = 'test-key';
const mockOpenAiResponse = 'Some content response';
const mockOpenAiClient = {
  chat: {
    completions: {
      create: jest.fn(),
    },
  },
};
const mockSendPromptDto: SendPromptDto = { prompt: 'Mock prompt' };

describe('OpenaiService', () => {
  let openaiService: OpenaiService;

  beforeEach(async () => {
    process.env.OPENAI_API_KEY = mockApiKey;
    (OpenAI as unknown as jest.Mock).mockImplementation(() => mockOpenAiClient);
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenaiService],
    }).compile();

    openaiService = module.get<OpenaiService>(OpenaiService);
  });

  describe('openai client', () => {
    it('is created with the correct API key', () => {
      const testService = new OpenaiService();

      expect(OpenAI).toHaveBeenCalledWith({
        apiKey: mockApiKey,
      });
      expect(testService).toBeDefined();
    });
  });

  describe('sendPrompt', () => {
    it('returns content from OpenAI', async () => {
      mockOpenAiClient.chat.completions.create.mockResolvedValue({
        choices: [{ message: { content: mockOpenAiResponse } }],
      });

      const result = await openaiService.sendPrompt(mockSendPromptDto);

      expect(result).toBe(mockOpenAiResponse);
      expect(mockOpenAiClient.chat.completions.create).toHaveBeenCalledWith({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: mockSendPromptDto.prompt }],
      });
    });

    it('returns empty response string if content is missing', async () => {
      mockOpenAiClient.chat.completions.create.mockResolvedValue({
        choices: [{ message: { content: null } }],
      });

      const result = await openaiService.sendPrompt(mockSendPromptDto);

      expect(result).toBe('');
    });
  });
});
