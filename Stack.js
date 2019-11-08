// 1. Create a stack class
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    if (this.top === null) {
      this.top = new _Node(value, null);
      return this.top;
    }
    let newNode = new _Node(value, this.top)
    this.top = newNode;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}

function main() {
  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop();
  starTrek.pop();

  return starTrek;
}
// console.log(JSON.stringify(main()));


//2. Useful methods for a stack
function peek(stack) {
  let top = stack.top;
  return top;
}
// console.log(peek(main()));

function isEmpty(stack) {
  let top = stack.top;
  if (top === null) {
    return true;
  }
  return false;
}
// console.log(isEmpty(main()));

function display(stack) {
  console.log(JSON.stringify(stack));
}
// display(main()); 
// The first item in our stack is the item on the bottom, which is 'Kirk'
/* To get rid of McCoy from our stack, we would need to perform two pop()
   methods. This is because items from the stack can only be removed one at a time
   from the top */


//3. Check for palindromes using a stack
function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let palindromeStack = new Stack();
  let top = palindromeStack.top;
  for (let i = 0; i < string.length; i++) {
    palindromeStack.push(string[i]);
    top++;
  }
  let reverseString = '';
  for (let i = 0; i < top; i++) {
    reverseString += palindromeStack.pop();
  }
  if (reverseString === string) {
    return true;
  }
  return false;
}
// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));


//4. Matching parentheses in an expression
function isMissingExpression(string) {
  let stack = new Stack();
  let top = 0;
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
    top++;
  }
  let countOpen = 0;
  let countClose = 0;
  let holder = '';
  for (let i = 0; i < top; i++) {
    holder = stack.pop();
    if (holder === '(') {
      countOpen++;
    } else if (holder === ')') {
      countClose++;
    }
  }
  if (countOpen !== countClose) {
    if (countOpen % 2 === 1) {
      return `You are missing a '('`;
    } else if (countClose % 2 === 1) {
      return `You are missing a ')'`;
    }
  }
  return 'Expression seems correct!';
}
// console.log(isMissingExpression('2 * ( 3 * (a + b) )'));

//5. Sort stack
function exampleStack() {
  let stack = new Stack();
  stack.push(2);
  stack.push(1);
  stack.push(3);
  stack.push(5);

  // 5 > 3 > 1 > 2
  // 1 > 2 > 3 > 5

  return stack;
}

function sortStack(stack) {
  let holder;
  let tempStack = new Stack();

  if(isEmpty(tempStack)) {
    tempStack.push(stack.pop());
  }

  let currNode = stack.top; // 3
  while(currNode !== null && currNode.next !== null) {
    if(currNode.value < peek(tempStack).value) { 3 < 5
      holder = tempStack.pop(); // 5
      tempStack.push(stack.pop()); //3
      tempStack.push(holder); // 5
      // tempStack.push(stack.pop()) //5 is back to tempStack
      // currNode = currNode.next;
    }
    currNode = currNode.next;
  }
  return JSON.stringify(tempStack);
}
// console.log(sortStack(exampleStack()));

// while(currNode !== null && currNode.next !== null) {
//   if(currNode.value < peek(tempStack).value) { 
//     holder = tempStack.pop();
//     tempStack.push(stack.pop());
//     stack.push(holder); 
//   } else {
//     tempStack.push(stack.pop())
//   }
//   currNode = currNode.next;
// }

// Step 1: 5 > 3 > 1 > 2
// Stack = 3 > 1 > 2       Temp = 5

// Step 2: 3 < 5 YES IT IS
// Holder = 5    Temp = 3    Stack = 5 > 1 > 2

// Step 3: 5 < 3 FALSE
// Holder is empty   Temp = 5 > 3    Stack = 1 > 2

// Step 4: 1 < 5 YES IT IS
// Holder = 5  