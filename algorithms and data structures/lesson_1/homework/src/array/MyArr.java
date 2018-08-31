package array;

public class MyArr {
    private int[] arr;
    private int size;

    public MyArr(int size) {
        this.arr =new int[size];
        this.size = 0;
    }

    public void display(){
        for(int i = 0; i < this.size; i++){
            System.out.println(this.arr[i]);
        }
    }

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

    public void insert(int value){
        arr[this.size]=value;
        this.size++;
    }

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

    public void sortInsert(){
        int in, out;
        for(out = 1; out < this.size; out++){
            int temp = this.arr[out];
            in = out;
            while(in > 0 && this.arr[in-1]>=temp){
                this.arr[in]=this.arr[in-1];
                --in;
            }
            this.arr[in]=temp;
        }
    }
}
