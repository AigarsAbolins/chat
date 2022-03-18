//console.log(1)//
let zina = document.querySelector('.manaZina');//let ir mainīgais.Comanda uzzina kas ir rakstits laukumā//
let zinas = document.querySelector('.chataZinas');

function sutitZinu()
{
    console.log('sutitZinu() darbojas');
    
    zinas.innerHTML = zinas.innerHTML + '<br/>'zina.value;
}


async function ieladetChataZinas()
{
    let datiNoServera = await fetch('chatazinas.txt')//Fetč komanda ļauj piekļūt kautkam//
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}