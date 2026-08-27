---
tipo: "Fonte Original"
origem: "Rar Programação Web Laboratório 2"
---

# Rar Programação Web Laboratório 2

> [!info] Fonte Original
> Este documento é uma transcrição direta e intocada da fonte original, convertida em Markdown para retenção de 100% da essência e indexação de pesquisa.

Laboratório 2 – Tabela e Formulário
Modelo
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tabela e fomulário</title>
</head>
<body>
  <form name="forma1">  
 <table  border="1" cellspacing="5" cellpadding="5">
   <caption>Formulário de registro de estudante</caption>
   <tr>
    <td>Nome:</td>
    <td><input type="text" name="nome" size="25"></td>
   </tr>
   <tr>
    <td>Sobrenome:</td>
    <td><input type="text" name="sobrenome" size="25"></td>
   </tr>
   <tr>
    <td>E-mail:</td>
    <td><input type="text" name="e-mail" size="25"></td>
   </tr>
   <tr>
     <td>Digite sua palavra-passe:
       
     </td>
     <td><input type= "password"  name="text1" size="20"  maxlength="50" > 
     </td>
   </tr>
   <tr>
     <td>
      Você é matemático:
     </td>
     <td>
       <input type="radio" name="sex" value="man" checked> Sim
       <input type="radio" name="sex" value="woman"> Não
     </td>
   </tr>
   <tr>
     <td>
      Em que ano você ingressou na universidade:
     </td>
     <td>
  <select name="language" size="1">
  <option selected value="2019">2019
  <option value="2020">2020
  <option value="2021">2021
  <option value="2022">2022
  <option value="2023">2023
  <option value="2024">2024
  <option value="2016">2025
  </select>
  </td>
  <tr>
    <td>O que você pode fazer: :
    </td>
    <td>
  <select name="time" size="3">
  <option selected value="1"> Matemática
  <option value="2">Matemática Aplicada 
  <option value="3">Matemática Aplicada e Informática
  </select>
   </td>
 </tr>
   <tr>
    <td>
      As suas impressões sobre o treinamento: 
    </td>
    <td>
     <textarea cols="35" rows="3">
     </textarea>
    </td>
   </tr>
   <tr>
    <td align="right" colspan="2">
     <input type="submit" name="submit" value="Enviar">
     <input type="reset" name="reset" value="Limpar">
    </td>
   </tr>
 </table>
 </form>
</body>
</html>





Saída

Exercício 


Obs: As duas opções de condições, são campos obrigatórios

