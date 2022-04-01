function powersOfTwo(n){
    let powers = [1];
    for(let i = 1; i <= n; i++)  
    {
        powers.push(Math.pow(2,i));
    }
    return powers;
  }