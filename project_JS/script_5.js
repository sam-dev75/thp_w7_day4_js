
   
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Est-ce que tous les livres ont été au moins empruntés une fois ?

const checkIfAllRented=()=>{
    let allRented=true
    for(let i=0;i<books.length;i++){
        if(books[i].rented==0){
          allRented=false
        }
    }

    return allRented
}

console.log("CHECK IF ALL RENTED");
console.log(checkIfAllRented());

//Quel est livre le plus emprunté ?

const checkMostRented=()=>{
    let mostRented=books[0].rented;

    for(let i=0;i<books.length;i++){
        if(books[i].rented>mostRented){
            mostRented=books[i];
        }
    }

    return mostRented

}

console.log("CHECK MOST RENTED");
console.log(checkMostRented())

//Quel est le livre le moins emprunté ?

const checkLeastRented=()=>{
    let leastRented=books[0].rented

    for(let i=0;i<books.length;i++){
     
      if(books[i].rented<leastRented){
          leastRented=books[i];
          
      }

      
  }

  return leastRented
}


console.log("CHECK LEAST RENTED");
console.log(checkLeastRented());


//Trouve le livre avec l'ID: 873495 ;

const findById=(id)=>{
    for(let i=0;i<books.length;i++){
        if(books[i].id==id){
            return books[i]
        }
    }

    return false;
}

console.log("CHECK BY ID");
console.log(findById(873495)); 

//Supprime le livre avec l'ID: 133712 ;


const deleteById=(id)=>{
    for(let i=0;i<books.length;i++){
        if(books[i].id==id){
            books.splice(i,1)
        }
    } 

    return books
}

console.log("DELETE BY ID");
console.log(deleteById(133712));


// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

const filterAlphabetical=()=>{
   const getBooks=deleteById(133712);
   const names=[]

   for(let i=O;i<getBooks.length;i++){
       names.push(getBooks[i].title)
   }

   return names.sort()
}

console.log("SORT ALPHABETICAL");
console.log(filterAlphatical());