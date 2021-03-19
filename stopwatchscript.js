const timer = document.getElementById('stopwatch')

var hour = 0
var minute = 0
var second = 0
var stoptime = true
var countdown = false

function startTimer() {
    if (stoptime == true) {
        
        stoptime = false
        
        if (countdown == false) {
            timerCycle()
        }
        
        else {
            cdCycle()
        }
    }
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true
    }
}

function cdTimer() {
    hour = +prompt("Hours?")
    minute = +prompt("Minutes?")            
    while (minute > 60) {
        minute = +prompt("Must be less than 60.")
    }
    second = +prompt("Seconds?")            
    while (second > 60) {
        second = +prompt("Must be less than 60.")
    }
    second = second + 1
    
    if (stoptime == true) {
        stoptime = false
        countdown = true
        cdCycle()
    }
}
function timerCycle() {
    if (stoptime == false) {
        hour = parseInt(hour)
        minute = parseInt(minute)
        second = parseInt(second)             

        second = second + 1

        if (second == 60) {
            minute = minute + 1
            second = 0
        }
        if (minute == 60) {
            hour = hour + 1
            minute = 0
            second = 0
        }

        if (second < 10) {
            second = '0' + second
        }
        if (minute < 10) {
        minute = '0' + minute
        }
        if (hour < 10) {
            hour = '0' + hour
        }

        timer.innerHTML = hour + ':' + minute + ':' + second

        setTimeout("timerCycle()", 1000)
    }
}

function cdCycle() {
    if (stoptime == false) {
        hour = parseInt(hour)
        minute = parseInt(minute)
        second = parseInt(second)             

        second = second - 1

        if (second == 0) {
            if (minute == 0 && hour == 0) {
                stoptime = true
                countdown = false
                second = 0
            
                alert("Time's up!")
            }
            else {
                minute = minute - 1
                second = 59
            }    
        }
        if (minute == -1) {
            if (hour != 0) {
                hour = hour - 1
                minute = 59
                second = 59
            }
            else {
                mintue = 0
            }
        }

        if (second < 10) {
            second = '0' + second
        }
        if (minute < 10) {
        minute = '0' + minute
        }
        if (hour < 10) {
            hour = '0' + hour
        }

        timer.innerHTML = hour + ':' + minute + ':' + second
        

        setTimeout("cdCycle()", 1000)
    }
}

function resetTimer() {
    timer.innerHTML = '00:00:00'
    stoptime = true
    countdown = false
    hour = 0
    minute = 0
    second = 0
}
