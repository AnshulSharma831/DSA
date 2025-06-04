class Solution:
    def romanToInt(self, s: str) -> int:
        list1=list(s)
        list2=[]
        summ=0
        for i in list1:
            if i == "I":
                list2.append(1)
            elif i == "V":
                list2.append(5)
            elif i == "X":
                list2.append(10)
            elif i == "L":
                list2.append(50)
            elif i == "C":
                list2.append(100)
            elif i == "D":
                list2.append(500)
            elif i == "M":
                list2.append(1000)
            else:
                pass  
        i=0
        while i < len(list2):
            if i+1<len(list2) and list2[i]<list2[i+1]:
                summ+=(list2[i+1]-list2[i])
                i+=2
            else:
                summ+=list2[i]
                i+=1
        return summ
        