/// <reference types="../@types/jquery"/>

// ________________________ All ApiS _________________________
// const mov = {title , backdrop_path , vote_average , overview  }
// api now plaing =   'https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44'
// api test  =  https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44
// api popular =   'https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44'
// Top Rated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44'
// Trending = 'https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44'
// UpComming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44'



$(document).ready(() => {
    getFilms().then(() => {
        $('.loding-screen').fadeOut(500)
        $('body').css('overflow', 'visible')
        $('.ineer-loding-screen').fadeOut(500)
    })

})








let rowData = document.getElementById('rowData')
const searchInput = document.getElementById('searchInput');
// function serchMovie(){
// }

async function searchFilms() {
    $('.ineer-loding-screen').fadeIn(80)
    const input = document.getElementById('searchInput')
    const inputValue = input.value
    if (inputValue.length != 0) {
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${inputValue}`);
        let data = await response.json();
        displayFilms(data.results)
        // console.log(data.results) 
    } else {
        getFilms()
    }
    $('.ineer-loding-screen').fadeOut(80)

};




// Open side
$('.open').on('click', function () {
    $('.sidbar').animate({
        width: '250px',
        padding: '20px'
    });
    $('.open').addClass('d-none');
    $('.close').removeClass('d-none');

    for (let i = 0; i < 6; i++) {
        $('.links li').eq(i).animate({ top: 0 }, (i + 5) * 100)
    }
})
// close side
$('.close').on('click', function () {
    $('.sidbar').animate({
        width: '0px',
        padding: '0px'
    });
    $('.close').addClass('d-none');
    $('.open').removeClass('d-none');
    $('.links li').animate({ top: 300 }, 500)

});
// ______________ functions ________________






async function getFilms() {
    let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    displayFilms(data.results)
};

const imgUrl = 'https://image.tmdb.org/t/p/w500';




function displayFilms(term) {
    let cartona = ``;
    for (let i = 0; i < term.length; i++) {
        if (term[i].original_title != null) {
            cartona += `
            <div class="col-lg-4 col-md-6 animate__animated">
                        <div  class="film overflow-hidden rounded-4 position-relative">
                            <img class="myImage rounded-4 w-100" src="${imgUrl + term[i].poster_path}" alt="">
                            <div class="overlay overflow-hidden text-start p-4 position-absolute">
                                <h1 class="headerOfImg text-center">${term[i].original_title}</h1>
                                <p class=" lead paragraphOfImg animate__animated  ">${term[i].overview.split(" ").slice(0, 25).join(" ")}</p>
                                <p class="paragraphOfImg"><span class="fst-normal">Release
                                        Date<span> : 2024-06-11</span></span></p>
                                <h3 class=" paragraphOfImg"><i
                                        class="fa-solid fa-star text-warning fs-6"></i><i
                                        class="fa-solid fa-star text-warning fs-6"></i><i
                                        class="fa-solid fa-star text-warning fs-6"></i><i
                                        class="fa-regular fa-star-half-stroke text-warning fs-6"></i></h3>
                                <h3 class="rate headerOfImg">${parseFloat(term[i].vote_average.toFixed(1))}</h3>
                            </div>
                        </div>
                    </div>
            `
            
        }

    }
    
    rowData.innerHTML = cartona;  
}



async function getPlayingFilms() {
    $('.ineer-loding-screen').fadeIn(500)
    $('.sidbar').animate({
        width: '0px',
        padding: '0px'
    });
    $('.close').addClass('d-none');
    $('.open').removeClass('d-none');
    $('.links li').animate({ top: 300 }, 500)

    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    displayFilms(data.results)
    $('.ineer-loding-screen').fadeOut(500)
};



async function getpopularFilms() {
    $('.ineer-loding-screen').fadeIn(500)
    $('.sidbar').animate({
        width: '0px',
        padding: '0px'
    });
    $('.close').addClass('d-none');
    $('.open').removeClass('d-none');
    $('.links li').animate({ top: 300 }, 500)

    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    // console.log(data.results);
    displayFilms(data.results)
    $('.ineer-loding-screen').fadeOut(500)
};


async function getTopRatedFilms() {
    $('.ineer-loding-screen').fadeIn(500)
    $('.sidbar').animate({
        width: '0px',
        padding: '0px'
    });
    $('.close').addClass('d-none');
    $('.open').removeClass('d-none');
    $('.links li').animate({ top: 300 }, 500)

    let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    displayFilms(data.results)
    $('.ineer-loding-screen').fadeOut(500)
};


async function getTrindingFilms() {
    $('.ineer-loding-screen').fadeIn(500)
    $('.sidbar').animate({
        width: '0px',
        padding: '0px'
    });
    $('.close').addClass('d-none');
    $('.open').removeClass('d-none');
    $('.links li').animate({ top: 300 }, 500)

    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    // console.log(data.results);
    displayFilms(data.results)
    $('.ineer-loding-screen').fadeOut(500)
};


async function getUpCommingFilms() {
    $('.ineer-loding-screen').fadeIn(500)
    $('.sidbar').animate({
        width: '0px',
        padding: '0px'
    });
    $('.close').addClass('d-none');
    $('.open').removeClass('d-none');
    $('.links li').animate({ top: 300 }, 500)

    let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let data = await response.json();
    // console.log(data.results);
    displayFilms(data.results)
    $('.ineer-loding-screen').fadeOut(500)
};


function closeNave(){
    $('.sidbar').animate({
        width: '0px',
        padding: '0px'
    });
    $('.close').addClass('d-none');
    $('.open').removeClass('d-none');
}





function eye() {
    document.getElementById('passHid-icon').classList.toggle('d-none');
}
function showPass() {
    document.getElementById('passHid-icon').classList.add('d-none');
    document.getElementById('passShow-icon').classList.remove('d-none');
    document.getElementById('password').type = 'text';
    document.getElementById('password').addEventListener('onkeyup', function () {
        document.getElementById('password').classList.remove('d-none')
    });
}
function hidPass() {
    document.getElementById('passHid-icon').classList.remove('d-none');
    document.getElementById('passShow-icon').classList.add('d-none');
    document.getElementById('password').type = 'password';
}

function eyeshow() {
    document.getElementById('RepassHid-icon').classList.toggle('d-none');
}

function showRePass() {
    document.getElementById('RepassHid-icon').classList.add('d-none');
    document.getElementById('RepassShow-icon').classList.remove('d-none');
    document.getElementById('Repassword').type = 'text';
}
function hidRePass() {
    document.getElementById('RepassHid-icon').classList.remove('d-none');
    document.getElementById('RepassShow-icon').classList.add('d-none');
    document.getElementById('Repassword').type = 'password';
}







// ________________ validation form _____________


const usreNameInput = document.getElementById('name');
const usreEmailInput = document.getElementById('email');
const usrePhoneInput = document.getElementById('phone');
const usreAgeInput = document.getElementById('age');
const usrePasswordInput = document.getElementById('password');
const usreRepasswordInput = document.getElementById('Repassword');

const submitBtn = document.getElementById('submitBtn');





function validateInput(element) {
    var regex = {
        name: /^[a-zA-Z ]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phone: /^01[0-9]{9}$/,
        age: /^(?:1[5-9]|[2-5][0-9]|60)$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
        Repassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
    }
    if (regex[element.id].test(element.value) == true) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        element.nextElementSibling.classList.add('d-none');
        element.nextElementSibling.classList.remove('d-block');
        submitBtn.disabled = false;
    }
    else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        element.nextElementSibling.classList.remove('d-none');
        element.nextElementSibling.classList.add('d-block');
        submitBtn.disabled = true;

    }

}
