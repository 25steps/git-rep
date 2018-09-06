package NodeList;

public class Node {
    public String product;
    public double price;

    public Node next;

    public Node(String product, double price) {
        this.product = product;
        this.price = price;
        next = null;
    }

    @Override
    public String toString() {
        return String.format("(Product: %s, Price: %f)", product, price);
    }
}
