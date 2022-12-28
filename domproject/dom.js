var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//form submit event

form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeitem);
//filter event
filter.addEventListener('keyup',filteritems);

//add item
function addItem(e){
    e.preventDefault();
    //get input value

var newitem=document.getElementById('item').value;
var desc=document.getElementById('desc').value;
//crate new li element
var li=document.createElement('li');
//add class
li.className='list-group-item';
//add tex with your input value
li.appendChild(document.createTextNode(newitem)); 
li.appendChild(document.createTextNode(' ' +desc));
//cretae del button

var del=document.createElement('button');
//add classes to del btn
del.className='btn btn-danger btn-sm float-right delete';
//append text node
del.appendChild(document.createTextNode('X'));
//append button to li
li.appendChild(del);

itemList.appendChild(li);
}

function removeitem(e){
    if (e.target.classList.contains('delete')){
        // console.log('del')
        if(confirm('are you sure ?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);

        }
    }
}
function filteritems(e){
    //convert text to lowercase
    var text =e.target.value.toLowerCase();
    //get li's 
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        var description=item.childNodes[1].textContent;
        console.log(description);
        // console.log(itemname);
        if (itemname.toLowerCase().indexOf(text)!=-1 || description.toLowerCase().indexOf(text)!=1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })

}