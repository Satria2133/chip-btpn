function highlightCaseDifferences(word1, word2) {
    let highlightedWord = '';
    let vers1 = '';
    let vers2 = '';
  
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
      const char1 = word1[i];
      const char2 = word2[i];
  
      if (char1 === char2) {
        highlightedWord += char1;
        vers1 = '';
        vers2 = '';
      } else {
        vers1 += char1 || '';
        vers2 += char2 || '';
  
        if ( (word1[i + 1] === word2[i + 1] || i === Math.max(word1.length, word2.length) - 1)) {
          highlightedWord += `[${vers1}|${vers2}]`;
          vers1 = '';
          vers2 = '';
        }
      }
    }
  
    return highlightedWord;
  }
  
  const result1 = highlightCaseDifferences('CHIP', 'CHiP');
  console.log(result1); // CH[I][i]P
  
  const result2 = highlightCaseDifferences('Programmer', 'noobgamers');
  console.log(result2); // [Pr | no] o [gr | bg ] am [mer | ers]
  