function calculateYears(principal, interest, tax, desired) 
{
    let years = 0;
    while(principal * Math.pow((1 + interest*(1-tax)), years) < desired)
    {
      years += 1;
    }
    return years;
}