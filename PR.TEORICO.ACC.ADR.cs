// using static System.Console;

// namespace CalcFinanciera
// {
//     public static void PR_TEORICO_ACC_VS_ADR()
//     {
//         int op = 0;
//         // string otroCalculo = "";
//         string input = "";
//         double ACC = 0;
//         double ADR = 0;
//         double ratio = 0;
//         double TC = 0;

//         WriteLine("Calculadora finaciera");

//         // while (true)
//         // {

//         WriteLine("\nIngresa el valor del ACC: ");
//         input = ReadLine();

//         if (input == "*") op = 1;
//         if (input != "*") ACC = Double.Parse(input);

//         WriteLine("\nIngresa el valor del ADR: ");
//         input = ReadLine();

//         if (input == "*") op = 2;
//         if (input != "*") ADR = Double.Parse(input);

//         WriteLine("\nIngresa el valor del Ratio: ");
//         input = ReadLine();

//         if (input == "*") op = 3;
//         if (input != "*") ratio = Double.Parse(input);

//         WriteLine("\nIngresa el valor del TC: ");
//         input = ReadLine();

//         if (input == "*") op = 4;
//         if (input != "*") TC = Double.Parse(input);

//         switch (op)
//         {
//             // Calculo del ACC
//             case 1:
//                 WriteLine("\nCalcula el ACC");
//                 ACC = (ADR / ratio) * TC;
//                 WriteLine($"El valor del ACC es: {ACC}");
//                 break;

//             // Calculo del ADR
//             case 2:
//                 WriteLine("\nCalcula el ADR");
//                 ADR = (ACC * ratio) / TC;
//                 WriteLine($"El valor del ADR es: {ADR}");
//                 break;

//             // Calculo del Ratio
//             case 3:
//                 WriteLine("\nCalcula el Ratio");
//                 ratio = (ADR * TC) / ACC;
//                 WriteLine($"El valor del ratio es: {ratio}");
//                 break;

//             // Calculo del TC
//             case 4:
//                 WriteLine("\nCalcula el TC");
//                 TC = (ACC * ratio) / ADR;
//                 WriteLine($"El valor del TC es: {TC}");
//                 break;
//         }

//         // WriteLine("\nDesea realizar otro calculo? si / no");
//         // otroCalculo = ReadLine();

//         // if (otroCalculo != "si") return;
//         // }
//     }
// }