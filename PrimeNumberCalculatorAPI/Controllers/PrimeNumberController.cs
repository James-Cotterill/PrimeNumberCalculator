using Microsoft.AspNetCore.Mvc;

namespace PrimeNumberCalculatorAPI.Controllers

{
    [Route("api/")]
    [ApiController]
    public class PrimeNumberController : ControllerBase
    {

        [HttpGet("GetPrimeNumbers")]
        public IActionResult GetPrimeNumbers(int enteredInt)
        {
            List<int> primeNumberList = new List<int>();

            for (int i = 2; i < enteredInt-1 + 1; i++)
            {
                int n = 0;
                if (i == 2 || i == 3)
                {
                    primeNumberList.Add(i);
                }
                else if (i % 6 == 1 || i % 6 == 5)
                {
                    for (int x = 2; x * x <= i; x++)
                    {
                        if (i % x == 0)
                        {
                            n++;
                            break;
                        }
                    }
                    if (n == 0)
                    {
                        primeNumberList.Add(i);
                    }
                }
            }

            if(!primeNumberList.Any())
            {
                return BadRequest("There are no prime numbers below " + enteredInt);
            }
            else
            {
                return Ok(primeNumberList);
            }
        }
    }
}
