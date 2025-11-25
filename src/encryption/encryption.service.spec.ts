import { Test, TestingModule } from '@nestjs/testing';
import { EncryptionService } from './encryption.service';

describe('EncryptionService', () => {
    let service: EncryptionService;

    beforeEach(async () => {
        process.env.PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyv4m8xKKQyQJKLKfZMxl
-----END PUBLIC KEY-----`;
        process.env.PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDK/ibzEopDJAko
-----END PRIVATE KEY-----`;

        const module: TestingModule = await Test.createTestingModule({
            providers: [EncryptionService],
        }).compile();

        service = module.get<EncryptionService>(EncryptionService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should generate AES key', () => {
        const key = service.generateAESKey();
        expect(key).toBeDefined();
        expect(typeof key).toBe('string');
    });

    it('should encrypt and decrypt with AES', () => {
        const data = 'Test data';
        const key = service.generateAESKey();
        const encrypted = service.encryptWithAES(data, key);
        const decrypted = service.decryptWithAES(encrypted, key);
        expect(decrypted).toBe(data);
    });
});
