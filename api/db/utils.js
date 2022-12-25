const { hashSync, compareSync } = require("bcrypt");

/**
 * Hashes a plain text password
 * @param {string} password - Password in plain text
 * @param {number} salt - Hardness of the hashing algorithm
 * @returns {string} The hashed password
 */
const hashPassword = (password, salt) => hashSync(password, salt);

/**
 * Compares the plain text password and the hashed password to see if they match
 * @param {string} plainTextPassword - The password in plain text
 * @param {string} hashedPassword - The hashed password
 * @returns {boolean} If the passwords match
 */

const comparePassword = (plainTextPassword, hashedPassword) =>
  compareSync(plainTextPassword, hashedPassword);

const checkFunctions = {
  /**
   * Check if a given text contains only letters and numbers
   * @param {string} text - The text to evaluate
   * @returns {boolean} - If text is alpanumeric
   */
  alphanumeric: (text) => new RegExp(/^[A-Za-z0-9_]$/).test(text),
  /**
   * Applies a regular expression to an array of strings
   * @param {Array.<string>} array - The array of strings to apply the reglar expression
   * @returns {boolean} If all the strings in the array match against the regular expression
   */
  applyRegexp: (array) => {
    array.forEach((el) => {
      const valid = checkFunctions.alphanumeric(el);
      if (!valid) return false;
    });
  },
};

module.exports = {
  hashPassword,
  comparePassword,
  checkFunctions,
};
