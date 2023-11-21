const cards = document.querySelectorAll(".card");
let final = "arcade";
let Totalprice = 9;
let annual = "mo";

//                     toggle switch
var subscription;

function durationSwitch() {
  var output = document.getElementById("togggle");
  var price = document.getElementById('arcade-price')

   if (output.checked == true){
    
    document.getElementById('arcade-amount').innerHTML = "$90/yr";
    document.getElementById('advance-amount').innerHTML = "$120/yr";
    document.getElementById('pro-amount').innerHTML = "$150/yr";
    document.getElementById('free1').innerHTML = "2 months free";
    document.getElementById('free2').innerHTML = "2 months free";
    document.getElementById('free3').innerHTML = "2 months free";
    document.getElementById('year').style.color = 'hsl(213, 96%, 18%)';
    document.getElementById('month').style.color = 'rgba(0, 0, 0, 0.425)';
    document.getElementById('online-amount').innerHTML = "$10/yr";
    document.getElementById('larger-amount').innerHTML = "$20/yr";
    document.getElementById('customizable-amount').innerHTML = "$20/yr";
    document.getElementById('subcribe').innerHTML = ' (Yearly)';
    annual = "yr";
    document.getElementById("per-month").innerHTML = '(per year)';
    if (final == "arcade"){
      price.innerHTML = "$90/yr"
      Totalprice = 90;
    }
    if (final == "advance"){
      price.innerHTML = "$120/yr"
      Totalprice=120;
    }
    if (final == "pro"){
      price.innerHTML = "$150/yr"
      Totalprice=150;
    }


   }
   else {
    
    document.getElementById('arcade-amount').innerHTML = "$9/mo";
    document.getElementById('advance-amount').innerHTML = "$12/mo";
    document.getElementById('pro-amount').innerHTML = "$15/mo";
    document.getElementById('free1').innerHTML = null;
    document.getElementById('free2').innerHTML = null;
    document.getElementById('free3').innerHTML = null;
    document.getElementById('year').style.color = 'rgba(0, 0, 0, 0.425)'
    document.getElementById('month').style.color = 'hsl(213, 96%, 18%)'
    document.getElementById('online-amount').innerHTML = "$1/mo";
    document.getElementById('larger-amount').innerHTML = "$2/mo";
    document.getElementById('customizable-amount').innerHTML = "$2/mo";
    document.getElementById('subcribe').innerHTML = ' (Monthly)';
    annual = "mo"
    document.getElementById("per-month").innerHTML = '(per month)';
    
    if (final == "arcade"){
      price.innerHTML = "$9/mo";
      Totalprice=9;
    }
    if (final == "advance"){
      price.innerHTML = "$12/mo";
      Totalprice=12;
    }
    if (final == "pro"){
      price.innerHTML = "$15/mo"
      Totalprice=15;
    }

    
   }
   document.getElementById("addon-profile").innerHTML = "+" + document.getElementById("customizable-amount").innerHTML;
   document.getElementById("addon-service").innerHTML = "+" + document.getElementById("online-amount").innerHTML;
   document.getElementById("addon-storage").innerHTML = "+" + document.getElementById("larger-amount").innerHTML
  }

                        // plan javascript

const planlinks = document.querySelectorAll(".main-container2 > ul > li");


[...planlinks].map((planlink, planindex) => {
  planlink.addEventListener("click", () => onPlanClick(planindex), false);
});

const onPlanClick = (plancurrentIndex) => {
 
  highLightSelectedPlan(plancurrentIndex);
};

const highLightSelectedPlan = (plancurrentIndex) => {
  planlinks.forEach((planlink) => {
    planlink.classList.remove("selectedPlan");
  });
  planlinks[plancurrentIndex].classList.add("selectedPlan");
  var duration = document.getElementById("subtype");
  duration.innerHTML = planlinks[plancurrentIndex].getAttribute("name");
  
  final = planlinks[plancurrentIndex].getAttribute("name");
  
  
};                        


//                 pick add on checked box

const large = document.getElementById("larger");
large.addEventListener("click", larger);

  function larger() {

    if (document.getElementById('second-pick').checked){
      document.getElementById('second-pick').checked=false;
      document.getElementById('larger').classList.remove("selectedPick");
      document.getElementById("storage").classList.remove("display-type")
      document.getElementById("addon-storage").classList.remove("display-type")
    }  else {
      document.getElementById('second-pick').checked=true;
      document.getElementById('larger').classList.add("selectedPick");
      document.getElementById("storage").classList.add("display-type")
      document.getElementById("addon-storage").classList.add("display-type")
      
    
    }

  }

  const onlin = document.getElementById("online");
onlin.addEventListener("click", online);

  function online() {

    if (document.getElementById('first-pick').checked){
      document.getElementById('first-pick').checked=false;
      document.getElementById('online').classList.remove("selectedPick");
      document.getElementById("addon-service").classList.remove("display-type")
      document.getElementById("service").classList.remove("display-type")
    }  else {
      document.getElementById('first-pick').checked=true;
      document.getElementById('online').classList.add("selectedPick");
      document.getElementById("service").classList.add("display-type")
      document.getElementById("addon-service").classList.add("display-type")
     

    }
    
  }

  const customize = document.getElementById("customizable");
