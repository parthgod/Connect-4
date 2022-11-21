class queue
{
    constructor()
    {
        this.front=-1;
        this.rear=-1;
        this.arr=[];
    }
    addqueue(i)
    {
        this.rear++;
        this.arr[this.rear]=i;
    }
    dequeue()
    {
        this.front++;
        return this.arr[this.front];
    }
}