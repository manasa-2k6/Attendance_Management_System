- Heading is indicated with Hash('#')

- For subheading hash hash ('##')

- For bold use asterisk ('*')

JAVASCRIPT
- Any browser will support JavaScript(right click and select inspect). It works because Node.js is at run-time.

- It is a high-level, dynamically typed, loosely typed, single-threaded,asynchronous,
object-oriented and event-driven programming language.
- High-Level → Easy to write and understand.
- Dynamically Typed → No need to declare data types.
- Loosely Typed → Automatically converts types when needed.
  Single-Threaded → One task executes at a time.
- Asynchronous → Doesn't stop the program while waiting.
- Object-Oriented → Uses objects and classes.
- Event-Driven → Reacts to user or browser events.

- It is used to make web pages interctive.

- It adds functionality and behaviour to websites.

- It runs in browser using Node.js


VARIABLES
JavaScript provides 3 ways to declare variables:
1. var 
   - ex: var a=10
      var a ==> indicates declaration
      a = 10
      a ==> indicates initialization
      Re-declaration and Re-initialization is possible.
      var name
      name = "Sam"
      console.log(name)
      var name
      name = "Puli"
      console.log(name)
      We get the output as: Sam and in the next line Puli
   - 'hoisting' is possible with var.
   - var is a 'functional scope'.
   - var is not a 'block scope'.

2. let
   - let is a 'block scope' and a 'functional scope' but mainly is a "block scope".
   - Re-declaration is not possible but Re-initialization is not possible.

3. const(follow const by default for fewer errors)
   - Re-declaration and Re-initialization are not possible.
   - const is a 'block scope' and a 'functional scope' but mainly is a "block scope".

- Practically const is preferred
- All these changes happened before ES6(before 2015), before only var was used to create variables in JavaScript.
- ES stands for ECMAScript.
- const was introduced in ECMAScript.

Scopes are of two types:
- Block Scope
- Functional scope


DATATYPES
Primitive Datatypes:
- String
- Number
- Boolean
- Undefined
- Null

Non-Primitive Datatypes:
- Object
- Array


OPERATORS
1. Arithmetic operators(+, -, %, /, *)

2. Assignment operators(+=, -=, *=, /=)
   ex: const a = 10
       const b += 20
       a++ ==> post increment
       ++a ==> pre increment
       a-- ==> post decrement
       --a ==> pre decrement

3. Comparision operators(>=, <=, <, >)

4. Increment and Decrement operators(a++, ++a, a--, --a)

5. Equality operators(==, !=)

6. Logical operators(&&, ||, ~, ^)

7. Conditional operators(condition ? true statement : false statement)
   It is also called ternary operators

8. Bitwise operators(&, |)


CONDITIONAL STATEMENTS
1. if statement

2. if else statement

3. if else if statement

4. nested if statement

5. Switch


LOOPS
1. for loop

2. while loop

3. do while loop

4. for...of loop

5. for...in loop


FUNCTIONS
- A function is a reusable block of code.
These are the types of functions in JavaScript
1. Function declaration
   - A function 'can' be called before initialization.
   - Function declaration supports "hoisting" (declaring before initialization which is a disadvantage)

2. Function expression
   - A function 'cannot' be called before initialization.

3. Arrow function
   - Introduced in ES6 in 2015.
   - Arrow function 'cannot' be called before initialization.

4. Callback function
   - A function is acting like a parameter to the other function.
   - A function which acts like a parameter is called a callback function.

5. Higher Order function
   - A function 'x' is a higher order function if it allows another function 'y' as its parameter.

6. Anonymous function
   - A function without a name


ARRAYS
- Array - collection of values

Array Methods:
1. Add/Remove methods
   - push()  → Adds an element at the end of the array.
   - pop()  → Removes an element from the end fo the array.
   - shift()  → Removes an element from the first.
   - unshift()  → Adds an element at the beginning.
   - splice()  → Adds, Removes and Replaces an element.
               Syntax - 
               arrayname.splice(startIndex, no. of elements to delete, add elements if needed)
               ex - arr.splice(2) : starts from 2nd index and removes everything
               ex - arr.splice(1,2) : starts from 1st index and deletes 2nd element
   - slice()

