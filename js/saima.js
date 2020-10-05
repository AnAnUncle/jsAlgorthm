//输入数组
function inputData() {
  let M = readInt()
  let N = readInt()
  let array = []
  for (let i = 0; i < M; i++) {
    let lines = read_line().split(' ');
    array[i] = []
    for (let j = 0; j < N; j++) {
      array[i][j] = parseInt(lines[j])
    }
  }
  return array
}

function printData(array) {
  array.forEach((item) => {
    print(...item)
  })
}

printData(inputData())

//循环输入两个数字
while((a=readInt())!=null && (b=readInt())!=null){
    print(a,b);
}
for(let i=1;i<=b;++i){
        
}

//JavaScript(V8)

//提取每行输入的数字
while (line = readline()) {
  var lines = line.split(' ');
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  print(a + b);
}

//提取数据个数，将单行字符串转换为数字数组，去除第一个
let amount = readline()
let coins = [].concat(readline().split(" ").map(Number).filter((item, index) => index))
print(amount, ...coins)

//输入多行，判断何时退出
while (true) {
  let amount = readline()
  if (amount == 0) break
  let coins = [].concat(readline().split(" ").map(Number).filter((item, index) => index))
  print(coinChangeDP2(coins, amount))
}

//JavaScript(Node)
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(line) {
  var tokens = line.split(' ');
  console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});

