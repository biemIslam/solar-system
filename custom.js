//i like to leave unused line(s) of code commented to show my trial/errors
// and progress

window.onload = () => { 
    // dateTimer function
    var dateFormat = new Date();
    var currentMonth = dateFormat.getMonth();
    var currentDate = dateFormat.getDate();
    var currentYear = dateFormat.getFullYear()

    var arrayMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    document.getElementById('display-date').innerHTML = arrayMonth[currentMonth] + ' ' +
        currentDate + ', ' + currentYear;
    let intervalId = null;
    // let counter = 0;

    function dateTimer() {
        

        // function display(date) {
        currentDate += 1;
        document.getElementById('display-date').innerHTML = arrayMonth[currentMonth] + ' ' +
            currentDate + ', ' + currentYear;
        

        
        

        function setMonth_Year() {
            var year = currentYear;
            var month = currentMonth + 1;

            function daysInAMonth(month, year) {
                return new Date(year, month, 0).getDate();
            }
            
            var no_of_days = daysInAMonth(month, year);
            if ((no_of_days == 31) && (currentDate == no_of_days)) {
                // clearInterval(intervalId);
                // if (clearInterval) {
                    if (currentMonth == '11') {
                        currentDate = 0;
                        currentMonth = 0;
                        currentYear += 1;
                        if (currentYear % 4 == 0) {
                            // setTimeout(function () {
                            //     currentDate += 1;
                                // intervalId = setInterval(dateTimer, 500);
                                
                                var paragraph = document.createElement('P');
                                paragraph.innerHTML = "This is a Leap Year";
                                document.querySelector(".play-pause").appendChild(paragraph);
                            // }, 1000)
                        }
                    }
                    else {
                        currentDate = 0;
                        currentMonth += 1;
                        // setTimeout(function () {
                        //     currentDate += 1;

                            // intervalId = setInterval(dateTimer, 500)
                        // }, 1000)
                    }
                // }
            }

                
            else if ((no_of_days == 30) && (currentDate == no_of_days))  {
                // clearInterval(intervalId);
                // if (clearInterval) {
                    currentDate = 0;
                    currentMonth += 1;
                    // setTimeout(function () {
                    //     currentDate += 1;
                        // intervalId = setInterval(dateTimer, 500)
                    // }, 1000)

                // }
            }

            else if ((no_of_days == 28) && (currentDate == no_of_days)) {
                // clearInterval(intervalId);
                // if (clearInterval) {
                    currentDate = 0;
                    currentMonth += 1;
                    // setTimeout(function () {
                    //     currentDate += 1;
                        // intervalId = setInterval(dateTimer, 500)
                    // }, 1000)

                // }
            }

            else if ((no_of_days == 29) && (currentDate == no_of_days)) {
                // clearInterval(intervalId);
                // if (clearInterval) {
                    currentDate = 0;
                    currentMonth += 1;
                    // setTimeout(function () {
                    //     currentDate += 1;
                        // intervalId = setInterval(dateTimer, 500)
                    // }, 1000)
                // }
            }

                // else {
                //     clearInterval(intervalId);
                //     if (clearInterval) {
                //         currentDate = 0;
                //         currentMonth += 1;
                //         setTimeout(function () {
                //             currentDate += 1;
                //             intervalId = setInterval(dateTimer, 500)
                //         }, 1000)

                //     }
                // }
                    
                 

                //     // currentMonth += 1;  
                //     // document.getElementById('display-date').innerHTML = arrayMonth[currentMonth] + ' ' +
                //     //     currentDate + ', ' + currentYear;
                // }
            // }

            // months = {}

       
            
            // for () {

            // }
            
        }
        setMonth_Year();
        // if (currentDate == 30) {
        //     document.getElementById('display-date').innerHTML = "This is a 30-day month";
        // }

        // var dateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        //                 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

        // for (let i = 0; i < dateArray.length; i++) { 
        //     if (i == 29) {
        //         if (currentDate == dateArray[i]) {
        //             document.getElementById('display-date').innerHTML = "This is a 30-day month";
        //         }
                
        //     }
        // }

        

        // for (let currentDate = 1; currentDate <= 31; i++){
        //     document.getElementById('display-date').innerHTML = currentDate;

        //     if (currentDate == 30) {
        //         document.getElementById('display-date').innerHTML = "This is a 30-day month"
        //         // document.getElementById('display-date').innerHTML = arrayMonth[currentMonth] + ' ' + 
        //         // currentDate + ', ' + currentYear;
        // //     }
        // }
        // document.getElementById('display-date').innerHTML = currentDate;
        
        // }
    }

    



    function playPause() {

        // document.getElementById('play-btn').addEventListener('click', () => {
            // alert('hjv')
            // document.querySelector('a #play-btn').style.display = 'none';
            // document.querySelector('a #pause-btn').style.display = 'inline-block';
            // // document.querySelectorAll('#neptune-axis, #earth-axis').style.animationPlayState = 'running'
            
            // // repeat date timer
            // intervalId = setInterval(dateTimer, 5000)
        // });

        document.querySelector('a #play-btn').addEventListener('click', () => {
            Array.from(document.querySelectorAll('.animated')).forEach(div => {
                div.classList.add('activated')
            })

            document.querySelector('a #play-btn').style.display = 'none';
            document.querySelector('a #pause-btn').style.display = 'inline-block';
            // document.querySelectorAll('#neptune-axis, #earth-axis').style.animationPlayState = 'running'

            // repeat date timer
            intervalId = setInterval(dateTimer, 100)

        });

        

        document.querySelector('a #pause-btn').addEventListener('click', () => {

            Array.from(document.querySelectorAll('.animated')).forEach(div => {
                div.classList.remove('activated')
            })

            document.querySelector('a #play-btn').style.display = 'inline-block';
            document.querySelector('a #pause-btn').style.display = 'none';
            // document.querySelectorAll('#neptune-axis, #earth-axis').style.animationPlayState = 'paused'
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

            // function getCurrentRotation(el) {
            //     var st = window.getComputedStyle(el, null);
            //     var tm = st.getPropertyValue("-webkit-transform") ||
            //         st.getPropertyValue("-moz-transform") ||
            //         st.getPropertyValue("-ms-transform") ||
            //         st.getPropertyValue("-o-transform") ||
            //         st.getPropertyValue("transform") ||
            //         "none";
            //     if (tm != "none") {
            //         var values = tm.split('(')[1].split(')')[0].split(',');
            //         /*
            //         a = values[0];
            //         b = values[1];
            //         angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
            //         */
            //         //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
            //         var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
            //         return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
            //     }
            //     return 0;
            // }
            // var currentAngle = getCurrentRotation(document.getElementById("neptune-axis"));
            // alert(currentAngle)
            
          

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
    playPause();


    // Wrap every letter in a span
    // var textWrapper = document.querySelector('.ml12');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // anime.timeline({ loop: true })
    //     .add({
    //         targets: '.moving-letters .letter',
    //         translateX: [40, 0],
    //         translateZ: 0,
    //         opacity: [0, 1],
    //         easing: "easeOutExpo",
    //         duration: 1200,
    //         delay: (el, i) => 500 + 30 * i
    //     }).add({
    //         targets: '.moving-letters .letter',
    //         translateX: [0, -30],
    //         opacity: [1, 0],
    //         easing: "easeInExpo",
    //         duration: 1100,
    //         delay: (el, i) => 100 + 30 * i
    //     });
    
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

