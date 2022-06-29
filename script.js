let age = document.getElementById('age');
let anneePermis = document.getElementById('anneePermis');
let nbAccident = document.getElementById('nbAccident');
let anneeAssurance = document.getElementById('anneeAssurance');
let msg = document.getElementById("msg");
let points;


function assurance() {
    nbAccident = nbAccident.value;

    if (nbAccident >= 3) {
        msg.innerText = "Refusé";
    } else {
        points = 0;
        age = age.value;
        anneePermis = anneePermis.value;
        anneeAssurance = anneeAssurance.value;

        if (age > 25) {
            points++;
        }
        if (anneePermis > 2) {
            points++;
        }
        if (anneeAssurance > 1) {
            points++;
        }

        points = points - nbAccident;
        console.log(points);

        switch(points) {
            case 3: msg.innerHTML = "Bleu";
            break;
            case 2: msg.innerHTML = "Vert";
            break;
            case 1: msg.innerHTML = "Orange"
            break;
            case 0: msg.innerHTML = "Rouge";
            break;
            case -1: msg.innerHTML = "Refusé"
            break;
            default:
        }
    }

}

btn.addEventListener("click", assurance, false);
