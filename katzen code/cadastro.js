document.getElementById("cadastroForm").addEventListener("submit", function(event){
    event.preventDefault(); 

    alert("Cadastro concluído!");

    setTimeout(function(){
        window.location.href = "login.html";
    }, 2000);
});