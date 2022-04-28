import { confirmAccountService } from 'src/services';

export async function confirmAccount(parent: any, { token }: { token: string }) {
    const confirmationToken = await confirmAccountService(token);
    return confirmationToken;
}