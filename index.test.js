const {schoolSizeCalculate} = require('./index');

test('to confirm jest is functioning', () => {
    expect(2+2).toBe(4)
});

describe('Suite to test behaviour of primary school calculation', () => {
    let schoolType = 'primary';
    test('that a school with no pupils has an area of 350m^2', () => {
        expect(schoolSizeCalculate(schoolType, 0)).toBe(350)
    });
    test('that a schol with 100 pupils has an area of 760m^2', () => {
        expect(schoolSizeCalculate(schoolType, 100)).toBe(760)
    });
    test('that entering a string as the number of pupil places will return an error', () => {
        expect(schoolSizeCalculate(schoolType, "testing text")).toBe("Please enter the number of pupil places as a whole number.")
    })
});
describe('Suite to test behaviour of secondary up to 16 school calculation', () => {
    let schoolType = 'secondary16';
    test('that a school with no pupils has an area of 350m^2', () => {
        expect(schoolSizeCalculate(schoolType, 0)).toBe(1050)
    });
    test('that a schol with 100 pupils has an area of 760m^2', () => {
        expect(schoolSizeCalculate(schoolType, 100)).toBe(1680)
    });
    test('that entering a string as the number of pupil places will return an error', () => {
        expect(schoolSizeCalculate(schoolType, "testing text")).toBe("Please enter the number of pupil places as a whole number.")
    })
});
describe('Suite to test behaviour of secondary post 16 school calculation', () => {
    let schoolType = 'secondary16+';
    test('that a school with no pupils has an area of 350m^2', () => {
        expect(schoolSizeCalculate(schoolType, 0)).toBe(1400)
    });
    test('that a schol with 100 pupils has an area of 760m^2', () => {
        expect(schoolSizeCalculate(schoolType, 100)).toBe(2100)
    });
    test('that entering a string as the number of pupil places will return an error', () => {
        expect(schoolSizeCalculate(schoolType, "testing text")).toBe("Please enter the number of pupil places as a whole number.")
    })
})