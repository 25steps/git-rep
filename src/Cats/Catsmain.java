package Cats;

public class Catsmain {
    public static void main(String[] args) {
        Catsclass cats[] = new Catsclass[5];
        cats[0] = new Catsclass("Barsik", 5, "Black");
        cats[1] = new Catsclass("Pussy", 1, "White");
        cats[2] = new Catsclass("Tolstya", 10, "Red");
        cats[3] = new Catsclass("Redsy", 2, "Black and White");
        cats[4] = new Catsclass("Stormy", 3, "Grey");

        for (int i = 0; i < cats.length; i++) {
            System.out.println("Name: "+cats[i].getName());
            System.out.println("Age: "+cats[i].getAge());
            System.out.println("Colour: "+cats[i].getColour());
            System.out.println();
            }
    }

}
