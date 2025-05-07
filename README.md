# Lab 5 - Starter
Lab5 conributors:


- Christina Weng
- James Forest


1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
 
No, unit tests alone aren't good for testing the complete message feature. Although they can verify individual components like input validation, the end-to-end messaging process requires integration testing to confirm proper interaction between UI, APIs, database, and notification systems, making sure that they all work as a whole.


2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters."
 
Yes, unit tests are perfect for testing message length validation. This feature involves simple, isolated logic (for example, checking character count against a limit) without external dependencies, making it ideal for fast, reliable unit testing of boundary conditions (like in the example, 80 vs 81 characters).

