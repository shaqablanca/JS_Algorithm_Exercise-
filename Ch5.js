function countv(txt){
  var vovels = 'aeiouAEIOU';
  var cnt = 0;  
  for(var i = 0; i < txt.length ; i++){
         if (vovels.indexOf(txt[i]) !== -1){ // "indexOf" if the value of txt is found
            cnt += 1;
         }
    }  return cnt;
} console.log(countv("Asla ve asla bU isten vazgEcmek yOk"));