//根据对象属性对对象排序
function order(a,b){
	if(a.name<b.name){
		return -1
	}
	else if(a.name>b.name){
		return 1
	}
	else{
		return 0
	}
}
function tree(obj){
	if(!obj) return obj
	if(obj.hasOwnProperty("children")&&Array.isArray(obj["children"])){
		let array = obj["children"]
		array.forEach(item=>{tree(item)})
		array.sort((a,b)=>order(a,b))
	}
}

var obj1={
	name:"guang",
	children:[
	 {
	 	"name":"guangzhou",
	 	children:[]
	 },
	 {
	 	"name":"fujian",
	 	children:[
	 	 {
	 	 	"name":"sichuan",
	 	   children:[]
	 	 },
	 	 {
	 	 	"name":"a"
	 	 }
	 	 ]
	 	}
	 ]
}
tree(obj1)
// console.log(obj)
//层级获取对象属性
function get(obj,str){
	if(obj==null||typeof obj!="object")
		return undefined
	if(typeof str=="string"){
		str=str.split(".")
	}
	key=str[0]
	if(obj.hasOwnProperty(key)){
		if(str.length==1){
			return obj[key]
		}
		else{
			return get(obj[key],str.slice(1))
		}

	}
	else
		return undefined
}
const ob = {
  a:{
    b:{
      c:1
    }
  }
}
// console.log(get(ob,'a.b.c'))
// console.log(4>>1)
