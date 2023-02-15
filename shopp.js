function updatenumber(isIncrase){
  const input = document.getElementById('case-number-field');
  const inputs = input.value ;
  const newInputs = parseInt(inputs);

  let totalInput = 0 ;
  if(isIncrase===true){
    totalInput = newInputs +1 ;
  } 
  else{
    totalInput =newInputs -1
  }
  
  input.value = totalInput ;
  return totalInput ;
}

function totalInputprice(totalInput){
  const totalInputuser = totalInput *59 ;

  const balance = document.getElementById('balance') ;
  balance.innerText = totalInputuser ;
}
document.getElementById('btn-case-plus').addEventListener('click',function(){
  const totalInput =  updatenumber(true)
  totalInputprice(totalInput) ;
  
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
 const totalInput = updatenumber(false) ;
 totalInputprice(totalInput)
//  const totalInputuser = totalInput*59 ;

//  const balance = document.getElementById('balance') ;
//  balance.innerText = totalInputuser ;
})