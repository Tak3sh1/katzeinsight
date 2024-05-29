document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        var searchTerm = document.getElementById('search-input').value.toLowerCase();
        if (document.getElementById('noticias').textContent.toLowerCase().includes(searchTerm)) {
            window.location.href = '#noticias';
        } else if (document.getElementById('previsao-tempo').textContent.toLowerCase().includes(searchTerm)) {
            window.location.href = '#previsao-tempo';
        } else if (document.getElementById('alerta-alagamento').textContent.toLowerCase().includes(searchTerm)) {
            window.location.href = '#alerta-alagamento';
        } else if (document.getElementById('ruas-bloqueadas').textContent.toLowerCase().includes(searchTerm)) {
            window.location.href = '#ruas-bloqueadas';
        } else if (searchTerm === 'nossa equipe') {
            window.location.href = '#nossas-equipe';
        } else if (searchTerm === 'denuncias') {
            window.location.href = '#dn';
        } else if (searchTerm === 'doe para o rio grande do sul') {
            window.location.href = '#rs-rs';
        } else {
            alert('Nenhuma correspondência encontrada para a pesquisa.');
        }
    });
});


$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });

  