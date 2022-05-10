function vid1(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => { resolve('Video 1 Recorded') }, 3000)
      })
}

function vid2(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => { resolve('Video 2 Recorded') }, 1000)
      })
}


async function doWork() {
    try{
        const res1 = await vid1()
        console.log(res1)
        const res2 = await vid2()
        console.log(res2)
    }
    catch(error){
        console.log(error)
    }
}

doWork()