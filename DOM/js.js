'use strict'
// שאלה 1
function addClass(){

    const element = document.getElementById('classInput');
    const tx=document.getElementById('text');
    if(element.value=='highlight')
        tx.classList.add('highlight');
    else if(element.value=='bold')
        tx.classList.add('bold');
    else if(element.value=='underline')
        tx.classList.add('underline');
}

function clearme(){
    const ts=document.getElementById('text');
    
    const kput=document.getElementById('classInput');
    kput.value=null;
    
    ts.className='mainClass';

}


////שאלה 2

function toggleVisibility1(){
    
    const x=document.getElementById('firstText');

    if(x.className=="visible"){
        x.classList.remove("visible");
        x.classList.add("hidden");
    }
    else if(x.className=="hidden"){
        x.classList.remove("hidden");
    x.classList.add("visible");
    }
    
   

}


function toggleVisibility2(){
    const y=document.getElementById('secondText');
    if(y.className=="visible"){
        y.classList.remove("visible");
        y.classList.add("hidden");
    }
    else if(y.className=="hidden"){
        y.classList.remove("hidden");
    y.classList.add("visible");

}
}



function toggleVisibility3(){
    const z=document.getElementById('thirdText');
    if(z.className=="visible"){
        z.classList.remove("visible");
        z.classList.add("hidden");
    }
    else if(z.className=="hidden"){
        z.classList.remove("hidden");
    z.classList.add("visible");
    
    

}
}

//  שאלה 3

function clickme(){

    const t = document.getElementById('pars');
    t.textContent='click !!';
    const o = document.getElementById('bttns');
   if(o.className="pa_event"){
    o.classList.remove("pa_event");
    o.classList.add("pa_noevent");
   }



}