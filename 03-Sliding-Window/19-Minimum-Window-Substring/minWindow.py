class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t) > len(s):
            return ""
        s_map = {}
        t_map = {}

        for i in range(len(t)):
            t_map[t[i]] = t_map.get(t[i], 0) + 1
        start = 0
        min_len = float('inf')
        min_window = ""
        required_char = len(t)

        for i in range(len(s)):
            if s[i] in t_map:
                s_map[s[i]] = s_map.get(s[i], 0) + 1
                if s_map[s[i]] <= t_map[s[i]]:
                    required_char -= 1
            while required_char == 0:
                if i-start+1 < min_len:
                    min_len = i-start+1
                    min_window = s[start:i+1]

                if s[start] in t_map:
                    s_map[s[start]] -= 1
                    if s_map[s[start]] < t_map[s[start]]:
                        required_char += 1
                start += 1
        return min_window
