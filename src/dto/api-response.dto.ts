import { ApiProperty } from '@nestjs/swagger';

export class EncryptDataResponse {
    @ApiProperty({ example: 'encrypted_aes_key_base64' })
    data1: string;

    @ApiProperty({ example: 'encrypted_payload_base64' })
    data2: string;
}

export class DecryptDataResponse {
    @ApiProperty({ example: 'decrypted_payload' })
    payload: string;
}

export class ApiResponseDto<T> {
    @ApiProperty({ example: true })
    successful: boolean;

    @ApiProperty({ example: '', nullable: true })
    error_code: string | null;

    @ApiProperty({ nullable: true })
    data: T | null;

    constructor(successful: boolean, data: T | null = null, error_code: string | null = null) {
        this.successful = successful;
        this.data = data;
        this.error_code = error_code;
    }
}
