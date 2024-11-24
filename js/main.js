$(document).ready(function() {
    $('#pobierzDane').on('click', function(){
        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                const daneHtml = `
                <p>Imie: ${data.imie}</p>
                <p>Nazwisko: ${data.nazwisko}</p>
                <p>Zawod: ${data.zawod}</p>
                <p>Firma: ${data.firma}</p>
                `;
                $('#daneProgramisty').html(daneHtml);

            },
            error: function(error) {
                console.error('Wystapil blad podczas pobierania danych:', error);
            }
        });
    });
});