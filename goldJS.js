"use strict";
let insideCircle = document.querySelectorAll('.insideCircle')

insideCircle.forEach(function (circle1) {
    circle1.addEventListener('click', function () {
        circle1.classList.toggle('insideCircle2')

    })

})




/* this option for like 4 carts of gold */
let likeElem = document.querySelectorAll('.like')

likeElem.forEach(function (like) {
    like.addEventListener('click', function () {
        like.classList.toggle('likeRed')

    })

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//comment page
let commentButton = document.querySelector('.comment')
let commentpage = document.querySelector('.commentPage')

commentButton.addEventListener('click', function () {
    commentpage.classList.toggle('commentPage2')
    commentButton.classList.toggle('commentJs')
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//location state

let locationElem = document.querySelector(".location")

let newText = "location"
locationElem.addEventListener('click', function () {
    if (newText === "location") {
        newText = locationElem.innerHTML = "Tehran"
    } else if (newText === "Tehran") {
        newText = locationElem.innerHTML = "location"
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//submit and send

let submitComment = document.querySelector('.commentSubmitBitton')
let commentBox = document.querySelector('.commentBox')
let commentChildS = document.querySelectorAll('.commentPageChild')
let name = document.querySelector('.commentName')
let lastName = document.querySelector('.commentLname')
let E__mail = document.querySelector('.eMail')

submitComment.addEventListener('click', function () {


    /* ************************************* */

    if (name.value === "") {
        alert("اسم خود را وارد کنید")

    } else if (E__mail.value === "") {
        alert("ایمیل شما معتبر نیست!")

    } else if (commentBox.value === "") {
        alert('باکس نظر شما خالیست!')
        commentBox.classList.toggle('emptyBox')
    }

    else {

        setTimeout(() => {

            alert("ارسال شد، با سپاس💌")
        }, 2000);


        if (commentChildS != "") {

            setTimeout(() => {
                submitComment.innerHTML = "...sending"

            }, 100);

            setTimeout(() => {
                submitComment.innerHTML = "✅sent"
            }, 1700);


            setTimeout(() => {
                submitComment.innerHTML = "submit"
                commentBox.value = ""
                commentBox.placeholder = "اگر نظر دیگری دارید بفرمایید...";
            }, 2500);


        }

    }



})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//slide img

let imagesSlider = document.querySelector('.imagesSlider')

function changingPicNav() {
    setInterval(() => {
        imagesSlider.classList.toggle('imagesSlider_1')
    }, 10000);

    setInterval(() => {
        imagesSlider.classList.toggle('imagesSlider_2')
    }, 20000);

    setInterval(() => {
        imagesSlider.classList.toggle('imagesSlider_3')
    }, 30000);

    setInterval(() => {
        imagesSlider.classList.toggle('imagesSlider_4')
    }, 40000);

    setInterval(() => {
        imagesSlider.classList.toggle('imagesSlider_5')
    }, 50000);
}

imagesSlider.addEventListener('click', function () {

    setInterval(() => {
        imagesSlider.classList.toggle('imagesSlider_1')

    }, 10000);

    setInterval(() => {
        imagesSlider.classList.toggle('imagesSlider_2')
    }, 20000);


    setInterval(() => {
        imagesSlider.classList.toggle('imagesSlider_3')
    }, 30000);

}

)

changingPicNav()        ////// auto slide


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// black

let mybutton = document.querySelector(".backToTop");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}


// ***************************************************************************************************************
const changerImgCircle = document.querySelectorAll('.changerImgCircle')

changerImgCircle.forEach(function (littleCircle) {
    littleCircle.addEventListener('click', function () {

        littleCircle.classList.toggle('visibilitycircle')
    })

})

const changerImgCircle1 = document.querySelector('.changerImgCircle1')
const changerImgCircle2 = document.querySelector('.changerImgCircle2')
const changerImgCircle3 = document.querySelector('.changerImgCircle3')


changerImgCircle1.addEventListener('click', function () {

    imagesSlider.classList.toggle('changePicByClick1')
})

changerImgCircle2.addEventListener('click', function () {

    imagesSlider.classList.toggle('changePicByClick2')
})

changerImgCircle3.addEventListener('click', function () {

    imagesSlider.classList.toggle('changePicByClick3')
})


// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
let goldPriceAtMoment = document.querySelector('.goldPriceInMoment')
window.addEventListener('load', (event) => {

    event.preventDefault();
    fetch(`https://brsapi.ir/FreeTsetmcBourseApi/Api_Free_Gold_Currency.json`, {
        method: 'GET'
    })
        .then((resolve) => {
            if (resolve.status === 200) {
                console.log(resolve);
                return resolve.json()
            } else {
                return new Error('we face with an Error')
            }
        })
        .then(data => {
            console.log('data', data)
            goldPriceAtMoment.innerHTML = ` قیمت طلا :  ${data.gold[3].price}`
            return data.price
        }).catch(err => {
            console.log(err, 'در دریافت اطلاعات با خطا مواجهیم');
            goldPriceAtMoment.innerHTML = '!لطفا اتصال خود را بررسی کنید'
            goldPriceAtMoment.classList.add('errorConnecting')
        })

})
