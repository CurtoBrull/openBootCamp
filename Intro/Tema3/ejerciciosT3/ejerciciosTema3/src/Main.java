public class Main {
    public static void main(String[] args) {

        // Primera parte: llamada a la función e imprimir resultado
        int resultado = suma(10, 33, 50);
        System.out.println("La suma es: " + resultado);

        // Segunda parte: Crear nuevo objeto y llamada a la función
        Coche miCoche = new Coche();

        System.out.println(
                miCoche.incrementarPuertas(2)
        );
    }

    // Primera parte: función

    /**
     * Función para sumar enteros
     * @param a int
     * @param b int
     * @param c int
     * @return suma de todos los parámetros
     */
    public static int suma(int a, int b, int c) {
        return a + b + c;
    }
}

// Segunda Parte: Clase
class Coche {
    // Puertas iniciales
    public int numPuertas = 2;

    /**
     * Función para incrementar el numero de puertas
     * @param a int con el número de puertas a incrementar
     * @return String con el resultado final
     */
    public String incrementarPuertas (int a) {

        this.numPuertas += a;

        String resultado = "El coche ahora tiene " + numPuertas + " puertas en total.";

        return resultado;
    }
}