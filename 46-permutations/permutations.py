class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        n=len(nums)
        ans=[]
        def getper(nums,idx,ans):
            if idx==n-1:
                ans.append(nums.copy())
                return
            for i in range(idx,n):
                nums[idx],nums[i]=nums[i],nums[idx]
                getper(nums,idx+1,ans)
                nums[idx],nums[i]=nums[i],nums[idx]
            
        getper(nums,0,ans)
        return ans