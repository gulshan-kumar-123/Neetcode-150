class Solution(object):
    def isAnagram(self, s, t):
        return (sorted([x for x in s]) == sorted([x for x in t]))
