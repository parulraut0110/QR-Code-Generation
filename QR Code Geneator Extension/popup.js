document.getElementById('generateBtn').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    
    if (url) {
      const canvas = document.getElementById('qrcodeCanvas');
      canvas.innerHTML = '';  // Clear previous QR code
  
      // Generate the QR code directly
      const qrcode = new QRCode(canvas, {
        text: url,
        width: 256,  // Adjusted width for larger QR code
        height: 256  // Adjusted height for larger QR code
      });
    } else {
      alert('Please enter a valid URL');
    }
  });
  