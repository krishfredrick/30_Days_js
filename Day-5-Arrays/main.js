/*
1.)The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
2.)Find the middle country(ies) in the countries array

3.)Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.*/
// 1.i)
const ages = [19, 22, 19 ,24, 20, 25, 26 , 24 , 25 ,24];
// let sorted = ages.sort();
let sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]
console.log(sorted[0],sorted [sorted.length-1]);
// 1st approach
if(sorted.length % 2 == 1){
    console.log(sorted[Math.ceil(sorted.length / 2) -1])
}else{
    console.log(sorted[(sorted.length/2) -1 ] ,sorted[sorted.length/2])
}
// second approach
if(sorted.length % 2 === 0 ){
   console.log( (sorted.slice(sorted.length/2 , 2).toString))
}else{
    console.log((sorted.slice(sorted.length /2  , 1).toString))
}

