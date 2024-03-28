let api= "https://v6.exchangerate-api.com/v6/591f99f055e6ba8fdedebe91/latest/USD";
let formCurrencyDropdown=document.getElementById("from-currency");
let toCurrenctDropdown=document.getElementById("to-currency");
let op=document.getElementById("op");
op.innerHTML="output";

let currencyArr=["AED","USD","INR","AFN","NZD","PKR", "SGD"]
currencyArr.forEach((currency)=>{
    let option=document.createElement("option")
    option.value=currency;
    option.innerHTML=currency;
    formCurrencyDropdown.appendChild(option);
})

currencyArr.forEach((currency)=>{
    let option=document.createElement("option")
    option.value=currency;
    option.innerHTML=currency;
    toCurrenctDropdown.appendChild(option);
})

formCurrencyDropdown.value="INR";
toCurrenctDropdown.value="USD";

function convertCurrency() 
{
fetch(api)
  .then(Response=>Response.json())
  .then(data=>{
    let fromCurr=document.getElementById("from-currency").value;
    let toCurr=document.getElementById("to-currency").value;
    let fromCurrRate=data.conversion_rates[fromCurr];
    let toCurrRate=data.conversion_rates[toCurr];

    let amount=document.getElementById("Amount").value;

    if(amount!=""){
        let convertAmount=(amount/fromCurrRate)*toCurrRate;
        op.innerHTML=  `${amount} ${fromCurr}= ${convertAmount.toFixed(2)} ${toCurr}`;
    }
    else{
        alert("Enter an Amount")
    }


  })    
}