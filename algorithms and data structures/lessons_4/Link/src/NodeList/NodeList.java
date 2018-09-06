package NodeList;
/*
*
* insert(product, price) - добавление элемента
* isEmpty() - проверка на пустату списка
* display() - печать эл списка
* delete() - удаление эл
*
* */
public class NodeList {
    public Node head;

    public NodeList() {
        this.head = null;
    }

    public boolean isEmpty(){
        return head == null;
    }

    public void insert(String product, double price){
        Node node= new Node(product, price);
        node.next = head;
        head = node;

    }

    public Node pop(){
        if (isEmpty()) return null;
        Node temp = head;
        head = head.next;
        return temp;
    }

    @Override
    public String toString() {
        Node temp = head;
        StringBuilder sb = new StringBuilder("[");
        while (temp != null){
            sb.append(temp);
            temp = temp.next;
            sb.append((temp == null) ? "]" : ", ");
        }
        return sb.toString();
    }
}
