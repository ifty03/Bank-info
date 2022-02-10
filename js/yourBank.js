document.getElementById("depositBtn").addEventListener("click",function(){
    let depositAmount1 = document.getElementById("depositAmount");
    let depositAmount = depositAmount1.value;
    let tottalDeposit = document.getElementById("tottalDeposit");
        tottalDeposit.innerText = parseFloat(depositAmount) + parseFloat(tottalDeposit.innerText);
    let balance = document.getElementById("tottalBalance");
    balance.innerText = parseFloat(depositAmount) + parseFloat(balance.innerText);

    depositAmount1.value = " ";
    
})

document.getElementById("withdrowBtn").addEventListener("click",function(){
const withdrowAmount = document.getElementById("withdrowAmount");
const withdrowValue = withdrowAmount.value;
const tottalWithdrow = document.getElementById("tottalWithdrow");
    tottalWithdrow.innerText = parseFloat(withdrowValue) + parseFloat(tottalWithdrow.innerText);
    let balance = document.getElementById("tottalBalance");
    balance.innerText = parseFloat(balance.innerText) - parseFloat(withdrowValue);

    withdrowAmount.value = "";
})






















document.getElementById("depositAmount").addEventListener("mouseenter",function(){
    let depositAmount = document.getElementById("depositAmount").focus();
})
document.getElementById("depositAmount").addEventListener("mouseleave",function(){
    let depositAmount = document.getElementById("depositAmount").blur();
})
document.getElementById("withdrowAmount").addEventListener("mouseenter",function(){
    let withdrowAmount = document.getElementById("withdrowAmount").focus();
})
document.getElementById("withdrowAmount").addEventListener("mouseleave",function(){
    let withdrowAmount = document.getElementById("withdrowAmount").blur();
})