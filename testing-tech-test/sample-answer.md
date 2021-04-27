## Key Points

Potential "why we test" keypoints...
- Documentation for code
- Confidence in code (Particularly on refactor)
- Write more-pure/modular/testable/maintanble code

Potential "best practice" keypoints...
- CI/CD/Build pipeline to automate testing
- Choose tests which provide value
- TDD, BDD

Where you have applied those best practices
- Cypress testing on game?
- TDD on morse code translator?
- Enzyme on project work?

There's a lot more to this answer. But the above is a starting point.

## Example Answer Given by student which progressed through to 2nd round interview 

We test software as engineers as we want to ensure our code is well documented, gain confidence and ensure we write better code. 
This can be done by testing units of code in isolation(unit testing), testing integration or via end to end testing. The other which
 I haven't encountered is user acceptance testing(UAT)  which is where we look at tickets and determine whether the functionality 
 we've implemented meets the needs of the users and business. We also want tests that ensure previous functionality that we've 
 implemented isn't affected by any new functionality. All of these types of testing are important to me as a developer to reflect 
 upon my code, and the product I’m building, to make sure I've considered different possibilities, inputs, validation and error handling. 

In terms of best practice, the key one for me is to have both positive and negative tests, to ensure that not only are we looking 
for the correct functionality but to think about edge cases which might break it. Furthermore, testing units of code in isolation 
is easy and worthwhile for gaining confidence in the functionality; however, testing that these units "integrate" and work together
is also essential. So a product needs to have tests which will provide the most value to the developers,  stakeholders and users.
These tests can be included or a part of a CI/CD pipeline to run automatically when deploying code from our repository, or you
can run them locally in your development environment to ensure functionality. These build pipelines stop us from deploying 
changes to a main branch that could break key functionality within the product; however, when all tests pass it’ll increase 
our technical confidence. 

I always try to ensure that tests I write clearly document my code, so that another engineer would be able to see my logical 
assumptions if tests started to fail and understand why, and that they understand my decision making and compromises. Good 
testing also allows us to ask questions about what we are trying to achieve, and how we can improve on and implement better 
solutions. It is also important to recognise that it is impossible to test every single bug, but with good tests, it will allow
 us to find bugs more efficiently and point us in the right direction gaining confidence in our code.

My experience with testing has primarily been in unit testing, I created a morse code to english translator that I built using
 test driven development in Jest, this allowed me to ask questions about what I was trying to achieve with my project, and how
  I could improve upon and create more robust code. I also wrote a timer module for our client project using Luxon to ensure 
  that users had information about the upcoming deadline for the ordering of meals. I learnt a lot from this as I had to rely 
  on some paradigms of functional programming, to purify my functions so that we could test them in isolation reliably. 
  In this client project we had tests on deployment using Github Actions, which ensured that the project didn't break on 
  deployment to our production environment. I have some experience using Enzyme, to test the output of React components 
  using both shallow and mounting tests, as well as Cypress, for e2e testing. I am not as confident on these types of 
  tests, but I'd be willing to learn as I recognise the importance of testing as a software developer. 

Once again, testing is supremely important and I am very aware that I could be much better in being test driven in my
 development, but I am always willing to improve and more than willing to continue this conversation as I find it fascinating
  and extremely necessary.

Thanks for your time,
