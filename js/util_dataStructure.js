let array ="37 -23 -56 67 -44 -12 33 34 -2 79 -2".split(" ").map((item)=>parseInt(item))
//折半查找
function Bi(list,key){
  let low = 0, high = list.length-1
  while(low<=high){
    let mid = Math.floor((low+high)/2)
    console.log(mid)
    if(list[mid]===key)
      return mid
    else if(list[mid]<key)
      low = mid+1 
    else
      high = mid-1
  }
  return -1
}

//折半查找（递归）
function Bi2(list,low,high,key){
  if(low<=high){
    let mid = Math.floor((low+high)/2)
    console.log(mid)
    if(list[mid]===key)
      return mid
    else if(list[mid]<key)
      return Bi2(list,mid+1,high,key)
    else
      return Bi2(list,low,mid-1,key)
  }
  return -1
    
}

//插入排序
function  insertSort(array) {
  let temp
  let j
  for(let i =1;i<array.length;++i){
    if(array[i]<array[i-1]){
      temp = array[i]
      for (j =i-1;j>=0&&temp<array[j];--j){
        array[j+1]=array[j]
      }
      array[j+1] = temp
    }

  }
}

//希尔排序
function  shellSort(array) {
  let temp
  let len = array.length
  let j
  for(let dk =Math.floor(len/2);dk>=1;dk=Math.floor(dk/2) ){
    for(let i=dk;i<len;++i){
      if(array[i]<array[i-dk]){
        temp = array[i]
        for (j =i-dk;j>=0&&temp<array[j];j=j-dk){
          array[j+dk]=array[j]
        }
        array[j+dk] = temp
      }
    }
    console.log(array)
  }
}


//快速排序
//划分操作
function partition(array,low,high) {
  let temp = array[low]
  while (low < high) {
    while (low < high && array[high] >= temp) {
      --high
    }
    array[low] = array[high]
    while (low < high && array[low] <= temp) {
      ++low
    }
    array[high] = array[low]
  }
  array[low]=temp
  console.log(array)
  console.log(low)
  return low
}
//快排
function quickSort(array,low,high) {
  if(low<high){
    let part = partition(array,low,high)
    quickSort(array,low,part-1)
    quickSort(array,part+1,high)
  }
}

//交换元素顺序
function swap(array,a,b) {
  let temp = array[a]
  array[a]=array[b]
  array[b]=temp
}

//冒泡排序
function bubbleSort(array) {
  let len = array.length
  for(let i =0;i<len-1;++i){
    let flag=true
    // for(let j=0;j<len-1-i;++j){
    //   if(array[j]>array[j+1]){
    //     swap(array,j,j+1)
    //     flag = false
    //   }
    // }
    for(let j=len-1;j>i;--j){
      if(array[j]>array[j-1]){
        swap(array,j,j-1)
        flag = false
      }
    }
    if(flag)
      return
    console.log(array)
  }
}

//选择排序
function selectSort(array) {
  let k
  let len = array.length
  for(let i=0;i<len-1;++i){
    k=i
    let flag=false
    for(let j=i+1;j<len;++j){
      if(array[j]<array[k]){
        k=j
        flag = true
      }
    }
    if(flag)
      swap(array,i,k)
  }
}

//堆排序(大顶堆）
//堆调整,数组从零开始，它的左海子为2i+1,右孩子为2i+2
function adjustHeap(array,k,last) {
  let temp = array[k]
  for(let i = k * 2 + 1; i <= last; i = i * 2 + 1){
    if(i < last && array[i] < array[i+1]){
      ++i
    }
    if(temp >= array[i]){
      break
    }
    else{
      array[k] = array[i]
      k = i
    }
  }
  array[k] = temp
}
//建堆
function buildHeap(array,last) {
  for (let i=Math.floor((last-1)/2);i>=0;--i){
    adjustHeap(array,i,last)
  }
}
//排序
function heapSort(array) {
  let len = array.length
  buildHeap(array,array.length-1)
  for(let i = len-1;i>0;--i){
    swap(array,i,0)
    adjustHeap(array,0,i-1)
  }
}
function swap(array,a,b) {
  let temp = array[a]
  array[a]=array[b]
  array[b]=temp
}

//归并排序
//归并
function merge(array,low,mid,high) {
  let i,k,j
  let arrayB = array.map((item)=>item)
  // arrayB.push(121)
  // console.log(array)
  // console.log(arrayB)
  for(i=low,k=i,j=mid+1;i<=mid&&j<=high;++k){
    if(arrayB[i]<=arrayB[j])
      array[k]=arrayB[i++]
    else
      array[k]=arrayB[j++]
  }
  while(i<=mid)
    array[k++]=arrayB[i++]
  while(j<=high)
    array[k++]=arrayB[j++]
}
//排序
function mergeSort(array,low,high) {
  if(low<high){
    let mid=Math.floor((low+high)/2)
    mergeSort(array,low,mid)
    mergeSort(array,mid+1,high)
    merge(array,low,mid,high)
  }
}
export {Bi,Bi2,insertSort,shellSort,quickSort,bubbleSort,selectSort,buildHeap,heapSort,mergeSort}