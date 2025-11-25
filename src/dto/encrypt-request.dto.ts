import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class EncryptRequestDto {
  @ApiProperty({
    description: 'Payload to encrypt',
    example: 'Hello, this is a secret message!',
    minLength: 0,
    maxLength: 2000,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2000, { message: 'Payload must not exceed 2000 characters' })
  payload: string;
}
