# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

   1. Within a Github action that runs whenever code is pushed 

   2. Manually run them locally before pushing code

   3. Run them all after all development is completed

    I would go with 2. Manually run them locally before pushing code. This seems like the best place to place the testing since it would provide an oppurtunity to fix changes within your coding environment before everyone else gets to see it. This placement of the unit test is like in leetcode when you test the small cases before you submit the code and it checks the rest of the cases. The small cases is the unit test and the rest of the cases could be your peers.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    No this is something that you should do in your unit tests. You can check it here to be extra sure you are receiving the correct output but this can easily be done in a unit test.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    
    You could use a unit test to test a message function to test example inputs from a users to see if you missed an edge case in handling text and easily be able to change the code to handle the errors. However, the entire feature should be E2E tested in order to evaluate that the process of the user inputing a message is properly dealt with by the application and the input is properly handled and given to a message function.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    I would probably do a unit test for this. This error would be thrown if the input exceeds a limit so while unit testing I would create a for loop with inputs over the limits and see if they still get sent, which they should not be. To test the handling of a long message by the UI you would use end to end testing.

Lab completed by Billy Sudirdja and Sailor Eichhorn.
