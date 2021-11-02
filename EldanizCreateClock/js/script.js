// let date, hr, min, sec

// function refreshClock() {
//     //console.log("yoxla");
//     date = new Date()
//     hr = date.getHours()
//     min = date.getMinutes()
//     sec = date.getSeconds()
//         //console.log("hr");

//     document.querySelector(".hr").style.transform = 'translate(-50%, -100%) rotate(${hr * 360 / 12 + min * 30 / 60}deg)'
//     document.querySelector(".min").style.transform = 'translate(-50%, -100%) rotate(${min * 360 / 60 + sec * 6 / 60}deg)'
//     document.querySelector(".sec").style.transform = 'translate(-50%, -100%) rotate(${sec * 360 / 60}deg)'
// }

// refreshClock()
// window.setInterval(refreshClock, 1000)

// setInterval(setClock, 1000)
// const hr = document.querySelector('[needle hr]')
// const min = document.querySelector('[needle min]')
// const sec = document.querySelector('[needle sec]')

// function setClock() {
//     const currentDate = new Date()
//     const secondsRatio = currentDate.getSeconds() / 60
//     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
//     setRotation(sec, secondsRatio)
//     setRotation(min, minutesRatio)
//     setRotation(hr, hoursRatio)
// }


// function setRotation(element, rotationRatio) {
//     element.style.setProperty('--rotation', rotationRatio * 360)
// }
// setClock()

/*first circle clock*/
const hr = document.querySelector('.hr');
const mn = document.querySelector('.min');
const sc = document.querySelector('.sec');
const deg = 6;

setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

/*second standart clock*/
function updateTime() {
    var dateInfo = new Date();

    var hr,
        _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
        sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
        ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dateInfo.getHours() == 0) {
        hr = 12;
    } else if (dateInfo.getHours() > 12) {
        hr = dateInfo.getHours() - 12;
    } else {
        hr = dateInfo.getHours();
    }

    var currentTime = hr + ":" + _min + ":" + sec;

    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;

    /* date */
    var dow = [
            "Bazar",
            "Bazar ertəsi",
            "Çərşənbə axşamı",
            "Çərşənbə",
            "Cümə axşamı",
            "Cümə",
            "Şənbə"
        ],
        month = [
            "Yanvar",
            "Fevral",
            "Mart",
            "Aprel",
            "May",
            "İyun",
            "İyul",
            "Avqqust",
            "Sentyabr",
            "Oktyabr",
            "Noyabr",
            "Dekabr"
        ],
        day = dateInfo.getDate();

    // store date
    var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

    document.getElementsByClassName("date")[0].innerHTML = currentDate;
};

// print time and date once, then update them every second
updateTime();
setInterval(function() {
    updateTime()
}, 1000);