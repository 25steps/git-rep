package LinkQueue;

public class Queue {
    private LinkedList list;

    public Queue() {
        list = new LinkedList();
    }

    public void push(String name, int age){
        list.insert(name, age);
    }

    public String pop(){
        return list.delete();
    }

    public boolean isEmpty(){
        return list.isEmpty();
    }
    public void display(){
        list.display();
    }
}
