function calcular(){
    var total = 0;

    if(document.getElementById("seat").checked){

        total = total+100;

    }
    if(document.getElementById("renault").checked){
        
        total = total+120;

    }

    //10% x0.1
    //15% x0.15

    if(document.getElementById("18").checked && document.getElementById("2").checked){

        total = total-(total*0.25);

    }else{

        if(document.getElementById("18").checked){
            total = total-(total*0.1);
        }
        if(document.getElementById("2").checked){
            total = total-(total*0.15);
        }

    }

    document.getElementById("total").value = total;
}