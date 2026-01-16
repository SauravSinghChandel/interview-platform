export const PROBLEMS = {
    "two-sum": {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
            notes: [
                "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
                "You can return the answer in any order.",
            ],
        },
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]",
            },
            {
                input: "nums = [3,3], target = 6",
                output: "[0,1]",
            },
        ],
        constraints: [
            "2 ≤ nums.length ≤ 10⁴",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
            "-10⁹ ≤ target ≤ 10⁹",
            "Only one valid answer exists",
        ],
        starterCode: {
            javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
            python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
            java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,1]\n[1,2]\n[0,1]",
            python: "[0, 1]\n[1, 2]\n[0, 1]",
            java: "[0, 1]\n[1, 2]\n[0, 1]",
        },
    },

    "reverse-string": {
        id: "reverse-string",
        title: "Reverse String",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "Write a function that reverses a string. The input string is given as an array of characters s.",
            notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
        },
        examples: [
            {
                input: 's = ["h","e","l","l","o"]',
                output: '["o","l","l","e","h"]',
            },
            {
                input: 's = ["H","a","n","n","a","h"]',
                output: '["h","a","n","n","a","H"]',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
        starterCode: {
            javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
            python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
            java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
        },
        expectedOutput: {
            javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
            python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
            java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
        },
    },

    "valid-palindrome": {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
            notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
        },
        examples: [
            {
                input: 's = "A man, a plan, a canal: Panama"',
                output: "true",
                explanation: '"amanaplanacanalpanama" is a palindrome.',
            },
            {
                input: 's = "race a car"',
                output: "false",
                explanation: '"raceacar" is not a palindrome.',
            },
            {
                input: 's = " "',
                output: "true",
                explanation:
                    's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
        starterCode: {
            javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
            python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
            java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
        },
        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue",
        },
    },

    "maximum-subarray": {
        id: "maximum-subarray",
        title: "Maximum Subarray",
        difficulty: "Medium",
        category: "Array • Dynamic Programming",
        description: {
            text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
            notes: [],
        },
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
            },
            {
                input: "nums = [1]",
                output: "1",
                explanation: "The subarray [1] has the largest sum 1.",
            },
            {
                input: "nums = [5,4,-1,7,8]",
                output: "23",
                explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
            },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
            python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
            java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
        },
        expectedOutput: {
            javascript: "6\n1\n23",
            python: "6\n1\n23",
            java: "6\n1\n23",
        },
    },

    "container-with-most-water": {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
            notes: [
                "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
                "Return the maximum amount of water a container can store.",
                "Notice that you may not slant the container.",
            ],
        },
        examples: [
            {
                input: "height = [1,8,6,2,5,4,8,3,7]",
                output: "49",
                explanation:
                    "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
            },
            {
                input: "height = [1,1]",
                output: "1",
            },
        ],
        constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
            python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
            java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
        },
        expectedOutput: {
            javascript: "49\n1",
            python: "49\n1",
            java: "49\n1",
        },
    },
    "best-time-to-buy-and-sell-stock": {
        id: "best-time-to-buy-and-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        category: "Array • Dynamic Programming",
        description: {
            text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. Choose a single day to buy one stock and choose a different day in the future to sell it. Return the maximum profit you can achieve. If you cannot achieve any profit, return 0.",
            notes: ["You must buy before you sell."],
        },
        examples: [
            {
                input: "prices = [7,1,5,3,6,4]",
                output: "5",
                explanation: "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5.",
            },
            {
                input: "prices = [7,6,4,3,1]",
                output: "0",
                explanation: "No transactions are done and the max profit is 0.",
            },
        ],
        constraints: [
            "1 ≤ prices.length ≤ 10⁵",
            "0 ≤ prices[i] ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
            python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))    # Expected: 0`,
            java: `import java.util.*;

class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));   // Expected: 0
    }
}`,
        },
        expectedOutput: {
            javascript: "5\n0",
            python: "5\n0",
            java: "5\n0",
        },
    },

    "valid-anagram": {
        id: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "Easy",
        category: "String • Hash Table",
        description: {
            text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
            notes: ["An anagram uses the same characters with the same frequencies."],
        },
        examples: [
            { input: 's = "anagram", t = "nagaram"', output: "true" },
            { input: 's = "rat", t = "car"', output: "false" },
        ],
        constraints: [
            "1 ≤ s.length, t.length ≤ 5 * 10⁴",
            "s and t consist of lowercase English letters",
        ],
        starterCode: {
            javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
            python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))          # Expected: False`,
            java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car"));         // Expected: false
    }
}`,
        },
        expectedOutput: {
            javascript: "true\nfalse",
            python: "True\nFalse",
            java: "true\nfalse",
        },
    },

    "merge-two-sorted-lists": {
        id: "merge-two-sorted-lists",
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        category: "Linked List • Two Pointers",
        description: {
            text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list and return its head.",
            notes: ["The merged list should be made by splicing together the nodes of the first two lists."],
        },
        examples: [
            {
                input: "list1 = [1,2,4], list2 = [1,3,4]",
                output: "[1,1,2,3,4,4]",
            },
            {
                input: "list1 = [], list2 = []",
                output: "[]",
            },
            {
                input: "list1 = [], list2 = [0]",
                output: "[0]",
            },
        ],
        constraints: [
            "The number of nodes in both lists is in the range [0, 50]",
            "-100 ≤ Node.val ≤ 100",
            "Both list1 and list2 are sorted in non-decreasing order",
        ],
        starterCode: {
            javascript: `// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

