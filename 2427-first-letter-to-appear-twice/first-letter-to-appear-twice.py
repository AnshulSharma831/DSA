class Solution:
    def repeatedCharacter(self, s: str) -> str:
        listt=[]
        for i in s:
            if i in listt:
                return i
            listt.append(i)