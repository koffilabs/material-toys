/** @format */
import { rgba } from './rgba';

describe('RGBA', () => {
    test('should convert hex and alpha to rgba', () => {
        const color = '#FFFFFF';
        const alpha = 1;
        const converted = rgba(color, alpha);
        expect(converted).toBe('rgba(255, 255, 255, 1)');
    });

    test('should convert shorthand hex and alpha to rgba', () => {
        const color = '#FFF';
        const alpha = 1;
        const converted = rgba(color, alpha);
        expect(converted).toBe('rgba(255, 255, 255, 1)');
    });

    test('should convert named color and alpha to rgba', () => {
        const color = 'black';
        const alpha = 1;
        const converted = rgba(color, alpha);
        expect(converted).toBe('rgba(0, 0, 0, 1)');
    });

    test('should fail to convert an incorrect named color', () => {
        const color = 'slightly darker black';
        const alpha = 1;
        expect(() => rgba(color, alpha)).toThrow();
    });

    test('should fail to convert an invalid hex color', () => {
        const color = '#black';
        const alpha = 1;
        expect(() => rgba(color, alpha)).toThrow();
    });

    test('should fail to convert an invalid alpha', () => {
        const color = 'white';
        const alpha = 1.1;
        expect(() => rgba(color, alpha)).toThrow();
    });

    test('should fail to convert an invalid alpha', () => {
        const color = 'white';
        const alpha = -0.1;
        expect(() => rgba(color, alpha)).toThrow();
    });
});
