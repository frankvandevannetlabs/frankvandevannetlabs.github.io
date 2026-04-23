document.addEventListener("DOMContentLoaded", function () {

// 1. VCF inhoud genereren
const vcf = `
BEGIN:VCARD
VERSION:3.0
FN:John Doe
TEL;TYPE=CELL:+32475845915
EMAIL:frank.vandevannet@gmail.com
END:VCARD
`;

// 2. Blob maken
const blob = new Blob([vcf], { type: "text/vcard" });

// 3. Downloadbare URL genereren
const vcfUrl = URL.createObjectURL(blob);

// 4. QR-code genereren
new QRCode(document.getElementById("qrcode"), {
  text: vcfUrl,
  width: 256,
  height: 256
});
});
