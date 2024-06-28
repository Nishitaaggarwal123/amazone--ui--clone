console.log("Nishita Aggarwal");
let heroes = [ "Batman","Ironman","hulk","Thor","Spiderman"]
for ( let idx = 0; idx<heroes.length; idx++ ){
    console.log(heroes[idx]);
}
let marks = [85,97,44,37,76,60]
let sum = 0
for( let val of marks)
{
sum+=val;
}
console.log("the total sum of marks = " ,sum)
let avg = sum/marks.length
console.log(`the average of marks = ${avg}`)
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies.shift()
companies.splice(1,1,"Ola")
companies.push("Amazon")
