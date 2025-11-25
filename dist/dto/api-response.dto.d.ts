export declare class EncryptDataResponse {
    data1: string;
    data2: string;
}
export declare class DecryptDataResponse {
    payload: string;
}
export declare class ApiResponseDto<T> {
    successful: boolean;
    error_code: string | null;
    data: T | null;
    constructor(successful: boolean, data?: T | null, error_code?: string | null);
}
