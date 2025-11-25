import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EncryptionService } from './encryption.service';
import { EncryptRequestDto } from '../dto/encrypt-request.dto';
import { DecryptRequestDto } from '../dto/decrypt-request.dto';
import { ApiResponseDto, EncryptDataResponse, DecryptDataResponse } from '../dto/api-response.dto';

@ApiTags('Encryption')
@Controller()
export class EncryptionController {
    constructor(private readonly encryptionService: EncryptionService) { }

    @Post('get-encrypt-data')
    @ApiOperation({ summary: 'Encrypt payload with AES and RSA' })
    @ApiResponse({ status: 200, description: 'Successfully encrypted data' })
    async encryptData(@Body() dto: EncryptRequestDto): Promise<ApiResponseDto<EncryptDataResponse>> {
        try {
            const aesKey = this.encryptionService.generateAESKey();
            const data2 = this.encryptionService.encryptWithAES(dto.payload, aesKey);
            const data1 = this.encryptionService.encryptWithRSA(aesKey);

            return new ApiResponseDto(true, { data1, data2 });
        } catch (error) {
            console.log('error', error);
            throw new HttpException('ENCRYPTION_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('get-decrypt-data')
    @ApiOperation({ summary: 'Decrypt data with RSA and AES' })
    @ApiResponse({ status: 200, description: 'Successfully decrypted data' })
    async decryptData(@Body() dto: DecryptRequestDto): Promise<ApiResponseDto<DecryptDataResponse>> {
        try {
            const aesKey = this.encryptionService.decryptWithRSA(dto.data1);
            const payload = this.encryptionService.decryptWithAES(dto.data2, aesKey);

            return new ApiResponseDto(true, { payload });
        } catch (error) {
            console.log('error', error);
            throw new HttpException('DECRYPTION_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
