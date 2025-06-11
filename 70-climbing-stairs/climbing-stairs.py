class Solution:
    def climbStairs(self, n: int) -> int:
        memo={}
        def numways(t):
            if t==0:
                return 1
            if t<0:
                return 0
            if t in memo:
                return memo[t]
            memo[t]=numways(t-1)+numways(t-2)
            return memo[t]
        return numways(n)

        