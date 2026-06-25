const API_KEY = "Private";

const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    const article = data.articles[0];

    document.querySelector("#article-title").textContent = article.title;

    document.querySelector("#article-meta").textContent =
      `${article.publishedAt} / ${article.author || "Unknown"}`;

    document.querySelector("#article-summary").textContent =
      article.description || "요약 정보가 없습니다.";

    document.querySelector("#article-image").src =
      article.urlToImage || "";

    document.querySelector("#article-content").textContent =
      article.content || "본문 정보가 없습니다.";
  })
  .catch(function (error) {
    console.error("뉴스를 불러오지 못했습니다.", error);

    document.querySelector("#article-title").textContent =
      "뉴스를 불러오지 못했습니다.";
  });