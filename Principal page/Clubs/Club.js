
let bloc = document.querySelector('.imgHolder');

bloc.addEventListener('click',(EVENT)=>{

    // get the clicked image element
    const clickedImage = EVENT.target;
    if (clickedImage.tagName == "IMG"){          //tester que l'element cliquer est une image 
    
    // create a new div element
    const floatingDiv = document.createElement('div');
    floatingDiv.classList.add('floating-div');
    floatingDiv.setAttribute('id','test');
    // append the floating div to the image container
    


    //Add content to floatingDiv 
      let IDbloc = clickedImage.parentNode.parentNode.getAttribute('id');      //savoir l'id d'image cliquer 
           let H1 = document.createElement('h1');
               H1.classList.add('flo-div-heading');  //add class to the heading
           let Para = document.createElement('p');
              Para.classList.add('flo-div-paragraph');   //add class to the paragraph
           let description ;

      switch (IDbloc) {
        case "D1": {  description = document.getElementById('Q1');
                      H1.textContent = description.firstElementChild.textContent;
                      Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                      floatingDiv.append(H1);
                      floatingDiv.append(Para);
        }break;

        case "D2": {  description = document.getElementById('Q2');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);
        }break;

        case "D3": {description = document.getElementById('Q3');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);

        }break;

        case "D4": {description = document.getElementById('Q4');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);

        }break;

        case "D5": {description = document.getElementById('Q5');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);

        }break;

        case "D6": {description = document.getElementById('Q6');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);

        }break;

        case "D7": {description = document.getElementById('Q7');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);

        }break;

        case "D8": {description = document.getElementById('Q8');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);

        }break;

        case "D9": {description = document.getElementById('Q9');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);

        }break;

        case "D10": {description = document.getElementById('Q10');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);

        }break;

        case "D11": {description = document.getElementById('Q11');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);

        }break;

        case "D12": {description = document.getElementById('Q12');
                    H1.textContent = description.firstElementChild.textContent;
                    Para.textContent = description.firstElementChild.nextElementSibling.textContent;
                    floatingDiv.append(H1);
                    floatingDiv.append(Para);

        }break;

      
        default: let a=0;
            break;
      }


    // the remove button
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.setAttribute('class','rmbtn');
    floatingDiv.append(btn);

    btn.onclick = ()=>{
        floatingDiv.remove();
    }

    // add butto, d'inscription 
      let sign = document.createElement('a');
      sign.textContent = "registration";
      sign.classList.add('class','Inscrir');
      sign.setAttribute('href','Formulaire/Form.html')
      floatingDiv.append(sign);

      let Iframe = document.createElement('iframe');
              Iframe.setAttribute('src','Clubs/description group/gr.html');
              floatingDiv.append(Iframe);

           Iframe.style.cssText = `
           width:650Px;
           height:350px;
           border : none;
           `   
    
      clickedImage.parentNode.appendChild(floatingDiv);
}
  });


  
  
  
  
  
  