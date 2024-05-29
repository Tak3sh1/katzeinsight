    document.getElementById("loginForm").addEventListener("submit", function(event){
        event.preventDefault(); 
        alert("Login concluído!");
        setTimeout(function(){
            window.location.href = "index.html";
        }, 2000);
    });
 