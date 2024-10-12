function generateQRCode(text) {
    var canvas = document.getElementById('qr-canvas');
    var context = canvas.getContext('2d');

    // Clear previous QR code
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (text) {
        // Generate the new QR Code
        new QRCode(canvas, {
            text: text,
            width: 256,
            height: 256
        });

        document.getElementById('qr-result').innerText = "QR Code generated successfully!";
    } else {
        document.getElementById('qr-result').innerText = "Please enter text to generate QR code.";
    }
}

// Generate QR code from custom text
document.getElementById('generate-custom').addEventListener('click', function() {
    var customText = document.getElementById('custom-text').value;
    generateQRCode(customText);
});

// Generate QR code for the current tab URL
document.getElementById('generate-url').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTabUrl = tabs[0].url;
        generateQRCode(activeTabUrl);
    });
});
