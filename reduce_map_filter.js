const arr = [1,2,3,4,5];
function double(x){
    return x*2;
}


const map_output = arr.map( x => x>2 );
// console.log(map_output);

const filter_output = arr.filter( x => x % 2 ===0 );
// console.log(filter_output);

const reduce_output = arr.reduce( (max ,curr) => {
    if( curr > max){
        max = curr;
    }
    return max;
},0 ); // 5 is an intial value for out accumulator

// console.log(reduce_output);

const users = [
    {fname: "Moubien", lname: "Kayali", age: 34},
    {fname: "Donald", lname: "Duck", age: 18},
    {fname: "Randi", lname: "Savage", age: 23},
];
//console.log(users.map( x => x.fname +' '+ x.lname & x.fname ==='Moubien' ));

//console.log(users.filter( x => x.age < 21).map(x => x.fname+' '+x.lname));

const reducedOutput = users.reduce(function(acc,current){
    if(current.age < 30){
        acc.push(current.fname);
    }  
    return acc;
   },[]);
   
   console.log(reducedOutput);