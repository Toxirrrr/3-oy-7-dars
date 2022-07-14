var elForm = document.querySelector("#hero__form");
var elInput = document.querySelector("#hero__input");
var elNumber1 = document.querySelector("#hero__text_one");
var elNumber2 = document.querySelector("#hero__text_two");
var elNumber3 = document.querySelector("#hero__text_three");
var elNumber4 = document.querySelector("#hero__text_four");


elForm.addEventListener (`submit` , function (evt) {

    event.preventDefault();
    var elInputValue = elInput.value

    if(!isNaN (elInputValue)) { 

        elNumber1.textContent = (`${Math.floor(((elInputValue) / 3.6).toFixed(0))} hours 
        ${ ((((elInputValue / 3.6).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);

        elNumber2.textContent = (`${Math.floor(((elInputValue) / 20.1).toFixed(0))} hours 
        ${ ((((elInputValue / 20.1).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);

        elNumber3.textContent = (`${Math.floor(((elInputValue) / 70).toFixed(0))} hours 
        ${ ((((elInputValue / 70).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);

        elNumber4.textContent = (`${Math.floor(((elInputValue) / 800).toFixed(0))} hours 
        ${ ((((elInputValue / 800).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);
    }
})  