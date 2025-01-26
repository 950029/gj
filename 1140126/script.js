//Day and Night
function toggleTheme() {
    const button = document.querySelector('.theme-toggle');
    const top = document.querySelector('.top');
    const offical = document.querySelector('.offical');
    const footer = document.querySelector('footer');
    
    top.classList.toggle('dark');
    offical.classList.toggle('dark');
    footer.classList.toggle('dark');

    // Update button text
    if (top.classList.contains('dark')) {
      button.textContent = 'Day';
    } else {
      button.textContent = 'Night';
    }
}

//切換圖片
const images = ["images/test1.jpg", 
    "images/test2.jpg", 
    "images/test3.jpg", 
    "images/test4.jpg"];
let currentIndex = 0;

//下一張
function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("main-image").src = images[currentIndex];
}

//上一張
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("main-image").src = images[currentIndex];
}

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

//最新消息
// JSON 數據
const jsonData = [
    { "id": 1, "date": "114.01.01", "news": "元旦假期", "offical": "學務處" },
    { "id": 2, "date": "113.12.31", "news": "歲末表演", "offical": "教務處" },
    { "id": 3, "date": "113.12.25", "news": "耶誕晚會", "offical": "教務處" },
    { "id": 4, "date": "113.12.20", "news": "機器人招生", "offical": "教務處" }
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
