let vocali = ["a","e","i","o","u"];

function init(string) {
    if (string === "") {
        alert("Errore. Inserisci una stringa");
    }
    document.getElementById("doppie").innerHTML = controlloDoppie(string);
    document.getElementById("dittongo").innerHTML = controlloDittongo(string);
}

function controlloDoppie(string) {
    let doppie = 0;
    for (let i = 0; i <= string.length -1; i++) {
        if (string[i] === string[i + 1]) {
            doppie++;
        }
    }
    return doppie;
}

function controlloDittongo(string) {
    let dittongo = 0;

    for (let i = 0; i <= string.length -1; i++) {
        if (string[i].includes(vocali) && (string[i + 1].includes(vocali))) {
            dittongo++;
        }
    }
    return dittongo;
}

document.getElementById("input").addEventListener("change", () => {
    init(document.getElementById("input").value.toString().toLowerCase());
});
