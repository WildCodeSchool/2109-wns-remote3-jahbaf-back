export function createMailingURL(token: string, route: string) {
    return `${process.env.FRONTEND_URL}${route}&token=${token}`;
}