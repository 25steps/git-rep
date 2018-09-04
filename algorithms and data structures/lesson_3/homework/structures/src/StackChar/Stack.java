package StackChar;

public class Stack {
    /*Объявлены поля стэка*/
    private int maxSize; // максимальный размер стэка
    private char[] stack; //
    private int top; // вершина стека

    /*конструктор стэка*/
    public Stack(int size) {
        this.maxSize = size;
        this.stack = new char[this.maxSize];
        this.top = -1;
    }

    public boolean isEmpty(){
        return (this.top == -1);
    }

    public boolean isFull(){
        return (this.top == this.maxSize -1);
    }
    /*добавление эл в стэк*/
    public void push(char i){
        this.stack[++this.top] = i;
    }
    /*удаление эл из стека*/
    public char pop(){
        return this.stack[this.top--];
    }

    public char peek(){
        return this.stack[this.top];
    }
}
