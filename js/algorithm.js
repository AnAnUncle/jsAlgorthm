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
