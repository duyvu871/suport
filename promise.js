 const promise1 = new Promise((resolve, reject) => {
          resolve([1]);
 });
 const promise2 = new Promise((resolve, reject) => {
     resolve([2]);
 });
 Promise.all([promise1,promise2])
         .then((result)=>{
             console.log(result[0].concat(result[1]));
         })
  const promise1 = Promise.reject([12])
  promise1.then((res)=>{console.log(res);})
          .catch((rej)=>{console.log(rej);})