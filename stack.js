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
        slots[(i%size)+(maxgrid-size)-size*this.stacktop].style.backgroundColor=color;
    }
}