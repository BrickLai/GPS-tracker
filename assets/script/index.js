/* ----------------------------------------------

    Object-oriented JavaScript
    Zhaoyu Li

    Optional chainning operator

    The optional chaining operator is like the dot chaining operator (.), except
 that instead of causing an error if a reference is nullish (null or
 undefined), the expression short-circuits with a return value of undefined.
 When used with function calls, it returns undefined if the given function
 does not exist

-----------------------------------------------*/

'use strict';
function select (selector, paarent = document)