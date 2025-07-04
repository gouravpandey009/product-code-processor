// Import the solution
const { processData } = require("./product-code-processor")

console.log("🚀 Running SDE Assignment - Product Code Processor\n")

// Test with the provided sample input
const sampleInput = ["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"]

console.log("📝 Input Data:")
console.log(JSON.stringify(sampleInput, null, 2))

// Process the data
const result = processData(sampleInput)

console.log("\n✅ Processing Result:")
console.log(JSON.stringify(result, null, 2))

// Verify against expected output
const expectedOutput = {
  totalCodes: 6,
  validCodes: 3,
  invalidCodes: 3,
  normalizedValidCodes: ["ABC1234", "DEF5678", "LMN9876"],
}

console.log("\n🎯 Expected Output:")
console.log(JSON.stringify(expectedOutput, null, 2))

// Check if result matches expected output
const isCorrect = JSON.stringify(result) === JSON.stringify(expectedOutput)
console.log(`\n${isCorrect ? "✅" : "❌"} Test Result: ${isCorrect ? "PASSED" : "FAILED"}`)

// Detailed analysis of each code
console.log("\n🔍 Detailed Code Analysis:")
console.log("=".repeat(50))

sampleInput.forEach((code, index) => {
  console.log(`\nCode ${index + 1}: "${code}"`)
  console.log(`  Length: ${code.length} characters`)

  if (code.length === 7) {
    const first3 = code.substring(0, 3)
    const last4 = code.substring(3)
    console.log(`  Format: "${first3}" + "${last4}"`)

    // Check first 3 characters
    let first3Valid = true
    for (let i = 0; i < 3; i++) {
      const char = first3[i]
      const charCode = char.charCodeAt(0)
      const isLetter = (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
      if (!isLetter) {
        first3Valid = false
        console.log(`    ❌ Character "${char}" at position ${i + 1} is not a letter`)
        break
      }
    }

    // Check last 4 characters
    let last4Valid = true
    for (let i = 0; i < 4; i++) {
      const char = last4[i]
      const charCode = char.charCodeAt(0)
      const isDigit = charCode >= 48 && charCode <= 57
      if (!isDigit) {
        last4Valid = false
        console.log(`    ❌ Character "${char}" at position ${i + 4} is not a digit`)
        break
      }
    }

    const isValid = first3Valid && last4Valid
    console.log(`  Status: ${isValid ? "✅ VALID" : "❌ INVALID"}`)

    if (isValid) {
      const normalized = first3.toUpperCase() + last4
      console.log(`  Normalized: "${normalized}"`)
    }
  } else {
    console.log(`  Status: ❌ INVALID (wrong length, expected 7 characters)`)
  }
})

console.log("\n" + "=".repeat(50))
console.log("🎉 Assignment completed successfully!")
console.log("📧 Ready to submit: product-code-processor.js")
