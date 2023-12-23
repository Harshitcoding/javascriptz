//slice //
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

//  console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]




// Splice //

//  const months = ['Jan', 'March', 'April', 'June'];
//  months.splice(1, 0, 'Feb');
// Inserts at index 1
//  console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

//  months.splice(4, 1, 'May');
// Replaces 1 element at index 4
//  console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



const superheros = ["superman,batman,antman,apiderman,thor"]     

const dc_heroes = ["wonderwomen" , "blackwidow , superwomen"]
                
              //concatination
// const all_superheroes = superheros.concat(dc_heroes)
// console.log(all_superheroes)
            // spread
// const all_superheroes = [...superheros , ...dc_heroes]
// console.log(all_superheroes)

    //  Q: how to conver anything to Array // Array.of() bhi same hi kaam karta h 
    // Ans : 
    /*console.log(Array.from('foo'));
 Expected output: Array ["f", "o", "o"]

 console.log(Array.from([1, 2, 3], (x) => x + x));
 Expected output: Array [2, 4, 6]*/