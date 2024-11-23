document.getElementById("open-modal").addEventListener("click", function (){
    var modal = document.getElementById("modal");
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.getElementById('close-modal').focus();
});

document.getElementById("close-modal").addEventListener("click", function(){
    var modal = document.getElementById("modal");
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
});