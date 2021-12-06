import { formatEmail } from './helpers';

describe('[Helpers] Auth', () => {
    describe('formatEmail()', () => {
        it('should trim the string sent', () => {
            const email = ' test@test.com ';
            const expected = 'test@test.com';

            expect(formatEmail(email)).toEqual(expected);
        });

        it('should transform string to lowercase', () => {
            const email = 'TeSt@TeSt.coM';
            const expected = 'test@test.com';

            expect(formatEmail(email)).toEqual(expected);
        });
    });
});
