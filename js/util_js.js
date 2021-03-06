//防抖
function debounce(fun,delay){
	return function(args){
		let that = this
		clearTimeout(fun.id)
		fun.id=setTimeout(function(){
      fun.apply(that,args)
    },delay)
}
}

//节流函数
function throttle(fn, delay) {
  let last, deferTimer
  return function(args) {
      let that = this
      let now = +new Date()
      if (last && now < last + delay) {
          clearTimeout(deferTimer)
          deferTimer = setTimeout(function() {
              fn.call(that, args)
              last = now
          }, delay)
      } else {
          clearTimeout(deferTimer)
          fn.call(that, args)
          last = now
      }
  }
}

function throttle2(fn, delay) {
  let timeout
  return function(args) {
      let that = this
      if (!timeout) {
          timeout = setTimeout(function() {
              fn.call(that, args)
              timeout = null
          }, delay)
      }
  }
}