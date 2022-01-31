document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click",
        function(scroll) {
            scroll.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
});