class stack
{
    constructor(size)
    {
        this.size=size;
        this.stacktop=-1;
    }

    push(color,i)
    {
        if(this.stacktop===this.size)
        return 0;
        this.stacktop++;
        this.color=color;
        slots[(i%7)+42-7*this.stacktop].style.backgroundColor=color;
    }
}