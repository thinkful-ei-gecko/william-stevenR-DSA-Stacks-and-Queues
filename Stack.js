class _Node {
  constructor(value,next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    if(this.top === null) {
      this.top = new _Node(value, null);
      return this.top;
    }
    let newNode = new _Node(value, this.top)
    this.top = newNode;
  }
  pop() {
    //The top's pointer should point to the node beneath it
    //So we will just make the this.top equal to the node beneath the current top
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
  if(top === null) {
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
