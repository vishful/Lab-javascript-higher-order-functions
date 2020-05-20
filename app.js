//function 1//
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood=[];
function slice(){
    modifiedFood=foods.slice(1,4);
    console.log(modifiedFood);
    }
    slice();

    //function 2//
let modifiedFood=[];
        modifiedFood=foods.splice(2, 0, "noodles", "icecream");
        console.log(foods);
  //function 3//    
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(){
let even=numberArray.filter(function(num){
    if(num%2==0){
        return num;
    }
});
console.log(even);
}
isEven();

//function 4//
function isPrime(){
    let prime=numberArray.filter(function(num){
        for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num > 1;
    });
    console.log(prime);
    }
    isPrime();

function nonPrime(){
        let prime=numberArray.filter(function(num){
            for(let i = 2; i < num; i++)
            if(num % i === 0) return true;
          return num > 1;
        });
        console.log(prime);
        }
        nonPrime();

//function 5//
 const numberArray = [12,324,213,4,2,3,45,4234];
        let isEven=()=>{
          let even=numberArray.filter(function(num){
            if(num%2==0){
                return num;
            }
        });
        }
        isEven();

//function 6//
const myArray = [11, 34, 20, 5, 53, 16];
        function findSquareOfNumbers(myArray){
          let squares=myArray.map(function(item,index,array){
            return item*item;
          });
          console.log(squares);
        }
        findSquareOfNumbers(myArray);