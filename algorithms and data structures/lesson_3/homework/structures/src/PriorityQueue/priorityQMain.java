package PriorityQueue;

import java.io.IOException;

public class priorityQMain {
    public static void main(String[] args) throws IOException {
        priorityQueue q = new priorityQueue(5);
        q.insert(10);
        q.insert(40);
        q.insert(50);
        q.insert(20);
        q.insert(60);
        while (!q.isEmpty()){
            int item = q.remove();
            System.out.print(item + " ");
        }
        System.out.println("");
    }
}
