// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Testing Phone number: valid phone number (415)-839-7277', () => {
    expect(functions.isPhoneNumber("(415)-839-7277")).toBeTruthy();
});

test('Testing Phone number: valid phone number (625)-557-1034', () => {
    expect(functions.isPhoneNumber("(625)-557-1034")).toBeTruthy();
});

test('Testing Phone number: invalid phone number empty', () => {
    expect(functions.isPhoneNumber()).toBe(false);
});

test('Testing Phone number: invalid phone number (6)-55-3', () => {
    expect(functions.isPhoneNumber("(6)-55-3")).toBe(false);
});

test("Testing email: valid email bsudirdja@ucsd.edu", () => {
    expect(functions.isEmail("bsudirdja@ucsd.edu")).toBeTruthy();
});

test("Testing email: valid email bsudirdja@gmail.com", () => {
    expect(functions.isEmail("bsudirdja@gmail.com")).toBeTruthy();
});

test("Testing email: invalid email empty", () => {
    expect(functions.isEmail()).toBe(false);
});

test("Testing email: invalid email @@@@@@@@@@", () => {
    expect(functions.isEmail("@@@@@@@@@@")).toBe(false);
});

test("Testing password strength: strong password", () => {
    expect(functions.isStrongPassword("password")).toBeTruthy();
});

test("Testing password strength: strong password F4a887Hi7", () => {
    expect(functions.isStrongPassword("F4a887Hi7")).toBeTruthy();
});

test("Testing password strength: weak password $F4a887Hi7", () => {
    expect(functions.isStrongPassword("$F4a887Hi7")).toBe(false);
});

test("Testing password strength: weak password kkacnM4TGs5F&*h75$8jk9)f6fh$#@08}jki|", () => {
    expect(functions.isStrongPassword("kkacnM4TGs5F&*h75$8jk9)f6fh$#@08}jki|")).toBe(false);
});

test("Testing Date: valid date 11/18/2022", () => {
    expect(functions.isDate("11/18/2022")).toBeTruthy();
});

test("Testing Date: valid date 00/00/0000", () => {
    expect(functions.isDate("00/00/0000")).toBeTruthy();
});

test("Testing Date: invalid date empty", () => {
    expect(functions.isDate()).toBe(false);
});

test("Testing Date: invalid date 1/8/9", () => {
    expect(functions.isDate("1/8/9")).toBe(false);
});

test("Testing Hex Color: valid color CBB3BF", () => {
    expect(functions.isHexColor("CBB3BF")).toBeTruthy();
});

test("Testing Hex Color: valid color EF959C", () => {
    expect(functions.isHexColor("EF959C")).toBeTruthy();
});

test("Testing Hex Color: invalid color empty", () => {
    expect(functions.isHexColor()).toBe(false);
});

test("Testing Hex Color: invlaid color XXXXXXX", () => {
    expect(functions.isHexColor("XXXXXX")).toBe(false);
});
