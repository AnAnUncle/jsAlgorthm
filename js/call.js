//call函数实现
Function.prototype.call2 = function(context){
	//将函数设置为执行对象的属性
	var context = context||window
	context.fn = this

	//获取正确格式的参数
	var args = []
	for(var i =1,len = arguments.length;i<len;++i){
		args.push("arguments["+i+"]")
	}
	
	//执行函数
	var result = eval("context.fn("+args+")")
	//删除添加的对象属性
	delete context.fn
	return result

}
var b = "window"
var obj = {
	b:"objs"
}

//call-es6版本
Function.prototype.call3 = function(context,...arr){
	//将函数设置为执行对象的属性
	var context = context||window
	context.fn = this

	//执行函数
	var result = context.fn(...arr)
	//删除添加的对象属性
	delete context.fn
	return result

}

//apply函数实现
Function.prototype.apply2 = function(context,arr){
	//将函数设置为执行对象的属性
	var context = context||window
	context.fn = this

	//获取正确格式的参数
	var args = []
	for(var i =1,len = arguments.length;i<len;++i){
		args.push("arguments["+i+"]")
	}
	//执行函数
	var result = eval("context.fn("+arr+")")
	//删除添加的对象属性
	delete context.fn
	return result

}

//bind函数实现
Function.prototype.bind = function(context,...arr){
	//将函数设置为执行对象的属性
	var context = context||window
	context.fn = this
	return function(...arr2){
		var arr3 = arr.concat(arr2)
		var result = context.fn(...arr3)
		delete context.fn
		return result
	}

}

// new功能实现
function objectFactory() {

    var obj = new Object(),

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;

};
// //测试


// while(true){
// 	var num = parseInt(readline())
// 	if(num==0){
// 		break
// 	}
// 	var lines =readline()
// 	var lineArr = lines.split(" ").map(Number)
// 	var type = lineArr[0]
// 	var money = lineArr.slice(1)
// 	console.log(getResult(num,type,money))
// }
//
// function getResult(num, type, money) {
// 	var dp = []
// 	dp[0]=0
// 	for (var i = 1; i <=num; i++) {
// 		var arr=[]
// 		for(var j=0;j<money.length;j++){
// 			if(i>=money[j]){
// 				arr.push(dp[i-money[j]]+1)
// 			}
// 		}
// 		dp[i]=Math.min(...arr)
// 	}
// 	return dp[num]==Infinity?"Impossible":dp[num]
// }
//
// var lines = readline().split(' ');
// var M = parseInt(lines[0]);
// var N = parseInt(lines[1]);
//
// var mat = new Array()
// var res = new Array()
//
// for(let i = 0 ; i < M ; i++){
// 	let lines = readline().split(' ');
// 	mat[i] = new Array()
// 	res[i] = new Array()
// 	for(let j = 0 ; j < N ; j ++){
// 		mat[i][j] = parseInt(lines[j])
// 		res[i][j] = -1
// 	}
// }
//
// var _MAX = function(i,j){
// 	if(i==M-1 && j==N-1) return mat[i][j]
// 	else if(i == M-1) return mat[i][j] + MAX(i,j+1)
// 	else if(j == N-1) return mat[i][j] + MAX(i+1,j)
// 	else return mat[i][j] + Math.min(MAX(i,j+1),MAX(i+1,j))
// }
//
// var MAX = function(i,j){
// 	if(res[i][j] == -1){
// 		res[i][j] = _MAX(i,j)
// 		return res[i][j]
// 	}
// 	else return res[i][j]
// }
//
// print(MAX(0,0))

// var N = Number(readline());
// // 存值
// var M = [];
// // 存是否去过
// var G = [];
// for (let i = 0; i < N; i++) {
// 	let list = []
// 	let arr = [];
// 	for (let j = 0; j < N; j++) {
// 		list.push([]);
// 		arr.push([]);
// 	}
// 	G.push(arr);
// 	M.push(list);
// }
// // 记录其实点和值
// var sx, sy, sz, max = 0;
// for (let i = 0; i < N * N * N; i++) {
// 	let [x, y, z, value] = [...readline().split(" ").map(Number)];
// 	M[x][y][z] = value;
// 	G[x][y][z] = true;
// 	if (value > max) {
// 		max = value;
// 		sx = x;
// 		sy = y;
// 		sz = z;
// 	}
// }
// // 记录经过的总值
// var total = 0;
// (function Start(x, y, z) {
// 	G[x][y][z] = false;
// 	total += M[x][y][z];
// 	// 三个条件：存在点、值小、没去过
// 	if (x + 1 < N && M[x + 1][y][z] < M[x][y][z] && G[x + 1][y][z])
// 		Start(x + 1, y, z);
// 	if (x - 1 > -1 && M[x - 1][y][z] < M[x][y][z] && G[x - 1][y][z])
// 		Start(x - 1, y, z);
// 	if (y + 1 < N && M[x][y + 1][z] < M[x][y][z] && G[x][y + 1][z])
// 		Start(x, y + 1, z);
// 	if (y - 1 > -1 && M[x][y - 1][z] < M[x][y][z] && G[x][y - 1][z])
// 		Start(x, y - 1, z);
// 	if (z + 1 < N && M[x][y][z + 1] < M[x][y][z] && G[x][y][z + 1])
// 		Start(x, y, z + 1);
// 	if (z - 1 > -1 && M[x][y][z - 1] < M[x][y][z] && G[x][y][z - 1])
// 		Start(x, y, z - 1);
// 	if (total > max)
// 		max = total;
// 	total -= M[x][y][z];
// 	G[x][y][z] = true;
// })(sx, sy, sz);
//
// console.log(max);

// function findOrigin(array) {
// 	let len = array.length
// 	let firstline=array[0]
// 	let result=[]
// 	let result1=[]
// 	for(let i =1;i<len;++i){
// 		if(isEaqual(firstline,array[i])){
// 			result1=array.slice(0,i)
// 			let j=i
// 			for(;(j+i)<len;j+=i){
// 				if(!isEaqual2(result1,array.slice(j,j+i))){
// 					break
// 				}
// 			}
// 		  if((j+i)===len){
// 		  	if(isEaqual2(result1,result1.reverse)){
// 		  		result=result1.slice(0,Math.floor(i/2))
// 				}
// 		  	else {
// 		  		result=result1
// 				}
// 		  	return result
// 			}
// 		  else
// 		  	continue
//
// 		}
// 		if(i>Math.floor(len/2))
// 			return array
// 	}
//
//
// }
// function isEaqual(array1,array2) {
// 	console.log(array1,array2)
// 	let len = array1.length
// 	for(let i =0;i<len;++i){
// 		if(array1[i]!==array2[i]){
// 			return false
// 		}
// 	}
// 	return true
// }
// function isEaqual2(array1,array2) {
// 	console.log(array1,array2)
// 	let len = array1.length
// 	for(let i =0;i<len;++i){
// 		if(!isEaqual(array1[i],array2[i])){
// 			return false
// 		}
// 	}
// 	return true
// }
// function canTrans(array1,array2) {
// 	return isEaqual2(array1,array2)||isEaqual2(array1.reverse(),array2)
// }
// // console.log(canTrans([[1,0,1],[1,3,1],[1,2,1],[1,1,1]],[[1,1,1],[1,2,1],[1,1,1],[1,0,1]]))
// console.log(findOrigin([[1,0,1],[1,3,1],[1,0,1],[1,3,1]]))


