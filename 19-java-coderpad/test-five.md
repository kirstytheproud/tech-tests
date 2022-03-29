## Description
A Library Management System is a software built to handle the primary housekeeping functions of a library. Libraries rely on library management systems to manage asset collections as well as relationships with their members. Library management systems help libraries keep track of the books and their checkouts, as well as members' subscriptions and profiles.
Library management systems also involve maintaining the database for entering new books and recording books that have been borrowed with their respective due dates.
Classes you need to build.
- Library: The central part of the organization for which this software has been designed. It has attributes like 'Name' to distinguish it from any other libraries and 'Address' to describe its location.
- Book: The basic building block of the system. Every book will have ISBN, Title, Subject, Publishers, etc.
- BookItem: Any book can have multiple copies, each copy will be considered a book item in our system. Each book item will have a unique barcode.
- Account: We will have two types of accounts in the system, one will be a general member, and the other will be a librarian.

## Challenges & Questions going forward
- How will a library issue book items to accounts/people?
- How will a library stop issuing books once all?
- How can we store information about authors who make many books?
- How will the library keep track of past, present, and future book reservations?
- How will a library update an person's address when they move?
- (Hard) How will a library fine a person for late returns?
- (Hard) What about a library which needs to lend more than just books? What changes would you make to the above code?

### Full Challenge
https://www.educative.io/courses/grokking-the-object-oriented-design-interview/RMlM3NgjAyR
