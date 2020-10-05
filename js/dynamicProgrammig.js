//斐波那契数列，备忘录法
function fib(n) {
	if (n < 1) return 0
	let array = []
	for (let i = 0; i <= n; ++i) {
		array.push(0)
	}
	return helper(array, n)

}

function helper(array, n) {
	if (n == 1 || n == 2) return 1
	if (array[n] != 0) return array[n]
	array[n] = helper(array, n - 1) + helper(array, n - 2)
	return array[n]
}
// console.log(fib(5))

//斐波那契数列，动态规划法
function fibDP(n) {
	let db = []
	db[0] = 0
	db[1] = db[2] = 1
	for (let i = 3; i <= n; ++i) {
		db[i] = db[i - 1] + db[i - 2]
	}
	return db[n]
}
// console.log(fibDP(5))

//斐波那契数列，动态规划法
function fibDP2(n) {
	if (n < 2) return n;
	let prev = 0,
		curr = 1;
	let sum
	for (let i = 0; i < n - 1; i++) {
		sum = prev + curr;
		prev = curr;
		curr = sum;
	}
	return curr;
}
// console.log(fibDP2(5))

//凑零钱问题
function coinChange(coins, amount) {
	if (amount == 0) return 0;
	let ans = Infinity;
	for (let coin of coins) {
		// 金额不可达
		if (amount - coin < 0) continue;
		let subProb = coinChange(coins, amount - coin);
		// 子问题无解
		if (subProb == -1) continue;
		ans = Math.min(ans, subProb + 1);
	}
	return ans == Infinity ? -1 : ans;
}
// console.log(coinChange([1,2,5],5))

//凑零钱问题,备忘录
function coinChangeMemo(coins, amount) {
	let memo = new Array(amount + 1)
	memo.fill(0)
	return helperMemo(coins, amount, memo)
}

function helperMemo(coins, amount, memo) {
	if (amount == 0) return 0
	if (memo[amount] != 0) return memo[amount]
	let min = Infinity
	for (let coin of coins) {
		if (amount - coin < 0) continue
		let subProb = helperMemo(coins, amount - coin, memo)
		if (subProb != -1)
			min = Math.min(min, subProb + 1)
	}
	memo[amount] = (min == Infinity) ? -1 : min
	return memo[amount]
}
// console.log(coinChangeMemo([2,2,5],3))

//凑零钱问题,动态规划
function coinChangeDP1(coins, amount) {
	let dp = Array.of(0)
	if (amount == 0) return 0
	for (let i = 1; i <= amount; ++i) {
		let min = Infinity
		for (let coin of coins) {
			if (i - coin < 0) continue
			let subProb = dp[i - coin]
			if (subProb != -1)
				min = Math.min(min, subProb + 1)
		}
		dp[i] = (min == Infinity) ? -1 : min
	}
	return dp[amount]
}
// console.log(coinChangeDP1([2,2,5],9))

//凑零钱问题,动态规划2
function coinChangeDP2(coins, amount) {
	let dp = Array(amount + 1)
	dp.fill(amount + 1)
	dp[0] = 0
	for (let i = 1; i <= amount; ++i) {
		for (let coin of coins) {
			if (coin <= i) {
				dp[i] = Math.min(dp[i], dp[i - coin] + 1)
			}
		}
	}
	return dp[amount] > amount ? -1 : dp[amount]
	// return dp
}
// console.log(coinChangeDP2([4,50,30,20,5],65))

function money(n) {
	if (n == 1) return 1
	let pre = 1,
		cur = 0,
		tag = 1
	for (let i = 2; i <= n; ++i) {
		if (i % 2 == 0) {
			tag = i / 2
		} else {
			tag = -1
		}
		cur = pre + tag
		pre = cur
	}
	return cur
}
//博弈:贪婪算法
function a(array) {
	let pre = 0,
		next = 0
	let i = 0,
		j = array.length - 1
	while (true) {
		if (i <= j) {
			if (array[i] > array[j]) {
				pre += array[i]
					++i
			} else {
				pre += array[j]
					--j
			}
			console.log(pre)

		} else {
			break
		}
		if (i <= j) {
			if (array[i] > array[j]) {
				next += array[i]
					++i
			} else {
				next += array[j]
					--j
			}
			console.log(next)

		} else {
			break
		}
	}
	return pre - next > 0 ? true : false
}
// console.log(a([3,2,10,4]))


//博弈，动态规划
function stoneGame(piles) {
	let n = piles.length
	//创建n*n维的dp数组并初始化，当只剩一个元素时，先手（下标为零）为该元素值，后手（下标为1）为零
	let dp = new Array(n)
	for (let i = 0; i < n; ++i) {
		dp[i] = new Array(n)
	}
	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < n; ++j) {
			if (i == j) {
				dp[i][j] = [piles[i], 0]
				console.log(i, j)
				continue
			}
			dp[i][j] = [0, 0]
		}
	}
	//构建dp数组
	for (let l = 2; l <= n; ++l) {
		for (let i = 0; i <= n - l; ++i) {
			let j = i + l - 1
			let left = piles[i] + dp[i + 1][j][1]
			let right = piles[j] + dp[i][j - 1][1]
			if (left >= right) {
				dp[i][j][0] = left
				dp[i][j][1] = dp[i + 1][j][0]
			} else {
				dp[i][j][0] = right
				dp[i][j][1] = dp[i][j - 1][0]
			}
		}
	}
	return dp[0][n - 1][0] - dp[0][n - 1][1] > 0 ? true : false
}
// console.log(stoneGame([3,2,10,4]))


