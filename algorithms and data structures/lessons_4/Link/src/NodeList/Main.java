package NodeList;

public class Main {
    public static void main(String[] args) {
        NodeList node = new NodeList();
        node.insert("cake", 23.45);
        node.insert("chickeen", 10.25);
        node.insert("cheese", 8.23);
        node.insert("apple", 4.45);
        node.insert("coffee", 23.45);
        System.out.println(node.toString());
        while (!node.isEmpty()){
            node.pop();
        }
        System.out.println(node.toString());
    }
}
