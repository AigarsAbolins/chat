const API = 'https://chat2.aigarsabolins.repl.co/'
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
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}

async function ieladetChataZinasJson()
{
    let datiNoServera = await fetch('/'API + '/lasit');//Fetč komanda ļauj piekļūt kautkam//
    let dati = await datiNoServera.json();
    
    //console.log(await dati[0]['zina'])
    zinas.innerHTML = '';
    i = 0;
    while ( i < await dati.length )//Kamēr tiks izpildīts tas kas ir šajās iekavās, tikmēr dabosies tas kas ir figūriekavās
    {
        //console.log(i);
       
        let laiks = '[<i>' + '????          ' + '</i>] ';
        if ("laiks" in dati[i]) {
            laiks = '[<i>' + dati[i]['laiks'] + '</i>] ';
        }
        zinas.innerHTML = zinas.innerHTML + laiks + dati[i]['vards']+': '+dati[i]['zina']+'<br />';

        i = i+1;
    }
   zinas.scrollTop = zinas.scrollHeight; 
}//šeit beidzas funkcija ieladeCharaZinasJson()
setInterval( ieladetChataZinasJson, 1000 )//Reizi sekundē ielādē jaunākās ziņas no faila 1000 milisekundes//
