// // const readline = require('readline');

// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // rl.question('Please enter your name: ', (name) => {
// //   console.log(`Hello, ${name}!`);
// //   rl.close();
// // });
// // process.stdin.on('data', (data) => {
// //   const input = data.toString().trim();
// //   console.log(`You entered: ${input}`);
// // });

// // process.stdin.on('end', () => {
// //   console.log('Input stream ended.');
// // });
const  action  = require('./action');
const EventEmitter = require('events');
const { beep, cursor } = require('sisteransi');
console.log(beep)
const readline = require('readline');
// process.stdout.write(beep)
class Prompt extends EventEmitter {
  constructor(opts={}) {
    super();
    this.in = opts.stdin || process.stdin;
    this.out = opts.stdout || process.stdout;
    const rl = readline.createInterface({ input:this.in, escapeCodeTimeout:50 });
    readline.emitKeypressEvents(this.in, rl);

    if (this.in.isTTY) this.in.setRawMode(true);
    const isSelect = [ 'SelectPrompt', 'MultiselectPrompt' ].indexOf(this.constructor.name) > -1;
    const keypress = (str, key) => {
     
     
      let a = action(key, isSelect);
 
      // if (a === false) {
      //   this._ && this._(str, key);
      // } else if (typeof this[a] === 'function') {
      //   this[a](key);
      // } else {
      //   this.bell();
      // }
      console.log(beep)
      this.bell(key);
    };

    this.close = () => {
      this.out.write(cursor.show);
      this.in.removeListener('keypress', keypress);
      if (this.in.isTTY) this.in.setRawMode(false);
      rl.close();
      this.emit(this.aborted ? 'abort' : this.exited ? 'exit' : 'submit', this.value);
      this.closed = true;
    };

    this.in.on('keypress', keypress);
  }


  bell(beep) {
    this.out.write(beep);
  }
}

let b = new Prompt()
b.out.write('你的名字是什么?')
// b.in.write('eqw')
// const readline = require('readline');

// // 创建一个可读流接口
// const rl = readline.createInterface({
//   input: process.stdin,  // 使用标准输入作为输入源
//   output: process.stdout // 输出到标准输出
// });

// // 监听键盘按键事件
// rl.input.on('keypress', (key, data) => {
//   console.log(1)
//   if (data.ctrl && data.name === 'c') {
//     // 如果按下 Ctrl+C，则退出程序
//     process.exit();
//   } else {
//     console.log(1)
//     console.log(`Pressed key: ${key}`);
//   }
// });

// // 启动键盘输入
// rl.resume();
