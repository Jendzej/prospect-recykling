window.onscroll = function() {
    const menu = document.getElementById("main-header");
    const sticky = menu.offsetTop;
    console.log(`window ${window.scrollY}`);
    console.log(`sticky ${sticky}`);
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
        <div>
            <img id="header-logo-text" class="transparent-background" src="/src/images/PROSPECT%20RECYKLING%20TRANSPARENT.png" alt="prospect recykling">
        </div>
        <p>SKUP ZŁOMU I METALI KOLOROWYCH</p>
    </div>
    <div id="main-header-right" onclick="location.href = 'https://maps.app.goo.gl/pZrEcrVfdxGKKzRv7'">
        <p>Spółdzielcza 4a<br>64-111 Lipno</p>
    </div>
</header>`
    }
};