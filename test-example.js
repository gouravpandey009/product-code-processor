// Test the solution with the provided example
const { processData } = require("./product-code-processor")

// Sample input from the problem
const sampleInput = ["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"]

// Process the data
const result = processData(sampleInput)

// Display the result
console.log("Input:", sampleInput)
console.log("\nResult:")
console.log(JSON.stringify(result, null, 2))

// Let's also test each code individually to understand why some are invalid
console.log("\n--- Code Analysis ---")
sampleInput.forEach((code, index) => {
  console.log(`Code ${index + 1}: "${code}"`)
  console.log(`  Length: ${code.length} characters`)

  if (code.length === 7) {
    const first3 = code.substring(0, 3)
    const last4 = code.substring(3)
    console.log(`  First 3: "${first3}" (should be letters)`)
    console.log(`  Last 4: "${last4}" (should be digits)`)

    // Check if first 3 are letters
    let first3Valid = true
    for (let i = 0; i < 3; i++) {
      const char = first3[i]
      const charCode = char.charCodeAt(0)
      const isLetter = (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
      if (!isLetter) {
        first3Valid = false
        break
      }
    }

    // Check if last 4 are digits
    let last4Valid = true
    for (let i = 0; i < 4; i++) {
      const char = last4[i]
      const charCode = char.charCodeAt(0)
      const isDigit = charCode >= 48 && charCode <= 57
      if (!isDigit) {
        last4Valid = false
        break
      }
    }

    console.log(`  Valid format: ${first3Valid && last4Valid ? "YES" : "NO"}`)
  } else {
    console.log(`  Valid format: NO (wrong length)`)
  }
  console.log("")
})
