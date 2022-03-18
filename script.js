const API = "https://chat2.aigarsabolins.repl.co/"
let zina = document.querySelector('.manaZina');//let ir mainīgais.Comanda uzzina kas ir rakstits laukumā//
let zinas = document.querySelector('.chataZinas');

function sutitZinu()
{
    console.log('sutitZinu() darbojas');
    
    zinas.innerHTML = zinas.innerHTML + '<br/>'zina.value;
    
    fetch(API + '/sutit/Juris/' + zina.value)
}


async function ieladetChataZinas()
{
    let datiNoServera = await fetch('/'API + 'lasit');//Fetč komanda ļauj piekļūt kautkam//
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}

setInterval( ieladetChataZinas, 1000 )//Reizi sekundē ielādē jaunākās ziņas no faila 1000 milisekundes//