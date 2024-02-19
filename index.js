let bod = document.querySelector(".inText");
let btn = document.querySelector("button");
let foot = document.querySelector(".foot");
console.log(bod.innerHTML);
console.log(btn);
console.log(foot.innerHTML);

// btn.addAttribute('click', random())





function random(){
    
    let rgb = "1,1,1";
    let v  = rgb.split(',')
    
    v[0] = Math.round((Math.random()*250));
    v[1] = Math.round((Math.random()*250));
    v[2] = Math.round((Math.random()*255));
   let m = `rgb(${(v)})`;
    bod.style.backgroundColor = m
    foot.innerText = m;
    bod.innerText = m;

    };

/*
let body = document.body;

body.insertAdjacentHTML('afterbegin',"<button class = 'sty' onclick = random()>click</button>")
let btn = document.querySelector(".sty");

let b = document.createElement("p")
function random(){
    
    let rgb = "1,1,1";
    let v  = rgb.split(',')
    
    v[0] = Math.round((Math.random()*250));
    v[1] = Math.round((Math.random()*250));
    v[2] = Math.round((Math.random()*255));
   let m = `rgb(${(v)})`;
    body.style.backgroundColor = m
    b.innerText = m;
    };
body.appendChild(b)
*/
