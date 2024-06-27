<h1>Classes</h1>
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

<h2>Defining classes</h2>
Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.
Like function expressions, class expressions may be anonymous, or have a name that's different from the variable that it's assigned to. However, unlike function declarations, class declarations have the same temporal dead zone restrictions as let or const and behave as if they are not hoisted.

<h2>Class body</h2>
The body of a class is the part that is in curly braces {}. This is where you define class members, such as methods or constructor.
The body of a class is executed in strict mode even without the "use strict" directive.
A class element can be characterized by three aspects:

Kind: Getter, setter, method, or field
Location: Static or instance
Visibility: Public or private
Together, they add up to 16 possible combinations. To divide the reference more logically and avoid overlapping content, the different elements are introduced in detail in different pages:

Method definitions
Public instance method

getter
Public instance getter

setter
Public instance setter

Public class fields
Public instance field

static
Public static method, getter, setter, and field

Private properties
Everything that's private
