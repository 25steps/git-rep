package array;

public class MyArr {
    private int[] arr;
    private int size;
    private  int count;

    public MyArr(int size) {
        this.arr =new int[size];
        this.size = 0;
    }
/*Вывод массива на экран*/
    public void display(){
        for(int i = 0; i < this.size; i++){
            System.out.println(this.arr[i]);
        }
    }
/*Удаление значения из массива*/
    public void delete(int value){
        int i = 0;
        for(i = 0; i < this.size; i++){
            if (this.arr[i] == value) break;
        }
        for(int j = i; j < this.size-1;j++){
            this.arr[j] = this.arr[j+1];
        }
        this.size--;
    }
/*Вставка в массив значения*/
    public void insert(int value){
        arr[this.size]=value;
        this.size++;
    }
/*Поиск значения в массиве*/
    public boolean find(int value){
        int i;
        for (i = 0; i < this.size; i++){
            if(this.arr[i] == value) break;
        }
        if (i == this.size)
            return false;
        else
            return true;
    }

/*Сортировка методом вставки*/
    public void sortInsert(){
        int in, out;
        for(out = 1; out < this.size; out++){
            int temp = this.arr[out];
            in = out;
            while(in > 0 && this.arr[in-1]>=temp){
                this.arr[in]=this.arr[in-1];
                --in;
                this.count++;
            }
            this.arr[in]=temp;
        }
    }
/*Сортировка методом пузырька*/
    public void sortBubble(){
        int in, out;
        for (out = this.size - 1; out > 1; out-- ){
            for (in = 0; in < out; in++){
                if(this.arr[in] > this.arr[in+1]){
                    int tmp = arr[in];
                    this.arr[in] = this.arr[in+1];
                    this.arr[in+1] = tmp;
                }
                this.count++;
            }
        }
    }
/*Сортировка вставкой*/
    public void sortSelect(){
        int in, out, mark;
        for(out =0; out < this.size; out++){
            mark = out;
            for (in = out+1; in < this.size; in++){
                if (this.arr[in] < this.arr[mark]){
                    mark = in;
                }
                this.count++;
            }
            int tmp = arr[out];
            this.arr[out] = this.arr[mark];
            this.arr[mark] = tmp;
        }
    }

    public void displayCountStep(){
        System.out.println("CountSort: " + count);
    }


}