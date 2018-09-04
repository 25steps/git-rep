package StackChar;

import java.io.IOException;

public class StackCharMain {
    public static void main(String[] args) throws IOException {
        String input = "Hello world";
        char[] in = input.toCharArray();
        Stack stack = new Stack(input.length());
        for (int i = 0; i < input.length(); i++){
            stack.push(in[i]);
            System.out.print(stack.peek());
        }
        System.out.println();
        while (!stack.isEmpty()){
            char temp = stack.pop();
            System.out.print(temp);
        }

    }
}
