function updateInputNumber(isDecrase){
  const input = document.getElementById('input-field');
  const inputs = input.value ;
  const newInputs = parseInt(inputs) ;

   let totalInput = 0 

   if(isDecrase=== true){
    totalInput = newInputs +1 ;
   }
   else{
    totalInput = newInputs -1 ;
   }   
   input.value = totalInput ;                                    
   return totalInput ;
}

function updateInputBalance(totalInput){
const totalInputuser = totalInput*1259 ;
const balance = document.getElementById('balance1') ;
balance.innerText = totalInputuser ;
}
                       
document.getElementById('btn-case-plus1').addEventListener('click',function(){
const totalInput= updateInputNumber(true)
updateInputBalance(totalInput)
 
})

document.getElementById('btn-case-minus1').addEventListener('click',function(){

   const totalInput= updateInputNumber(false)
   updateInputBalance(totalInput)
  //  const totalInputuser = totalInput*1259 ;

  //  const balance = document.getElementById('balance') ;
  //  balance.innerText = totalInputuser ;
})