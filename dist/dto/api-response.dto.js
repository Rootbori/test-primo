"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseDto = exports.DecryptDataResponse = exports.EncryptDataResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class EncryptDataResponse {
    data1;
    data2;
}
exports.EncryptDataResponse = EncryptDataResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'encrypted_aes_key_base64' }),
    __metadata("design:type", String)
], EncryptDataResponse.prototype, "data1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'encrypted_payload_base64' }),
    __metadata("design:type", String)
], EncryptDataResponse.prototype, "data2", void 0);
class DecryptDataResponse {
    payload;
}
exports.DecryptDataResponse = DecryptDataResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'decrypted_payload' }),
    __metadata("design:type", String)
], DecryptDataResponse.prototype, "payload", void 0);
class ApiResponseDto {
    successful;
    error_code;
    data;
    constructor(successful, data = null, error_code = null) {
        this.successful = successful;
        this.data = data;
        this.error_code = error_code;
    }
}
exports.ApiResponseDto = ApiResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ApiResponseDto.prototype, "successful", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', nullable: true }),
    __metadata("design:type", Object)
], ApiResponseDto.prototype, "error_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", Object)
], ApiResponseDto.prototype, "data", void 0);
//# sourceMappingURL=api-response.dto.js.map