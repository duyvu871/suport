const inF = [
    { name:'du', age:16 ,height:23, },
    { name:'thai', age:34 ,height:45, },  
    { name:'hung', age:17 ,height:56, },
    { name:'repull', age:15 ,height:70, },
    { name:'under', age:47 ,height:14, },
    { name:'hung', age:17 ,height:56, },
];
//set
const set = new Set(inF)
console.log([...set]);
//lọc mảng
let ans = deduplicate(inF);
console.log(ans);
function deduplicate(arr) {
  return arr.filter((value, index, arr) => arr.indexOf(value) === index);
}
console.log(inF.sort((a,b)=>{
    return b.id - a.id
}));