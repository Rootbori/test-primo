import { EncryptionService } from './encryption.service';
import { EncryptRequestDto } from '../dto/encrypt-request.dto';
import { DecryptRequestDto } from '../dto/decrypt-request.dto';
import { ApiResponseDto, EncryptDataResponse, DecryptDataResponse } from '../dto/api-response.dto';
export declare class EncryptionController {
    private readonly encryptionService;
    constructor(encryptionService: EncryptionService);
    encryptData(dto: EncryptRequestDto): Promise<ApiResponseDto<EncryptDataResponse>>;
    decryptData(dto: DecryptRequestDto): Promise<ApiResponseDto<DecryptDataResponse>>;
}
