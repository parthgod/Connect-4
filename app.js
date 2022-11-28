const btn = document.querySelector('.play');
const write = document.querySelector('.writing');
let p1='Player 1',p2='Player 2';

btn.addEventListener('click',()=>
{
    if (document.getElementById('Player1').value!='' && document.getElementById('Player2').value!='') {
        p1=document.getElementById("Player1").value;
        p2=document.getElementById("Player2").value;
    }
    
    console.log(p1+" "+p2);
    localStorage.setItem("play1",p1);
    localStorage.setItem("play2",p2);
})

let small=document.getElementById('small');
let med=document.getElementById('med');
let large=document.getElementById('large');

localStorage.setItem("size",7);

small.addEventListener('click',()=>
{
    localStorage.setItem("size",6);
    small.classList.add("buttonclicked");
    med.classList.remove("buttonclicked");
    large.classList.remove("buttonclicked");
   
})

med.addEventListener('click',()=>
{
    localStorage.setItem("size",7);
    med.classList.add("buttonclicked");
    small.classList.remove("buttonclicked");
    large.classList.remove("buttonclicked");
})

large.addEventListener('click',()=>
{
    localStorage.setItem("size",8);
    small.classList.remove("buttonclicked");
    med.classList.remove("buttonclicked");
    large.classList.add("buttonclicked");
})
