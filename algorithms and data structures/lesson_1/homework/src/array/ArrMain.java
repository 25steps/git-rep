package array;

public class ArrMain {
    public static void main(String[] args) {
        int size = 100;
        MyArr arr = new MyArr(size);
        for(int i = 0; i < size; i++)
            arr.insert((int)(Math.random()*size));
//        arr.insert(5);
//        arr.insert(1);
//        arr.insert(3);
//        arr.insert(2);
//        arr.insert(5);
//        arr.insert(3);
//        arr.insert(6);
//        arr.insert(8);
//        arr.insert(9);
//        arr.insert(0);
        int search;
        System.out.println("Выводим массив");
        arr.display();
        for (int i = 0; i < (int)(Math.random()*10); i++){
            search = (int)(Math.random()*size);
            if (arr.find(search)){
                arr.delete(search);
                System.out.println("Элемент " + search + " удалён");
            }
            else
                System.out.println("Не найден элемент " + search);
        }

        System.out.println("Выводим массив");
        arr.display();
        System.out.println("Выводим отсортированный массив");
        arr.sortInsert();
        arr.display();

    }
}
