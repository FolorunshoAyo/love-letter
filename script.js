$(".landingTextBox button").click(() => {
    console.log("clicked");
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#firstQuote").offset().top
    }, 2000)
});

