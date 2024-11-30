// const qrInput=document.getElementById('qr-input');
// const qrImg=document.getElementById('qr-img');
// const qrButtom=document.getElementById('qr-button');
// console.log(qrInput,qrButtom,qrImg);
// qrButtom.addEventListener('click',function(){
//     const inputValue=qrInput.value;
//     console.log(inputValue);
//     if(inputValue.trim()===''){
//         alert('Please enter a URL or text to generate a QR code')
//         return
//     }
//     else{
//         qrImg.src=`https://chatgpt.com/c/674b551d-8964-8007-9498-9765acd05249=${inputValue}`
//         qrImg.alt=`QR Code for ${inputValue}`;
//     }
// })
document.addEventListener('DOMContentLoaded', function () {
    const qrInput = document.getElementById('qr-input');
    const qrImg = document.getElementById('qr-img');
    const qrButton = document.getElementById('qr-button');

    console.log(qrInput, qrButton, qrImg);

    qrButton.addEventListener('click', function () {
        const inputValue = qrInput.value;
        console.log(inputValue);

        if (inputValue.trim() === '') {
            alert('Please enter a URL or text to generate a QR code');
            return;
        }

        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputValue)}&size=200x200`;
        qrImg.alt = `QR Code for ${inputValue}`;
    });
});
