# Quick-walkthrough-code_56-webpage-regional-competition
提供第56屆全國技能競賽分區賽（網頁技術）小遊戲模組的 Console 快速通關腳本，用於探討前端 DOM 操作與全域變數安全。

# 第56屆全國技能競賽北區分區賽 (網頁技術) - 小遊戲快速通關腳本

## 📝 專案說明 (Description)
本專案收錄了第56屆技能競賽網頁技術職類相關小遊戲（包含：記憶大考驗、數字挑戰、精準點擊）的自動化破關腳本。

透過在瀏覽器開發者工具 (Console) 中執行這些 JavaScript 程式碼，展示了如何利用 DOM 元素抓取、模擬使用者點擊，以及竄改全域變數 (Global Variables) 來達成快速通關。本專案旨在作為前端邏輯測試、自動化腳本撰寫，以及探討前端防弊機制與資安防護的實作紀錄。

---

## 🎮 遊戲通關腳本 (Quick Walkthrough Scripts)

### 1. 記憶大考驗 (Memory Game)
**方法 A：模擬完美點擊（正規配對）**
透過讀取 DOM 抓出卡片背面的圖案，並自動將相同圖案的卡片兩兩翻開。
```javascript
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
```
2. 數字挑戰 (Number Challenge)
方法 A：自動排序與連擊（正規破關法）
抓取畫面上所有數字按鈕，依照數字大小排序後瞬間完成依序點擊。
```
// 1. 抓取所有數字按鈕並轉成陣列
const buttons = Array.from(document.querySelectorAll('.num-btn'));

// 2. 依照按鈕上的數字從小到大進行排序
buttons.sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));

// 3. 瞬間依序觸發所有按鈕的點擊事件
buttons.forEach(btn => btn.onclick());
```
方法 B：竄改時間拿滿分
修改全域的開始時間變數，讓結算耗時變成 0 秒。
```
// 將開始時間重置為當下
startTime = Date.now();

// 直接觸發結算機制
endGame();
```
3. 精準點擊 (Precision Click)
方法 A：無情連發機（自動狂點）
利用定時器在極短時間內不斷呼叫加分與重生函數，直到時間結束。
```
// 請先點擊畫面上的「開始遊戲」，然後在 Console 執行這段程式碼：
const cheatInterval = setInterval(() => {
    hitTarget(); // 直接呼叫加分與重生的函數
}, 50); // 每 50 毫秒擊中一次
```
方法 B：竄改分數與強制結算
直接給予誇張分數並提早結束遊戲。
```
// 1. 給自己一個誇張的滿分
score = 999999;

// 2. 強制結束遊戲並跳出結算視窗
endGame();
```
