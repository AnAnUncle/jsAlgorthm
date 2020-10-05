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

var obj={
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
tree(obj)
// console.log(obj)