function mergeTwoLists(list1, list2) {
  // Write your solution here
  
}

// Helpers for testing (array <-> list)
function fromArray(arr) {
  let dummy = new ListNode(0), cur = dummy;
  for (const x of arr) { cur.next = new ListNode(x); cur = cur.next; }
  return dummy.next;
}
function toArray(head) {
  const out = [];
  while (head) { out.push(head.val); head = head.next; }
  return out;
}

// Test cases
console.log(toArray(mergeTwoLists(fromArray([1,2,4]), fromArray([1,3,4])))); // Expected: [1,1,2,3,4,4]
console.log(toArray(mergeTwoLists(fromArray([]), fromArray([])))); // Expected: []
console.log(toArray(mergeTwoLists(fromArray([]), fromArray([0])))); // Expected: [0]`,
            python: `# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    # Write your solution here
    pass

# Helpers for testing (array <-> list)
def fromArray(arr):
    dummy = ListNode(0)
    cur = dummy
    for x in arr:
        cur.next = ListNode(x)
        cur = cur.next
    return dummy.next

def toArray(head):
    out = []
    while head:
        out.append(head.val)
        head = head.next
    return out

# Test cases
print(toArray(mergeTwoLists(fromArray([1,2,4]), fromArray([1,3,4]))))  # Expected: [1, 1, 2, 3, 4, 4]
print(toArray(mergeTwoLists(fromArray([]), fromArray([]))))            # Expected: []
print(toArray(mergeTwoLists(fromArray([]), fromArray([0]))))           # Expected: [0]`,
            java: `import java.util.*;

class Solution {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        
        return null;
    }

    static ListNode fromArray(int[] arr) {
        ListNode dummy = new ListNode(0);
        ListNode cur = dummy;
        for (int x : arr) { cur.next = new ListNode(x); cur = cur.next; }
        return dummy.next;
    }

    static int[] toArray(ListNode head) {
        ArrayList<Integer> out = new ArrayList<>();
        while (head != null) { out.add(head.val); head = head.next; }
        int[] res = new int[out.size()];
        for (int i = 0; i < out.size(); i++) res[i] = out.get(i);
        return res;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(toArray(mergeTwoLists(fromArray(new int[]{1,2,4}), fromArray(new int[]{1,3,4}))))); // Expected: [1, 1, 2, 3, 4, 4]
        System.out.println(Arrays.toString(toArray(mergeTwoLists(fromArray(new int[]{}), fromArray(new int[]{})))));             // Expected: []
        System.out.println(Arrays.toString(toArray(mergeTwoLists(fromArray(new int[]{}), fromArray(new int[]{0})))));            // Expected: [0]
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,1,2,3,4,4]\n[]\n[0]",
            python: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
            java: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
        },
    },

    "valid-parentheses": {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "Easy",
        category: "Stack • String",
        description: {
            text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            notes: [
                "An input string is valid if open brackets are closed by the same type of brackets.",
                "Open brackets must be closed in the correct order.",
                "Every close bracket has a corresponding open bracket of the same type.",
            ],
        },
        examples: [
            { input: 's = "()"', output: "true" },
            { input: 's = "()[]{}"', output: "true" },
            { input: 's = "(]"', output: "false" },
            { input: 's = "([)]"', output: "false" },
        ],
        constraints: [
            "1 ≤ s.length ≤ 10⁴",
            "s consists of parentheses only '()[]{}'",
        ],
        starterCode: {
            javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([)]")); // Expected: false`,
            python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))      # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))      # Expected: False
