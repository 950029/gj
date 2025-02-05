//Day and Night
function toggleTheme() {
    const button = document.querySelector('.theme-toggle');
    // Update button text
    button.classList.toggle('dark');
    if (button.classList.contains('dark')) {
      button.textContent = 'Day';
    } else {
      button.textContent = 'Night';
    }

    const top = document.querySelector('.top');
    top.classList.toggle('dark');
    
    const toptexts = document.querySelectorAll('.top-text');
    toptexts.forEach((toptext) => {
          toptext.classList.toggle("dark"); // 遍歷每個物件，切換類
    });

    const officals = document.querySelectorAll('.offical');
    officals.forEach((offical) => {
          offical.classList.toggle("dark"); // 遍歷每個物件，切換類
    });

    const content = document.querySelector('.content');
    content.classList.toggle('dark');

    const footer = document.querySelector('footer');
    footer.classList.toggle('dark');

    const newscontainer = document.querySelector('.news-container');
    newscontainer.classList.toggle('dark');

    const table = document.querySelector('#json-table');
    table.classList.toggle('dark');

    const backtotop = document.querySelector('#back-to-top');
    backtotop.classList.toggle('dark');
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