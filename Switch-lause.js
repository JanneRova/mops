let paiva = prompt("Anna viikonpäivän numero (1-7):"); 
 

switch (paiva) { 
  case "1": 
    console.log("Maanantai"); 
    break; 
  case "2": 
    console.log("Tiistai"); 
    break; 
  case "3": 
    console.log("Keskiviikko"); 
    break; 
  case "4": 
    console.log("Torstai"); 
    break; 
  case "5": 
    console.log("Perjantai"); 
    break; 
  case "6": 
    console.log("Lauantai"); 
    break; 
  case "7": 
    console.log("Sunnuntai"); 
    break; 
  default: 
    console.log("Virheellinen syöte"); 
} 
 