---
path: "/algorithms"
title: "Algorithms"
order: "900A"
description: "Algorithms"
section: "Job readiness"
---

# Learning data structure & algorithms

#### Resources

The book [Cracking the coding interview](https://github.com/alxerg/Books-1/blob/master/Cracking%20the%20Coding%20Interview%2C%206th%20Edition%20189%20Programming%20Questions%20and%20Solutions.pdf) by Gayle Laakman is often cited as the holy grail. You can buy it if you want, but these two playlists of her videos on YouTube is a good place to start:

- [Data structures](https://www.youtube.com/playlist?list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX)
- [Algorithms](https://www.youtube.com/playlist?list=PLI1t_8YX-ApvMthLj56t1Rf-Buio5Y8KL)

#### About the playlists

Start with the data structures playlist. The playlist is not entirely in order - often times the related problem solution comes before the theory. I think the actual order is : 3, 1, 2, 5, 4… etc.
e.g you should watch

- video 3 titled [Data Structures: Stacks & Queues](https://www.youtube.com/watch?v=wjI1WNcIntg&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=4&t=40s) which discusses the theory before going through the problem solution on
- video 1 titled [Data Structures: balanced parentheses in expression](https://www.youtube.com/watch?v=IhJGJG-9Dx8&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=2&t=0s) and
- video 2 titled [Data Structures: Queue with two stacks](https://www.youtube.com/watch?v=7ArHz8jPglw&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=2)

#### Steps to mastering data structures and algorithms using the playlists

1. Pick one data structure a week, say watch video 3 for stacks and queues
1. Then go through her problem solution explanation videos on stacks and queues, e.g. videos 1 and 2
1. Go to one of the algorithm practice platforms to practice problems for the given data structure (e.g. leetcode, hackerrank, codewars, algoexpert if FSA give you guys free membership)
1. Rinse repeat go through all other videos on the data structures playlist
1. Then go through the algorithms playlist the same way

Thats it! these are all the steps required to ace an algorithm based technical interview!

[Wait.. so whats the relationship between Data structures and Algorithms and Questions/Problems?](#data-structures-vs-algorithms-vs-questionsproblems)

---

##### Data structures vs Algorithms vs Questions/Problems

- **Data structures** are just ways you can store data. e.g. as a `string`, `number`, `arrays`, `objects`, `linked list`, `stacks` etc. More complex data structures are just compositions of simpler data structures. e.g.

  - an `array` is a composition of `strings` and/or `numbers`
  - `stacks` and `queues` are different ways to put data in and out from `arrays`
  - an `object` is a composition of different types of data structures
  - `linked lists` could be implemented by chaining together `objects` etc
  - the types of data structures available to you natively will differ from language to language, but all data structures can be implemented in all languages. e.g. Java gives you `stack` natively, but in Javascript you would implement it using arrays
  - `objects` in Javascript used as `hash tables` are the super power data structures - any problems you get, always see if you can use `hash tables` to improve efficiency

- **Algorithms** are common problem solving logics/patterns generally using a certain data structure that can be used to efficiently solve certain classes of problems

- **Questions/Problems** are just that - they are a problem given to you for solving. Problems can be solved in many ways - it is ok to solve a problem in the easiest way that makes sense to you at first. But the goal is to eventually figure out and implement a better algorithm and data structure that generally results in a more efficient solution. There is no one correct best algorithm / data structure - all solutions will have tradeoffs in terms of the Big O of time vs. space; but there generally is an industry accepted best solution that you have to get familiar with. So the usual steps to solve a question is:
  1. Find the easiest, naive solution to the problem. This will often not be efficient
  2. If you have time, then find a more efficient solution
  3. Once you find more than one solution, articulate the tradeoffs between the solutions
  4. If you have even more time, is there a still more efficient solution?
  5. From all your solutions, pick one that you think will best serve the current situation

---

###### LEARNING NOTES:

**Algorithms are hard!** So be prepared for things to completely fly over your head the first few times you look at them

**Regarding the language** - The videos for practice exercises are in `Java` programming language… so some of the syntax might not translate into Javascript, but the general logic is the same. You can google for interoperability, e.g. stacks are implemented using the `stack` data type in Java, but in Javascript you would use arrays
