// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Testing Phone number', () => {
    // TODO
    expect(functions.isPhoneNumber("(415)-839-7277")).toBeTruthy();
    expect(functions.isPhoneNumber("(625)-557-1034")).toBeTruthy();
    expect(functions.isPhoneNumber()).toBe(false);
    expect(functions.isPhoneNumber("(6)-55-3")).toBe(false);
});

test("Testing email", () => {
    expect(functions.isEmail("bsudirdja@ucsd.edu")).toBeTruthy();
    expect(functions.isEmail("bsudirdja@gmail.com")).toBeTruthy();
    expect(functions.isEmail()).toBe(false);
    expect(functions.isEmail("@@@@@@@@@@")).toBe(false);
});

test("Testing password strength", () => {
    expect(functions.isStrongPassword("password")).toBeTruthy();
    expect(functions.isStrongPassword("F4a887Hi7")).toBeTruthy();
    expect(functions.isStrongPassword("$F4a887Hi7")).toBe(false);
    expect(functions.isStrongPassword("kkacnM4TGs5F&*h75$8jk9)f6fh$#@08}jki|")).toBe(false);
});

test("Testing Date", () => {
    expect(functions.isDate("11/18/2022")).toBeTruthy();
    expect(functions.isDate("00/00/0000")).toBeTruthy();
    expect(functions.isDate()).toBe(false);
    expect(functions.isDate("1/8/9")).toBe(false);
});

test("Testing Hex Color", () => {
    expect(functions.isHexColor("CBB3BF")).toBeTruthy();
    expect(functions.isHexColor("EF959C")).toBeTruthy();
    expect(functions.isHexColor()).toBe(false);
    expect(functions.isHexColor("XXXXXX")).toBe(false);
});