# Introduction

This exercise should take approximately 2 hours (assuming the suggested conference is watched). Clean Code is about writing code which is not only understandable to the coder him/herself but to the others as well. Even bad code can function. But if code is not clean, it can bring a development organisation to its knees. Every year, countless hours and significant resources are lost because of poorly written code.

  

## Task

Given the concept of Clean Code, refactor the JavaScript code found in the given Code Pen. Submit your result via a source control mechanism of your choosing.

  

## Resources

Clean code – Robert Martin: https://www.youtube.com/watch?v=7EmboKQH8lM&t=3540s

  

## Code


```html
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"
		  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
		  crossorigin="anonymous"></script>
<div>
  <div>
    <p>
      This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day.  
    </p>
  </div>
  <div>
    <ul id="days-until"></ul>
  </div>
  <div>
    <button id="trigger">Show Days Until</button>
  </div>
</div>
```

```javascript
$("#trigger").click(function(){
  var apples = new Date();
  var oranges = new Date(2021,12,25)
  var pears = parseInt((oranges-apples)/(24*3600*1000));
  
  $("#days-until").append("<li>" + pears.toString()+" days until Christmas</li>");
})

$("#trigger").click(function(){
  var apples = new Date();
  var oranges = new Date(2022,01,01)
  var pears = parseInt((oranges-apples)/(24*3600*1000));
  
  $("#days-until").append("<li>" + pears.toString()+" days until New Year</li>");
})

$("#trigger").click(function(){
  var apples = new Date();
  var oranges = new Date(2022,02,14)
  var pears = parseInt((oranges-apples)/(24*3600*1000));
  
  $("#days-until").append("<li>" + pears.toString()+" days until Valentines Day</li>");
})
```

   


