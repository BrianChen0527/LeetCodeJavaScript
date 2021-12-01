class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if(this.top){
      console.log(this.first.value);
    }
    else{
      console.log("WARNING: queue is empty");
    }
  }
  enqueue(value){
    if(this.length === 0){
      this.first = node;
      this.last = node;
    }
    else{
      let node = new Node(value);
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    
  }
  dequeue(){
    if(this.length > 0){
      this.first = this.first.next;
      if(this.length === 1){
        this.bottom = null;
      }
      this.length--;
    }
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.push("google");
myQueue.peek()
myQueue.push("youtube");
myQueue.peek()
myQueue.push("netflix");
myQueue.peek()
myQueue.push("instagram");
myQueue.peek()
myQueue.pop()
myQueue.peek()
myQueue.pop()
myQueue.peek()
myQueue.pop()
myQueue.peek()
myQueue.pop()
myQueue.peek()
console.log(myQueue.bottom)