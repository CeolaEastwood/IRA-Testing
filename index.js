 //~NOTES~

/*
Calculator Functionss
-Calc futuree val
-Show effects on budgets
-Show tax difference on IRA types
*/

/*
  LET vs VAR
  reduce globals?
  How to structure function (avoid god class)
  need data validation 
*/

//possible functions

/*
function calc(){}
function displayTaxComp(){}
function calcRetireBud(){}
function findTaxBracket(){}
function findRetireTaxBracket(){} ??
 */



//global variables for testing purpose only
// based on 2021 numbers - need to check IRS website
//time 
var age = 30;
var rAge = 65;
var rDie = 80;
var numberOfPayments = rAge - age;
var numberOfWithdrawls = rDie - rAge;

//money place holder.  will be inputs.
var annualPayment = 5500;
var annualWithdrawl = 40000;
var currentValue = 30000;
var income = 110000;

//returned globals
var futureValue;
var grossInc;
var totalTax;
var avgTaxRate;

//debt to income 
var housePaymentRate = .28;

function taxMarriedJoint(){
  //let taxRate;
  if (income < 19750 ){
    taxRate = .1;
  } else 
      if ((income < 80250) && (income > 19751)){
      taxRate = .12;
      } else 
          if ((income > 80251) && (income < 171050)){
          taxRate = .22;
          } else 
            if (income > 171051 && income < 326600 ){
            taxRate = .24;
            } else 
              if (income > 326601 && income < 414701 ){
              taxRate = .32;
              } else 
                if ((income > 414702) &&  (income < 622050 )){
                taxRate = .35;
                  } else {
                    taxRate = .37;
  }
  return taxRate;
};  
//console.log(taxMarriedJoint());

/*
function taxHeadHouse{
  if (income < )
}

function taxMarriedSep{
  if (income < )
}

function taxSingle{
}
*/

function adjGrossInc(){
  stanDeduc = 24800;
  //assume standard deduction get others
  //need other deductions and credits? kids?
  //deduct for investment types
  grossInc = income - stanDeduc;
  return grossInc;

};

//console.log(adjGrossInc());

//more tax 
var tax10 = 1975;
var tax12= 7260;
var tax22 = 21792;
var tax24 = 37332;
var tax32;
var tax35;
var tax37;

//income bracket for tax 
var inc22 = 24800 + 19750 + 60500;

//tax brackets for referance
//assume married file joint 
//var taxRate1 = .1;
//var taxRate2 = .12;
//var taxRate3 = .22;
//var taxRate4 = .24;
//var taxRate5 = .32;
//var taxRate6 = .35;
//var taxRate7 = .37;

function calcAvgTaxRate(){
 return avgTaxRate;
}

function calcTotalTax(){
//does not accually calc the avg yet...

  if (grossInc < 19750 ){
    taxRate = .1;
  } else 
      if ((grossInc < 80250) && (grossInc > 19751)){
      incomeTax = tax10 + (80250 - 19751 - grossInc)*.12;
      } else 
          if ((grossInc > 80251) && (grossInc < 171050)){
          incomeTax = tax10 + tax12 + (income - inc22)*.22;
          } else 
            if ((grossInc > 171051) && (grossInc < 326600)){
            taxRate = .24;
            } else 
              if ((grossInc > 326601) && (grossInc < 414701)){
              taxRate = .32;
              } else 
                if ((grossInc > 414702) &&  (grossInc < 622050 )){
                taxRate = .35;
                } else {
                    taxRate = .37;
  }
  return incomeTax;
};  

function calcRateOfReturn (){
//Rates for calculation
var rateOfReturnStock = 1 + .1;
var rateOfReturnBond = 1 + .0523;
var inflation = 1+ .0225;//last 10 years only
//CPI = avg 2.4
//PCE = avg 1.9
//will need some if condition for zeros for portfolio weights
//rounding issues for finalReturn

rateOfReturnStock = (rateOfReturnStock/inflation)-1;
rateOfReturnBond = (rateOfReturnBond/inflation) - 1;
finStockReturn = rateOfReturnStock * stockWeight;
finBondReturn = rateOfReturnBond * bondWeight;
finalReturn = finBondReturn + finStockReturn;
return finalReturn;

};

function calcFutureValue (){
  futureValue = currentValue * finalReturn + currentValue + annualPayment;
    for (let i = 2; i <= numberOfPayments; i++){ 
      futureValue = futureValue * finalReturn + annualPayment + futureValue;
      console.log("Value after year " + [i] + " " + futureValue);

  }
  //console.log(futureValue);
  return futureValue;
};

function calcWithdrawl (){
  futureWidthdrawl = futureValue;
    for (let i = 1; i <= numberOfWithdrawls; i++){ 
      futureWidthdrawl = futureWidthdrawl - annualWithdrawl + futureWidthdrawl * finalReturn;
      console.log(futureWidthdrawl);
  }
  //console.log(futureWidthdrawl);
};


//function calcRetireBud(){}

function displayRetireBud(){
  console.log("Your annual withdrawl is:" + annualWithdrawl);
  console.log("Your annual Gross Income is:" + grossInc);
  console.log("Your annual Marginal Tax Rate is:" + taxRate);
  console.log("Your annual Average Tax Rate is:" + avgTaxRate);
  console.log("Your monthly income after taxes is:" + grossInc);
};

