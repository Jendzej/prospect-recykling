let holidays = {
    "2024": {
        "11": [1, 11],
        "12": [25, 26]
    },
    "2025": {
        "1": [1, 6],
        "4": [20, 21],
        "5": [1, 3],
        "6": [8, 19],
        "8": [15],
        "11": [1, 11],
        "12": [25, 26],
    },
    "2026": {
        "1": [1, 6],
        "4": [5, 6],
        "5": [1, 3, 24],
        "6": [4],
        "8": [15],
        "11": [1, 11],
        "12": [25, 26]
    }
}
let today = new Date().toISOString().slice(0, 10)
let year = today.slice(0, 4)
let month = today.slice(5, 7)
let day = today.slice(8, 10)
// let dayOfWeek = new Date().getDay()
let dayOfWeek = 7
isHoliday = false
if (year in holidays) {
    if (month in holidays[year]) {
        if (day in holidays[year][month]) {
            isHoliday = true
        }
    }
}
if (dayOfWeek === 7) {
    isHoliday = true
}

function checkIfHoliday() {
    if (isHoliday) {
        const body = document.body
        console.log(body)
        body.innerHTML = `
    <div id="holiday-content">
        <img src="/src/images/PROSPECT%20RECYKLING%20TRANSPARENT.png" alt="Prospect recykling" id="holiday-image">
        <h1 id="holiday-header">
            Dziś nieczynne
        </h1>
        <h2>
        Firma katolicka
        </h2>
        <h2>
        W niedziele i święta nie handlujemy.
        </h2>
        <div id="holiday-open-hours">
            <p style="padding-top: 10px;">
                <b>Godziny otwarcia</b>
                <br>
                Od poniedziałku do piątku 9:00 - 16:00<br>
                Sobota 8:00 - 13:00
            </p>
        </div>
    </div>
        `
    }
}