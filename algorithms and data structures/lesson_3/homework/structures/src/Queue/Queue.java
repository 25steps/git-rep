package Queue;

public class Queue {
    private int maxSize;
    private int[] queue;
    private int front; // маркер начала очереди
    private int rear; // маркер конца очереди
    private int iteams; // кол-во эл в очереди

    public Queue(int s) {
        this.maxSize = s;
        this.queue = new int[maxSize];
        this.front = 0;
        this.rear = -1;
        this.iteams = 0;
    }

    public int size(){
        return iteams;
    }

    public boolean isEmpty(){
        return (iteams == 0);
    }

    public boolean isFull(){
        return (iteams == maxSize);
    }
    /*Вставка эл в очередь*/
    public void insert(int i){
        if (rear == maxSize - 1)
            rear = -1;
        queue[++rear] = i;
        iteams++;
    }
    /*удаление эл из очереди*/
    public int remove(){
        int temp = queue[front++];
        if (front == maxSize)
            front = 0;
        iteams--;
        return temp;
    }
    /*Получаем эл*/
    public int peek(){
        return queue[front];
    }
}
