# Product Code Processor

## Problem Statement
Clean the Product Codes - Validate and normalize product codes that should follow the format: 3 uppercase letters followed by 4 digits.

## Setup Instructions for VS Code

### 1. Create Project Folder
\`\`\`bash
mkdir sde-assignment
cd sde-assignment
\`\`\`

### 2. Open in VS Code
\`\`\`bash
code .
\`\`\`

### 3. Install Node.js (if not already installed)
- Download from: https://nodejs.org/
- Choose LTS version

### 4. Initialize the Project
Open VS Code terminal (Ctrl + `) and run:
\`\`\`bash
npm init -y
\`\`\`

## How to Run

### Method 1: Using npm scripts
\`\`\`bash
npm test
# or
npm start
\`\`\`

### Method 2: Direct node command
\`\`\`bash
node test.js
\`\`\`

### Method 3: Using VS Code Run Button
1. Open `test.js` file
2. Click the "Run" button (▶️) in the top-right corner
3. Or press `Ctrl + F5`

## Files Description

- `product-code-processor.js` - Main solution file (submit this one)
- `test.js` - Test file to verify the solution
- `package.json` - Node.js project configuration
- `README.md` - This instruction file

## Expected Output
\`\`\`json
{
  "totalCodes": 6,
  "validCodes": 3,
  "invalidCodes": 3,
  "normalizedValidCodes": ["ABC1234", "DEF5678", "LMN9876"]
}
\`\`\`

## Testing
The test file will show:
- Input data
- Processing result
- Expected output comparison
- Detailed analysis of each code
- Pass/Fail status
