document.getElementById("loginBtn").addEventListener("click",function(){
    const emailFeild = document.getElementById("emailFeild").value;
    const passFeild = document.getElementById("passFeild").value;
    if(emailFeild == "ashikbank@gmail.com" && passFeild == "ashik70091"){
        window.location.href="bankAcess.html";
        // location.href = "bankAcess.html";
    }
})