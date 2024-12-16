function getWeekNumber(date) {
    // Lav en kopi af den givne dato i UTC for at undgå tidszoneproblemer
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    // ISO 8601 uger starter mandag, men getUTCDay() giver søndag som 0.
    // Hvis dayNum er 0, sæt den til 7 for at matche ISO logikken.
    const dayNum = d.getUTCDay() === 0 ? 7 : d.getUTCDay();

    // Flyt datoen til nærmeste torsdag (4 dage frem fra mandag)
    // Dette skyldes at uge 1 er defineret som ugen der indeholder årets første torsdag.
    d.setUTCDate(d.getUTCDate() + (4 - dayNum));

    // Hent årets start (1. januar, kl. 00:00:00)
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

    // Beregn uge nummer: divider antallet af dage siden årets start med 7
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);

    return weekNo;
}

function week() {
    var today = new Date();
    var weekNo = getWeekNumber(today);

    document.getElementById("week").innerHTML = "Uge" + "<spacer>"+" "+"</spacer>" + weekNo;
}
week();

function date(){
    var today = new Date();

    var day = today.getDay();

    var dayList = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    var monthList = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"]

    document.getElementById("date").innerHTML = dayList[day] + "<spacer>"+" "+"</spacer>" + "<spacer>"+" "+"</spacer>" + date + "<spacer>"+". "+"</spacer>" + monthList[month] + "<spacer>"+" "+"</spacer>" + year;
}
date();

function clock(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    document.getElementById("clock").innerHTML = "<span>"+hours+"</span>" + ":" + "<span>"+minutes+"</span>" + ":" + "<span>"+seconds+"</span>";
    
    
    var time = setTimeout(function(){
        clock();
    }, 1000);
}
clock();

function updateTime(k){
    if(k < 10){
        return "0" + k
    } else {
        return k;
    }
}