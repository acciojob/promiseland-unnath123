// complete the js code
class CustomPromise {
  // write your code here
	let promise = new Promise((resolve,reject)=>{
		resolve("resolved")
	})

	promise
	.then((data)=>{
		console.log(data)
	})
	.catch((e)=>{
		console.log(e)
	
	.finally(()=>{
		consoel.log("finall")
	})
}

window.CustomPromise = CustomPromise;
