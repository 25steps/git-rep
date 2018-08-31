public class Main {
    static int method1(int a, int b){
        int a1=1;
        for (int i = 0; i < b; i++ ) {
            a1*=a;
        }
        return a1;
    }
    static double method3(int[] arr){
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum/arr.length;
    }
    public static void main(String[] args) {
        int a = -2;
        int b = 3;
        int[] mas = {2,4,6,8};
        System.out.println(method1(a,b));
        System.out.println(method3(mas));
    }
}
