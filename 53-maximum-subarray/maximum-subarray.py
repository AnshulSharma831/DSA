class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        currentsum=0
        maxsum=float('-inf')
        for i in nums:
            currentsum+=i
            if currentsum<0:
                currentsum=0
            maxsum=max(maxsum,currentsum)
        if maxsum==0:
            maxsum=max(nums)
        return maxsum

        