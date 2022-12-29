
var btn=document.getElementById('mybtn');

btn.addEventListener('click',finish);
function finish(e){
  e.preventDefault()
  
  var naam=document.getElementById("name").value;
  var email=document.getElementById('email').value;
  if (naam=='' || email == ''){
    
    const y = document.createElement('p');
    y.innerText="Please Fill all details before submitting";
    y.className='alert alert-danger'
    document.body.appendChild(y);
  }  
  // console.log(1)
  localStorage.setItem(email,naam);
    
}

