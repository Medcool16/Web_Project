
function createFloatingDiv(event) {
    // get the clicked image element
    const clickedImage = event.target;
    
    // create a new div element
    const floatingDiv = document.createElement('div');
    floatingDiv.classList.add('floating-div');
    floatingDiv.setAttribute('id','test')
    // append the floating div to the image container
    clickedImage.parentNode.appendChild(floatingDiv);

    // the remove button

    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.setAttribute('class','rmbtn')
    floatingDiv.appendChild(btn)
    btn.onclick = ()=>{
        floatingDiv.remove();
    }
    let ID = clickedImage.getAttribute('id');
    console.log(ID);

    let conte = document.getElementById('Q');
    let r=conte.textContent;
   
    floatingDiv.append(r);

    // add butto, d'inscription 
      let a = document.createElement('button');
      a.textContent = "sign in";
      a.classList.add('class','Inscrir');
      floatingDiv.append(a);

      

  }
  
  
  
  
  
  