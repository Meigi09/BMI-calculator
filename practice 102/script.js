'use strict'

function logger() {
  console.log('Sawa')  
}
logger()
logger()

function fruitPro(apples,oranges) {  
  const juice=`Juice with ${apples} apples and ${oranges} oranges`
  return juice    
}
const appleJuices=fruitPro(7,5)
console.log(appleJuices) 