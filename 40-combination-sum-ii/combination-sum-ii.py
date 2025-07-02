class Solution:
    def combinationSum2(self, nums: List[int], target: int) -> List[List[int]]:
        res=[]
        nums.sort()
        def dfs(cur,pos,target):
            if target==0:
                res.append(cur.copy())
            if target<0:
                return
            prev=-1
            for i in range(pos,len(nums)):
                if nums[i]==prev:
                    continue
                cur.append(nums[i])
                dfs(cur,i+1,target-nums[i])
                cur.pop()
                prev=nums[i]
        dfs([],0,target)
        return res
        