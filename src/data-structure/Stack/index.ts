export class Stack {
  stack: string[];
  constructor() {
    this.stack = [];
  }
  
  push(data: string) {
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
  let stack = new Stack(); 

  stack.push('Dev');
  stack.push('AKS');
  stack.push('Git');
  stack.push('Repo');
  console.log(`Stack after push operation: `, stack.print());

  stack.pop();
  console.log(`Stack after pop operation: `, stack.print());
}

export default main;