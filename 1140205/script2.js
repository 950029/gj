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

    const title = document.querySelector('.title');
    title.classList.toggle('dark');

    const inside = document.querySelector('.inside');
    inside.classList.toggle('dark');

    const footer = document.querySelector('footer');
    footer.classList.toggle('dark');

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