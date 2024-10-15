window.onscroll = function() {
    const menu = document.getElementById("main-header");
    const sticky = menu.offsetTop;
    console.log(`sticky ${sticky}`);
    console.log(`window ${window.scrollY}`);
    if (window.scrollY === 0) {
        menu.innerHTML = `<header id="main-header">
    <div>
        <h1>Lider w branży złomowej</h1>
        <p>SKUP ZŁOMU I METALI KOLOROWYCH</p>
    </div>
    <div id="main-header-right" onclick="location.href = 'https://maps.app.goo.gl/pZrEcrVfdxGKKzRv7'">
        <p>Spółdzielcza 4a<br>64-111 Lipno</p>
    </div>
</header>`
    } else if (window.scrollY === sticky) {
        menu.innerHTML = `<header id="main-header">
    <div>
        <h1>Prospect Recykling</h1>
        <p>SKUP ZŁOMU I METALI KOLOROWYCH</p>
    </div>
    <div id="main-header-right" onclick="location.href = 'https://maps.app.goo.gl/pZrEcrVfdxGKKzRv7'">
        <p>Spółdzielcza 4a<br>64-111 Lipno</p>
    </div>
</header>`
    }
};