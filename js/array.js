function main(array){
 //输入抽样调查到的学生述说同校人数数组，输出最小人数。
    array=array.sort().map(Number)
    //最少人数
    let result=0
    //同校人数相同的同学
    let num=1
    for(let i=0;i<array.length;++i){
        if(array[i]==0){
            ++result
            continue
        }
        if(i+1<array.length&&array[i]==array[i+1]){
            ++num
        }
        else{
            let s=array[i]+1
            while(num>s){
                s*=2
            }
            result+=s
            num=1
        }
        
    }
    return result
 }
 // console.log(main([0,0,1,1]))

 //求连续子数组最大和
 function maxSum(array){
  array=array.map(Number)
  if(array.every(item=>{return item<0}))
    return array.reduce((pre,now)=>{
      if(now>=pre)
        pre=now
      return pre
    })
  else{
    let max=0,temp=0
    for(let i=0;i<array.length;++i){
      temp+=array[i]
      if(temp<0){
        temp=0
      }
      if(temp>max){
        max=temp
      }
    }
    return max
  }
   
 }
// console.log(maxSum(["6","-3","-2","7","-15","1","2","2"]))

//数组排序，每次只能插入到最后，求最少插入次数
//贪心算法，不正确版本
var num=0
function sortMin(inData){
  let array=inData.split(" ").map(Number)
  while(sortAjust(array)){
  }
  return num
}
function sortAjust(array){
  for(let i=1;i<array.length;++i){
    if(array[i]>=array[i-1])
      ;
      // console.log("1");
    else{
      let del=array[i-1]
      array.splice(i-1,1)
      // console.log(del,array)
      array.push(del)
      ++num
      return true
    }
  }
  return false
}
// console.log(sortMin("2 1 3 4 5 6 7 8 9"))
//
function sortMin2(inData){
  let array=inData.split(" ").map(Number)
  let sortArray=Array.from(array).sort((a,b)=>a-b)
  let indexArray=sortArray.map(item=>array.indexOf(item))
  let startIndex=indexArray[0]
  //不用排序的个数
  let num=1
  for(let i=1;i<indexArray.length;++i){
    if(indexArray[i]>startIndex){
      startIndex=indexArray[i]
      ++num
    }else{
      break
    }
  }
  return array.length-num
}
// console.log(sortMin2("19 7 8 25"))

//最短满足要求的子数组（和小于7） leetcode209
var minSubArrayLen = function(s, nums) {
  let sum=0,res=Infinity,j=0
  for(let i=0;i<nums.length;++i){
    sum+=nums[i]
    if(sum>=s){
      res=Math.min(res,i-j+1)
      sum-=nums[j]
      ++j
      while(sum>=s){
        res=Math.min(res,i-j+1)
        sum-=nums[j]
        ++j
      }
    }
  }
  return res==Infinity?0:res
};
// console.log(minSubArrayLen(7,[2,3,1,2,4,3]))

// 统计数组中元素出现的次数
function counter(array){
  let res=new Map()
  let counter=array.reduce((countObj,now)=>{
    if(countObj.has(now)){
      countObj.set(now,countObj.get(now)+1)
    }
    else{
      countObj.set(now,1)
    }
    return countObj
  },res)
  return counter
}
// console.log(counter([1,2,1,3,4,2,5,3,2,"2"]))

var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
  { name: 'Jane', age: "20" }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, new Map());
}

var groupedPeople = groupBy(people, 'age');
// console.log(groupedPeople)

//数组去重
function deDup(array){
  return array.reduce((accumulator,now)=>{
    if(accumulator.indexOf(now)==-1){
      accumulator.push(now)
    }
    return accumulator
  },[])
}
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// console.log(deDup(myArray))

//unique函数
function unique(array){
  function deStructure(arrayDe, resDe){
    for(let i = 0; i < arrayDe.length; ++i){
      if(Array.isArray(arrayDe[i])){
        deStructure(arrayDe[i], resDe)
      }
      else{
        if(resDe.indexOf(arrayDe[i]) === -1){
          resDe.push(arrayDe[i])
        }
      }
    }
  }
  let res = []
  deStructure(array, res)
  return res
}

function unique2(array) {
  let res = JSON.stringify(array).split(/\[|\]|,/).filter(item=>item).reduce((pre, item)=>{
    if(pre.indexOf(item) === -1){
      pre.push(item)
    }
    return pre
  },[])
  return res
}
// console.log(unique([1,[2,3],[[4],[4,[4,5]]]]))
function sleep(delay){
  return new Promise((resolve)=>{
    setTimeout(resolve,delay)
  })
}

function findLongest( str ) {
    // write code here
    let num
    let counter=str.split("").reduce((a,b,index,array)=>{
        if(b in a){
            if(index!=0&&b==array[index-1]){
                ++num
            }
            if(index!=0&&b!=array[index-1]){
                num=1
            }
            if(num>a[b]){
                a[b]=num
            }
        }else{
            num=1
            a[b]=num
            
        }
        return a
    },{})
    let w=[]
    let max=0
    for(let i in counter){
        if(counter[i]>max){
            max=counter[i]
        }
    }
    for(let i in counter){
        if(counter[i]==max){
            w.push(i+":"+max)
        }
    }
    return w
}

// 数组旋转90度
var rotate = function(matrix) {
    let temp=0
    for(let i=0;i<matrix.length;++i){
        for(let j=0;j<i;++j){
            temp = matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp
            // console.log(obj)
        }
    }
    matrix.forEach(item=>item.reverse())
    return matrix
};
// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))

//岛屿数量
const numIslands = (grid) => {
  for(let i = 0; i < grid.length; ++i){
    grid[i] = grid[i].map(Number)
  }
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        // console.log(i, j)
        // console.log(grid[i][j])
        count++
        turnZero(i, j, grid)
      }
    }
  }
  return count
}
function turnZero(i, j, grid) {
  let stack = []
  let ilen = grid.length
  let jlen = grid[i].length
  stack.push([i, j])
  grid[i][j] = 0
  while(stack.length){
      let [k,v] = stack.shift()
      // console.log(k, v)
      if(k-1 >=0 && grid[k-1][v]){
          grid[k - 1][v] = 0
          stack.push([k - 1,v])
      }
      if(v+1 < jlen && grid[k][v+1]){
          grid[k][v+1] = 0
          stack.push([k,v+1])
      }
      if(k+1 < ilen && grid[k+1][v]){
          grid[k+1][v] = 0
          stack.push([k+1,v])
      }
      if(v-1 >=0 && grid[k][v-1]){
          grid[k][v - 1] = 0
          stack.push([k,v-1])
      }
      console.log(JSON.stringify(stack))
  }
}
console.log(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]))