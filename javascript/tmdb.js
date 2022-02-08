const sliders = document.querySelector(".carouselbox");
var scrollPerClick;
var ImagePadding = 20;

showMovieData();

var scrollAnount=0;

function sliderscrollLeft(){
    sliders.scrollTo({
        top:0,
        left:(scrollAnount -= scrollPerClick),
        behavior: "smooth",
    });

    if(scrollAnount < 0) {
        scrollAnount = 0
    }
}

function sliderscrollRight(){
    if(scrollAnount <= sliders.scrollWidth - sliders.clientWidth){
        sliders.scrollTo({
            top:0,
            left:(scrollAnount += scrollPerClick),
            behavior:"smooth",
        })
    }
}



async function showMovieData(){
    const api_key = "1268590fd0b518ebdddbeb4a3e70199c";

    var result = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key="
        + api_key + "&sort_by=popularity.desc"
    );
    
    result = result.data.results;
    result.map(function (cur,index){
        sliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
        );
        });
        scrollPerClick = 400;
}