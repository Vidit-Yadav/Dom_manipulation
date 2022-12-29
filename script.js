
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
  }  else{
    let obj={
      username:naam,
      emailid:email,
      contact:phone
  
    }
    
    // console.log(1)
    localStorage.setItem(email,JSON.stringify(obj));
  
    var x=document.createElement('li');
    x.innerText=email + ' : ' + naam;
    x.className='list-group-item list-group-item-action list-group-item-dark'
    x.style='margin-right:10px'
    
    var y=document.createElement('button');
    y.innerText='Edit'
    y.className='btn btn-primary'
    y.style='margin:10px'
    x.appendChild(y);

    var z=document.createElement('button');
    z.innerText='Delete'
    z.className='btn btn-dark'
    x.appendChild(z);
  
    document.body.appendChild(x);

    
    

  }
  
    
}

