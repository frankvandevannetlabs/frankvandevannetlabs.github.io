function downloadVCard(event) {
    // Prevent the default behavior of the <a> tag
    if (event) {
        event.preventDefault();
    }

    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Vande Vannet;Frank;;;
FN:Frank Vande Vannet
TEL;TYPE=cell:+32475845915
EMAIL:frank.vandevannet@gmail.com
ADR;TYPE=home,work:;;Oudenaardestraat 39;Vichte (Anzegem);Belgie;8570;
URL:https://www.yourwebsite.com
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Frank_Vande_Vannet.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}