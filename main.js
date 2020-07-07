const exchangeRate = 23208;
let input = prompt("How much?\nE.g. If you want to translate from USD to VND please input 100USD or 100usd and vice versa");
let currencyUnit = input.substring(input.length-3, input.length).toLowerCase();
let amount = parseInt(input);
let result = "";

function vndToUsd (amount) {
  return (amount/exchangeRate).toFixed(2);
}

function usdToVnd(amount) {
  return (amount*exchangeRate).toFixed(2);
}

let type;

if(input.match(/^([0-9])+[ ]*[a-zA-Z]{3}$/) === null) {
  alert("Please input a number")
} else if (currencyUnit === "vnd"){
  result = vndToUsd(amount);
  type = "USD"
}else{
  result = usdToVnd(amount);
  type = "VND"
};

const formatter = new Intl.NumberFormat(type, {
  currency: type,
  style: "currency"
});
console.log("Input: "+ input)
console.log(formatter.format(result));

// const radio = 23000;
// let from= prompt('from currency').toUpperCase;
// let to= prompt('to currency').toUpperCase;
// let amount= prompt('amount');

// if(isNaN(amount)=== "true"){
//     console.log("type the number please")
// }else{
//   if(from ==="usd" && to === "vnd"){
//     usdToVnd()
//     console.log("Your from is", from);
//     console.log("You to is ",to)
//   }else if(from === "VND" && to === "USD"){
//     vndToUsd()
//   }else{
//     alert('we dont have the option')
//   }
// }


// // console.log("from",from.toUpperCase(),"to",to.toUpperCase)
 

// function usdToUsd(){
//     let result = amount*radio
//     console.log("result is",result)
// }
// function vndToVnd(){
//   let result = amount/radio
//   console.log("result is",result)
// }


 
// switch (currencyUnit){
//   case "vnd":
//     result = vndToUsd(amount);
//     type = "USD"
//     break;
//   case "usd":
//     result = usdToVnd(amount);
//     type = "VND"
//     break;
// }


