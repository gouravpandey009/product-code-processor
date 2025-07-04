// Additional test cases to thoroughly test the solution
const { processData } = require("./product-code-processor")

console.log("🧪 Running Additional Test Cases\n")

// Test Case 1: All valid codes
console.log("Test Case 1: All Valid Codes")
const allValid = ["ABC1234", "XYZ9876", "DEF0000"]
console.log("Input:", allValid)
console.log("Result:", processData(allValid))
console.log("")

// Test Case 2: All invalid codes
console.log("Test Case 2: All Invalid Codes")
const allInvalid = ["12345", "ABCDEFG", "AB123", "ABC12345"]
console.log("Input:", allInvalid)
console.log("Result:", processData(allInvalid))
console.log("")

// Test Case 3: Mixed case letters
console.log("Test Case 3: Mixed Case Letters")
const mixedCase = ["abc1234", "AbC5678", "XyZ0001"]
console.log("Input:", mixedCase)
console.log("Result:", processData(mixedCase))
console.log("")

// Test Case 4: Edge cases
console.log("Test Case 4: Edge Cases")
const edgeCases = ["", "A", "AB12", "ABC123D", "abc12345"]
console.log("Input:", edgeCases)
console.log("Result:", processData(edgeCases))
console.log("")

// Test Case 5: Empty array
console.log("Test Case 5: Empty Array")
const emptyArray = []
console.log("Input:", emptyArray)
console.log("Result:", processData(emptyArray))