print(isValid("([)]"))    # Expected: False`,
            java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()"));      // Expected: true
        System.out.println(isValid("()[]{}"));  // Expected: true
        System.out.println(isValid("(]"));      // Expected: false
        System.out.println(isValid("([)]"));    // Expected: false
    }
}`,
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse\nfalse",
            python: "True\nTrue\nFalse\nFalse",
            java: "true\ntrue\nfalse\nfalse",
        },
    },

    "binary-search": {
        id: "binary-search",
        title: "Binary Search",
        difficulty: "Easy",
        category: "Array • Binary Search",
        description: {
            text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, return its index. Otherwise, return -1.",
            notes: ["You must write an algorithm with O(log n) runtime complexity."],
        },
        examples: [
            {
                input: "nums = [-1,0,3,5,9,12], target = 9",
                output: "4",
                explanation: "9 exists in nums and its index is 4.",
            },
            {
                input: "nums = [-1,0,3,5,9,12], target = 2",
                output: "-1",
            },
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁴",
            "-10⁴ ≤ nums[i] ≤ 10⁴",
            "nums is sorted in ascending order",
            "-10⁴ ≤ target ≤ 10⁴",
        ],
        starterCode: {
            javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1`,
            python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1`,
            java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
    }
}`,
        },
        expectedOutput: {
            javascript: "4\n-1",
            python: "4\n-1",
            java: "4\n-1",
        },
    },
    "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window • Hash Table",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: ["A substring is a contiguous sequence of characters within the string."],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke", with the length of 3.',
      },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of printable ASCII characters"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))     # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))    # Expected: 3`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 ≤ k < nums.length) such that the resulting array is nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
      },
      {
        input: "nums = [4,5,6,7,0,1,2], target = 3",
        output: "-1",
      },
      {
        input: "nums = [1], target = 0",
        output: "-1",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 5 * 10⁴",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "All values of nums are unique",
      "nums is an ascending array that is possibly rotated",
      "-10⁴ ≤ target ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1
print(search([1], 0))              # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); // Expected: -1
        System.out.println(search(new int[]{1}, 0));            // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n-1",
      python: "4\n-1\n-1",
      java: "4\n-1\n-1",
    },
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Heap (Priority Queue) • Divide and Conquer",
    description: {
      text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
      notes: ["Try to use a min-heap (priority queue) or divide and conquer to achieve good performance."],
    },
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
      },
      {
        input: "lists = []",
        output: "[]",
      },
      {
        input: "lists = [[]]",
        output: "[]",
      },
    ],
    constraints: [
      "k == lists.length",
      "0 ≤ k ≤ 10⁴",
      "0 ≤ lists[i].length ≤ 500",
      "-10⁴ ≤ lists[i][j] ≤ 10⁴",
      "lists[i] is sorted in ascending order",
      "The sum of lists[i].length will not exceed 10⁴",
    ],
    starterCode: {
      javascript: `// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

function mergeKLists(lists) {
  // Write your solution here
  
}

// Helpers for testing
function fromArray(arr) {
  let dummy = new ListNode(0), cur = dummy;
  for (const x of arr) { cur.next = new ListNode(x); cur = cur.next; }
  return dummy.next;
}
function toArray(head) {
  const out = [];
  while (head) { out.push(head.val); head = head.next; }
  return out;
}
function fromNestedArrays(nested) {
  return nested.map(fromArray);
}

// Test cases
console.log(toArray(mergeKLists(fromNestedArrays([[1,4,5],[1,3,4],[2,6]])))); // Expected: [1,1,2,3,4,4,5,6]
console.log(toArray(mergeKLists(fromNestedArrays([])))); // Expected: []
console.log(toArray(mergeKLists(fromNestedArrays([[]])))); // Expected: []`,
      python: `# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists):
    # Write your solution here
    pass

# Helpers for testing
def fromArray(arr):
    dummy = ListNode(0)
    cur = dummy
    for x in arr:
        cur.next = ListNode(x)
        cur = cur.next
    return dummy.next

def toArray(head):
    out = []
    while head:
        out.append(head.val)
        head = head.next
    return out

def fromNestedArrays(nested):
    return [fromArray(arr) for arr in nested]

# Test cases
print(toArray(mergeKLists(fromNestedArrays([[1,4,5],[1,3,4],[2,6]]))))  # Expected: [1, 1, 2, 3, 4, 4, 5, 6]
print(toArray(mergeKLists(fromNestedArrays([]))))                       # Expected: []
print(toArray(mergeKLists(fromNestedArrays([[]]))))                     # Expected: []`,
      java: `import java.util.*;

class Solution {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public static ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        
        return null;
    }

    static ListNode fromArray(int[] arr) {
        ListNode dummy = new ListNode(0);
        ListNode cur = dummy;
        for (int x : arr) { cur.next = new ListNode(x); cur = cur.next; }
        return dummy.next;
    }

    static int[] toArray(ListNode head) {
        ArrayList<Integer> out = new ArrayList<>();
        while (head != null) { out.add(head.val); head = head.next; }
        int[] res = new int[out.size()];
        for (int i = 0; i < out.size(); i++) res[i] = out.get(i);
        return res;
    }

    public static void main(String[] args) {
        ListNode[] lists1 = new ListNode[]{
            fromArray(new int[]{1,4,5}),
            fromArray(new int[]{1,3,4}),
            fromArray(new int[]{2,6})
        };
        System.out.println(Arrays.toString(toArray(mergeKLists(lists1)))); // Expected: [1, 1, 2, 3, 4, 4, 5, 6]

        ListNode[] lists2 = new ListNode[]{};
        System.out.println(Arrays.toString(toArray(mergeKLists(lists2)))); // Expected: []

        ListNode[] lists3 = new ListNode[]{ fromArray(new int[]{}) };
        System.out.println(Arrays.toString(toArray(mergeKLists(lists3)))); // Expected: []
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4,5,6]\n[]\n[]",
      python: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[]",
      java: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[]",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Stack • Dynamic Programming",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [
        "Water above a bar is determined by the minimum of the maximum height to its left and right minus its own height.",
      ],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The above elevation map traps 6 units of water.",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
      },
    ],
    constraints: [
      "n == height.length",
      "1 ≤ n ≤ 2 * 10⁴",
      "0 ≤ height[i] ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
  
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,
      python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))              # Expected: 9`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5}));             // Expected: 9
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
    },
  },
};

export const LANGUAGE_CONFIG = {
    javascript: {
        name: "JavaScript",
        icon: "/javascript.png",
        monacoLang: "javascript",
    },
    python: {
        name: "Python",
        icon: "/python.png",
        monacoLang: "python",
    },
    java: {
        name: "Java",
        icon: "/java.png",
        monacoLang: "java",
    },

};
