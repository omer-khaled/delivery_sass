let dark_light_holder=document.querySelector('.nav ul li .dark_mode');
let dark_light_mode=localStorage.getItem('darknes');
if(dark_light_mode!=null){
    check_dark_onload(dark_light_mode);
}
else{
    dark_light_mode='light';
    console.log("here else");
}
dark_light_holder.onclick=(e)=>{
    let dark_light_mode=localStorage.getItem('darknes');
    if(dark_light_mode!=null){
        console.log("ok");
        console.log(dark_light_mode);
        check_dark(dark_light_mode);
    }
    else{
        dark_light_mode='light';
        check_dark(dark_light_mode);
    }
}
function check_dark(dark_light_mode){
    if(dark_light_mode=='light'){
        document.documentElement.style.setProperty('--text-color','white');
        document.querySelector('.nav ul li .dark_mode .circle').style.transform='translateX(130%)';
        document.querySelector('.nav ul li .dark_mode .circle').style.background='white';
        document.body.style.background='#000';
        dark_light_holder.style.borderColor="white";
        document.documentElement.style.setProperty('--scroll-color','black');
        localStorage.setItem('darknes','dark');
        document.querySelector('.contuct .container .overlay').style.background='transparent';
    }
    else if(dark_light_mode=='dark'){
        console.log("hidnnsid");
        document.documentElement.style.setProperty('--text-color','black');
        document.querySelector('.nav ul li .dark_mode .circle').style.transform='translateX(0%)';
        document.querySelector('.nav ul li .dark_mode .circle').style.background='black';
        document.body.style.background='white';
        dark_light_holder.style.borderColor="black";
        document.documentElement.style.setProperty('--scroll-color','white');
        // dark_light_mode='light';
        localStorage.setItem('darknes','light');
        document.querySelector('.contuct .container .overlay').style.background='#fee59a4f';
    }
}
function check_dark_onload(dark_light_mode){
    if(dark_light_mode=='dark'){
        document.documentElement.style.setProperty('--text-color','white');
        document.querySelector('.nav ul li .dark_mode .circle').style.transform='translateX(130%)';
        document.querySelector('.nav ul li .dark_mode .circle').style.background='white';
        document.body.style.background='#000';
        dark_light_holder.style.borderColor="white";
        document.documentElement.style.setProperty('--scroll-color','black');
        document.querySelector('.contuct .container .overlay').style.background='transparent';
    }
    else if(dark_light_mode=='light'){
        document.documentElement.style.setProperty('--text-color','black');
        document.querySelector('.nav ul li .dark_mode .circle').style.transform='translateX(0%)';
        document.querySelector('.nav ul li .dark_mode .circle').style.background='black';
        document.body.style.background='white';
        dark_light_holder.style.borderColor="black";
        document.documentElement.style.setProperty('--scroll-color','white');
        document.querySelector('.contuct .container .overlay').style.background='#fee59a4f';
    }
}

// onscroll
window.onscroll=()=>{
   if(window.pageYOffset>=150){
        document.querySelector('header .nav').style.background='var(--scroll-color)';
   }
   else{
        document.querySelector('header .nav').style.background='transparent';
   }
}

// togle

let togle=document.querySelector('.nav i ');
togle.addEventListener('click',((e)=>{
    if(e.target.className=='fa-solid fa-bars'){
        e.target.setAttribute('class','fa-solid fa-xmark');
        document.querySelector('.nav ul').classList.remove('animation_list');
        document.querySelector('.nav ul').style.transform="translateY(0%)";
        document.querySelector('.nav ul').style.top="11vh";
    }
    else{
        e.target.setAttribute('class','fa-solid fa-bars');
        document.querySelector('.nav ul').classList.add('animation_list');
        document.querySelector('.nav ul').style.transform="translateY(-125%)";
    }
}));