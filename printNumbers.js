function printNumbers(n) {
    
    if (n > 10) return;
    console.log(n);
    printNumbers(n + 1);
  }
  
  printNumbers(0);