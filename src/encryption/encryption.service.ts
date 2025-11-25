import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class EncryptionService {
    private readonly publicKey: string;
    private readonly privateKey: string;

    constructor() {
        this.publicKey = process.env.PUBLIC_KEY || '';
        this.privateKey = process.env.PRIVATE_KEY || '';
    }

    generateAESKey(): string {
        return crypto.randomBytes(32).toString('base64');
    }

    encryptWithAES(data: string, key: string): string {
        const keyBuffer = Buffer.from(key, 'base64');
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, iv);
        let encrypted = cipher.update(data, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return iv.toString('base64') + ':' + encrypted;
    }

    decryptWithAES(encryptedData: string, key: string): string {
        const keyBuffer = Buffer.from(key, 'base64');
        const parts = encryptedData.split(':');
        const iv = Buffer.from(parts[0], 'base64');
        const encrypted = parts[1];
        const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, iv);
        let decrypted = decipher.update(encrypted, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }

    encryptWithRSA(data: string): string {
        const encrypted = crypto.privateEncrypt(
            {
                key: this.privateKey,
                padding: crypto.constants.RSA_PKCS1_PADDING,
            },
            Buffer.from(data)
        );
        return encrypted.toString('base64');
    }

    decryptWithRSA(encryptedData: string): string {
        const decrypted = crypto.publicDecrypt(
            {
                key: this.publicKey,
                padding: crypto.constants.RSA_PKCS1_PADDING,
            },
            Buffer.from(encryptedData, 'base64')
        );
        return decrypted.toString('utf8');
    }
}
