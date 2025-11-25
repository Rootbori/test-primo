import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class DecryptRequestDto {
    @ApiProperty({
        description: 'Encrypted AES key (encrypted with RSA private key)',
        example: 'base64_encoded_encrypted_aes_key',
    })
    @IsString()
    @IsNotEmpty()
    data1: string;

    @ApiProperty({
        description: 'Encrypted payload (encrypted with AES)',
        example: 'base64_encoded_encrypted_payload',
    })
    @IsString()
    @IsNotEmpty()
    data2: string;
}
