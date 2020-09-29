//slice方法
Array.prototype.slice2 = function (start, end) {
  let len = this.length;
  let l = start === undefined ? 0 : start < 0 ? Math.max(start + len, 0) : Math.min(start, len);
  let r = end === undefined ? len : end < 0 ? Math.max(end + len, 0) : Math.min(end, len);
  const res = [];
  while (l < r) {
    res.push(this[l++])
  }
  return res;
}
// console.log([3,5,2,6,9].slice2(0,-1))

//isArray
Array.isArray2 = function (test){
	return test.constructor==Array
}
// console.log(Array.isArray2([]))

//forEach
Array.prototype.forEach2 = function (fn, context){
	context = context || this
	for(let i=0;i<this.length;++i){
		fn.call(context,this[i],i,this)
	}
}

//map
Array.prototype.map2 = function (fn, context){
	if(typeof fn !=="function"){
		throw new TypeError("error")
	}
	context = context || this
	let newArr=[]
	for(let i=0;i<this.length;++i){
		newArr[i]=fn.call(context,this[i],i,this)
	}
	return newArr
}
let arr=[2,3,1]
let obj={}

// console.log(arr.map2(1))

//filter
Array.prototype.filter2 = function (fn, context){
	if(typeof fn !=="function"){
		throw new TypeError("error")
	}
	context = context || this
	let newArr=[]
	for(let i=0;i<this.length;++i){
		let temp=fn.call(context,this[i],i,this)
		if(temp)
			newArr.push(this[i])
	}
	return newArr
}
// console.log(arr.filter2(item=>item>2))

//lastIndexOf
Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
  var len = this.length,
      returnIndex = -1,
      fromIndex = fromIndex * 1 || len - 1;
      
  for (var i = fromIndex; i > -1; i -= 1) {
    if (this[i] === searchElement){
      returnIndex = i;
      break;
    }
  }
  return returnIndex;
}

//最短满足要求的子数组（和小于7）

//reduce实现map

Array.prototype.mapByReduce=function(fn,context){
	return this.reduce((counter,now,index,array)=>{
		counter.push(fn.call(context,now,index,array))
		return counter
	},[])
}
let objArray={value:3}
// console.log([1,2,3].mapByReduce(function(item,index,array){return item*this.value},objArray))

