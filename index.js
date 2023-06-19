const wrapper= document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBTN = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

generateBTN.addEventListener("click",()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBTN.innerText ="Generating QR Code...";
    qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load" , ()=>{
        wrapper.classList.add("active");
        generateBTN.innerText = "Generate QR Code";
    });
   
});

qrInput.addEventListener("Keyup" , ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})