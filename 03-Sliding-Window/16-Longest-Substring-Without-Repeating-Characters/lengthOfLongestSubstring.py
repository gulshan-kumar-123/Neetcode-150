from typing import List


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0
        l, r = 0, 1
        maxLen = 1
        while r < len(s):
            if s[r] not in s[l:r]:
                maxLen = max(maxLen, r-l+1)
            else:
                l = s.index(s[r], l, r)+1
            r += 1
        return maxLen
