const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=b0881b1929904f779a08ed1e9ec0903e`;

const loadNews = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.articles));
}
const displayNews = (newes) => {
    // console.log(newes);
    const newsContainer = document.getElementById('news-container');
    for (const news of newes) {
        // console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('single-news')
        newsDiv.innerHTML = `
        <img src="${news.urlToImage}" alt="">
        <h3>Title: ${news.title}</h3>
        <p>Post: ${news.description}</p>
        <p>Author: ${news.author}</p>
        <p>Published at: ${news.publishedAt}</p>
        <a href="${news.url}" target="_blank">Read The Full Post</a>


        `;
        newsContainer.appendChild(newsDiv);
    }

}
loadNews();