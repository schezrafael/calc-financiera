// using System;
// using static System.Console;

// namespace CalcFinanciera
// {
//     class Program
//     {
//         public static void Main()
//         {
//             int optionSelect = 0;
//             string userInput;

//             WriteLine("Calculadora finaciera");
//             WriteLine("\n1 - PR.TEORICO.ACC.VS.ADR");
//             WriteLine("2 - CETES.REPORTOS");
//             WriteLine("\nSelecciona la formula a calcular");


//             userInput = ReadLine();

//             if (int.TryParse(userInput, out optionSelect))
//             {
//                 if (optionSelect != 0 && optionSelect == 1)
//                 {
//                     PR_TEORICO_ACC_VS_ADR();
//                 }

//                 if (optionSelect != 0 && optionSelect == 2)
//                 {
//                     CETES_REPORTOS();
//                 }

//             }
//         }

//         public static void PR_TEORICO_ACC_VS_ADR()
//         {
//             int op = 0;
//             // string otroCalculo = "";
//             string input = "";
//             double ACC = 0;
//             double ADR = 0;
//             double ratio = 0;
//             double TC = 0;

//             // while (true)
//             // {

//             WriteLine("\nIngresa el valor del ACC: ");
//             input = ReadLine();

//             if (input == "*") op = 1;
//             if (input != "*") ACC = Double.Parse(input);

//             WriteLine("\nIngresa el valor del ADR: ");
//             input = ReadLine();

//             if (input == "*") op = 2;
//             if (input != "*") ADR = Double.Parse(input);

//             WriteLine("\nIngresa el valor del Ratio: ");
//             input = ReadLine();

//             if (input == "*") op = 3;
//             if (input != "*") ratio = Double.Parse(input);

//             WriteLine("\nIngresa el valor del TC: ");
//             input = ReadLine();

//             if (input == "*") op = 4;
//             if (input != "*") TC = Double.Parse(input);

//             switch (op)
//             {
//                 // Calculo del ACC
//                 case 1:
//                     WriteLine("\nCalcula el ACC");
//                     ACC = (ADR / ratio) * TC;
//                     WriteLine($"El valor del ACC es: {ACC}");
//                     break;

//                 // Calculo del ADR
//                 case 2:
//                     WriteLine("\nCalcula el ADR");
//                     ADR = (ACC * ratio) / TC;
//                     WriteLine($"El valor del ADR es: {ADR}");
//                     break;

//                 // Calculo del Ratio
//                 case 3:
//                     WriteLine("\nCalcula el Ratio");
//                     ratio = (ADR * TC) / ACC;
//                     WriteLine($"El valor del ratio es: {ratio}");
//                     break;

//                 // Calculo del TC
//                 case 4:
//                     WriteLine("\nCalcula el TC");
//                     TC = (ACC * ratio) / ADR;
//                     WriteLine($"El valor del TC es: {TC}");
//                     break;
//             }

//             // WriteLine("\nDesea realizar otro calculo? si / no");
//             // otroCalculo = ReadLine();

//             // if (otroCalculo != "si") return;
//             // }
//         }

//         public static void CETES_REPORTOS()
//         {

//             int op = 0;
//             string input = "";

//             // decimal? T_REN = 0M;
//             // decimal? DV = 47M;
//             // decimal? T_DES = 5.83M;
//             // decimal? P_ENT = 0M;
//             // decimal? TPR = 6.98M;
//             // decimal? DR = 5M;
//             // decimal? INT = 0M;
//             // decimal? P_SAL = 0M;
//             // decimal? TRS = 0M;
//             // decimal? M_IN = 80000000M;
//             // decimal? PREM = 0M;
//             // decimal? TIT = 0M;
//             // decimal? CAI = 0M;

//             decimal? T_REN = null;
//             decimal? DV = null;
//             decimal? T_DES = null;
//             decimal? P_ENT = null;
//             decimal? TPR = null;
//             decimal? DR = null;
//             decimal? INT = null;
//             decimal? P_SAL = null;
//             decimal? TRS = null;
//             decimal? M_IN = null;
//             decimal? PREM = null;
//             decimal? TIT = null;
//             decimal? CAI = null;
//             decimal? VN = 10;

//             WriteLine("\nIngresa el valor del T.REN: ");
//             input = ReadLine();

//             if (input == "*" || input == "") op = 2;
//             if (input != "*" && input != "") T_REN = decimal.Parse(input);

//             WriteLine("\nIngresa el valor del DV: ");
//             input = ReadLine();

//             if (input == "*" || input == "") op = 3;
//             if (input != "*" && input != "") DV = decimal.Parse(input);

//             WriteLine("\nIngresa el valor del T.DES: ");
//             input = ReadLine();

//             if (input == "*" || input == "") op = 1;
//             if (input != "*" && input != "") T_DES = decimal.Parse(input);

