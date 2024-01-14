# When the list class is passed as the default_factory argument, then a defaultdict is created with the values that are list.
# ord - function in Python is used to convert a single Unicode character into its integer representation

from collections import defaultdict
from typing import List

# neetcode sol

# class Solution:
#     def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
#         res = defaultdict(list)

#         for s in strs:
#             count = [0]*26
#             for c in s:
#                 count[ord(c)-ord("a")] += 1
#             res[tuple(count)].append(s)
#         return res.values()



#slightly better solution 

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)

        for word in strs:
            sorted_word = ''.join(sorted(word))
            res[sorted_word].append(word)

        return list(res.values())
