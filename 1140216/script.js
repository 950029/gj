//頂端圖片設置
let isFirstImage = true;
const gjimg = document.getElementById('gj-text');
const gjimgsmall = document.getElementById('gj-text-small');

// 檢查並應用儲存的主題設置
function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        const multipleSelectors = [
            '.theme-toggle',
            '.top',
            '.content',
            'footer',
            '.text-container',
            '#json-table',
            '#back-to-top',
            '.top-text',
            '.top-text-2',
            '.switchimg',
            '.container',
            '.inside',
            '.inside-block'
        ];
        
        multipleSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => el.classList.add('dark'));
        });
        
        const button = document.querySelector('.theme-toggle');
        button.textContent = 'Day';
        
        gjimg.src = 'images/gj-img-black.png';
        gjimgsmall.src = 'images/gj-img-black-small.png';
        isFirstImage = false;
    }
}

//Day and Night
function toggleTheme() {
    // 多重元素選擇器
    const multipleSelectors = [
        '.theme-toggle',
        '.top',
        '.content',
        'footer',
        '.text-container',
        'table',
        '#back-to-top',
        '.top-text',
        '.top-text-2',
        '.switchimg',
        '.container',
        '.inside',
        '.inside-block'
    ];
    
    // 切換多重元素
    multipleSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.classList.toggle('dark'));
    });
    
    // 更新按鈕文字
    const button = document.querySelector('.theme-toggle');
    const isDark = button.classList.contains('dark');
    button.textContent = isDark ? 'Day' : 'Night';
    
    // 儲存主題設置
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // 切換頂端圖片
    if (isFirstImage) {
        gjimg.src = 'images/gj-img-black.png';
        gjimgsmall.src = 'images/gj-img-black-small.png';
    } else {
        gjimg.src = 'images/gj-img.png';
        gjimgsmall.src = 'images/gj-img-small.png';
    }
    isFirstImage = !isFirstImage;
}

// 當頁面載入時套用儲存的主題
document.addEventListener('DOMContentLoaded', applyStoredTheme);

//滑到一定距離時顯示
window.addEventListener("scroll", function () {
    const button = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
});

//點擊時回到最頂端
document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//切換圖片
const images = [
    "images/test1.jpg", 
    "images/test2.jpg", 
    "images/test3.jpg", 
    "images/test4.jpg"
];

let currentIndex = 0;
const mainImage = document.getElementById("main-image");
const button1 = document.getElementById("b1");
const button2 = document.getElementById("b2");
const button3 = document.getElementById("b3");
const button4 = document.getElementById("b4");

Image1();

function Image1() {
    currentIndex = 0;
    mainImage.src = images[currentIndex];
    button1.classList.add("show");
    button2.classList.remove("show");
    button3.classList.remove("show");
    button4.classList.remove("show");
}

function Image2() {
    currentIndex = 1;
    mainImage.src = images[currentIndex];
    button2.classList.add("show");
    button1.classList.remove("show");
    button3.classList.remove("show");
    button4.classList.remove("show");
}

function Image3() {
    currentIndex = 2;
    mainImage.src = images[currentIndex];
    button3.classList.add("show");
    button1.classList.remove("show");
    button2.classList.remove("show");
    button4.classList.remove("show");
}

function Image4() {
    currentIndex = 3;
    mainImage.src = images[currentIndex];
    button4.classList.add("show");
    button1.classList.remove("show");
    button2.classList.remove("show");
    button3.classList.remove("show");
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
    if (currentIndex == 0) {
        Image1();
    } else if (currentIndex == 1) {
        Image2();
    } else if (currentIndex == 2) {
        Image3();
    } else {
        Image4();
    }
}

const timer = setInterval(nextImage, 4000);

// 定義多組文字陣列
const textArrays = [
    ["公告內容"],
    [
        `一、推行導師責任制，身教言教並重，養成學生良好生活習慣－守秩序、懂禮貌、整儀容、重整潔。\n
        二、舉辦生活教育競賽，推展校園倫理、落實靜坐暨禮貌運動，變化學生氣質，樹立愛校之榮譽感。\n
        三、掌握學生出缺席狀況，避免發生逃家、逃學之行為。\n
        四、定期檢查服裝儀容，養成整齊、清潔、簡單、樸素的生活習慣，並由老師做起。\n
        五、加強交通安全教育與校外生活輔導，落實值週、導護老師職責。\n
        六、美化、綠化環境教育，做好整潔工作。\n
        七、強化學校與家長之聯繫工作，不定期實施家庭訪問及定期舉辦家長座談會。\n
        八、推行民主法治教育、公民教育、及道德教育，以培養學生愛國愛鄉之優良情操。\n
        九、積極展開社團活動，以培養正當休閒活動。\n
        十、落實垃圾分類與資源回收，以加強環保意識。\n
        十一、表揚模範生，以收見賢思齊之效。\n
        十二、注重安全教育，校園安全，防止意外傷害。`
    ]
];

let Index = 0;

// 更新所有文字
function displayText() {
    const elements = document.getElementsByClassName('text-item');
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = textArrays[i][Index];
    }
}

// 更換文字函數
function changeText() {
    Index = (Index + 1) % textArrays[0].length;
    displayText();
}

// 頁面載入時顯示第一組文字
displayText();

// 最新消息數據
const newsData = [
    { "id": 1, "date": "114.01.01", "news": "元旦假期", "offical": "學務處" },
    { "id": 2, "date": "113.12.31", "news": "歲末表演", "offical": "教務處" },
    { "id": 3, "date": "113.12.25", "news": "耶誕晚會", "offical": "教務處" },
    { "id": 4, "date": "113.12.20", "news": "機器人招生", "offical": "教務處" },
    { "id": 5, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 6, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 7, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 8, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 9, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 10, "date": "unknown", "news": "unknown", "offical": "unknown" }
];

// 公告數據
const Data1 = [
    { "id": 1, "date": "114.01.01", "news": "元旦假期", "offical": "學務處" },
    { "id": 2, "date": "113.12.31", "news": "歲末表演", "offical": "教務處" },
    { "id": 3, "date": "113.12.25", "news": "耶誕晚會", "offical": "教務處" },
    { "id": 4, "date": "113.12.20", "news": "學務事務", "offical": "教務處" },
    { "id": 5, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 6, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 7, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 8, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 9, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 10, "date": "unknown", "news": "unknown", "offical": "unknown" }
];

// 根據表格 ID 判斷要使用哪個數據
function getTableData(tableId) {
    switch (tableId) {
        case 'json-table':
            return newsData;
        case 'table1':
            return Data1;  // 修正變數名稱
        default:
            return [];
    }
}

// 填充表格函數
function populateTable(tableId) {
    const table = document.getElementById(tableId);
    if (!table) {
        console.error(`Table with ID "${tableId}" not found.`);
        return;
    }

    const tableBody = table.querySelector("tbody");
    if (!tableBody) {
        console.error(`Table with ID "${tableId}" is missing a <tbody> element.`);
        return;
    }

    const data = getTableData(tableId);
    
    tableBody.innerHTML = ""; // 清空舊資料

    data.forEach(row => {
        const tr = document.createElement("tr");
        Object.values(row).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

// 當 DOM 載入完成後執行
document.addEventListener("DOMContentLoaded", () => {
    const tables = document.getElementsByTagName('table');
    for (let table of tables) {
        populateTable(table.id);
    }
});