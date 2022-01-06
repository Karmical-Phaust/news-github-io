window.onload = function() {
    var json = new XMLHttpRequest();
    json.open("GET", "https://gnews.io/api/v4/top-headlines?token=c143f3746b34a10d5abd10416dd8d7ac", true);
    json.onload = function() {
        var news = JSON.parse(json.responseText);
        var cont = "";
        var count = "";
        count += news.totalArticles;
        document.getElementById("counter").innerHTML = "We're having " + count + " articles";
        var arti = news.articles;
        for (var i = 0; i < arti.length; i++) {
            cont += "<div class='articles'>";
            cont += "<img class='articles' src='" + arti[i].image + "'>";
            cont += "<div class='articlesHeaders'><a href='" + arti[i].url + "' target='_blank'>" + arti[i].title + "</a><br>";
            cont += "<em class='articles'>" + arti[i].publishedAt + "</em><br>";
            cont += "<p class='articles'>" + arti[i].description + "</p><br>";
            cont += "<b>Source: </b><a class='articles' href='" + arti[i].source.url + "'>" + arti[i].source.name + "</a></div>";
            cont += "</div>";
        }
        document.getElementById("content").innerHTML += cont;
    }
    json.send();
}

function toggleSrch() {
    var tg = document.getElementById("srch-popup");
    tg.classList.toggle("active");
}

const startSrchLg = document.getElementById("srchLg");
const startSrchSm = document.getElementById("srchSm");
var srchKWSm = document.getElementById("srchPopup");
var srchKWLg = document.getElementById("srchLarge");

startSrchLg.onclick = function() {
    var keywordlarge = srchKWLg.value;
    srchEngine(keywordlarge);
};
startSrchSm.onclick = function() {
    var keywordsmall = srchKWSm.value;
    srchEngine(keywordsmall);
    var tg = document.getElementById("srch-popup");
    tg.classList.toggle("active");
};
startSrchLg.addEventListener("click", fin);
startSrchSm.addEventListener("click", fin);

function srchEngine(keyword) {
    var srch = new XMLHttpRequest();
    srch.open("GET", "https://gnews.io/api/v4/search?q=" + keyword + "&token=c143f3746b34a10d5abd10416dd8d7ac", true);
    srch.onload = function() {
        var news = JSON.parse(srch.responseText);
        var cont = "";
        var count = "";
        count += news.totalArticles;
        document.getElementById("counter").innerHTML = "We're having " + count + " articles";
        var arti = news.articles;
        for (var i = 0; i < arti.length; i++) {
            cont += "<div class='articles'>";
            cont += "<img class='articles' src='" + arti[i].image + "'>";
            cont += "<div class='articlesHeaders'><a href='" + arti[i].url + "' target='_blank'>" + arti[i].title + "</a><br>";
            cont += "<em class='articles'>" + arti[i].publishedAt + "</em><br>";
            cont += "<p class='articles'>" + arti[i].description + "</p><br>";
            cont += "<b>Source: </b><a class='articles' href='" + arti[i].source.url + "'>" + arti[i].source.name + "</a></div>";
            cont += "</div>";
        }
        document.getElementById("content").innerHTML = "";
        document.getElementById("content").innerHTML += cont;
    }
    srch.send();
}

function fin() {
    srchKWLg.value = null;
    srchKWSm.value = null;
};