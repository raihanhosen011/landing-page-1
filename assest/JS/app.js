let header = document.getElementById("header");

// ===== Header animation =======
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 50) header.classList.add("is-sticky");
    else header.classList.remove("is-sticky");
});