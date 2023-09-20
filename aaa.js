/* function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  } */


  function myFunction(){
var chulo = document.getElementById("check");
var displayView = document.getElementById("myDIV");
    if(chulo.checked==true){
               

        /* displayView.style.display="block"; */
        displayView.style.backgroundColor="#fff000";
        displayView.style.display="flex";
        displayView.style.alignItems="center";
        displayView.style.justifyContent="center";

    }else{
        displayView.style.display="none";
    }


  }