// using static System.Console;

// int op = 0;
// string input = "";

// decimal? T_REN = null;
// decimal? DV = null;
// decimal? T_DES = null;
// decimal? P_ENT = null;
// decimal? TPR = null;
// decimal? DR = null;
// decimal? INT = null;
// decimal? P_SAL = null;
// decimal? TRS = null;
// decimal? M_IN = null;
// decimal? PREM = null;
// decimal? TIT = null;
// decimal? CAI = null;
// decimal? VN = 10;

// WriteLine("Calculadora finaciera");
// WriteLine("Calculo de CETES.REPORTOS");

// WriteLine("\nIngresa el valor del T.REN: ");
// input = ReadLine(); 

// if (input == "*" || input == "") op = 1;
// if (input != "*" && input != "") T_REN = decimal.Parse(input);

// WriteLine("\nIngresa el valor del DV: ");
// input = ReadLine(); 

// if (input == "*" || input == "") op = 2;
// if (input != "*" && input != "") DV = decimal.Parse(input);

// WriteLine("\nIngresa el valor del T.DES: ");
// input = ReadLine(); 

// if (input == "*" || input == "") op = 3;
// if (input != "*" && input != "") T_DES = decimal.Parse(input);

// if (op == 1) {
//     T_REN = T_DES / ( 1 - ((T_DES * DV) / 36000 ));
//     T_REN = Math.Round(T_REN.Value, 6);
// }

// if (op == 2) {
//     DV = ((T_REN - T_DES) * 36000 ) / (T_REN * T_DES);
//     DV = Math.Round(DV.Value, 0);
// }
    
// if (op == 3) {
//     T_DES = T_REN / ( 1 + ((T_REN * DV) / 36000));
// }
//     // ! Require T_DES / D_REN
//     WriteLine("\nIngresa el valor del P.ENT");
//     input = ReadLine();

//     if (input != "*" && input != "") P_ENT = decimal.Parse(input);
//     if (input == "*" || input == ""){
//         // F1 - T-DES
//         P_ENT = VN * (1 - (T_DES * DV) / 36000);

//         // F2 - T_REN
//         // P_ENT = VN / ( 1 + (T_REN * DV) / 36000);
        
//         // F3 - INT
//         //P_ENT = (INT * 36000)/(TPR * DR);

//         // F4 - P_SAL
//         // P_ENT = P_SAL - INT;

//         // F5 - TIT
//         // P_ENT = M_IN / TIT;
        
//         P_ENT = Math.Round(P_ENT.Value, 6);
//     }

    
//     WriteLine("\nIngresa el valor del TPR");
//     input = ReadLine();

//     if (input != "*" && input != "") TPR = decimal.Parse(input);
//     if (input == "*" || input == ""){
//         // F1 - INT
//         TPR = (INT * 36000) / (P_ENT * DR);

//         // F2 - PREM
//         TPR = (PREM * 36000)/(M_IN * DR);

//         TPR = decimal.Round(TPR.Value, 6);
//     }

//     WriteLine("\nIngresa el valor del DR");
//     input = ReadLine();

//     if (input != "*" && input != "") DR = decimal.Parse(input);
//     if (input == "*" || input == ""){
//         // F1 - INT
//         DR = (INT * 36000)/(P_ENT * TPR);

//         // F2 - PREM
//         DR = (PREM * 36000)/(M_IN * TPR);

//         // F3 - TRS
//         DR = DV - (((VN - P_SAL) * 36000) / (TRS * P_SAL));

//         DR = decimal.Round(DR.Value, 0);
//     }

//     WriteLine("\nIngresa el valor del INT$");
//     input = ReadLine();

//     if (input != "*" && input != "") INT = decimal.Parse(input);
//     if (input == "*" || input == ""){
//         // F1
//         INT = (P_ENT * TPR * DR) / 36000;

//         // F2 - P_SAL
//         INT = P_SAL -  P_ENT;

//         INT = Math.Round(INT.Value, 6);
//     }

//     // TODO
//     WriteLine("\nIngresa el valor del P_SAL");
//     input = ReadLine();

//     if (input != "*" && input != "") P_SAL = decimal.Parse(input);
//     if (input == "*" || input == ""){
//         P_SAL = P_ENT + INT;
//         P_SAL = Math.Round(P_SAL.Value, 6);
//     }

//     // ! Require VN, P_SAL, DV, DR
//     WriteLine("\nIngresa el valor del TRS");
//     input = ReadLine();

//     if (input != "*" && input != "") TRS = decimal.Parse(input);
//     if (input == "*" || input == ""){
//         TRS = (((VN - P_SAL) / P_SAL) / (DV - DR)) * 36000;
//         TRS = Math.Round(TRS.Value, 4);
//     }

//     WriteLine("\nIngresa el valor del M_IN");
//     input = ReadLine();

//     if (input != "*" && input != "") M_IN = decimal.Parse(input);
//     if (input == "*" || input == ""){
//         // F1 - PREM
//         M_IN = (PREM * 36000) / (TPR * DR);

//         // F2 - TIT
//         M_IN = TIT * P_ENT;

//         M_IN = decimal.Round(M_IN.Value, 6);
//     }

//     // ! Require M_IN,TPR, DR
//     WriteLine("\nIngresa el valor del PREM");
//     input = ReadLine();

//     if (input != "*" && input != "") PREM = decimal.Parse(input);
//     if (input == "*" || input == ""){
//         PREM = (M_IN * TPR * DR) / 36000;
//         PREM = Math.Round(PREM.Value, 2);
//     }

//     // ! Require M_IN, P_ENT
//     WriteLine("\nIngresa el valor del TIT");
//     input = ReadLine();

//     if (input != "*" && input != "") TIT = decimal.Parse(input);
//     if (input == "*" || input == ""){
//         TIT = M_IN / P_ENT;
//         TIT = Math.Round(TIT.Value, 0);
//     }


// WriteLine($"T_REN: {T_REN}");
// WriteLine($"DV: {DV}");
// WriteLine($"T_DES: {T_DES}");
// WriteLine($"P_ENT {P_ENT}");
// WriteLine($"TPR {TPR}");
// WriteLine($"DR {DR}");
// WriteLine($"INT$ {INT}");
// WriteLine($"P_SAL {P_SAL}");
// WriteLine($"TRS {TRS}");
// WriteLine($"M_IN {M_IN}");
// WriteLine($"PREM {PREM}");
// WriteLine($"TIT {TIT}");
