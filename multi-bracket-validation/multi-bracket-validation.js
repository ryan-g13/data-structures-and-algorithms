'use strict';

// import stack class 
let stack = [];

function multiBracketValidation(string) {
  for (let i = 0; i < string.length; i++) {
    if (stack.length === 0 && (string[i] === '}' || string[i] === ']' || string[i] === ')') ) {
      return false;
    }
    if (string[i] === '{' || string[i] === '[' || string[i] === '(') {
      stack.push(string[i]);
    }
    if (stack.length > 0 && string[i] === '}') {
      if (stack[stack.length - 1] === '{') 
        stack.pop();
      }
    if (stack.length > 0 && string[i] === ']') {
      if (stack[stack.length - 1] === '[') 
      stack.pop();
    }
    }
  } 
  if (stack.length > 0) {
    return false;
  } return true;
}

multiBracketValidation('[]');
