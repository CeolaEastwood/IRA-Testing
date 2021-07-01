

//variables that might need to be global
//inflation
//tax brackets

//global variables for testing purpose only

//time 
var age = 60;
var rAge = 65;
var numberOfPayments = rAge - age;

//money place holder
var annualPayment = 5000;
var currentValue = 30000;

//Rates for calculations
var fakeRateOfReturn = .07;
var inflation = .00225;//last 10 years only
//CPI = avg 2.4
//PCE = avg 1.9

//debt to income 
var housePaymentRate = .28;

//stupid tax brackets





function findTaxBracket(){}

function findRetireTaxBracket(){}

function calcPortWeight (){}

function portWeight (){}

function calcRateOfReturn (){}

function calcFutureValue (){
  var futureValue = currentValue * rateOfReturn + currentValue + annualPayment;

    for (let i = 0; i <= 3; i++){ 
      var futureValue = futureValue * rateOfReturn + annualPayment + futureValue;
      i++;
  }
  console.log(futureValue);
}

calcFutureValue ();





