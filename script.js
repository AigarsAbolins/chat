const API = "https://chat2.aigarsabolins.repl.co/"
let zina = document.querySelector('.manaZina');//let ir mainīgais.Comanda uzzina kas ir rakstits laukumā//
let zinas = document.querySelector('.chataZinas');
let vards = document.querySelector('.vards');

function sutitZinu()
{
    console.log('sutitZinu() darbojas');
    
    zinas.innerHTML = zinas.innerHTML + '<br/>'zina.value;
    
    fetch(API + '/sutit/' + vards.value +'/'+ zina.value)
}


async function ieladetChataZinas()
{
    let datiNoServera = await fetch('/'API + '/lasit');//Fetč komanda ļauj piekļūt kautkam//
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}

//setInterval( ieladetChataZinas, 1000 )//Reizi sekundē ielādē jaunākās ziņas no faila 1000 milisekundes//

async function ieladetChataZinasJson()
{
    let datiNoServera = await fetch('/'API + '/lasit');//Fetč komanda ļauj piekļūt kautkam//
    let dati = await datiNoServera.json();
    
    //console.log(await dati[0]['zina'])
    zinas.innerHTML = '';
    i = 0;
    while ( i < await dati.length )//Kamēr tiks izpildīts tas kas ir šajās ieka'vas, tikmēr dabosies tas kas ir figūriekavās
    {
        console.log(i);
        zinas.innerHTML = zinas.innerHTML + dati[i]['zina'];
        i = i+1;
    }
}//šeit beidzas funkcija ieladeCharaZinasJson()
