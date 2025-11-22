import { IsString, MinLength } from 'class-validator';

export class SendPromptDto {
  @IsString()
  @MinLength(1)
  prompt: string;
}
