let size=parseInt(localStorage.getItem("size"));
let maxgrid=size*size;

let container=document.querySelector('.slot-container');
document.documentElement.style.setProperty('--aa',400+maxgrid*3.3+'px');

for(let j=0;j<size;j++)
container.innerHTML+=`<div class="slot-rows"></div>`;

let slotrows=document.querySelectorAll('.slot-rows');
let i=0;

let text=document.getElementById("win");
document.getElementById("writing").innerHTML += "🔴"+localStorage.getItem("play1")+"   VS   "+localStorage.getItem("play2")+"🟡"; 
let ele=document.getElementById('writing').innerHTML.replace("VS","<span style='color:green'>VS</span>");
document.getElementById("writing").innerHTML=ele;

let stk=[];
for(let j=0;j<size;j++)
stk.push(new stack(size-1));

for(let j=0;j<size;j++)
{
    for(let k=j*size;k<maxgrid;k++)
    {
        slotrows[j].innerHTML+=`<div class="slots" id=${k}></div>`;
        if((k%size)==size-1)
        break;
    }
}

let slots=document.querySelectorAll('.slots');
let wh=window.getComputedStyle(document.getElementById(0)).getPropertyValue('background-color');
let winner=0;
let color="red";
slots.forEach((slots,i)=>
{
    slots.addEventListener('click',function handleClick()
    {
        if(winner==1)
        return;
        st=stk[i%size];
        let flag=st.push(color,i);
        let val=(i%size)+(maxgrid-size)-size*stk[i%size].stacktop;
        if(flag!=0)
        {
            if(color==="red")
            color="yellow";
            else
            color="red";
        }
        const q=new queue();
        if(val%size!=(size-1) && val>(size-1))
        {
            if(val-(size-1)>=0)
            q.addqueue(val-(size-1));
        }
        if(val+1<maxgrid && i%size!=(size-1))
        q.addqueue(val+1);
        if(val%size!=(size-1) && val<(maxgrid-size))
        {
            if((val+size+1)<maxgrid)
            q.addqueue(val+size+1);
        }
        if(val+size<maxgrid && val<(maxgrid-size))
        q.addqueue(val+size);
        if(val%size!=0 && val<(maxgrid-size))
        {
            if(val+(size-1)<maxgrid)
            q.addqueue(val+(size-1));
        }
        if(val-1>=0 && i%size!=0)
        q.addqueue(val-1);
        if(val%size!=0 && val>(size-1))
        {
            if((val-size-1)>=0)
            q.addqueue(val-size-1);
        }
        for(var j=0;j<q.arr.length;j++)
        {
            let c1=0;
            let c2=0;
            var temp1=val;
            var temp2=val;
            var diff=q.dequeue()-val;
            var col=window.getComputedStyle(document.getElementById(val)).getPropertyValue('background-color');
            if(diff===-(size-1))
            {
                if(temp1%size!=(size-1) && temp1>(size-1))
                temp1+=diff;
            }
            else if(diff===1)
            {
                if(temp1%size!=(size-1))
                temp1+=diff;
            }
            else if(diff===(size+1))
            {
                if(temp1%size!=(size-1) && temp1<(maxgrid-size))
                temp1+=diff;
            }
            else if(diff===size)
            {
                if(temp1<(maxgrid-size))
                temp1+=diff;
            }
            else if(diff===(size-1))
            {
                if(temp1%size!=0 && temp1<(maxgrid-size))
                temp1+=diff;
            }
            else if(diff===-1)
            {
                if(temp1%size!=0)
                temp1+=diff;
            }
            else if(diff===-(size+1))
            {
                if(temp1%size!=0 && temp1>(size-1))
                temp1+=diff;
            }
            var col2=window.getComputedStyle(document.getElementById(temp1)).getPropertyValue('background-color');
            while(col==col2 && temp1!=val && col!=wh && col2!=wh)
            {
                c1++;
                if(diff===-(size-1))
                {
                    if(temp1%size===(size-1) || temp1<=(size-1))
                    break;
                }
                else if(diff===1)
                {
                    if(temp1%size===(size-1))
                    break;
                }
                else if(diff===(size+1))
                {
                    if(temp1%size===(size-1) || temp1>=(maxgrid-size))
                    break;
                }
                else if(diff===size)
                {
                    if(temp1>=(maxgrid-size))
                    break;
                }
                else if(diff===(size-1))
                {
                    if(temp1%size===0 || temp1>=(maxgrid-size))
                    break;
                }
                else if(diff===-1)
                {
                    if(temp1%size===0)
                    break;
                }
                else if(diff===-(size+1))
                {
                    if(temp1%size===0 || temp1<=(size-1))
                    break;
                }
                temp1+=diff;
                col2=window.getComputedStyle(document.getElementById(temp1)).getPropertyValue('background-color');
            }
            diff*=-1;
            if(diff===(size-1))
            {
                if(temp2%size!=0 && temp2<(maxgrid-size))
                temp2+=diff;
            }
            else if(diff===-1)
            {
                if(temp2%size!=0)
                temp2+=diff;
            }
            else if(diff===-(size+1))
            {
                if(temp2%size!=0 && temp2>(size-1))
                temp2+=diff;
            }
            else if(diff===-(size-1))
            {
                if(temp2%size!=(size-1) && temp2>(size-1))
                temp2+=diff;
            }
            else if(diff===1)
            {
                if(temp2%size!=(size-1))
                temp2+=diff;
            }
            else if(diff===(size+1))
            {
                if(temp2%size!=(size-1) && temp2<(maxgrid-size))
                temp2+=diff;
            }
            else if(diff===size)
            {
                if(temp1<(maxgrid-size))
                temp2+=diff;
            }
            col2=window.getComputedStyle(document.getElementById(temp2)).getPropertyValue('background-color');
            while(col==col2 && temp2!=val && col!=wh && col2!=wh)
            {
                c2++;
                if(diff===(size-1))
                {
                    if(temp2%size===0 || temp2>=(maxgrid-size))
                    break;
                }
                else if(diff===-1)
                {
                    if(temp2%size===0)
                    break;
                }
                else if(diff===-(size+1))
                {
                    if(temp2%size===0 || temp2<=(size-1))
                    break;
                }
                else if(diff===-(size-1))
                {
                    if(temp2%size===(size-1) || temp2<=(size-1))
                    break;
                }
                else if(diff===1)
                {
                    if(temp2%size===(size-1))
                    break;
                }
                else if(diff===(size+1))
                {
                    if(temp2%size===(size-1) || temp2>=(maxgrid-size))
                    break;
                }
                else if(diff===size)
                {
                    if(temp2>=(maxgrid-size))
                    break;
                }
                temp2+=diff;
                col2=window.getComputedStyle(document.getElementById(temp2)).getPropertyValue('background-color');            
            }
            if((c1+c2)>=3)
            {
                console.log(c1+" "+c2+" "+val+" "+diff);
                winner=1;
                if(color==="red")
                color="yellow";
                else
                color="red";
                let v=val;
                while(c1--)
                v-=diff;
                for(let k=v,l=0;l<4;k+=diff,l++)
                document.getElementById(k).style.borderColor="white";
                setTimeout(()=>
                {
                    if(color=="red")
                    {
                        let winner=localStorage.getItem("play1");
                        text.innerHTML=winner.toUpperCase()+" WINS!";
                        var audio = new Audio("./tadaa-47995.mp3");
                        audio.play();
                    }
                    else if(color=="yellow")
                    {
                        let winner=localStorage.getItem("play2");
                        text.innerHTML=winner.toUpperCase()+" WINS!";
                        var audio = new Audio("./tadaa-47995.mp3");
                        audio.play();
                    }
                    text.innerHTML+=`<div><button class="btn" id="see">See screen</button><button class="btn" id="again" OnClick="location.href='home.html'">Play Again</button><button class="btn" id="reset" OnClick="location.href='index.html'">Reset</button></div>`;
                    text.classList.add("show-vict");
                    let see=document.getElementById('see');
                    see.addEventListener('click',()=>
                    {
                        text.classList.remove("show-vict");
                        see.parentNode.removeChild(see);
                    })
                },2000);
                return;
            }
        }
        let tie=0;
        for(let j=0;j<size;j++)
        {
            if(window.getComputedStyle(document.getElementById(j)).getPropertyValue('background-color')==wh)
            break;
            else
            tie++;
        }
        if(tie==size)
        {
            setTimeout(()=>
            {
                text.innerHTML="IT'S A TIE!";
                text.classList.add("show-vict");
                var audio = new Audio("./tie.WAV");
                audio.play();
            },200);
        }
    })
    slots.addEventListener("mousemove",()=>
    {
        if(winner==1)
        {
            document.getElementById(i%size).innerHTML='';
            return;
        }
        document.getElementById(i%size).innerHTML=`<div class="coin" style="background-color:${color}"></div>`;
    })
    slots.addEventListener("click",()=>
    {   
        if(winner==1)
        return;
        document.getElementById(i%size).innerHTML=`<div class="coin" style="background-color:${color}"></div>`;
        
        if(color=="red")
        {
            var audio = new Audio("./player1.mp3");
            audio.play();
        }
        else
        {
            var audio = new Audio("./player2.mp3");
            audio.play();
        }
    })
    slots.addEventListener("mouseleave",()=>
    {
        document.getElementById(i%size).innerHTML='';
    })
})