//千分位
function thousands(str) {
    return str.replace(/\d{1,3}(?=(\d{3})+$)/g, s => s + ",")
}

function thousands2(str) {
    return str.split("").reverse().join("").replace(/\d{3}?/g, item => item + ",").replace(/,$/, "").split("").reverse().join("")
}
// console.log(thousands2("01312434"))

//深拷贝
function isObject(obj) {
    return typeof(obj) === "object" && obj != null
}

function deepClone(obj) {
    if (!isObject(obj)) return obj
    let newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (isObject(obj[key])) {
                newObj[key] = deepClone(obj[key])
            } else {
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}
var obj1 = {
    a: 1,
    b: {
        f: {
            g: 1
        }
    },
    c: [1, 2, 3]
};
var obj2 = deepClone(obj1);
// console.log(obj1,obj2);

//多米诺match=>match.split("").map(()=>"L").join("")
function duominuo(str) {
    //开头结尾处理
    str = str.replace(/^\.+(?=L)/, match => match.split("").map(() => "L").join(""))
    str = str.replace(/(?<=R)\.+$/, match => match.split("").map(() => "R").join(""))
    //处理中间部分,RR,LL,RL
    str = str.replace(/(?<=R)\.+(?=R)/, match => match.split("").map(() => "R").join(""))
    str = str.replace(/(?<=L)\.+(?=L)/, match => match.split("").map(() => "L").join(""))
    str = str.replace(/(?<=R)\.+(?=L)/, a => {
        let match = a.split("")
        let len = match.length
        for (let i = 0, j = len - 1; i < j; ++i, --j) {
            match[i] = "R"
            match[j] = "L"
        }
        return match.join("")
    })
    return str
}
// console.log(duominuo("...RR...L..L."))

//防抖函数
function debounce(fn, delay) {
    return function(args) {
        let that = this
        clearTimeout(fn.id)
        fn.id = setTimeout(() => {
            fn.call(that, args)
        }, delay)
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

function ajax(content) {
    console.log('ajax request ' + content)
}
let inp = document.getElementById('debounce')

let debounceAjax = throttle(ajax, 1000)

inp.addEventListener('keyup', function(e) {
    debounceAjax(e.target.value)
})


function main(array){
 //请勿修改main()的函数名称
 //输入数据时，字符串数据前后需加英文引号。输入多个数据时请用英文逗号隔开，并且与main()中参数个数相同
    //输入数据排序
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
