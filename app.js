const btn = document.querySelector('.btn');
const write = document.querySelector('.writing');
let p1='Player 1',p2='Player 2';

btn.addEventListener('click',()=>{
    if (document.getElementById('Player1').value!='' && document.getElementById('Player2').value!='') {
        p1=document.getElementById("Player1").value;
        p2=document.getElementById("Player2").value;
    }
    
    console.log(p1+" "+p2);
    localStorage.setItem("play1",p1);
    localStorage.setItem("play2",p2);
})