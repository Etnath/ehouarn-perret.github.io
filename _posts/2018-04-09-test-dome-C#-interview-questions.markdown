---
layout: post
title: "TestDome: C# Interview Questions"
date: 2018-04-09 00:00:00 -0400
categories: web development jquery basics
---

Here are the solution to the interview questions about C# on TestDome:
https://www.testdome.com/d/c-sharp-interview-questions/18

# Palindrome

- Difficulty: Easy.
- Time: 10 minutes.

## Problem

A palindrome is a word that reads the same backward or forward.

Write a function that checks if a given word is a palindrome. Character case should be ignored.

For example, IsPalindrome("Deleveled") should return true as character case should be ignored, resulting in "deleveled", which is a palindrome since it reads the same backward and forward.

## Solution

{% highlight c# linenos %}
using System;

public class Palindrome
{
    public static bool IsPalindrome(string word)
    {
        var lowerCaseWord = word.ToLower();
    
        return lowerCaseWord.SequenceEqual(word.ToLower().Reverse());
    }

    public static void Test()
    {
        Console.WriteLine(IsPalindrome("Deleveled"));
    }
}
{% endhighlight %}

# Binary Search Tree

- Difficulty: Easy.
- Time: 15 minutes.

## Problem

Binary search tree (BST) is a binary tree where the value of each node is larger or equal to the values in all the nodes in that node's left subtree and is smaller than the values in all the nodes in that node's right subtree.

Write a function that checks if a given binary search tree contains a given value.

For example, for the following tree:

- n1 (Value: 1, Left: null, Right: null)
- n2 (Value: 2, Left: n1, Right: n3)
- n3 (Value: 3, Left: null, Right: null)

Call to Contains(n2, 3) should return true since a tree with root at n2 contains number 3.

## Solution

{% highlight c# linenos %}
using System;

namespace EhouarnPerret.CSharp.TestDome.Harness.Interviews
{
    public class BinarySearchTree
    {
        public class Node
        {
            public int Value { get; set; }

            public Node Left { get; set; }

            public Node Right { get; set; }

            public Node(int value, Node left, Node right)
            {
                Value = value;
                Left = left;
                Right = right;
            }
        }
        
        public static bool Contains(Node root, int value)
        {
            var current = root;
        
            while(current != null)
            {
                if (current.Value == value)
                {
                    return true;
                }
                else if (current.Value > value) 
                {
                    current = current.Left;
                }
                else // if (current.Value < value)
                {
                    current = current.Right;
                }
            }
        
            return false;
        
            // Recursive way:
            //
            // if (root == null) 
            // {
            //     return false;
            // }
            //
            // if (root.Value == value) 
            // {
            //     return true;
            // }
            // 
            // if (root.Value > value) 
            // {
            //     return Contains(root.Left, value);
            // }
            //
            // return Contains(root.Right, value);
        }

        public static void Test(string[] args)
        {
            var n1 = new Node(1, null, null);
            var n3 = new Node(3, null, null);
            var n2 = new Node(2, n1, n3);

            Console.WriteLine(Contains(n2, 3));
        }
    }
}
{% endhighlight %}

# User Input

- Difficulty: Easy.
- Time: 15 minutes.

## Problem

User interface contains two types of user input controls: 

- `TextInput`, which accepts all characters. 
- `NumericInput`, which accepts only digits.

Implement the class TextInput that contains:

- `public` method `void Add(char c)`: adds the given character to the current value.
- `public` method `string GetValue()` returns the current value.

Implement the class `NumericInput` that:

- Inherits `TextInput`.
- Overrides the `Add` method so that each non-numeric character is ignored.

For example, the following code should output "10":

## Solution

{% highlight c# linenos %}
using System;
using System.Text;

namespace EhouarnPerret.CSharp.TestDome.Harness.Interviews
{
    public class UserInput
    {
        public class TextInput 
        {
            private readonly StringBuilder _stringBuilder = new StringBuilder(); 
    
            public virtual void Add(char c)
            {
                _stringBuilder.Append(c);
            }
    
            public string GetValue()
            {
                return _stringBuilder.ToString();
            }
        }

        public class NumericInput : TextInput
        {
            public override void Add(char c)
            {
                if (char.IsDigit(c))
                {
                    base.Add(c);
                }
            }
        }
        
        public static void Test()
        {
            var input = new NumericInput();
            input.Add('1');
            input.Add('a');
            input.Add('0');
            Console.WriteLine(input.GetValue());
        }
    }
}
{% endhighlight %}

# Two Sum

- Difficulty: Easy.
- Time: 30 minutes.

## Problem

Write a function that, given a list and a target sum, returns zero-based indices of any two distinct elements whose sum is equal to the target sum. If there are no such elements, the function should return null.

For example, `FindTwoSum(new List<int>() { 1, 3, 5, 7, 9 }, 12)` should return a `Tuple<int, int>` containing any of the following pairs of indices:

- 1 and 4 (3 + 9 = 12)
- 2 and 3 (5 + 7 = 12)
- 3 and 2 (7 + 5 = 12)
- 4 and 1 (9 + 3 = 12)

## Solution

{% highlight c# linenos %}
using System;
using System.Collections.Generic;

namespace EhouarnPerret.CSharp.TestDome.Harness.Interviews
{
    class TwoSum
    {
        public static Tuple<int, int> FindTwoSum(IList<int> list, int sum)
        {
            var dictionary = new Dictionary<int, int>();
        
            for (var i = 0; i < list.Count; i++)
            {
                var aim = sum - list[i];
            
                if(dictionary.ContainsKey(aim))
                {
                    return new Tuple<int, int> (dictionary[aim], i);
                }
                else if(!dictionary.ContainsKey(list[i]))
                {
                    dictionary.Add(list[i], i);
                }
            }

            return null;
        }

        public static void Test()
        {
            var indices = FindTwoSum(new List<int> { 1, 3, 5, 7, 9 }, 12);
        
            if(indices != null) 
            {
                Console.WriteLine(indices.Item1 + " " + indices.Item2);
            }
        }
    }
}
{% endhighlight %}

# Folders

- Difficulty: Hard.
- Time: 20 minutes.

## Problem

Implement a function `FolderNames`, which accepts a string containing an XML file that specifies folder structure and returns all folder names that start with startingLetter. 

The XML format is given in the example below.

For example, for the letter `u` and XML file:

{% highlight xml linenos %}
<?xml version="1.0" encoding="UTF-8"?>
<folder name="c">
    <folder name="program files">
        <folder name="uninstall information" />
    </folder>
    <folder name="users" />
</folder>
{% endhighlight %}

The function should then return `uninstall information` and `users` (in any order).

## Solution

{% highlight c# linenos %}
using System;
using System.Collections.Generic;
using System.IO;
using System.Xml;

namespace EhouarnPerret.CSharp.TestDome.Harness.Interviews
{
    public class Folders
    {
        public static IEnumerable<string> FolderNames(string xml, char startingLetter)
        {
            var startingLetterString = startingLetter.ToString();
        
            using (var reader = XmlReader.Create(new StringReader(xml)))
            {
                while (reader.Read())
                {
                    // Only detect start elements.
                    if (reader.IsStartElement())
                    {
                        // Get element name and switch on it.
                        if (reader.Name == "folder")
                        {
                            var attribute = reader["name"];
                            if (attribute != null && attribute.StartsWith(startingLetterString))
                            {
                                yield return attribute;
                            }
                        }
                    }
                }
            }
        }

        public static void Test()
        {
            var xml =
                "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
                "<folder name=\"c\">" +
                "<folder name=\"program files\">" +
                "<folder name=\"uninstall information\" />" +
                "</folder>" +
                "<folder name=\"users\" />" +
                "</folder>";

            foreach (var name in FolderNames(xml, 'u'))
            {
                Console.WriteLine(name);
            }
        }
    }
}
{% endhighlight %}

# Sorted Search

- Difficulty: Hard.
- Time: 20 minutes.

## Problem

Implement function `CountNumbers` that accepts a sorted array of integers and counts the number of array elements that are less than the parameter `lessThan`.

For example, `SortedSearch.CountNumbers(new int[] { 1, 3, 5, 7 }, 4)` should return `2` because there are two array elements less than `4`.

## Solution

{% highlight c# linenos %}
using System;

namespace EhouarnPerret.CSharp.TestDome.Harness.Interviews
{
    public class SortedSearch
    {
        public static int CountNumbers(int[] sortedArray, int lessThan)
        {
            // From MS documentation:
            // The index of the specified value in the specified array, if value is found; 
            // otherwise, a negative number. 
            // If value is not found and value is less than one or more elements in array, 
            // the negative number returned is the bitwise complement of the index of the first element 
            // that is larger than value.
            var firstIndex = Array.BinarySearch(sortedArray, lessThan);
        
            if (firstIndex < 0)
            {
                return ~firstIndex;
            }
            else
            {
                return firstIndex;
            }
        }

        public static void Test()
        {
            Console.WriteLine(CountNumbers(new[] { 1, 3, 5, 7 }, 4));
        }
    }
}
{% endhighlight %}

# Train Composition

- Difficulty: Hard.
- Time: 20 minutes.

## Problem

A TrainComposition is built by attaching and detaching wagons from the left and the right sides.

For example, if we start by attaching wagon `7` from the left followed by attaching wagon `13`, again from the left, we get a composition of two wagons (`13` and `7` from left to right). Now the first wagon that can be detached from the right is `7` and the first that can be detached from the left is `13`.

Implement a `TrainComposition` that models this problem.

## Solution

{% highlight c# linenos %}
using System;
using System.Collections.Generic;

namespace EhouarnPerret.CSharp.TestDome.Harness.Interviews
{
    public class TrainComposition
    {
        private readonly LinkedList<int> _linkedList = new LinkedList<int>();
    
        public void AttachWagonFromLeft(int wagonId)
        {
            _linkedList.AddFirst(wagonId);
        }

        public void AttachWagonFromRight(int wagonId)
        {
            _linkedList.AddLast(wagonId);
        }

        public int DetachWagonFromLeft()
        {
            var wagonId = _linkedList.First.Value;
            _linkedList.RemoveFirst();
            return wagonId;
        }

        public int DetachWagonFromRight()
        {
            var wagonId = _linkedList.Last.Value;
            _linkedList.RemoveLast();
            return wagonId;
        }

        public static void Test()
        {
            var tree = new TrainComposition();
            tree.AttachWagonFromLeft(7);
            tree.AttachWagonFromLeft(13);
            Console.WriteLine(tree.DetachWagonFromRight()); // 7 
            Console.WriteLine(tree.DetachWagonFromLeft()); // 13
        }
    }
}
{% endhighlight %}

# Path

- Difficulty: Hard.
- Time: 30 minutes.

## Problem

Write a function that provides change directory (cd) function for an abstract file system.

Notes:

- Root path is `/`.
- Path separator is `/`.
- Parent directory is addressable as `..`.
- Directory names consist only of English alphabet letters (`A-Z` and `a-z`).
- The function should support both relative and absolute paths.
- The function will not be passed any invalid paths.
- Do not use built-in path-related functions.

For example:

{% highlight c# linenos %}
Path path = new Path("/a/b/c/d");
path.Cd("../x");
Console.WriteLine(path.CurrentPath);
{% endhighlight %}

## Solution

{% highlight c# linenos %}
using System;
using System.Linq;
using System.Text;

namespace EhouarnPerret.CSharp.TestDome.Harness.Interviews
{
    public class Path
    {
        public string CurrentPath { get; private set; }

        private const string Separator = "/";
        private const string Parent = "..";
    
        public Path(string path)
        {
            CurrentPath = path;
        }
        
        public void Cd(string newPath)
        {
            var newPathTokens = newPath.Split(new [] { Separator }, StringSplitOptions.None);
            var oldPathTokens = CurrentPath.Split(new [] { Separator }, StringSplitOptions.None);
        
            var parentCount = newPathTokens.Count(str => str.Equals(Parent));
        
            var stringBuilder = new StringBuilder();
            
            for (var i = 0; i < oldPathTokens.Length - parentCount; i++)
            {
                stringBuilder.Append(oldPathTokens[i]);
                stringBuilder.Append(Separator);
            }

            foreach (var token in newPathTokens.Where(token => !token.Equals(Parent)))
            {
                stringBuilder.Append(token);
                stringBuilder.Append(Separator);
            }

            CurrentPath = stringBuilder.ToString(0, stringBuilder.Length - 1);
        }
        
        public static void Test()
        {
            Path path = new Path("/a/b/c/d");
            path.Cd("../x");
            Console.WriteLine(path.CurrentPath);
        }
    }
}
{% endhighlight %}
