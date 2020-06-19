function dateTimer() {
    var counter = 0;
    function display(date) {
        var d = document.getElementById('display-date').innerHTML = date;
    }

    var repeatDate = setInterval(() => {

        counter += 1
        display(counter);

        if (counter == 10) {
            clearInterval(repeatDate);
            var restart = setTimeout(dateTimer, 2000);
           
        }

    }, 1000);
}


function playPause() {
    document.getElementById('play-btn').addEventListener('click', () => {
        // alert('hjv')
        dateTimer();
        document.querySelector('a #play-btn').style.display = 'none';
        document.querySelector('a #pause-btn').style.display = 'inline-block';
        document.querySelector('#neptune-axis').classList.add('neptune-axis-animation');
    });

    document.getElementById('pause-btn').addEventListener('click', () => {

        dateTimer();

        document.querySelector('a #play-btn').style.display = 'inline-block';
        document.querySelector('a #pause-btn').style.display = 'none';
        document.querySelector('#neptune-axis').classList.remove('neptune-axis-animation');
    })
}

playPause()


    
        
       
    

    
    
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