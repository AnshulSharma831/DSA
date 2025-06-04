class Solution:
    def repeatedCharacter(self, s: str) -> str:
        my_set = set()

        for index,values in enumerate(s):
            if values not in my_set:
                my_set.add(values)
            else:
                return values
                break