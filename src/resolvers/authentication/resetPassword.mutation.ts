import { resetPasswordService } from "src/services";


export const resetPassword = async (parent: any, { token, password }: { token: string, password: string }) => await resetPasswordService(token, password);