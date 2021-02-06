
console.log('hello')
/// kiểu dữ liệu trong javascript
// boolen:true
// string:'content'
// Array:[]
// Object:{}
// number:1,3,4,5,6,7,....
// undefined 
// null
// NaN

//gửi request
function git(request) { console.log(JSON.stringify(request)); }
const inF = [
    { name:'du', age:16 ,height:23, },
    { name:'thai', age:34 ,height:45, },  
    { name:'hung', age:17 ,height:56, },
    { name:'repull', age:15 ,height:70, },
    { name:'under', age:47 ,height:14, },
    { name:'hung', age:17 ,height:56, },
];
const getName = inF.reduce((element,value) => element.concat(value.name) ,[]);
const getValueInput = document.querySelector('#getInf');
getValueInput.onblur = (e)=>{
    if (getName.includes(e.target.value,0)) {
        const find = inF.filter(element=> element.name === e.target.value);
        find.forEach((element,index)=> { git({...element,id:index}) });
    }else git(undefined);
}
//////
