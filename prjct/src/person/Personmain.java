package person;


public class Personmain {
    public static void main(String[] args) {
       int sum = 0;
       double avg = 0.0;
       Persons[] persons = new Persons[5];
       persons[0] = new Persons("Drew",26);
       persons[1] = new Persons("Alex",18);
       persons[2] = new Persons("Nik",23);
       persons[3] = new Persons("Diman",36);
       persons[4] = new Persons("Evgeniy",19);

        System.out.println("Участники отряда Драккарня");
        for (int i = 0; i < persons.length; i++) {
            System.out.println(i+1 +": " + persons[i].getName() + ", age: " + persons[i].getAge());
            sum += persons[i].getAge();
        }
        avg = sum/persons.length;
        System.out.println("Средний возраст отряда: " + avg);
        System.out.println("Сумма возрастов участников: " + sum);

        System.out.println("Какой-то код");

    }
}
