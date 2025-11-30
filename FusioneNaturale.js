//Funzione per creare i 2 array
function creaArray() {
    let array = [];
        for (let i = 0; i < 20; i++) {
            array[i] = Math.floor(Math.random() * 100);
        }

    return array;
}

//Funzione di riordinazione per ogni array singolarmente
function ordinaBubble(array) {
    let lngArray = array.length;

    while (lngArray > 0) {
        for (let i = 0; i < lngArray - 1; i++) {
            if (array[i] > array[i + 1]) {
                let nTemp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = nTemp;
            }
        }
        lngArray--;
    }
}

//Funzione per unire gli array
function unisciArray() {
    let a1 = arr1;
    let a2 = arr2;
    let i = 0;
    let j = 0;
    let k = 0;

    //Riordino l'array
    while (i < a1.length && j < a2.length) {
        if (a1[i] <= a2[j]) {
            arrayFinale[k] = a1[i];
            i++;
        } else {
            arrayFinale[k] = a2[j];
            j++;
        }
        k++;
    }

    //Controllo eventuali elementi di arr1 e arr2
    while (i < a1.length) {
        arrayFinale[k] = a1[i];
        i++;
        k++;
    }

    while (j < a2.length) {
        arrayFinale[k] = a2[j];
        j++;
        k++;
    }

    return arrayFinale;
}

//Funzione per stampare gli array nella console
function stampaArray(arr1, arr2, arrayFinale) {
    console.log("Primo array: " + arr1);
    console.log("Secondo array: " + arr2);
    console.log("Array finale: " + arrayFinale);
}


/* -----------------------------------------------------------------------------------  OTHER  ----------------------------------------------------------------------------------- */
//Funzione per formattare un array
function formattato(array) {
    let nuovo = "";
    for (let i = 0; i < array.length; i++) {
        nuovo += array[i] + ", ";
        if (i % 10 === 0 && i !== 0 && i !== array.length -1) {
            nuovo += "\n";
        }
        if (i === array.length -1) {
            nuovo += array[i];
        }
    }
    return nuovo;
}

//Funzione per inserire gli array nell'html
function htmlArray(arr1, arr2, arrayFinale) {
    let div = document.getElementById("array");
    let a1 = document.createElement("h3");
    let a2 = document.createElement("h3");
    let a3 = document.createElement("h3");

    a1.innerText = 'Array 1:\n' + formattato(arr1);
    a2.innerText = 'Array 2:\n' + formattato(arr2);
    a3.innerText = 'Array finale:\n' + formattato(arrayFinale);
    div.appendChild(a1);
    div.appendChild(a2);
    div.appendChild(a3);
}
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


//Chiamo le funzioni
let arr1 = creaArray();
let arr2 = creaArray();
let arrayFinale = [];

ordinaBubble(arr1);
ordinaBubble(arr2);
unisciArray();
stampaArray(arr1, arr2, arrayFinale);
htmlArray(arr1, arr2, arrayFinale);