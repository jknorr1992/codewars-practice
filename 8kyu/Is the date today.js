function isToday(date) 
{
  const today = new Date();
  if(today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear())
  {
    return true;
  }
  return false;
}