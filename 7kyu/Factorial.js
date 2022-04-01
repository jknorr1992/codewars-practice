function factorial(n)
{
  // Calculate the factorial here
  if(n < 0 || n > 12)
  {
    throw new Error("RangeError");
  }
  let output = 1;
  for(let i = 1; i <= n; i++)
  {
    output *= i;
  }
  return output;
}