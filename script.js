function generateQRCode() {
    let text = document.getElementById("text").value;
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = ""; // Clear previous QR code
    
    if (text.trim() !== "") {
        console.log("Generating QR code for:", text);
        new QRCode(qrcodeContainer, {
            text: text,
            width: 128,
            height: 128
        });
    } else {
        console.log("No text entered");
        alert("Please enter text to generate a QR code.");
    }
}
