from typing import List
from collections import Counter

class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        count = Counter(nums)  # Fix: initialize count properly
        res = []

        def dfs(perm):
            if len(perm) == len(nums):
                res.append(perm.copy())
                return
            for n in count:
                if count[n] > 0:
                    perm.append(n)
                    count[n] -= 1
                    dfs(perm)
                    count[n] += 1
                    perm.pop()

        dfs([])
        return res
