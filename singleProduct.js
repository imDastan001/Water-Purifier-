
const queryString = window.location.search;
const urlparms = new URLSearchParams(queryString);

const vname= urlparms.get('name');
const vprice= urlparms.get('price');
const vSKU= urlparms.get('SKU');
const vcategory= urlparms.get('category');
const vdescription= urlparms.get('description');
const vimage= urlparms.get('image');
const vreview = urlparms.get('review');
const reviewerName = urlparms.get('reviewerName');
const vratings = urlparms.get('ratings')
const vnumber = urlparms.get('number');



document.getElementById('CustomaddName').innerText=vname;
document.getElementById('Customaddimg').setAttribute('src',vimage);
document.getElementById('Customaddreviewimg').setAttribute('src',vimage);
document.getElementById('CustomaddPrice').innerText=vprice;
document.getElementById('Customadddesc').innerText=vdescription;
document.getElementById('CustomaddSKU').innerText=vSKU;
document.getElementById('CustomaddCategory').innerText=vcategory;
document.getElementById('Customaddreviewername').innerText=reviewerName;
document.getElementById('Customaddreview').innerText=vreview;
document.getElementById('Customaddratingstar').innerHTML=vratings;
document.getElementById('Customaddtotalratings').innerText=vnumber;
document.getElementById('imagezoom').style.setProperty('--url',`url('${vimage}')`)

const alertmessage = ()=>{
    alert("Thank you for your purchase! Your order has been successfully placed.");
}


let imagezoom =document.getElementById('imagezoom');
imagezoom.addEventListener('mousemove',(event)=>{
    imagezoom.style.setProperty('--display','block');
        let pointer={
            x:(event.offsetX*100)/imagezoom.offsetWidth,
            y:(event.offsetY*100)/imagezoom.offsetHeight,
        }
        imagezoom.style.setProperty('--zoom-x',pointer.x+'%');
        imagezoom.style.setProperty('--zoom-y',pointer.y+'%');
            
})
imagezoom.addEventListener('mouseout',()=>{
    imagezoom.style.setProperty('--display','none');
})


