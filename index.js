#!/bin/env node

const readline = require('readline')

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
})

// Function to handle barcode data
const handleBarcodeData = data => {
  console.log(`Barcode scanned: ${data}`)
  // Add your logic here to process the barcode data
}

// Event listener for line input (barcode data)
rl.on('line', line => {
  handleBarcodeData(line.trim())
})
