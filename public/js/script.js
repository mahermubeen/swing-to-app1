var btn2 = document.getElementById("option-btn2");
var btn3 = document.getElementById("option-btn3");

var tab2 = document.getElementById("option-wrapper1");
var tab3 = document.getElementById("option-wrapper2");

btn2.addEventListener("click", function() {
    tab3.style.display = "none";
    tab2.style.display = "grid";

    this.className += " active";
    btn3.className = btn3.className.replace(" active", "");
});

btn3.addEventListener("click", function() {
    tab2.style.display = "none";
    tab3.style.display = "block";

    this.className += " active";
    btn2.className = btn2.className.replace(" active", "");
});

$('.options-ul li a').click(function() {

    $('.options-ul li a.active').removeClass('active');
    $(this).addClass('active');
});

$('.nav-ul li a').click(function() {

    $('.nav-ul li a.active').removeClass('active');
    $(this).addClass('active');
});