//             switch (op)
//             {
//                 case 1:
//                     T_DES = T_REN / (1 + ((T_REN * DV) / 36000));
//                     T_DES = Math.Round(T_DES.Value, 6);
//                     WriteLine($"T_DES: {T_DES}");
//                     break;

//                 case 2:
//                     T_REN = T_DES / (1 - ((T_DES * DV) / 36000));
//                     T_REN = Math.Round(T_REN.Value, 6);
//                     WriteLine($"T_REN: {T_REN}");
//                     break;

//                 case 3:
//                     DV = ((T_REN - T_DES) * 36000) / (T_REN * T_DES);
//                     DV = Math.Round(DV.Value, 0);
//                     WriteLine($"DV: {DV}");
//                     break;
//             }

//             WriteLine("\nIngresa el valor del P.ENT");
//             input = ReadLine();

//             if (input != "*" && input != "") P_ENT = decimal.Parse(input);
//             if (input == "*" || input == "")
//             {
//                 P_ENT = VN * (1 - (T_DES * DV) / 36000);
//                 // P_ENT = 10 / ( 1 + (T_REN * DV) / 36000);
//                 P_ENT = Math.Round(P_ENT.Value, 6);
//                 // WriteLine($"P_ENT {P_ENT}");
//             }


//             WriteLine("\nIngresa el valor del TPR");
//             input = ReadLine();

//             if (input != "*" && input != "") TPR = decimal.Parse(input);
//             if (input == "*" || input == "")
//             {
//                 // TODO: calculo del DR
//             }

//             WriteLine("\nIngresa el valor del DR");
//             input = ReadLine();

//             if (input != "*" && input != "") DR = decimal.Parse(input);
//             if (input == "*" || input == "")
//             {
//                 // TODO: calculo del DR
//             }

//             WriteLine("\nIngresa el valor del INT$");
//             input = ReadLine();

//             if (input != "*" && input != "") INT = decimal.Parse(input);
//             if (input == "*" || input == "")
//             {
//                 INT = (P_ENT * TPR * DR) / 36000;
//                 INT = Math.Round(INT.Value, 9);
//                 // WriteLine($"INT$ {INT}");
//             }

//             WriteLine("\nIngresa el valor del P_SAL");
//             input = ReadLine();

//             if (input != "*" && input != "") P_SAL = decimal.Parse(input);
//             if (input == "*" || input == "")
//             {
//                 P_SAL = P_ENT + INT;
//                 P_SAL = Math.Round(P_SAL.Value, 9);
//                 // WriteLine($"P_SAL {P_SAL}");
//             }

//             WriteLine("\nIngresa el valor del TRS");
//             input = ReadLine();

//             if (input != "*" && input != "") TRS = decimal.Parse(input);
//             if (input == "*" || input == "")
//             {
//                 TRS = (((10 - P_SAL) / P_SAL) / (DV - DR)) * 36000;
//                 TRS = Math.Round(TRS.Value, 4);
//                 // WriteLine($"TRS {TRS}");
//             }

//             WriteLine("\nIngresa el valor del M_IN");
//             input = ReadLine();

//             if (input != "*" && input != "") M_IN = decimal.Parse(input);
//             if (input == "*" || input == "")
//             {
//                 // TODO: calculo del DR
//             }

//             WriteLine("\nIngresa el valor del PREM");
//             input = ReadLine();

//             if (input != "*" && input != "") PREM = decimal.Parse(input);
//             if (input == "*" || input == "")
//             {
//                 PREM = (M_IN * TPR * DR) / 36000;
//                 PREM = Math.Round(PREM.Value, 9);
//                 // WriteLine($"PREM {PREM}");
//             }

//             WriteLine("\nIngresa el valor del TIT");
//             input = ReadLine();

//             if (input != "*" && input != "") TIT = decimal.Parse(input);
//             if (input == "*" || input == "")
//             {
//                 TIT = M_IN / P_ENT;
//                 TIT = Math.Round(TIT.Value, 9);
//                 // WriteLine($"TIT {TIT}");
//             }


//             WriteLine($"T_REN:  {T_REN}");
//             WriteLine($"DV:     {DV}");
//             WriteLine($"T_DES:  {T_DES}");
//             WriteLine($"P_ENT:  {P_ENT}");
//             WriteLine($"TPR:    {TPR}");
//             WriteLine($"DR:     {DR}");
//             WriteLine($"INT$:   {INT}");
//             WriteLine($"P_SAL:  {P_SAL}");
//             WriteLine($"TRS:    {TRS}");
//             WriteLine($"M_IN:   {M_IN}");
//             WriteLine($"PREM:   {PREM}");
//             WriteLine($"TIT:    {TIT}");
//         }
//     }
// }