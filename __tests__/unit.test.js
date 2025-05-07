// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('Valid phone number (123) 456-7890 should return true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Valid phone number 123-456-7890 should return true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Invalid phone number with wrong separators 123.456.7890 should return false', () => {
  expect(isPhoneNumber('123.456.7890')).toBe(false);
});

test('Invalid phone number with letters should return false', () => {
  expect(isPhoneNumber('123-ABC-7890')).toBe(false);
});

// isEmail
test('Valid email test@ucsd.edu should return true', () => {
  expect(isEmail('test@ucsd.edu')).toBe(true);
});

test('Valid email with underscore user_name@domain.com should return true', () => {
  expect(isEmail('user_name@domain.com')).toBe(true);
});

test('Invalid email missing @ testucsd.edu should return false', () => {
  expect(isEmail('testucsd.edu')).toBe(false);
});

test('Invalid email with spaces "test @ucsd.edu" should return false', () => {
  expect(isEmail('test @ucsd.edu')).toBe(false);
});

// isStrongPassword
test('Valid password A1234 should return true', () => {
  expect(isStrongPassword('A1234')).toBe(true);
});

test('Valid password with underscore Password_123 should return true', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});

test('Invalid password starting with number 1password should return false', () => {
  expect(isStrongPassword('1password')).toBe(false);
});

test('Invalid password too short A12 should return false', () => {
  expect(isStrongPassword('A12')).toBe(false);
});

// isDate
test('Valid date 12/25/2023 should return true', () => {
  expect(isDate('12/25/2023')).toBe(true);
});

test('Valid date single digit 1/1/2023 should return true', () => {
  expect(isDate('1/1/2023')).toBe(true);
});

test('Invalid date missing year 12/25 should return false', () => {
  expect(isDate('12/25')).toBe(false);
});

test('Invalid date with letters Dec/25/2023 should return false', () => {
  expect(isDate('Dec/25/2023')).toBe(false);
});

// isHexColor
test('Valid 3-digit hex color #abc should return true', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('Valid 6-digit hex color #a1b2c3 should return true', () => {
  expect(isHexColor('#a1b2c3')).toBe(true);
});

test('Invalid hex color with invalid characters #ghijkl should return false', () => {
  expect(isHexColor('#ghijkl')).toBe(false);
});

test('Invalid hex color too long #1234567 should return false', () => {
  expect(isHexColor('#1234567')).toBe(false);
});