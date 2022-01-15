const chooseOptimalDistance = (t, k, ls) => {
    if(t >= 0 && k >= 1 && ls.length >= k){
        const arrayX = ls;
        const x = k;
        function printPermutations(arrayX, x) {
        let comb = [];
        let indices = [];
        function next(index) {
          if (index == x) {
            var result = [];
            for (let i = 0; i < k; i++) {
              result[i] = arrayX[indices[i]];
            }
            comb.push(result);
            return;
          }
          for (let i = 0; i < arrayX.length; i++) {
            if (alreadyInCombination(i, index))
              continue;
            indices[index] = i;
            next(index + 1);
          }
        }
        function alreadyInCombination(i, index) {
            for (let j = 0; j < index; j++) {
              if (indices[j] == i) {
                return true;
              }
            }
            return false;
        }
        next(0);
        return comb;
      }
        let foundNumberIdx = 0;
        let sumCombinationAllSum = 0;
        let combinationAllSums = [];
        let combinationAllSumsDownNumber =[];
        const combinationAll  = printPermutations(arrayX, x);
        combinationAll.map(combinationA =>{
            combinationA.map(allSum => {
                sumCombinationAllSum = sumCombinationAllSum + (Number(allSum));
            })
            combinationAllSums.push(sumCombinationAllSum);
            if(sumCombinationAllSum <= t){
                combinationAllSumsDownNumber.push(sumCombinationAllSum);
            }
            sumCombinationAllSum = 0;
        })
        combinationAllSumsDownNumber.sort((a, b) => b - a);
        foundNumberIdx  = combinationAllSums.indexOf(combinationAllSumsDownNumber[0]);
        console.log(combinationAll[foundNumberIdx]);
    }else{
        console.log(null);
    }
}
chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]);
chooseOptimalDistance(230, 3, [91, 74, 73, 85, 73, 81, 87]);
chooseOptimalDistance(163, 3, [50]); 