const binaryArrayToNumber = arr => {
    return arr.reverse().reduce((prev,current,index) => prev + Math.pow(2*current, index));
  };