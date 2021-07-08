document.addEventListener("DOMContentLoaded",function(){
    const homeBtn = $("nav .menu-btn li").eq(0);
    const featuresBtn = $("nav .menu-btn li").eq(1);
    const servicesBtn = $("nav .menu-btn li").eq(2);
    const aboutBtn = $("nav .menu-btn li").eq(3);
    const pricingBtn = $("nav .menu-btn li").eq(4);
    const teamBtn = $("nav .menu-btn li").eq(5);
    const contactBtn = $("nav .menu-btn li").eq(6);
    const html = document.querySelector("html");
    const sectionId = ["#header","#feature","#hosting","#about","#pricing","#team","#contact"];

    function changeActive(btnName){
        $("nav .menu-btn li").removeClass("active");
        btnName.addClass("active");
        $(".navbar-toggler").removeClass("collapsed");
        $(".navbar-collapse").removeClass("show");
    }

    function scrolling(sectionName){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(sectionName).offset().top
        }, 1000);
    }

    $("nav .menu-btn li").click(function(){
        var number = 6 - $(this).nextAll().length;
        changeActive($(this));
        scrolling(sectionId[number]);
    })

    $(".start-btn").click(function(){
        scrolling(sectionId[1]);
    })


    $(window).scroll(function(){
        if (html.scrollTop < $("#feature").offset().top - 300) {
            changeActive(homeBtn);
        }else if (html.scrollTop < $("#hosting").offset().top - 300) {
            changeActive(featuresBtn);
        }else if (html.scrollTop < $("#about").offset().top - 300) {
            changeActive(servicesBtn);
        }else if (html.scrollTop < $("#pricing").offset().top - 300) {
            changeActive(aboutBtn);
        }else if (html.scrollTop > $("#stats").offset().top - 100 && html.scrollTop < $("#team").offset().top){
            animateNumbers();
            console.log("worked");
        }
        else if (html.scrollTop < $("#team").offset().top - 300) {
            changeActive(pricingBtn);
        }else if (html.scrollTop < $("#contact").offset().top - 300) {
            changeActive(teamBtn);
        }else if (html.scrollTop > $("#contact").offset().top - 300) {
            changeActive(contactBtn);
        }
        })
})

//     ///////////////////////////////////////////animation part///////////////////////////////////////////// 

//     const mainHeader = $(".head-title");
//     const featuresImage = $("#feature > div.container > div.image");
//     const featuresText = $("#feature > div.container > div.flex-item");
//     const aboutImage = $("#about > div.container > div:nth-child(1) > img");
//     const aboutText = $("#about > div.container > div:nth-child(2)");
//     window.addEventListener("load",()=>{
//         mainHeader.addClass("down-to-top");
//     })
//     function features(){
//         featuresImage.addClass("left-to-right");
//         featuresText.addClass("right-to-left");
//     }
//     function about(){
//         aboutImage.addClass("left-to-right");
//         aboutText.addClass("right-to-left");
//     }
    
//     /////////////////////////////////////////////make numbers count////////////////////////////////////////////
function animateValue(obj, start, end, duration) {

    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
let done = false;
const obj = $(".inner");
  function animateNumbers(){
      if (!done){
        for (let i = 0; i < obj.length;i++){
            let end = Number(obj[i].getAttribute("data-number"));
            animateValue(obj[i], 0, end, 2000);
            done = true;
        }
      }
  
}
