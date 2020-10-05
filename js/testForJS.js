while((a=readInt())!=null && (b=readInt())!=null){
    let c = solveMeFirst(a, b);
    print(c);
}
for(let i =0;i<len;++i){
		now = list[i]
		console.log(list[i+1])
		max = (now[0]+sum)>max?(now[0]+sum):max
		let time = 0
		for(let j=0;j<now.length;++j){
			console.log(now[j][1],list[i+1])
			if(now[j][1]>list[i+1][3]){

			}else{
				sum+=now[j][0]
				time = now[j][1]
			}
		}
		if(time==0){

		}else{
			console.log("ok")
			for(let k=i+1;k<len;++k){
				list[k]=calDeadline(list[k],time)
			}
		}
		console.log(list)

	}
	if(sum>max){
		return sum
	}else{
		return max
	}