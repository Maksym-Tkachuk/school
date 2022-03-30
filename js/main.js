$('.few-information__inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});


const slider = (block) => {

    $(block).slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


}





let openClose = document.querySelectorAll(".sign")

let page = document.querySelectorAll(".about-Teaching__button")

let button = document.querySelectorAll(".student-statistik__button")
let buttons = document.querySelectorAll(".colleges-For-Admition__button")
let message = document.querySelectorAll(".student-message__article")

message.forEach(elem => {
    elem.addEventListener("click", function () {
        let button = this
        toggleClass(button.querySelector(".arrow"), "down", "top")
        let message = button.parentNode.querySelector(".student-message__text")
        toggleClass(message, "open", "close")


    })
})


page.forEach(elem => {
    elem.addEventListener("click", function () {
        let button = this
        let Levels = document.querySelector(".about-Teaching__A-Levels")
        let iGCSE = document.querySelector(".about-Teaching__iGCSE")
        if (button.classList.contains("aLevels")) {
            iGCSE.style.display = "none"
            Levels.style.display = "block"
            slider('.sliderSecond')
        } else {
            iGCSE.style.display = "block"
            Levels.style.display = "none"
            // slider(".about-Teaching__iGCSE")
            slider('.about-Teaching__slider')
        }

    })
})

button.forEach(elem => {
    elem.addEventListener("click", function () {
        let button = this
        let information = button.parentNode.querySelector('.student-statistik__marks')
        toggleClass(button, "minus", "plus")
        toggleClass(information, "open", "close")
    })
})

buttons.forEach(elem => {
    elem.addEventListener("click", function () {
        let button = this
        pages = document.querySelectorAll(".colleges-For-Admition__pages")
        pages.forEach(elem => {
            console.log(elem)
            elem.classList.remove("true")
            elem.classList.add("false")
        })
        if (button.classList.contains("AHS2021")) {
            toggleClass(document.querySelector('.colleges-For-Admition__page_first'), "true", "false")
        }
        if (button.classList.contains("AHS2020")) {
            toggleClass(document.querySelector('.colleges-For-Admition__page_second'), "true", "false")
        }
        if (button.classList.contains("AHS2019")) {
            toggleClass(document.querySelector('.colleges-For-Admition__page_third'), "true", "false")
        }
    })
})




openClose.forEach(elem => {
    elem.addEventListener("click", function () {
        let InformationTable = this
        toggleClass(InformationTable, "plus", "minus")
        let table = InformationTable.parentNode.parentNode.querySelector(".about-Teaching__lessens")
        table.classList.toggle("about-Teaching__lessens_open")
    })
})



const toggleClass = (value, add, remove = "none") => {
    value.classList.toggle(add)
    value.classList.toggle(remove)
}






slider('.about-Teaching__slider')



$('.life-student__photo-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '60px',
});

let photo = document.querySelectorAll('.life-student__photo-slider .photo')

$(".slick-next").click(() => {
    photo.forEach(elem => {
        if (elem.classList.contains("slick-active")) {
            elem.querySelector("img").style.width = "100px"
            document.querySelector('.photo-text ').style.display = "flex"
        }
        if (!elem.classList.contains("slick-active")) {
            elem.querySelector("img").style.width = "80px"
        }
    })
})
$(".slick-prev").click(() => {
    photo.forEach(elem => {
        if (elem.classList.contains("slick-active")) {
            elem.querySelector("img").style.width = "100px"
            document.querySelector('.photo-text ').style.display = "flex"
        }
        if (!elem.classList.contains("slick-active")) {
            elem.querySelector("img").style.width = "80px"
        }
    })
})




/*scroll*/
