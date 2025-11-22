import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendPromptDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The user send prompt to Openai' })
  prompt: string;
}
