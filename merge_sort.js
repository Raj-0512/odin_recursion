let res = [];
let nums = [6,3,5,8,4,2];

function mergeSort(lb , ub , nums)
{
    if(ub > lb)
    {
        let mid = Math.floor((lb + ub) / 2);

    	mergeSort(lb , mid , nums);
    	mergeSort(mid+1 , ub , nums);
    	merge(lb , mid , ub , nums);
    }
    return nums;
}

function merge(lb , mid , ub , nums)
{
	let i = lb;
	let j = mid + 1;
	let k = lb;

	while(i <= mid && j <= ub)
	{
		if(nums[i] < nums[j])
		{
			res[k] = nums[i];
			i++;
		}
		else
		{
			res[k] = nums[j];
			j++;
		}
		k++;
	}

	if(i > mid)
	{
        while(j <= ub)
        {
        	res[k] = nums[j];
        	j++;
        	k++;
        }
	}
	else
	{
		while(i <= mid)
		{
			res[k] = nums[i];
			i++;
			k++;
		}

	}

	let a = 0;

	for(const num of res)
	{
		nums[a] = res[a];
		a++;
	}
}

console.log(mergeSort(0 , nums.length - 1 , nums));