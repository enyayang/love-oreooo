// 取得背景圖片的隨機編號
const randomImgNum = Math.floor(Math.random() * 20) + 1;
const num = randomImgNum.toString().padStart(2, '0');

// 設置 body 的背景圖片為隨機選取的圖片
document.body.style.backgroundImage = `url(images/img_${num}.jpg)`;

const form = document.querySelector('#form');
const searchInput = document.querySelector('#searchInput');

searchInput.addEventListener("focus", function () {
    form.classList.add("focus");
});

searchInput.addEventListener("blur", function () {
    form.classList.remove("focus");
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); // 防止表單送出導致頁面刷新
    const searchValue = searchInput.value;
    const searchUrl = `https://www.google.com/search?q=${searchValue}`;
    window.location.href = searchUrl; // 改變當前頁面的 URL，使其變成 Google 搜尋結果頁面
});

function displayCurrentTime() {
    const now = moment();
    const timeDisplay = now.format("HH:mm");
    const year = now.format("YYYY"),
        month = now.format("MM"),
        day = now.format("DD"),
        weekday = now.format("dddd");
    document.getElementById('timeDisplay').textContent = timeDisplay;
    document.getElementById('year').textContent = year;
    document.getElementById('month').textContent = month;
    document.getElementById('day').textContent = day;
    document.getElementById('weekday').textContent = weekday;
}

setInterval(() => {
    displayCurrentTime();
}, 60 * 1000);

displayCurrentTime();

const quoteList = [
    "A dog's life is short, cherish the present moment with it.",
    "Dogs learn from their failures, and we can learn from them too.",
    "Dogs don't care about appearances, as long as you treat them well.",
    "A dog's companionship makes life more perfect.",
    "Dogs need their owners' effort and patience to become the best companions.",
    "Dogs are satisfied with simple things, let us learn to embrace gratitude.",
    "When dogs need us to persist, please don't give up easily.",
    "Dogs can forgive our mistakes, let us learn to forgive and be tolerant.",
    "A dog's companionship brings more love and happiness to life.",
    "Dogs' love and loyalty are the best forces to drive us forward."
];

const quote = quoteList[Math.floor(Math.random() * quoteList.length)];
document.getElementById("quoteTitle").textContent = `"${quote}"`;

