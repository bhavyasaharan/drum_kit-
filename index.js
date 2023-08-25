/*
document.querySelector(".set .w").addEventListener("click",function()
{
    var audio = new Audio("sounds/crash.mp3")
    audio.play()
})

document.querySelector(".set .a").addEventListener("click",function()
{
    var audio = new Audio("sounds/kick-bass.mp3")
    audio.play()
})
document.querySelector(".set .s").addEventListener("click",function()
{
    var audio = new Audio("sounds/snare.mp3")
    audio.play()
})
*/


//********************using switch case statement************************ 
/*
for(let i=0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        let selected_tag_content = this.innerHTML ;

        switch(selected_tag_content)
        {
            case "w" :
                var audio = new Audio("sounds/crash.mp3")
                audio.play()
                break;

            case "a" :
                var audio = new Audio("sounds/kick-bass.mp3")
                audio.play()
                break;

            case "s" :
                var audio = new Audio("sounds/snare.mp3")
                audio.play()
                break;
                         
            case "d" :
                var audio = new Audio("sounds/tom-1.mp3")
                audio.play()
                break;
                        
            case "j" :
                var audio = new Audio("sounds/tom-2.mp3")
                audio.play()
                break;
            
            case "k" :
                var audio = new Audio("sounds/tom-3.mp3")
                audio.play()
                break;

            case "l" :
                var audio = new Audio("sounds/tom-4.mp3")
                audio.play()
                break ;       
        }
    }   
)}
*/

//*************************** */ playing sound using keys  (with the help of text written in it )*********
/*
    document.addEventListener("keypress",function(e)
    {
        let k = e.key ;
        switch(k)
        {
            case "w" :
                var audio = new Audio("sounds/crash.mp3")
                audio.play()
                break;

            case "a" :
                var audio = new Audio("sounds/kick-bass.mp3")
                audio.play()
                break;

            case "s" :
                var audio = new Audio("sounds/snare.mp3")
                audio.play()
                break;
                         
            case "d" :
                var audio = new Audio("sounds/tom-1.mp3")
                audio.play()
                break;
                        
            case "j" :
                var audio = new Audio("sounds/tom-2.mp3")
                audio.play()
                break;
            
            case "k" :
                var audio = new Audio("sounds/tom-3.mp3")
                audio.play()
                break;

            case "l" :
                var audio = new Audio("sounds/tom-4.mp3")
                audio.play()
                break ;       
        }
    }   )

    */


//************* */ work for both mouse click and keyboard*******************

    for(let i=0;i<document.querySelectorAll("button").length;i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click",function()
        {
            let selected_tag_content = this.innerHTML ;
    
            makesound(selected_tag_content)
        })
    }

    document.addEventListener("keypress",function(e){
        let k=e.key ;
        makesound(k)
     })


    function makesound(k){
        switch(k)
        {
            case "w" :
                var audio = new Audio("sounds/crash.mp3")
                audio.play()
                break;

            case "a" :
                var audio = new Audio("sounds/kick-bass.mp3")
                audio.play()
                break;

            case "s" :
                var audio = new Audio("sounds/snare.mp3")
                audio.play()
                break;
                         
            case "d" :
                var audio = new Audio("sounds/tom-1.mp3")
                audio.play()
                break;
                        
            case "j" :
                var audio = new Audio("sounds/tom-2.mp3")
                audio.play()
                break;
            
            case "k" :
                var audio = new Audio("sounds/tom-3.mp3")
                audio.play()
                break;

            case "l" :
                var audio = new Audio("sounds/tom-4.mp3")
                audio.play()
                break ;       
        }
   
    }