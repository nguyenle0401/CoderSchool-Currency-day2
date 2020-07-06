const exchangeRate = 23208;
let input = prompt("How much?\nE.g. If you want to translate from USD to VND please input 100USD or 100usd and vice versa");
let currencyUnit = input.substring(input.length-3, input.length).toLowerCase();
let amount = parseInt(input);
let result = "";

function vndToUsd(amount) {
  return (amount/exchangeRate).toFixed(2);
}

function usdToVnd(amount) {
  return amount*exchangeRate.toFixed(2);
}

let type;

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

if (currencyUnit = "vnd"){
  result = vndToUsd(amount);
  type = "USD"
}else{
  result = usdToVnd(amount);
  type = "VND"
}

const formatter = new Intl.NumberFormat(type, {
  currency: type,
  style: "currency"
});
console.log("Input: "+ input)
console.log(formatter.format(result));



 


