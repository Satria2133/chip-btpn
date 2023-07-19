function simulateVirusSpread(condition, hours) {
    const infectedSymbol = '*';
    const immunedSymbol = '#';
  
    let currentCondition = condition.split('');
  
    for (let i = 0; i < hours; i++) {
      let nextCondition = [];
  
      for (let j = 0; j < currentCondition.length; j++) {
        if (currentCondition[j] === infectedSymbol) {
          nextCondition[j] = immunedSymbol;
        } else if (currentCondition[j] === immunedSymbol) {
          nextCondition[j] = immunedSymbol;
        } else {
          if (
            (j > 0 && currentCondition[j - 1] === infectedSymbol) ||
            (j < currentCondition.length - 1 && currentCondition[j + 1] === infectedSymbol)
          ) {
            nextCondition[j] = infectedSymbol;
          } else {
            nextCondition[j] = currentCondition[j];
          }
        }
      }
  
      currentCondition = nextCondition;
    }
  
    return currentCondition.join('');
  }
  
  
  console.log(simulateVirusSpread('oo*oo', 2)); // **#o**
  console.log(simulateVirusSpread('o#*o*o', 1)); 