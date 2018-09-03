package Stack;

public class Stack {
    /*Объявлены поля стэка*/
    private int maxSize; // максимальный размер стэка
    private int[] stack; //
    private int top; // вершина стека

    /*конструктор стэка*/
    public Stack(int size) {
        this.maxSize = size;
        this.stack = new int[this.maxSize];
        this.top = -1;
    }

    public boolean isEmpty(){
        return (this.top == -1);
    }

    public boolean isFull(){
        return (this.top == this.maxSize -1);
    }
    /*добавление эл в стэк*/
    public void push(int i){
        this.stack[++this.top] = i;
    }
    /*удаление эл из стека*/
    public int pop(){
        return this.stack[this.top--];
    }

    public int peek(){
        return this.stack[this.top];
    }

}
