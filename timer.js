/*****
**  Simply add this file to your html page, 
**  and call startTimer(duration, elementId) method with (call method from button or using other event) 
**  duration parameter in number of required minutes and
**  elementId is the id attribute given to any html elment
**  where you want to keep/show timer
*****/
function startTimer(duration, elementId) {
    var timer = duration*60, minutes, seconds;
    
    var timerId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 1 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById(elementId).innerHTML = (minutes + ":" + seconds);

        if (timer <= 0) {
            
            clearInterval(timerId);
            
            return 0;
        } 
        timer-- ;
    }, 1000 );
}
(function(minutes, elementId) {      
    startTimer(minutes, elementId);
})(1, 'demo');

