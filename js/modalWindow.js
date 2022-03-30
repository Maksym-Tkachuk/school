var modal = document.getElementById('myModal');
let modalMessage = document.getElementById('myModalMessage');

var btn = document.getElementById("myBtn");


let buttonMessage = document.querySelector(".submit");

var closeWindow = modal.querySelector(".close");
let closeWindowMessage = modalMessage.querySelector(".close");






buttonMessage.onclick = ()=>{
        modalMessage.style.display = "block";
        modal.style.display = "none";
}



btn.onclick = function () {
    modal.style.display = "block";
}


closeWindow.onclick = function () {
    modal.style.display = "none";
}

closeWindowMessage.onclick = function () {
    modalMessage.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalMessage) {
        modalMessage.style.display = "none";
    }
}






jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});



$(function () {
    $(".phone").mask("+38(999) 999-9999");
});