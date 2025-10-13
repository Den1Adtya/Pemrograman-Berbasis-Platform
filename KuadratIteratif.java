import java.util.Scanner;

public class KuadratIteratif {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Masukkan suatu bilangan: ");
        double bilangan = scanner.nextDouble();
        
        // Inisialisasi hasil dengan 1 (basis perkalian)
        double hasil = 1.0;
        
        // Iterasi untuk pangkat 2: kalikan sebanyak 2 kali (tapi efektif 1 kali setelah inisialisasi)
        for (int i = 0; i < 2; i++) {
            hasil *= bilangan;
        }
        
        System.out.println("Hasil pangkat dua dari " + bilangan + " adalah: " + hasil);
        
        scanner.close();
    }
}
