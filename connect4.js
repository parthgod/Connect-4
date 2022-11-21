let slots=document.querySelectorAll('.slots');
let i=0;
let wh=window.getComputedStyle(document.getElementById(0)).getPropertyValue('background-color');

let text=document.getElementById("win");
document.getElementById("writing").innerHTML += "🔴"+localStorage.getItem("play1")+"   VS   "+localStorage.getItem("play2")+"🟡"; 
let ele=document.getElementById('writing').innerHTML.replace("VS","<span style='color:green'>VS</span>");
document.getElementById("writing").innerHTML=ele;

let stk=[];
for(let j=0;j<7;j++)
stk.push(new stack(6));
let winner=0;
let color="red";

slots.forEach((slots,i)=>
{
    slots.addEventListener('click',function handleClick()
    {
        if(winner==1)
        return;
        st=stk[i%7];
        let flag=st.push(color,i);
        let val=(i%7)+42-7*stk[i%7].stacktop;
        if(flag!=0)
        {
            if(color==="red")
            color="yellow";
            else
            color="red";
        }
        const q=new queue();
        if(val%7!=6 && val>6)
        {
            if(val-6>=0)
            q.addqueue(val-6);
        }
        if(val+1<49 && i%7!=6)
        q.addqueue(val+1);
        if(val%7!=6 && val<42)
        {
            if(val+8<49)
            q.addqueue(val+8);
        }
        if(val+7<49 && i<42)
        q.addqueue(val+7);
        if(val%7!=0 && val<42)
        {
            if(val+6<49)
            q.addqueue(val+6);
        }
        if(val-1>=0 && i%7!=0)
        q.addqueue(val-1);
        if(val%7!=0 && val>6)
        {
            if(val-8>=0)
            q.addqueue(val-8);
        }
        for(var j=0;j<q.arr.length;j++)
        {
            let c1=0;
            let c2=0;
            var temp1=val;
            var temp2=val;
            var diff=q.dequeue()-val;
            var col=window.getComputedStyle(document.getElementById(val)).getPropertyValue('background-color');
            if(diff===-6)
            {
                if(temp1%7!=6 && temp1>6)
                temp1+=diff;
            }
            else if(diff===1)
            {
                if(temp1%7!=6)
                temp1+=diff;
            }
            else if(diff===8)
            {
                if(temp1%7!=6 && temp1<42)
                temp1+=diff;
            }
            else if(diff===7)
            {
                if(temp1<42)
                temp1+=diff;
            }
            else if(diff===6)
            {
                if(temp1%7!=0 && temp1<42)
                temp1+=diff;
            }
            else if(diff===-1)
            {
                if(temp1%7!=0)
                temp1+=diff;
            }
            else if(diff===-8)
            {
                if(temp1%7!=0 && temp1>6)
                temp1+=diff;
            }
            var col2=window.getComputedStyle(document.getElementById(temp1)).getPropertyValue('background-color');
            while(col==col2 && temp1!=val && col!=wh && col2!=wh)
            {
                c1++;
                if(diff===-6)
                {
                    if(temp1%7===6 || temp1<=6)
                    break;
                }
                else if(diff===1)
                {
                    if(temp1%7===6)
                    break;
                }
                else if(diff===8)
                {
                    if(temp1%7===6 || temp1>=42)
                    break;
                }
                else if(diff===7)
                {
                    if(temp1>=42)
                    break;
                }
                else if(diff===6)
                {
                    if(temp1%7===0 || temp1>=42)
                    break;
                }
                else if(diff===-1)
                {
                    if(temp1%7===0)
                    break;
                }
                else if(diff===-8)
                {
                    if(temp1%7===0 || temp1<=6)
                    break;
                }
                temp1+=diff;
                col2=window.getComputedStyle(document.getElementById(temp1)).getPropertyValue('background-color');
            }
            diff*=-1;
            if(diff===6)
            {
                if(temp2%7!=0 && temp2<42)
                temp2+=diff;
            }
            else if(diff===-1)
            {
                if(temp2%7!=0)
                temp2+=diff;
            }
            else if(diff===-8)
            {
                if(temp2%7!=0 && temp2>6)
                temp2+=diff;
            }
            else if(diff===-6)
            {
                if(temp2%7!=6 && temp2>6)
                temp2+=diff;
            }
            else if(diff===1)
            {
                if(temp2%7!=6)
                temp2+=diff;
            }
            else if(diff===8)
            {
                if(temp2%7!=6 && temp2<42)
                temp2+=diff;
            }
            else if(diff===7)
            {
                if(temp1<42)
                temp2+=diff;
            }
            col2=window.getComputedStyle(document.getElementById(temp2)).getPropertyValue('background-color');
            while(col==col2 && temp2!=val && col!=wh && col2!=wh)
            {
                c2++;
                if(diff===6)
                {
                    if(temp2%7===0 || temp2>=42)
                    break;
                }
                else if(diff===-1)
                {
                    if(temp2%7===0)
                    break;
                }
                else if(diff===-8)
                {
                    if(temp2%7===0 || temp2<=6)
                    break;
                }
                else if(diff===-6)
                {
                    if(temp2%7===6 || temp2<=6)
                    break;
                }
                else if(diff===1)
                {
                    if(temp2%7===6)
                    break;
                }
                else if(diff===8)
                {
                    if(temp2%7===6 || temp2>=42)
                    break;
                }
                else if(diff===7)
                {
                    if(temp2>=42)
                    break;
                }
                temp2+=diff;
                col2=window.getComputedStyle(document.getElementById(temp2)).getPropertyValue('background-color');            
            }
            if((c1+c2)>=3)
            {
                winner=1;
                if(color==="red")
                color="yellow";
                else
                color="red";
                setTimeout(()=>
                {
                    if(color=="red")
                    {
                        let winner=localStorage.getItem("play1");
                        text.innerHTML=winner.toUpperCase()+" WINS!";
                        text.classList.add("show-vict");
                        var audio = new Audio("./tadaa-47995.mp3");
                        audio.play();
                    }
                    else if(color=="yellow")
                    {
                        let winner=localStorage.getItem("play2");
                        text.innerHTML=winner.toUpperCase()+" WINS!";
                        text.classList.add("show-vict");
                        var audio = new Audio("./tadaa-47995.mp3");
                        audio.play();
                    }
                },500);
                return;
            }
        }
        let tie=0;
        for(let j=0;j<7;j++)
        {
            if(window.getComputedStyle(document.getElementById(j)).getPropertyValue('background-color')==wh)
            break;
            else
            tie++;
        }
        if(tie==7)
        {
            setTimeout(()=>
            {
                text.innerHTML="IT'S A TIE!";
                text.classList.add("show-vict");
                var audio = new Audio("./mixkit-long-game-over-notification-276.WAV");
                audio.play();
            },200);
        }
    })
    slots.addEventListener("mousemove",()=>
    {
        document.getElementById(i%7).innerHTML=`<div class="coin" style="background-color:${color}"></div>`;
    })
    slots.addEventListener("click",()=>
    {
        document.getElementById(i%7).innerHTML=`<div class="coin" style="background-color:${color}"></div>`;
    })
    slots.addEventListener("mouseleave",()=>
    {
        document.getElementById(i%7).innerHTML='';
    })
})