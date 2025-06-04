class Solution:
    def isPalindrome(self, x: int) -> bool:
        listt=list(str(x))
        LIndex=len(listt)-1
        FIndex=0
        while FIndex< LIndex:
            if listt[FIndex]!=listt[LIndex]:
                return False
            FIndex+=1
            LIndex-=1
        return True

