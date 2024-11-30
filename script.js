function getWeekNumber(date){
    const tempDate = new Date(date.getTime());

    tempDate.setDate(tempDate.getDate() - tempDate.getDay() +1);

    const startOfYear = new Date(tempDate.getFullYear(), 0, 1);

    const daysDifference = Math.floor((tempDate - startOfYear) / (24 * 60 * 60 * 1000));

    const weekNumber = Math.ceil((daysDifference) / 7);
    
    return weekNumber;
}

function week(){
    var today = new Date();
    var weekNumber = getWeekNumber(today);

    document.getElementById("week").innerHTML = "Uge" + " " + weekNumber;
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

    document.getElementById("date").innerHTML = dayList[day] + " " + date + ". " + monthList[month] + " " + year;
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

    document.getElementById("clock").innerHTML = "<span>"+hours+"</span>" + "<spacer>"+":"+"</spacer>" + "<span>"+minutes+"</span>" + "<spacer>"+":"+"</spacer>" + "<span>"+seconds+"</span>";
    
    
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