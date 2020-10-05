//防抖
function debounce(fun,delay){
	return function(args){
		let that = this
		clearTimeout(fun.id)
		fun.id=setTimeout(fun,delay){
			fun.apply(that,args)
		}
	}
}