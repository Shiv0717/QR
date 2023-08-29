let imgBoxs=document.getElementById("imgBox");
let qrImages=document.getElementById("qrImage");
let qrTexts=document.getElementById("qrText");


function Generate(){
qrImages.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTexts.value;

imgBoxs.classList.add("show-img")
}