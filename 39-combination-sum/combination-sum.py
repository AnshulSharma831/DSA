class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res=[]
        def back(start,subset,target):
            if target==0:
                res.append(subset)
                return
            if target<0:
                return
            for i in range(start,len(nums)):
                back(i,subset+[nums[i]],target-nums[i])
        back(0,[],target)
        return res