function flt(n){
    
    for (let i=0; i<=(n.length-1);i++) {    
        if (n[i]<0){
             delete n[i];
         }
    } return n
}  console.log(flt([-13,25,-36,74,-85,69,-70,-89]));