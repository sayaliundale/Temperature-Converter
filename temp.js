const convert = () => {
    document.getElementById('temp2').style.top= '-295px';
    document.getElementById('btn').style.top= '-155px';
  let temp1selected = temp1.options[temp1.selectedIndex].value;
  let temp2selected = temp2.options[temp2.selectedIndex].value;
    
  if (temp1selected == "cel") {
    if (temp2selected == "cel")
     {
      const numb = document.getElementById("number1").value;
      document.getElementById("pm").innerHTML = numb;
    } 
    else if (temp2selected == "feh")
     {
      const numb = document.getElementById("number1").value;
      document.getElementById("pm").innerHTML = numb * (9 / 5) + 32;
    } 
    else if (temp2selected == "kel") {
      const numb = document.getElementById("number1").value;
      document.getElementById("pm").innerHTML = numb * 1 + 273;
    }
  }

  else if (temp1selected == "feh") {
    if (temp2selected == "cel") 
    {
      const numb = document.getElementById("number1").value;
      document.getElementById("pm").innerHTML = (numb - 32) * (5 / 9);
    }
    else if (temp2selected == "feh")
    {
     const numb = document.getElementById("number1").value;
     document.getElementById("pm").innerHTML = numb ;
   } 
    else if (temp2selected == "kel") {
      const numb = document.getElementById("number1").value;
      document.getElementById("pm").innerHTML = (numb - 32) * (5 / 9) + 273.15;
    }
  }

    else if (temp1selected == "kel") {
        if (temp2selected == "cel")
         {
            const numb = document.getElementById("number1").value;
            document.getElementById("pm").innerHTML = numb -273.15;
          } 
          else if (temp2selected == "feh")
        {
            const numb = document.getElementById("number1").value;
             document.getElementById("pm").innerHTML = (numb - 273.15) * (9/5) + 32 ;
        } 
          
          else if (temp2selected == "kel") 
          {
            const numb = document.getElementById("number1").value;
            document.getElementById("pm").innerHTML = numb;
          }
      
    }
  
};
