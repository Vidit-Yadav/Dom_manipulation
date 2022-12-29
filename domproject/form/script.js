
var btn=document.getElementById('mybtn');

btn.addEventListener('click',finish);
function finish(e){
  e.preventDefault()
  
  var naam=document.getElementById("name").value;
  var email=document.getElementById('email').value;
  var phone=document.getElementById('phone').value;

  if (naam=='' || email == ''||phone==''){
    
    const y = document.createElement('p');
    y.innerText="Please Fill all details before submitting";
    y.className='alert alert-danger'
    document.body.appendChild(y);
  }  
  
  let obj={
    username:naam,
    emailid:email,
    contact:phone

  }
  
  // console.log(1)
  localStorage.setItem(email,JSON.stringify(obj));
  
    
}

