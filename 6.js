function minimumStepsToClimb(staircase) {
    const n = staircase.length;
    if (n <= 2) {
      return 1;
    }

    const minSteps = new Array(n).fill(0);
  
    minSteps[0] = 1;
    minSteps[1] = staircase[1] === 0 ? 1 : 0;
  
    for (let i = 2; i < n; i++) {
      if (staircase[i] === 0) {
        minSteps[i] = minSteps[i - 1] + minSteps[i - 2];
      } else {
        minSteps[i] = 0;
      }
    }
    return minSteps[n - 1];
  }
  