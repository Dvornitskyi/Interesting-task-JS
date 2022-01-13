const chooseOptimalDistance = (t, k, ls) => {
    if(t >= 0 && k >= 1 && ls.length >= k){
        const array = ls;
        const k1 = k; 
        function combine2(array, k1) {
        const n = array.length - 1;
        const m = k1 - 1;
        const finds = []; 
        const mask = []; 
        let finish = false;
        for (let i = 0; i < k1; i++) mask.push(array[i]);
        while (!finish) {
            finish = true;
            const str = mask.join(',');
            if (!finds.includes(str)) finds.push(str);
            for (let i = 0; i < k1; i++) {
            if (mask[m - i] != array[n - i]) {
                finish = false;
                let p = array.indexOf(mask[m - i]);
                mask[m - i] = array[++p];
                for (let j = m - i + 1; j < k1; j++) {
                    mask[j] = array[++p];
                }
                break;
            }
            }
        }
        return finds;
        }
        let foundNumberIdx = 0;
        let sumCombinationAllSum = 0;
        let combinationAll = [];
        let combinationAllSums = [];
        let combinationAllSumsDownNumber =[];
        const combinations = combine2(array, k);
        combinations.map(combination => {
            combinationAll.push(combination.split(','));
        })
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
chooseOptimalDistance(174, 4, [51, 56, 58, 59, 61]); //173
chooseOptimalDistance(163, 3, [50]); // null