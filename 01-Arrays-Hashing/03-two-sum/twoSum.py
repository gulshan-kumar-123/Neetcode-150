from typing import List
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        cache = {}
        for i, n in enumerate(nums):
            if n in cache:
                return [cache[n], i]
            cache[target-n] = i
