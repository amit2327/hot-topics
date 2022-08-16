let url = './partials/home.html';

let dc = document.getElementById('dynamic-content');

let btns = document.querySelectorAll('nav ul li a');


function handleAjax(link) {
    fetch(link)
    .then(function (rsp) { 
        return rsp.text();
    })
    .then(function (data) { 
        // console.log(data);
        dc.innerHTML = data;
    });
}


handleAjax(url);


function handleClick(e){

    e.preventDefault();
    let currentClick = e.target;
   handleAjax(currentClick.href);
}



for (let btn of btns){
    btn.addEventListener("click",handleClick)
}

