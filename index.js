
for (let i = 0; i < 7; i++) 
{


    document.querySelectorAll("button")[i].addEventListener('click' , 
    function () {
        
        // this.style.color ="white";
        var buttonInnerhtml = this.innerHTML;
        switch (buttonInnerhtml) {
                case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
                case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
                case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
                case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
                case "j":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
                case "k":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
                case "l":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

        }
        animatio(buttonInnerhtml);
    })
    
}

document.addEventListener('keypress',(e)=>{
    // console.log(e.key);
    // e.key.style.color="white"
    switch (e.key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
            case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
            case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
            case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
            case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
            case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    }
    animatio(e.key);
})

const animatio = (key)=>{
   const current= document.querySelector("." + key);
   current.classList.add("pressed");
   setTimeout(() => {
       current.classList.remove("pressed");
   }, 100);
}