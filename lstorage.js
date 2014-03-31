function CalcAbv(){ 
 var og_med = document.getElementById("OG_med").value; 
 var fg_med = document.getElementById("FG_med").value;
 abv_calc = (og_med - fg_med) * 131; 
 
 alert('ABV Calculado: ' + abv_calc); 

} 
