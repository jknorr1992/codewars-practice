var isSquare = function(n)
{
  if(n < 0)
  {
    return false;
  }
  if(Number.isInteger(Math.sqrt(n)))
  {
    return true;
  }
  return false;
}