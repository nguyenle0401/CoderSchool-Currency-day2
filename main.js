// const exchangeRate = 23208;
// let input = prompt("How much?\nE.g. If you want to translate from USD to VND please input 100USD or 100usd and vice versa");
// let currencyUnit = input.substring(input.length-3, input.length).toLowerCase();
// let amount = parseInt(input);
// let result = "";

// function vndToUsd (amount) {
//   return (amount/exchangeRate).toFixed(2);
// }

// function usdToVnd(amount) {
//   return (amount*exchangeRate).toFixed(2);
// }

// let type;

// if(input.match(/^([0-9])+[ ]*[a-zA-Z]{3}$/) === null) {
//   alert("Please input a number")
// } else if (currencyUnit === "vnd"){
//   result = vndToUsd(amount);
//   type = "USD"
// }else{
//   result = usdToVnd(amount);
//   type = "VND"
// };

// const formatter = new Intl.NumberFormat(type, {
//   currency: type,
//   style: "currency"
// });
// console.log("Input: "+ input)
// console.log(formatter.format(result));

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


// console.log("from",from.toUpperCase(),"to",to.toUpperCase)
 

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



// function convert(){
//   let amount = inputTag.value
//   let result = amount * 23000
//   document.getElementById("resultArea").innerHTML = `your money in is ${result}`
//   // console.log("your money in USD is ", result);
// }

////////

const currencyRatio = {
  vnd: {
    usd: 0.000043,
    krw: 0.051,
    eur: 0.000039,
    vnd: 1
  },
  usd: {
    usd: 1,
    krw: 1193.27,
    eur: 0.9,
    vnd: 23235.5
  },
  krw: {
    usd: 0.00084,
    krw: 1,
    eur: 0.00075,
    vnd: 19.47
  },
  eur: {
    usd: 1.11111,
    krw: 1333.33,
    eur: 1,
    vnd: 25641.02
  }
};

function convert(){
  let toCur = document.getElementById("toCurrency").value.toLowerCase();
  let fromCur = document.getElementById("fromCurrency").value.toLowerCase();
  let amountMoney = document.getElementById("amountInput").value;
  let result = currencyRatio[fromCur][toCur]*amountMoney;
  const formatter = new Intl.NumberFormat(toCur, {
    currency: toCur,
    style: "currency"
  });
  // fromCurrency.addEventListener("click", function() 
  // {console.log(fromCur);});
  document.getElementById("resultArea").innerHTML = `Your money in ${toCur.toUpperCase()} is: ${formatter.format(result)}`
}


 




// let inputTag = document.getElementById("amountInput");
// console.log("input",inputTag)

// let fromConvert=document.getElementById(first);
// let toConvert=document.getElementById(second);

// function convert(){
//   let amount = inputTag.value;
//   let result = amount * currencyRatio[fromCurrency.value][toCurrency.value];
//   document.getElementById('resultArea').innerHTML = ${result}
// }