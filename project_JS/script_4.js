const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
//in this list the entrepreneurs who were born in the 70s

//var hippieYears = entrepreneurs.filter(function(first,last) {
//  if (elem.year >=1970 & elem.year<1980)
//  return hippieYears
//});
//
//// array that contains the first and last names of the entrepreneurs
//
//var listOfEntrepreneurs = entrepreneurs.filter(function(first,last) {
//  
//  return listOfEntrepreneurs
//});
//
////How old would each inventor be today?
//
//var oldYears = entrepreneurs.filter(function() {
//  
//  return oldYears 
//});
//const ageToday = entrepreneurs.map(x => x.first + " " + x.last + " as " + (age = 2021 - x.year) + " YEARS TODAY") 
//console.log(ageToday);
 // Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

 const filterEntrepreneurs=()=>{
  const filter=[]
  for (let i=0;i<entrepreneurs.length;i++){
      if(entrepreneurs[i].year>=1970 && entrepreneurs[i].year <=1979){
          filter.push(entrepreneurs[i])
      }
  }

  return filter;
}

//Sors une array qui contient le prénom et le nom des entrepreneurs ;

const getName=()=>{
  const arr=[]
  for(let i=0;i<entrepreneurs.length;i++){
    arr.push({firstname:entrepreneurs[i].first, lastname:entrepreneurs[i].last})
  }

  return arr;
}

//Quel âge aurait chaque inventeur aujourd'hui ?


const getAges=()=>{
const getDate=new Date();
const currentYearStr=getDate.toString().substring(11,15);
const currentYear=parseInt(currentYearStr)


const arr=[];

for(let i=0;i<entrepreneurs.length;i++){
    arr.push({name:entrepreneurs[i].first +" "+entrepreneurs[i].last, age:currentYear-entrepreneurs[i].year})
}

return arr;
}


//Trie les entrepreneurs par ordre alphabétique du nom de famille.

const sortEntrepreneurs=()=>{
  const arr=[]
  for(let i=0;i<entrepreneurs.length;i++){
    arr.push(entrepreneurs[i].last)
  }

  const arrSorted=arr.sort();
  console.log("get sorted array");
  console.log(arrSorted);
  return arrSorted
}
console.log("PART 1");
console.log(filterEntrepreneurs())


console.log("PART 2");
console.log(getName());


console.log("PART 3");
console.log(getAges());


console.log("PART 4");
console.log(sortEntrepreneurs());