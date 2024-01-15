

function time() {

        let date = document.getElementById("date");
        let now = new Date();
        let datetime = now.toLocaleString();

        date.innerHTML = `${datetime}`;

        setTimeout(time, 500);

}

//time();