const quotes = [
  {
    quote: "난 못해, 라는 말은 아무것도 이루지 못하지만, 해볼 거야, 라는 말은 기적을 만들어 낸다.",
    author: "-조지 p. 번햄-",
  },
  {
    quote: "어느 순간이고 다시 일으켜 세울 수 없는 삶이란 없다.",
    author: "-안녕 스무살-",
  },
  {
    quote: "사람의 운수는 아무리 다르게 보일지라도 행복과 불행이 서로 뒤섞여서 결국은 평등하게 된다.",
    author: "-라 로슈푸코-",
  },
  {
    quote: "해보지 않고는 당신이 무엇을 해낼 수 있는지 알 수가 없다.",
    author: "-프랭크린 아담-",
  },
  {
    quote: "멀리 갈 위험을 감수하는 자만이 얼마나 멀리 갈 수 있는지 알 수 있다.",
    author: "-T.S 엘리엇-",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
