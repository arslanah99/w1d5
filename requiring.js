var myModule = require('./my-module')
module.exports = {
    PHI: 1.618,
    explain: function() {
      console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
    }
  };


  var coolMath = require("./math-is-cool");

console.log(coolMath.PHI);  // log a Number

coolMath.explain();  // invokes the function `explain`