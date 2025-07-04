/**
 * Main function to process product codes
 * @param {string[]} data - Array of product codes to process
 * @returns {Object} Summary object with counts and normalized valid codes
 */
function processData(data) {
    // Initialize counters and arrays
    const totalCodes = data.length
    let validCodes = 0
    let invalidCodes = 0
    const normalizedValidCodes = []
  
    // Process each code in the input array
    for (let i = 0; i < data.length; i++) {
      const code = data[i]
  
      // Check if the code is valid
      if (isValidProductCode(code)) {
        validCodes++
        // Normalize the code (convert letters to uppercase)
        const normalizedCode = normalizeCode(code)
        normalizedValidCodes.push(normalizedCode)
      } else {
        invalidCodes++
      }
    }
  
    // Sort the valid codes alphabetically
    normalizedValidCodes.sort()
  
    // Return the required summary object
    return {
      totalCodes: totalCodes,
      validCodes: validCodes,
      invalidCodes: invalidCodes,
      normalizedValidCodes: normalizedValidCodes,
    }
  }
  
  /**
   * Check if a product code is valid
   * Valid format: 3 letters followed by 4 digits (exactly 7 characters)
   * @param {string} code - Product code to validate
   * @returns {boolean} True if valid, false otherwise
   */
  function isValidProductCode(code) {
    // Check if code is exactly 7 characters
    if (code.length !== 7) {
      return false
    }
  
    // Check first 3 characters are letters (A-Z, case-insensitive)
    for (let i = 0; i < 3; i++) {
      if (!isLetter(code[i])) {
        return false
      }
    }
  
    // Check last 4 characters are digits (0-9)
    for (let i = 3; i < 7; i++) {
      if (!isDigit(code[i])) {
        return false
      }
    }
  
    return true
  }
  
  /**
   * Check if a character is a letter (A-Z or a-z)
   * @param {string} char - Character to check
   * @returns {boolean} True if letter, false otherwise
   */
  function isLetter(char) {
    const charCode = char.charCodeAt(0)
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
  }
  
  /**
   * Check if a character is a digit (0-9)
   * @param {string} char - Character to check
   * @returns {boolean} True if digit, false otherwise
   */
  function isDigit(char) {
    const charCode = char.charCodeAt(0)
    return charCode >= 48 && charCode <= 57
  }
  
  /**
   * Normalize a product code by converting letters to uppercase
   * @param {string} code - Product code to normalize
   * @returns {string} Normalized code with uppercase letters
   */
  function normalizeCode(code) {
    // Convert first 3 characters to uppercase, keep last 4 as they are digits
    return code.substring(0, 3).toUpperCase() + code.substring(3)
  }
  
  // Export the main function (required for the assignment)
  module.exports = { processData }
  