window.onload = () => { 
    let intervalId = null;
    let counter = 0;


    function dateTimer() {
        


        // function display(date) {
        counter += 1;
        document.getElementById('display-date').innerHTML = counter;
        
        // }
    }

    



    function playPause() {

        document.getElementById('play-btn').addEventListener('click', () => {
            // alert('hjv')
            document.querySelector('a #play-btn').style.display = 'none';
            document.querySelector('a #pause-btn').style.display = 'inline-block';
            document.querySelector('#neptune-axis').style.animationPlayState = 'running'
            
            // repeat date timer
            intervalId = setInterval(dateTimer, 1000)
        });

        document.getElementById('pause-btn').addEventListener('click', () => {

            document.querySelector('a #play-btn').style.display = 'inline-block';
            document.querySelector('a #pause-btn').style.display = 'none';
            document.querySelector('#neptune-axis').style.animationPlayState = 'paused'
            // document.querySelector('#neptune-axis').classList.remove('neptune-axis-animation');

            // var pauseNeptune = document.querySelector('#neptune-axis');
            // var computedStyle = window.getComputedStyle(pauseNeptune),
            //     marginLeft = computedStyle.getPropertyValue('');
            // pauseNeptune.style.webkitAnimationState = marginLeft;
            // pauseNeptune.classList.remove('neptune-axis-animation');    
            // pause date timer
            if (intervalId) {
                clearInterval(intervalId)
            }

            function getCurrentRotation(el) {
                var st = window.getComputedStyle(el, null);
                var tm = st.getPropertyValue("-webkit-transform") ||
                    st.getPropertyValue("-moz-transform") ||
                    st.getPropertyValue("-ms-transform") ||
                    st.getPropertyValue("-o-transform") ||
                    st.getPropertyValue("transform") ||
                    "none";
                if (tm != "none") {
                    var values = tm.split('(')[1].split(')')[0].split(',');
                    /*
                    a = values[0];
                    b = values[1];
                    angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
                    */
                    //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
                    var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
                    return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
                }
                return 0;
            }
            var currentAngle = getCurrentRotation(document.getElementById("neptune-axis"));
            alert(currentAngle)
            
          

            // function findTopLeft(element) {
            //     var rec = document.getElementById(element).getBoundingClientRect();
            //     return ({ top: rec.top, left: rec.left });
            // }

            // var pos = findTopLeft('neptune')
            // alert(pos.top);
            // alert(pos.left);

        });

        
        // function getPosition(element) {
        //     var rect = element.getBoundingClientRect();
        //     return { x: rect.left, y: rect.top };
        // }

        // var el = document.getElementById('neptune');
        // var pos = getPosition(el);

        // // Alert position in X axis
        // alert(pos.x);

        // // Alert position in Y axis
        // alert(pos.y);
    }
    playPause()
    
}




    
        
       
    

    
    
    // let date = new Date();
    // date.setFullYear(date.getFullYear()-6, 0, 1);
    // document.getElementById('display-date').innerHTML = date.toDateString();


// }

// var repeatDate =  setInterval(dateTimer, 30000)

// function monthCounter() {
//     // date.setFullYear(date.getFullYear() - 6, 0, 1);
//     let dates_of_month = [1, 2, 3, 4, 5];
//     // for (let dates = 0; dates < dates_of_month.length; dates++) {
//         // date.setFullYear(date)
//         document.getElementById('display-date').innerHTML = dates_of_month[dates]
//         // alert(dates);
//         // if (date < 10) {
//         //     return "00" + date;
//         // }
//         // else if (date >= 10) {
//         //     return date;
//         // }
//     // }
// }
// // monthCounter()
// setInterval(monthCounter, 1000);

// function datesOfMonth() {
//     let date = new Date();

// }




// (function f() {
//     i = (i + 1) % dates_of_month.length;
//     document.getElementById('display-date').innerHTML = dates_of_month[i];
//     setTimeout(f, 1000);
// })();