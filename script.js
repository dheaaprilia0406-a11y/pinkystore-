document
    .getElementById("orderForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const nama =
            document.getElementById("nama").value;

        const jenis =
            document.getElementById("jenis").value;

        const jumlah =
            document.getElementById("jumlah").value;

        const alamat =
            document.getElementById("alamat").value;

    
        const nomor =
            "6281805370544";


        const pesan =
            `PINKYSTORE!

Saya ingin melakukan pemesanan.

Nama: ${nama}
Jenis Print: ${jenis}
Jumlah Halaman: ${jumlah}
Alamat Kos: ${alamat}

Mohon diinformasikan total harganya.
Terima kasih.`;


        const whatsapp =
            `https://wa.me/${6281805370544}?text=${encodeURIComponent(pesan)}`;


        window.open(
            whatsapp,
            "_blank"
        );

    });
    