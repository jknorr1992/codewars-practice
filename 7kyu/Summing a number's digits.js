function sumDigits(number) 
{
  let sum = 0;
  Math.abs(number).toString(10).split("").forEach(digit => sum += parseInt(digit, 10));
  return sum;
}