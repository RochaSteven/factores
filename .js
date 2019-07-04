var contador=1;
var a =[];
var fin=131955;
var num=1;
var solver=function (num){
    
    if (contador===fin){
    console.log ("la multiplicacion es:" + contador);
    var max=a[a.lenght-1]
    console.log("el factor mayor es:"+ max)

    }else {
        if (fin%num===2){
            div=(num/2)
            if(div%2===0 || div%3===0){
                return "error";
            } else {
                console.log (num)
                objeto.lista.push(num)
                contador*=num;
            }

        }
    }
}
