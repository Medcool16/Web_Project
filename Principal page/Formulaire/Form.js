 
   /* Fonction de vérifier les informations avant d'envoyer */
 
 function afficher(){
    FenetreAffichage = window.open( toolbar=0 , statusbar=0 , 'width=400px , height=130px ');
    FenetreAffichage.document.write("  Vos informations sont comme suit :");
    FenetreAffichage.document.write(" </br> Nom : "+document.formulaire.N1.value);
    FenetreAffichage.document.write(" </br> Prenom : "+document.formulaire.P1.value);
    FenetreAffichage.document.write(" </br> Date de Naissance : "+document.formulaire.D1.value);
    FenetreAffichage.document.write(" </br> Filière : "+document.formulaire.FL1.value);
    FenetreAffichage.document.write(" </br> E-mail : "+document.formulaire.E1.value);
 }


 /* Fonction de Verification */

   FORM.addEventListener('input',()=>{
       if(VR.checked == true  ){
           EN.removeAttribute('disabled');
       }
       else{
         EN.setAttribute('disabled' , 'disabled'); 
       }
   });

  /* Fonction d'animation de heading */
   function Heading(b){

      if(b.style.visibility == "visible"){b.style.visibility = "hidden"}
      else{b.style.visibility = "visible"}
   }

   setInterval("Heading(H1)",500);

 
   /* Fonction du button Envoyer */
  
   

   