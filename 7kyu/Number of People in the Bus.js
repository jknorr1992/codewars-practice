var number = function(busStops){
    let initial = 0;
    return busStops.reduce((prevstop, curstop) => prevstop + curstop[0] - curstop[1], initial);
  }