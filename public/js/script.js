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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.getElementById('myDropdown').style.display = "none";
    }
}

var up_btn = document.getElementById('up-btn');
var down_btn = document.getElementById('down-btn');
var mobile_wrapper = document.getElementById('mobile-wrapper');
var option_section = document.getElementById('option-section');

down_btn.addEventListener("click", function() {
    mobile_wrapper.className = mobile_wrapper.className.replace(" up", " down");
    option_section.className = option_section.className.replace("options-section block", "options-section inactive");

});


up_btn.addEventListener("click", function() {
    mobile_wrapper.className = mobile_wrapper.className.replace(" down", " up");
    option_section.className = option_section.className.replace("options-section inactive", "options-section block");
});



var page_toggle = document.getElementById('page-toggle');
var page_2 = document.getElementById('page-2');
var page_1 = document.getElementById('page-1');

page_toggle.addEventListener("click", function() {

    var ul = this.parentElement.parentElement.firstElementChild.firstElementChild;


    ul.classList.toggle("page-two");
    page_1.classList.toggle("new-hidden");
    page_2.classList.toggle("new-hidden1");

});