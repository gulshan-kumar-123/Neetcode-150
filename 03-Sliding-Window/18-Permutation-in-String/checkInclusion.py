class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        s1_map = {}
        s2_map = {}

        for s in s1:
            s1_map[s] = s1_map.get(s, 0)+1

        for i in range(len(s2)):
            s2_map[s2[i]] = s2_map.get(s2[i], 0)+1

            if i >= len(s1):
                if s2_map[s2[i-len(s1)]] > 1:
                    s2_map[s2[i-len(s1)]] -= 1
                else:
                    del s2_map[s2[i-len(s1)]]
            if s1_map == s2_map:
                return True
        return False
