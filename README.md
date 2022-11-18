# Lab 8 - Starter
1. I would go with 2. Manually run them locally before pushing code. This seems like the best place to place the testing since it would be autoamted with a Github Action and it checks your code before everyone else gets to see it. This placement of the unit test is like in leetcode when you test the small cases before you submit the code and it checks the rest of the cases. The small cases is the unit test and the rest of the cases could be your peers.
2. No this is something that you should do in your unit tests. You can check it here to be extra sure you are receiving the correct output but this can easily be done in a unit test.
3. You would use a unit test to test the message function so you test the inputs of the users to see if you missed an edge case and easily be able to change the code to handle the errors.
4. I would probably do a unit test for this. This error would be thrown if the input exceeds a limit so while unit testing I would create a for loop with inputs over the limits and see if they still get sent, which they should not be.

Worked on this Lab by myself.