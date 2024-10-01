console.log("Hello World");
// Event are the generic actions that user in intended to perform on the website
/**
 * Click ✅
 * Double Click ✅
 * Mouse ✅
 *      - Mouse enter
 *      - Mouse Leave 
 *      - Mouse Over
 *      - Mouse Drag
 *      - Mouse Drag Start
 *      - Mouse Drag end
 *      - Mouse Drag Over
 * Keyboard
 *      - Key down
 *      - Key up
 * Form
 *      - Focus
 *      - Blur
 *      - Submit
 *
 *
 */
// ================= Functions
let sound = new Audio("https://rr2---sn-4wg7lnee.googlevideo.com/videoplayback?expire=1727780870&ei=poP7ZolCja_zwQ_R4-vpAQ&ip=110.78.186.77&id=o-ADO_lLqv1RiX5BiJ9R4uh7C1IIJQk5nUEHNRgSDD1W61&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AXLXGFSJj5GtSHbxP1q6nbEAhdPJsaoowaGdni_SWqmFfla-woK0y6AsKfXguAvYz1JcPq_W0ui1MOxK&spc=54MbxdSv1kWPIyKMrglAetXrdbp_stl0GNdllyBYTx2t7EPKQ-v3&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=ZMzv5U-J0NLGB8vzx6s17GkQ&rqh=1&gir=yes&clen=189031&dur=11.633&lmt=1617425491966130&keepalive=yes&fexp=51299152&c=WEB_CREATOR&sefc=1&txp=5311222&n=0nGOoQSFqfj8fw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgdZwOffz4VsA5iZngmUbhVvfEMaRpYDm7e3RoBoVVU3kCICVKSNIyauYhv8giyQW9_CpFTUvsQoLakfu-NROCUWen&rm=sn-j5u-2tml7l,sn-npo6y7l&rrc=79,104&req_id=a00115179f4da3ee&met=1727761208,&rms=rdu,rdu&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=ZU&mip=2404:3100:1c23:e4cc:2002:7844:a727:5ae7&mm=29&mn=sn-4wg7lnee&ms=rdu&mt=1727761019&mv=m&mvi=2&pl=44&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ABPmVW0wRAIgUKPHrx4vUopTQoaNVQ5Cq32SQbezdyPaTlk7FtrTYK4CIAzoyeYeSciHILLxOEnEEL_QwvWNJvN1jawuFiFAy2WA");
let playIcon =`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>`;


let musicUrl = "https://rr2---sn-4wg7zne7.googlevideo.com/videoplayback?expire=1727777801&ei=qXf7ZvqUM-nU9fwP_t60qQs&ip=202.165.195.202&id=o-AHL-Nqb02feXfb5EGyg6nUx69PLkrMx20eix6nYsJYMF&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AXLXGFSv6qUOheccuv329AjP06BRn4D-se7IYVHAENfE3RyqEyoctUs3V4RErNlLilyBAnGZ38Mjn4qA&spc=54MbxSYJUrMGErVPwKM_Lbjmx5qNmz9CsUVn4hM9WZ92WdNHY2R5&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=D8pzE_2Azqzg9eRVBJYXtnoQ&rqh=1&gir=yes&clen=3883683&dur=239.908&lmt=1705641537413143&keepalive=yes&fexp=51299152&c=WEB_CREATOR&sefc=1&txp=4532434&n=Q4N-7lpfDPx6eQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAMpdJxjAa3nnUowPrS7dPTnndrQiZUXNiKKGYNK-qyQcAiEAv0XBcyj1arq9zJFACUm4JZwEkFrrt2qyt3RJJpsqDJk%3D&rm=sn-ntqzs76&rrc=104,80&req_id=86a4789ce55ca3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-hvcpapo3-at2e7l&cms_redirect=yes&cmsv=e&met=1727761999,&mh=eO&mip=2404:3100:1c23:e4cc:2002:7844:a727:5ae7&mm=29&mn=sn-4wg7zne7&ms=rdu&mt=1727761732&mv=m&mvi=2&pl=44&rms=rdu,rdu&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ABPmVW0wRgIhAOAnGBhjcAebX-Xm2wnp0uPi9oybxMwiO5c0Wm3AyCliAiEAiIWAuV9F2Fbd4yI7Gbz6odX1ElUkSNOJe6sMh9whmoI%3D";
let pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
</svg>`;
let onClick = ()=>{
    mainButton.style.padding = "1rem 2rem";
    mainButton.style.backgroundColor = "salmon";
    mainButton.style.borderRadius = ".3rem";
        // playing a sound
        sound.play();
}

let onBoxHover = (event)=>{
    let elem  = event.target;
    console.log(event);
    elem.style.backgroundColor = "red";
    elem.style.transform = "scale(.9)"
    elem.style.border = "3px solid red";



}
let onMouseLeave = (event) => {
    let elem = event.target;
    elem.style.backgroundColor = "orange";
    elem.style.border = "3px solid brown";
    elem.style.transform = "scale(1)";
}
let isPlaying  = false;
let playMusic = (event)=>{
    let music = new Audio(musicUrl);
    if(!isPlaying){
        music.play();
        musicBox.innerHTML = pauseIcon;
        isPlaying = true;
    }else{
        music.pause();
        musicBox.innerHTML = playIcon;
        isPlaying = false;
    }
    
    
   
    // event.target.innerHtml = "33";
    // console.log(event.target);
}
// ================== Elements
let mainButton = document.querySelector("#mainbtn");
let box = document.querySelector(".box");
let musicBox = document.querySelector(".music");
// =================== Event Listeners
mainButton.addEventListener("click",onClick);
box.addEventListener("mouseover",onBoxHover);
box.addEventListener("mouseleave",onMouseLeave);
musicBox.addEventListener("click",playMusic);


