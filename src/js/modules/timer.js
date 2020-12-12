function timer (times) {
    
    function addZero(n) {
        if(n < 10){
            return "0" + n;
        }else {
            return n;
        }
    }
    
    function getTime(timeEnd) {
        const date = new Date(Date.parse(timeEnd) - new Date());
        
        return {
            total : date,
            seconds : date.getSeconds(),
            minutes : date.getMinutes(),
            hours: date.getUTCHours(),
            days: Math.floor(date/(1000*60*60*24))
        };
    }
    
    changeTime();
    
    function changeTime () {
        const days = document.querySelector("#days"),
              hours = document.querySelector("#hours"),
              minutes = document.querySelector("#minutes"),
              seconds = document.querySelector("#seconds"),
              t = getTime(times);
        
        if (t.total <= 0){
            clearInterval(timerGo);
        }
        
        days.textContent = addZero(t.days);
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);
    }
    
    const timerGo = setInterval(changeTime, 1000);
    
}

export default timer;