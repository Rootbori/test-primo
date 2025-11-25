export declare class EncryptionService {
    private readonly publicKey;
    private readonly privateKey;
    constructor();
    generateAESKey(): string;
    encryptWithAES(data: string, key: string): string;
    decryptWithAES(encryptedData: string, key: string): string;
    encryptWithRSA(data: string): string;
    decryptWithRSA(encryptedData: string): string;
}
