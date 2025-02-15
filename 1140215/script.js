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
        '#json-table',
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

function Image1() {
    currentIndex = 0;
    mainImage.src = images[currentIndex];
}

function Image2() {
    currentIndex = 1;
    mainImage.src = images[currentIndex];
}

function Image3() {
    currentIndex = 2;
    mainImage.src = images[currentIndex];
}

function Image4() {
    currentIndex = 3;
    mainImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
}

const timer = setInterval(nextImage, 4000);

//最新消息
// JSON 數據
const jsonData = [
    { "id": 1, "date": "114.01.01", "news": "元旦假期", "offical": "學務處" },
    { "id": 2, "date": "113.12.31", "news": "歲末表演", "offical": "教務處" },
    { "id": 3, "date": "113.12.25", "news": "耶誕晚會", "offical": "教務處" },
    { "id": 4, "date": "113.12.20", "news": "機器人招生", "offical": "教務處" },
    { "id": 5, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 6, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 7, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 8, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 9, "date": "unknown", "news": "unknown", "offical": "unknown" },
    { "id": 10, "date": "unknown", "news": "unknown", "offical": "unknown" },
];

// 動態生成表格內容
function populateTable(data) {
    const tableBody = document.querySelector("#json-table tbody");
    tableBody.innerHTML = ""; // 清空舊數據

    data.forEach(row => {
        const tr = document.createElement("tr");

        // 動態創建每一列
        Object.values(row).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    populateTable(jsonData);
});