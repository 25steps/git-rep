package Stack;

public class StackMain {
    public static void main(String[] args) {
        Stack stack = new Stack(5);
        stack.push(8);
        stack.push(2);
        stack.push(1);
        stack.push(4);
        stack.push(6);
        while (!stack.isEmpty()){
            int temp = stack.pop();
            System.out.print(temp + " ");
        }
        System.out.println();
    }
}
