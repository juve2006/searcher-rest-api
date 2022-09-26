import { IsNotEmpty, IsUrl } from 'class-validator';

export class AddUrlDto {
  @IsNotEmpty()
  @IsUrl()
  url: string
}