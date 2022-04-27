import { resetPasswordMailService } from '../../services';

export const resetPasswordMail = async (parent: any, { email }: { email: string }): Promise<any> => await resetPasswordMailService(email);