class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        lenoflast=0
        summ=0
        listt = s[::-1]
        for i in listt:
            if i.isalpha():
                summ+=1
            if summ>0 and not i.isalpha():
                break
        return summ
            