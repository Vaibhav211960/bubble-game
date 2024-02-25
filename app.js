var timer = 0;
var score = 0;
var hitrn;

function totalscore(){
        score += 5;
        document.querySelector("#scoreval").textContent = score;
}

function newhit(){
        hitrn = Math.floor(Math.random()*10);
        document.querySelector("#hitval").textContent = hitrn;
}

function bubblemaker(){
        var clutter = "";

        for (var i = 0; i<230 ; i++) {
           var rn = Math.floor(Math.random()*10);
           clutter += `<div class="bubble">${rn}</div>`;
        }
        
        document.querySelector(".pbtm").innerHTML = clutter;
}

function runtimer() {
        var timerint = setInterval(() => {
                if(timer < 60){
                        timer++;
                        document.querySelector("#timerval").textContent = timer;
                }
                else{
                        clearInterval(timerint);
                        document.querySelector(".pbtm").innerHTML = "<h1>game over</h1>"
                }
        },1000);
}

bubblemaker();
runtimer();
newhit();

document.querySelector(".pbtm").addEventListener('click', function(dets){
        var clickedbubble = Number(dets.target.textContent);
        if(clickedbubble === hitrn) {
                totalscore();
                bubblemaker();
                newhit();
        }
})