function maxSub(array) {
	let len = array.length
	let dp = new Array(len)
	dp.fill(1)
	//构造dp数组dp[i]表示数组下标0-i的元素中最长递增子序列的个数
	for (let i = 1; i < len; ++i) {
		for (let j = i - 1; j >= 0; --j) {
			if (array[j] < array[i]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
	}
	return Math.max(...dp)
}
// console.log(maxSub("89 256 78 1 46 78 8".split(" ").map(Number)))
function find3Chars(str) {
	// write code here
	let array = str.split(" ").join("").split("")
	let len = array.length
	let char = [],
		num = []

	array.forEach((item, index) => {
		let i = char.indexOf(item)
		if (i == -1) {
			char.push(item)
			num.push(1)
		} else {
			num[i] += 1
		}
	})
	let index = -1
	for (let i = 0; i < num.length; ++i) {
		if (num[i] >= 3) {
			index = i
			break
		}
	}
	if (index == -1) {
		return ""
	} else {
		return char[index]
	}

}
// console.log(find3Chars("Have yooooooou aree"))
// console.log(find3Chars("Have yooooooou aree"))
// .filter((item)=>{
//       if(/[a-zA-Z]/.test(item)){
//         return true
//       }else{
//         return false
//       }
// })

// console.table(char)
// console.table(num)
function find3Chars(str) {
	// write code here
	let array = str.split(" ").join("").split("")

	let len = array.length
	let char = [],
		num = []

	array.forEach((item, index) => {
		let i = char.indexOf(item)
		if (i == -1) {
			char.push(item)
			num.push(1)
		} else {
			num[i] += 1
			if (num[i] == 3)
				return char[i]
		}
	})
	return ""
}

//斐波那契三角形
function fibDPS(n) {
	if (n < 2) return n;
	let prev = 0,
		curr = 1;
	let sum
	for (let i = 0; i < n - 1; i++) {
		sum = prev + curr;
		prev = curr;
		curr = sum;
	}
	return curr;
}

function triangle(n) {
	let dp = []
	let result = []
	if (n == 1) return [1]
	for (let i = 0; i <= n; ++i) {
		dp.push(fibDPS(i))
	}
	for (let i = 1; i <= n; ++i) {
		result.push(dp.slice(1, i + 1).concat(dp.slice(1, i).reverse()))
	}
	return result
}

function trianglePrint() {
	let array = triangle(readInt())
	let len = array.length
	array.forEach((item) => {
		print(item.join(" "))
	})
	// for(let i=0;i<len;++i)

}
// console.table(triangle(5))
// trianglePrint()

//祖先
// let tree="3,5,1,6,2,0,8,-1,-1,7,4".split(",").map(Number)
// tree.unshift(0)
// let c=5,d=4
// console.log(find(tree,c,d))
// function find(array,a,b){
// 	// console.log(a,b)
// 	// console.log(array)w
// 	let i=array.indexOf(a)
// 	let j=array.indexOf(b)
// 	console.log(i,j)
// 	while(i!=j){
// 		if(i>j){
// 			i=Math.floor(i/2)
// 		}
// 		else{
// 			j=Math.floor(j/2)
// 		}
// 		// console.log(i,j)
// 	}
// 	return array[i]
// }

// console.log(color(["A","A","B"],["A","B","C"]))
function validBraces(str) {
	// write code here
	let array = str.split("")
	let stack = []
	let tag = 0
	if (array.indexOf("[") == -1 && array.indexOf("{") == -1 && array.indexOf("(") == -1)
		return -1
	console.log("ok")
	for (let i = 0; i < array.length; ++i) {
		switch (array[i]) {
			case "[":
				stack.push(["[", i]);
				break;
			case "{":
				stack.push(["{", i]);
				break;
			case "(":
				stack.push(["(", i]);
				break;
		}
		console.log(stack)
		if (array[i] == "]") {
			if (stack.length) {
				let item = stack.pop()
				if (item[0] != "[") {
					return item[1]
				}
			} else {
				return i
			}
		} else if (array[i] == "}") {
			if (stack.length) {
				let item = stack.pop()
				if (item[0] != "{") {
					return item[1]
				}
			} else {
				return i
			}
		} else if (array[i] == ")") {
			if (stack.length) {
				let item = stack.pop()
				if (item[0] != "(") {
					return item[1]
				}
			} else {
				return i
			}
		} else
		;
	}
	if (stack.length)
		return stack.shift()[1]
	else
		return -1
}
console.log(validBraces(")(}"))
//  
function reverse(str) {
	return str.match(/([a-zA-Z0-9]+)|([\W]+)/g).reverse().join("")

}
console.log(reverse("what is this?"))