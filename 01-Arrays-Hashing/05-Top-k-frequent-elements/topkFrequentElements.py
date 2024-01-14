from typing import List

#neetcode solution
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        countDict = {}
        freq = [[] for i in range(len(nums)+1)]
        result = []
        for num in nums:
            countDict[num] = 1 + countDict.get(num, 0)
        for num, count in countDict.items():
            freq[count].append(num)

        for i in range(len(freq)-1, 0, -1):
            for num in freq[i]:
                result.append(num)
                if len(result) == k:
                    return result
