class Solution:
    def addBinary(self, a: str, b: str) -> str:
        ar = a[::-1]
        br = b[::-1]
        addbinary = ""

        arp = 0
        brp = 0
        carry = 0

        while arp < len(ar) or brp < len(br) or carry:
            bit1 = int(ar[arp]) if arp < len(ar) else 0
            bit2 = int(br[brp]) if brp < len(br) else 0

            total = bit1 + bit2 + carry
            summ = total % 2
            carry = total // 2

            addbinary += str(summ)

            arp += 1
            brp += 1

        return addbinary[::-1]
