// 1. 抓取所有數字按鈕並轉成陣列
const buttons = Array.from(document.querySelectorAll('.num-btn'));

// 2. 依照按鈕上的數字從小到大進行排序
buttons.sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));

// 3. 瞬間依序觸發所有按鈕的點擊事件
buttons.forEach(btn => btn.onclick());
