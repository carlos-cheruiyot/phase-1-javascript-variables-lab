// Code your solution in this file!
// Declare the companyName variable as a constant with correct capitalization
const companyName = 'Scuber';  // 'Scuber' with an uppercase 'S'

// Declare the mostProfitableNeighborhood variable using let
let mostProfitableNeighborhood = 'Chelsea';  // 'Chelsea'

// Declare the companyCeo variable using let
let companyCeo = 'Susan Smith';  // 'Susan Smith'

// Required dependencies for reading the file content
const fs = require('fs');
const path = require('path');

// Read the contents of index.js file to match against the tests
const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

// Test suite using Mocha
describe('index.js', function () {

  // Test for companyName
  describe('companyName', function () {
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');  // Check if companyName is set as 'Scuber'
    });

    it('is defined as a const', function () {
      expect(js).to.match(/const companyName/, "Expected companyName to be a const");
    });
  });

  // Test for mostProfitableNeighborhood
  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');  // Check if it's equal to 'Chelsea'
    });

    it('is defined using let', function () {
      expect(js).to.match(/let mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood to be defined using let");
    });
  });

  // Test for companyCeo
  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');  // Check if companyCeo is equal to 'Susan Smith'
    });

    it('is defined using let', function () {
      expect(js).to.match(/let companyCeo/, "Expected companyCeo to be defined using let");
    });
  });

});