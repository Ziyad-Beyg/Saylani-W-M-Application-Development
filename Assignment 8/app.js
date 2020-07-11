var hours = 0;
var minutes = 0;
var seconds = 0;
var m_seconds = 0;
var h_heading = document.getElementById('hour');
var m_heading = document.getElementById('min');
var s_heading = document.getElementById('sec');
var ms_heading = document.getElementById('msec');
var time_interval;

function timer(){
    m_seconds++;
    ms_heading.innerHTML = m_seconds;
    if(m_seconds >= 100){
        seconds++;
        s_heading.innerHTML = seconds;
        m_seconds = 0;
        if(seconds >= 60){
            minutes++;
            m_heading.innerHTML = minutes;
            seconds = 0;
            if(minutes >= 60){
                hours++;
                h_heading.innerHTML = hours;
                minutes = 0;
            }
        }
    }
}

function start_timer(){
    time_interval = setInterval(timer, 10);
}

function stop_timer(){
    clearInterval(time_interval);
}

function reset_timer(){
    m_seconds = 00;
    seconds = 00;
    minutes = 00;
    hours = 00;
    h_heading.innerHTML = hours;
    ms_heading.innerHTML = m_seconds;
    m_heading.innerHTML = minutes;
    s_heading.innerHTML = seconds;
}
