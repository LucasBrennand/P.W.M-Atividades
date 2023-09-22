import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);


        while (true){
            Random random = new Random();
            int diceRoll1 = random.nextInt(5) + 1;
            int diceRoll2 = random.nextInt(5) + 1;


            System.out.println("Input a number from 1 to 6");
            int input = in.nextInt();

            if(input==diceRoll1 || input==diceRoll2) {
                System.out.println("You win!");
            }
            else if(input >= 1 && input <= 6){
                System.out.println("You lose!");
            }
            else {
                System.out.println("Invalid number");
            }
            System.out.println(
                    "Dice roll 1: "+diceRoll1 +
                    "\nDice roll 2: "+diceRoll2);
        }
    }
}