2. Searching methods
   - includes()  → Checks if an element is included or not.
   - indexOf()  → If element is not found, it will return '-1'.
   - find()  → Returns first matching element.
   - findIndex()  → It will find the element of the required element.

3. Iteration methods
   - forEach()  → Loops through every element.
                 forEach() method is used to iterate each element from an array.
   - map()  → It returns a modified array.
   - filter()  → Returns matching elements

4. Transformation methods
   - reduce()  → Reduces the array to a single value.
   - sort()  → Sorts elements in an array.
              Sort method will convert the numbers in the array to strings
   - reverse()  →  


DOM(Document Object Model)
- It is a programming interface that represents an HTML document as a tree of objects.
- Access HTML elements.
- Modify content.
- Change styles.
- Add or remove elements.
- Respond to user actions.

- getElementById()  →  Find one element by using its ID.
- querySelector()  → Find the first element matching a CSS selector.
- querySelectorAll()  → Find all elements matching a CSS selector.


EVENT HANDLING
- An 'event' is an action that happens on a web page, performed by a user or browser.

- Click Event (onclick)
- Double Click Event (ondbclick)
- Mouse Hover Event (onmouseover)


React JS
- React is an open-source Javascript library used for building fast, interactive and reusable user interfaces developed by Meta Platforms (Facebook) released in 2013.
- React allows developers to creaet modern web applications using reusable components.
- Popular applications built with React:
  - Facebook
  - Instagram
  - Netflix
  - Whatsapp web


Problems with JS:
   - Frequent DOM manipulation
   - Code duplication
   - Difficult maintenance

React solves these problems:
   - Reusable components
   - Virtual DOM
   - Better performance
   - Easy maintenance
   - Faster development


Features of React
- Component-based architecture
- Virtual DOM
- JSX
- One-way data flow
- Reusable code
- Fast rendering


React supports Single Page Applications (SPA)
- Loads a single page and dynamically updates content without refreshing the entire page.
- Ex: Gmail, Facebook, Instagram, Google Maps.


Virtual DOM
- Virtual DOM is a JavaScript representation of the Real DOM that React uses to track the UI changes efficiently.
- React does not update the Real DOM directly.
- Instead, it updates the virtual DOM first.
- * 'Diffing' is the process of comparing the old virtual DOM with the new virtual DOM to identify the exact changes that need to be applied to the Real DOM.
- * 'Reconciliation' is the process by which React updates the Real DOM efficiently after diffing by applying only the necessary changes.


JSX(JavaScript Extensible MarkUp Language)
- JSX(JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.
- JSX is not HTML.
- It only looks like HTML, behind the scenes React converts JSX into Javascript using Babel(JavaScript compiler).
- JavaScript expressions can be used in JSX by using curly braces {}.

JSX Rules
- One Parent Element.
- className instead of class.
- JavaScript inside{}.

- * If we want to write JavaScript inside of HTML we have to use curly braces.


PROPS
- Props(Properties) are used to pass data from one component to another component.
- Props are read-only inputs passed from a parent component to a chhild component.
- Props are passed just like HTML attributes
  ex: <StudentCard name = "Sam"/>


React Routing
- Routing is the process of navigating between different pages/components in a React .


Destructuring
- Destructuring allows us to extract values from an object or an array and store them in variables.
- It is an ES6 feature.


Prop Drilling
- Prop Drilling is the process of passing data from a data component to a child component through multiple intermediate components using props, eventhough those intermediate components don't actually need the data.
- Prop Drilling can be avoided using useContext(), Redux, Zustand.......


Hooks
- Hooks are special functions that allow Functional Components to use React features such as:
  - State Management
  - Side Effects
  - Context

Most Widely Used Hooks
1. useState
2. useEffect
3. useContext

1. useState
- useState() is a React Hook used to create and manage state in a Functional Component.
- const[state, setState] = useState(initialValue);
- UseState() will allow a parameter and will return an array.
- Above, state -> is initial value, setState -> is a function that updates the state value.

2. useEffect
- useEffect() is a React Hook used to perform side effects in a component.
- Used for API calls, timers, database requests, event listeners and local storage.
- useEffect(()=>{
   })

3. useContext
- useContext() is a React Hook that allows you 