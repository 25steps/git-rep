package Cats;

public class Catsclass {
    private String name;
    private int age;
    private String colour;

    public Catsclass(String name, int age, String colour) {
        this.name = name;
        this.age = age;
        this.colour = colour;
    }

    public void infoCat(){
        if (age < 5) {
            System.out.println("It's young cat.");
        } else {
            System.out.println("It's old cat.");
        }
    }
}
