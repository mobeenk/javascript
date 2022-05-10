const vid1 = new Promise( (resolve,reject) => {
  setTimeout( () => { resolve('Video 1 Recorded') }, 3000)
})
const vid2 = new Promise( (resolve,reject) => {
  setTimeout( () => { resolve('Video 2 Recorded') }, 500)
})
const vid3 = new Promise( (resolve,reject) => {
  setTimeout( () => { resolve('Video 3 Recorded') }, 1000)
})

// Promise.all([vid1,vid2,vid3]).then(messages => {
//   console.log(messages)
// })

vid1.then( message => {
  console.log(message)
  return vid2
}).then( message => {
  console.log(message)
  return vid3
}).then( message => {
  console.log(message)
}).catch( error => {
  console.log(error)
})

