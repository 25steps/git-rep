package array;

public class ArrMain {
    public static void main(String[] args) {
        int size = 100;
        MyArr arr = new MyArr(size);
        for(int i = 0; i < size; i++)
            arr.insert((int)(Math.random()*size));
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
        System.out.println("Проверка сортировок");
        size = 1000000;
        MyArr arrSI = new MyArr(size);
        MyArr arrSS = new MyArr(size);
        MyArr arrSB = new MyArr(size);
        for(int i = 0; i < size; i++)
            arrSI.insert((int)(Math.random()*size));
        arrSI.sortInsert();
        arrSI.displayCountStep();
        for(int i = 0; i < size; i++)
            arrSB.insert((int)(Math.random()*size));
        arrSB.sortBubble();
        arrSB.displayCountStep();
        for(int i = 0; i < size; i++)
            arrSS.insert((int)(Math.random()*size));
        arrSS.sortSelect();
        arrSS.displayCountStep();

        }
}
