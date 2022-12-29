//Project Mysterious Organisms
// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(num, dnaArray) {
    return {
      _specimenNum: num,
      _dna: dnaArray,
  
      get specimenNum() {
        return this._specimenNum;
      },
  
      get dna() {
        return this._dna;
      },
  
      set specimenNum(newNum) {
        this._specimenNum = newNum;
      },
  
      set dna(newDna) {
        this._dna = newDna;
      },
  
      mutate() {
        const mutatedDna = this._dna;
        const randomIndex = Math.floor(Math.random() * 14)
        const randomBase = this._dna[randomIndex];
        let newBase = returnRandBase();
  
        if (randomBase===newBase) {
          do {
          newBase = returnRandBase();
          } while (randomBase===newBase);
        };
        
        mutatedDna[randomIndex] = newBase;
        return mutatedDna;
      },
  
      compareDNA(pAequor) {
        let common = [];
        let count = 0;
  
        for (i=0; i<15; i++) {
          if (pAequor._dna[i]===this._dna[i]) {
            common.push(this._dna[i]);
            count++;
          };
        };
  
        if (count>0) {
          let percent = count/15*100;
          console.log(`Specimen #1 and specimen #2 have ${percent.toFixed(2)}% DNA in common.`);
        }
      },
  
    willLikelySurvive() {
      let count = 0;
      let survivePercent = 0;
      for (i=0; i<15; i++) {
          if (this._dna[i]==='C' || this._dna[i]==='G') {
            count++;
          };
      };
      survivePercent = count/15*100;
      if (survivePercent>=60) {
        return true;      
      } else {
        return false;      
      };
    }
  
    };
  };
  
  const firstOne = pAequorFactory(1,mockUpStrand());
  const secondOne = pAequorFactory(2, mockUpStrand());
  console.log(`First specimens DNA: ${firstOne._dna}`);
  console.log(`Second specimens DNA: ${secondOne._dna}`);
  
  firstOne.compareDNA(secondOne);
  
  console.log(`Specimen ${firstOne._specimenNum} likely to survive: ${firstOne.willLikelySurvive()}`);
  
  let storage = [];
  let amount = 1;
  let increment = 0;
  do {
    storage[increment] = pAequorFactory(amount, mockUpStrand());
    if (storage[increment].willLikelySurvive) {
      increment++;
      amount++;
    };
  } while (amount<30);
  