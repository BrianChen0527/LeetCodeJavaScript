class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class StackWithLinkedList {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if(this.top){
      console.log(this.top.value);
    }
    else{
      console.log("WARNING: stack is empty");
    }
  }

  push(value){
    let node = new Node(value);
    if(this.length === 0){
      this.top = node;
      this.bottom = node;
    }
    else{
      node.next = this.top 
      this.top = node;
    }
    this.length++;
  }

  pop(){
    if(this.length > 0){
      this.top = this.top.next;
      this.length--;
      }
  }
}

class StackWithArray {
  constructor(){
    this.arr = []
  }
  
  peek() {
    if(this.arr.length > 0){
      console.log(this.arr[this.arr.length-1]);
    }
    else{
      console.log("WARNING: stack is empty");
    }
  }

  push(value){
    this.arr.push(value);
  }

  pop(){
    if(this.arr.length > 0){
      this.arr.pop();
    }
  }
}


const myStack = new StackWithArray();
myStack.push("google");
myStack.peek()
myStack.push("youtube");
myStack.peek()
myStack.push("netflix");
myStack.peek()
myStack.push("instagram");
myStack.peek()
myStack.pop()
myStack.peek()
myStack.pop()
myStack.peek()
myStack.pop()
myStack.peek()
myStack.pop()
myStack.peek()
