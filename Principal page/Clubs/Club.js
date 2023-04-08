
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
           let Iframe = document.createElement('iframe');
               Iframe.classList.add('iframe-club-desc');   //add class to description
           let description ;

      switch (IDbloc) {
        case "D1": {  description = document.getElementById('Q1');
                        H1.textContent = description.firstElementChild.textContent;
                        Iframe.setAttribute('src','Clubs/description group/gr1.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);
                      
        }break;

        case "D2": {  description = document.getElementById('Q2');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr2.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);
        }break;

        case "D3": {description = document.getElementById('Q3');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr3.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);

        }break;

        case "D4": {description = document.getElementById('Q4');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr4.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);

        }break;

        case "D5": {description = document.getElementById('Q5');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr5.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);

        }break;

        case "D6": {description = document.getElementById('Q6');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr6.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);

        }break;

        case "D7": {description = document.getElementById('Q7');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr7.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);

        }break;

        case "D8": {description = document.getElementById('Q8');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr8.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);

        }break;

        case "D9": {description = document.getElementById('Q9');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr9.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);

        }break;

        case "D10": {description = document.getElementById('Q10');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr10.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);

        }break;

        case "D11": {description = document.getElementById('Q11');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr11.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);

        }break;

        case "D12": {description = document.getElementById('Q12');
                    H1.textContent = description.firstElementChild.textContent;
                    Iframe.setAttribute('src','Clubs/description group/gr12.html');
                      floatingDiv.append(H1);
                      floatingDiv.append(Iframe);

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
      sign.setAttribute('href','Formulaire/index.html');
      floatingDiv.append(sign);

 
      clickedImage.parentNode.appendChild(floatingDiv);
}
  });


  
  
  
  
  
  