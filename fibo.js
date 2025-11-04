let nums = [];

function fibo(n,nums)
{
	if(n < 2)
	{
		nums[n] = n;
		return n;
	}
	else if (nums[n] !== undefined) 
	{
        return nums[n];
    }
	else 
	{
		const val = fibo(n-1 , nums) + fibo(n-2 , nums);
		nums[n] = val;
		return val;
	}
}

fibo(5,nums);
console.log(nums);