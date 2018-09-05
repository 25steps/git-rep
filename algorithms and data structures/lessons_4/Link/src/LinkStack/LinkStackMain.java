package LinkStack;

public class LinkStackMain {
    public static void main(String[] args) {
        Stack st = new Stack();
        st.push("Petrov", 18);
        st.push("Ivanov", 23);
        st.push("Sidorov", 45);
        st.push("Panin", 21);
        st.push("Stalin", 3);
        st.display();
        while (!st.isEmpty())
            System.out.println("Элемент " + st.pop() + " удален из списка");
    }
}
