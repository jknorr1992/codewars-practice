function pillars(num_pill, dist, width) 
{
  if(num_pill <= 1)
  {
      return 0;
  }
  return (dist*(num_pill-1)*100) + (width*(num_pill-2));
}