customize.addEventListener("click", customizable);

  function customizable() {

    if (document.getElementById('third-pick').checked){
      document.getElementById('third-pick').checked=false;
      document.getElementById('customizable').classList.remove("selectedPick");
      document.getElementById("profile").classList.remove("display-type")
      document.getElementById("addon-profile").classList.remove("display-type")
    }  else {
      document.getElementById('third-pick').checked=true;
      document.getElementById('customizable').classList.add("selectedPick");
      document.getElementById("profile").classList.add("display-type")
      document.getElementById("addon-profile").classList.add("display-type");
      
    }
  }

  const next1 = document.getElementById("btn1");
  next1.addEventListener("click", btn1);
  function btn1() {

    const display = document.querySelector(".about");
    const hide = document.querySelector(".home")
    display.classList.add("active");
    hide.classList.remove("active");
    document.getElementById("link2").classList.add("selectedLink")
    document.getElementById("link1").classList.remove("selectedLink")
  }
const next2 = document.getElementById("btn2");
next2.addEventListener("click", btn2);
function btn2() {
  const display = document.querySelector(".resume");
  const hide = document.querySelector(".about")
  display.classList.add("active");
  hide.classList.remove("active");

  document.getElementById("link3").classList.add("selectedLink")
    document.getElementById("link2").classList.remove("selectedLink")

    durationSwitch();
  
}
var finalprice;
let absoluteprice1 = 0;
let absoluteprice2 = 0;
let absoluteprice3 = 0;
let absoluteprice4 = 0;
let absoluteprice5 = 0;
let absoluteprice6 = 0;
const next3 = document.getElementById("btn3");
next3.addEventListener("click", btn3);
function btn3() {

  document.getElementById("link4").classList.add("selectedLink")
    document.getElementById("link3").classList.remove("selectedLink")

  if (document.getElementById('first-pick').checked == true && 
  document.getElementById('online-amount').innerHTML == "$1/mo"){
 
  absoluteprice1 = 1;
}
else {
  absoluteprice1 = 0;
};
if (document.getElementById('second-pick').checked == true && 
  document.getElementById('larger-amount').innerHTML == "$2/mo"){
  absoluteprice2 = 2;
}
else {
  absoluteprice2 = 0;
};
if (document.getElementById('third-pick').checked == true && 
  document.getElementById('customizable-amount').innerHTML == "$2/mo"){
  absoluteprice3 = 2;
}
else {
  absoluteprice3 = 0;
};
if (document.getElementById('first-pick').checked == true && 
  document.getElementById('online-amount').innerHTML == "$10/yr"){
 
  absoluteprice4 = 10;
}
else {
  absoluteprice4 = 0;
};
if (document.getElementById('second-pick').checked == true && 
  document.getElementById('larger-amount').innerHTML == "$20/yr"){
  absoluteprice5 = 20;
}
else {
  absoluteprice5 = 0;
};
if (document.getElementById('third-pick').checked == true && 
  document.getElementById('customizable-amount').innerHTML == "$20/yr"){
  absoluteprice6 = 20;
}
else {
  absoluteprice6 = 0;
};
finalprice = Totalprice + absoluteprice1+absoluteprice2+absoluteprice3+
absoluteprice4+absoluteprice5+absoluteprice6;
document.getElementById("total-price").innerHTML = "$"+ (finalprice) + "/" + annual
 const display = document.querySelector(".contact");
  const hide = document.querySelector(".resume")
  display.classList.add("active");
  hide.classList.remove("active");
 
}

const next4 = document.getElementById("btn4");
next4.addEventListener("click", btn4);
function btn4() {
  const display = document.querySelector(".final");
  const hide = document.querySelector(".contact")
  display.classList.add("active");
  hide.classList.remove("active");
}

const back1 = document.getElementById("back1");
back1.addEventListener("click", () => backOne(), false);
function backOne() {
  const display = document.querySelector(".about");
  const hide = document.querySelector(".home")
  display.classList.remove("active");
  hide.classList.add("active");
  document.getElementById("link2").classList.remove("selectedLink")
    document.getElementById("link1").classList.add("selectedLink")
}

const back2 = document.getElementById("back2");
back2.addEventListener("click", backTwo);
function backTwo() {
  const display = document.querySelector(".resume");
  const hide = document.querySelector(".about")
  display.classList.remove("active");
  hide.classList.add("active");

  document.getElementById("link3").classList.remove("selectedLink")
    document.getElementById("link2").classList.add("selectedLink")
}

const back3 = document.getElementById("back3");
back3.addEventListener("click", backThree);
function backThree() {
  const display = document.querySelector(".contact");
  const hide = document.querySelector(".resume")
  display.classList.remove("active");
  hide.classList.add("active");

  document.getElementById("link4").classList.remove("selectedLink")
    document.getElementById("link3").classList.add("selectedLink");

}

const change1 = document.getElementById("change");
change1.addEventListener("click", change);
function change() {
  const display = document.querySelector(".about");
  const hide = document.querySelector(".contact")
  display.classList.add("active");
  hide.classList.remove("active");

  document.getElementById("link4").classList.remove("selectedLink")
    document.getElementById("link2").classList.add("selectedLink")
}