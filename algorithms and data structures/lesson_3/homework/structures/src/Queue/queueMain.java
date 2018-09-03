package Queue;

public class queueMain {
    public static void main(String[] args) {
        Queue queue = new Queue(5);
        queue.insert(10);
        queue.insert(20);
        queue.insert(30);
        queue.insert(90);
        queue.insert(50);
        queue.insert(80);
        queue.remove();
        queue.remove();
        int n;
        while (!queue.isEmpty()) {
            n = queue.remove();
            System.out.println(n);
        }
    }
}
