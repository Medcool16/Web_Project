const logDiv = document.getElementById('log');
const signDiv = document.getElementById('sign');
//--------------------------------------------------------------
const LoginDet = document.querySelector('.detail1');
const SignDet = document.querySelector('.detail2');
//--------------------------------------------------------------
const btnLog = document.querySelector('#btnLog');
const btnSign = document.querySelector('#btnSign');
//--------------------------------------------------------------
    let log = 0;   let sign = 0;
//-----------------------TEXT---------------------------------------
const newContent1 = document.querySelector('.addedContent1');
const logText = document.createTextNode('Welcome to our Website');
const logH1 = document.createElement('h1');
logH1.appendChild(logText);
newContent1.appendChild(logH1);
newContent1.style.display = "none";
//-----------------------------Txtt---------------------------------
const newContent2 = document.querySelector('.addedContent2')
const signText = document.createTextNode('Welcome Back!!')
const signH1 = document.createElement('h1');
signH1.appendChild(signText);
newContent2.appendChild(signH1);
//--------------------------------------------------------------

SignDet.style.display = "none";
LoginDet.style.display = "block";




//------------------------SIGN IN--------------------------------------
btnSign.addEventListener('click',()=>{
    if(sign == 0){
    logDiv.style.cssText = `
        transform : translateX(-100%);
        transition : 1s;
        `
        signDiv.style.cssText = `
        // border-radius: 15px 0px 0px 15px;
        transform : translateX(100%);
        transition : 1s;
        ` 
        sign++;
    }
    else{
        logDiv.style.cssText = `
        transform : translateX(0);
        transition : 1s;
    `
    signDiv.style.cssText = `
        transform : translateX(0);
        transition : 1s;
    `
    LoginDet.style.display = "";
    SignDet.style.display = "none";
    newContent2.style.display = "";
    newContent1.style.display = "none";
    
        sign--;
    }

})
//--------------------------LOG IN------------------------------------

btnLog.addEventListener('click',()=>{
    if (log == 0) {
        logDiv.style.cssText = `
        border-radius: 15px 0px 0px 15px;
        transform : translateX(-100%);
        transition : 1s;
    `
    signDiv.style.cssText = `
        border-radius: 0px 15px 15px 0px;
        transform : translateX(100%);
        transition : 1s;
    `   
        log++;
        SignDet.style.display = "";
        newContent2.style.display = "none";
        newContent1.style.display = "";
        LoginDet.style.display = "none";
    }
    else{
        logDiv.style.cssText = `
        transform : translateX(0);
        transition : 1s;
    `
    signDiv.style.cssText = `
        transform : translateX(0);
        transition : 1s;
    `
        log--;
    }
    
})

//--------------------------------------------------------------