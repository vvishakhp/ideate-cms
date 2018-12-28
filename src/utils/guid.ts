import { randomBytes } from 'crypto';

export function uniqueId(): string {
    return randomBytes(30).toString('base64');
}