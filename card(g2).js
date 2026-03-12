// 1. 取得畫面上所有的卡片元素
const allCards = Array.from(document.querySelectorAll('.card'));
const pairs = {};

// 2. 偷看卡片背面的圖案，並將相同圖案的卡片分類在一起
allCards.forEach(card => {
    const icon = card.querySelector('.card-back').innerText;
    if (!pairs[icon]) {
        pairs[icon] = [];
    }
    pairs[icon].push(card);
});

// 3. 模擬滑鼠點擊，將每一對相同的卡片依序翻開
Object.values(pairs).forEach(pair => {
    pair[0].click();
    pair[1].click();
});
