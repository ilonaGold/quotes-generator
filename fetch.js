const quote = document.querySelector(".quote");
const content = document.querySelector(".content");
const author = document.querySelector(".author");
const btn = document.querySelector(".get-quote");
const url = "https://api.quotable.io/random";

function getQuote () {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.style.opacity = "1";
            content.innerHTML = `"${item.content}"`;
            author.innerHTML = `~ ${item.author}`;
        }
    )
}

btn.addEventListener("click", getQuote);

