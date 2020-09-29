//最长不重复子字符串
function lengthOfLongestSubstring(str){
	let disc=new Map()
	let j = -1,res = 0,temp = 0
	for(let i=0;i<str.length;++i){
		j = disc.get(str[i])===undefined?-1:disc.get(str[i])
		disc.set(str[i],i)
		// console.log(disc)
		temp = i - j > temp ? temp+1 : i - j
		res = Math.max(res , temp)
		console.log(temp,res)
	}
	return res
}
// console.log(lengthOfLongestSubstring("adfadf"))

//输入物品数量，挡板数量，最大隔间数，每个隔间最大物品数，输出最少箱子数。
function mins(a,b,k,v){
	let res = 0
	while(b>0&&a>0){
		if(b>=k-1){
			++num
			b=b-(k-1)
			a=a-k*v
		}
		else{
			++num
			a=a-(b+1)*v
		}
	}
	if(a<=0){
		return num
	}
	return Math.ceil(num+a/v)

}
// console.log(mins(10,3,2,1))