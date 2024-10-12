document.getElementById('generateBtn').addEventListener('click', function() {
  const url = document.getElementById('urlInput').value;
  
  if (url) {
    const canvas = document.getElementById('qrcodeCanvas');
    canvas.innerHTML = '';  // Clear previous QR code

    // Generate the QR code directly
    const qrcode = new QRCode(canvas, {
      text: url,
      width: 256,  // QR code width
      height: 256  // QR code height
    });
  } else {
    alert('Please enter a valid URL');
  }
});
 