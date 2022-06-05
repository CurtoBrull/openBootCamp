public class Main {
    public static void main(String[] args) {

        int numeroIf = -1;

        if (numeroIf < 0) {
            System.out.println("El número " + numeroIf + " es negativo");
        } else if (numeroIf == 0) {
            System.out.println("El número es cero");
        } else {
            System.out.println("El número " + numeroIf + " es positivo");
        }

        int numeroWhile = 0;

        while (numeroWhile < 3){
            numeroWhile++;
            System.out.println("El número es " + numeroWhile);
        }

        do {
            numeroWhile++;
            System.out.println("Do While: El número es " + numeroWhile);
        } while (numeroWhile <= 1);

        int numeroFor = 0;

        for (int i = 0; numeroFor <= 3; i++) {
            numeroFor++;
            System.out.println("Bucle for: El número es " + numeroFor);
        }

        String estacion = "";

        switch (estacion) {
            case "Invierno":
                System.out.println("Estamos en Invierno");
                break;
            case "Primavera":
                System.out.println("Estamos en Primavera");
                break;
            case "Verano":
                System.out.println("Estamos en Verano");
                break;
            case "Otoño":
                System.out.println("Estamos en Otoño");
                break;
            default:
                System.out.println("No se ha definido una estación.");
        }

    }
}