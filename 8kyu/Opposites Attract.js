function lovefunc(flower1, flower2){
    const even1 = flower1 % 2;
    const even2 = flower2 % 2;
    return even1 ^ even2 === 1 ? true : false;
  }