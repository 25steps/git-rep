package LinkQueue;

public class LinkQueueMain {
    public static void main(String[] args) {
        Queue queue = new Queue();
        queue.push("Vasy", 32);
        queue.push("Katy", 23);
        queue.push("Tany", 3);
        queue.push("Sader", 12);
        queue.display();
        while (!queue.isEmpty())
            System.out.println("Элемент " + queue.pop() + " удален из очереди");
    }
}
