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
- How will a library stop issuing books when their stock has run out?
- How can we store information about authors who make many books?
- How will the library keep track of past, present, and future book reservations?
- How will a library update an person's address when they move?
- (Hard) How will a library fine a person for late returns?
- (Hard) What about a library which needs to lend more than just books? What changes would you make to the above code?

### Starter Code?
``` java
public class Main {

    public static void main(String[] args) {
        // 1. Create a new library for us to interact with
	    
        // 2. Populate some available books
        
        // 3. Populate some members and a librarian
        
        // 4. (Scanner) Get an email, find a member matching this email
        
        // 5. (Scanner) Get a book name, find a book matching this name
        
        // 6. (Scanner) Confirm with the user that they would like to loan a book. Create a loan which moves 
        //    a book from available to loaned
        
        // 7. Great! Our first prototype has been built. What design problems have we introduced? How can we make this better?
    }
}

public class Library {

    private ArrayList<Person> librarians;
    private ArrayList<Person> members;
    private ArrayList<Book> availableBooks;
    private ArrayList<Book> loanedBooks;

    public boolean isAvailable(Book book) {
        return false;
    }

    public void returnBook(Loan loan) {
        
    }

    public void checkoutBook(Loan loan) {

    }
}
```

### Full Challenge
https://www.educative.io/courses/grokking-the-object-oriented-design-interview/RMlM3NgjAyR
