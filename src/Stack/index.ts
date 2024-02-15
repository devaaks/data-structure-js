export class Stack {
  stack: number[];
  constructor() {
    this.stack = [];
  }
  
  push(data: number) {
    this.stack.push(data);
  }

  pop() { 
    return this.stack.pop();
  }

  print() {
    return this.stack.join(', ');
  }
}

const main = () => {

  console.clear();
  console.log(`====================== Stack ====================== `);

  let stack = new Stack(); 

  stack.push(101);
  stack.push(102);
  stack.push(201);
  stack.push(404);
  console.log(`\nStack after push operation: `, stack.print());

  stack.pop();
  console.log(`Stack after pop operation: `, stack.print());
}

export default main;
