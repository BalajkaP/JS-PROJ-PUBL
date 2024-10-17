// toto je moment, kedy vytvarame funkciu
// vsetko medzi { a } je telo funkcie
// telo funkcie zacina zlozenou zatvorkou {
// a je ukoncene zlozenou zatvorkou }
// v tomto pripade riadky 6, 7, 8 su jeden prikaz 
function pozdrav(meno, priezvisko) {
	console.log('Ahoj ' + meno + ' ' + priezvisko + '!!');
}

// tento jeden prikaz prave vytvoril novu funkciu 
// javascriptu pribudla nova schopnost 
// nova funkcia, ktora ocakava, ze do nej posles 2 hodnoty

// zatial sa NIC NEDEJE!!
// nic sa nikam nevypisuje!!
// je to jak ked si v obchode kupis mixer
// ten mixer NIC NEMIXUJE 
// ten mixer zacne mixovat V BUDUCNOSTI
// ked ho zapnes
// a to sa deje dole nizsie, v hlavnom programe


// ------------------
// HLAVNY PROGRAM
// ------------------


// toto je ten moment, kedy zapinas mixer 
// v tomto momente sa spustia vsetky riadky v tele funkcie pozdrav()
// v tomto pripade konkretne riadok 7
pozdrav('Vašo', 'Patejdl');

// tu sa znova spusti riadok 7
// ale vypis do konzole bude iny, pretoze do funkcie posielame ine hodnoty
pozdrav('Ewa', '🎶🎵🎶');


// tentokrat ziskame hodnoty cez vyskakujuce prompt() okno
let meno = prompt('zadaj meno: ');
let priezvisko = prompt('zadaj priezvisko: ');

// do konzole sa vypise meno a priezvisko, ktore user zadal cez prompt okno
pozdrav(meno, priezvisko);




// FUNKCIA JE VLASTNY VESMIR 
// ------------------------------------------------
// 
// v tele funkcie mozes vytvarat premenne 
// tieto premenne su DOCASNE
// existuju iba vo vnutri funkcie
// a iba pocas toho, ako sa funkcia spusta 
// pozri sem:

function vajcia() {
	let ahoj = 'vajčiská';
	console.log(ahoj);
}

// ------------------
// HLAVNY PROGRAM
// ------------------

let ahoj = 'ahoj';
vajcia();
console.log(ahoj);

// vsimni si, ze v hlavnom progames mas premenenu ahoj
// a vo funkcii mas tiez premennu ahoj
// maju sice rovnaky nazov, ale su to uplne ine premenne
// premenna ahoj vo funkcii vajcia() existuje iba vo funkcii vajcia()

// v hlavnom programe najprv vytvoime premenneu ahoj s hodnotou 'ahoj'
// potom spustime funkciu
// to znamena, ze teraz sa spusti kod na riadku 57 a potom 58
// takze docasne vznikne uplne ina premennena ahoj
// s hodnotou 'vajčiská' a tato hodnota sa vypise do konzole
// az teraz sa spusti riadok 67
// a do konzole sa vypise slovo 'ahoj'




// FUNKCIA PLUS Z DOMACEJ ULOHY
// ------------------------------------------------
// 
// zacneme s domacou ulohou 1d)
// s rozdielom, ze este som v kode nepouzival slovicko "return"
// return vysvetlim na dalsej hodine 

function plus(a, b) {
	console.log(a + b);
}

// ------------------
// HLAVNY PROGRAM
// ------------------

plus(400, 20);
plus(2.2, 5.3); // dolezite je skusit aj desatinne cisla
plus(58, 11);




// KONVERZIE DATOVYCH TYPOV
// ------------------------------------------------
// 
// zmenime kod na ulohu 1e)
// zmena je, ze cisla, ktore budeme scitovat, ziskame cez prompt()
// a narazime na problem

let prveCislo = prompt('zadaj PRVE cislo: ');
let druheCislo = prompt('zadaj DRUHE cislo: ');

plus(prveCislo, druheCislo);

// problem je, ze ak ako prve cislo cez prompt zadas 400
// a ako druhe cislo zadas 20
// vysledok bude "40020" na miesto 420

// "problem" je, ze do promptu zadavas text 
// takze javascript k textu "400" prilepi text "20"
// a vznike "40020"

// casto potrebujes PREVOD MEDZI DATOVYMI TYPMI
// napriklad zmenit Text na Cislo
// cize zmenit String() na Number()
// v javascripte napriklad takto

prveCislo = Number(prveCislo);
druheCislo = Number(druheCislo);

plus(prveCislo, druheCislo);

// pripadne to hore mozes zapisat do jedneho riadku
// let prveCislo = Number( prompt('zadaj PRVE cislo: ') );
// let druheCislo = Number( prompt('zadaj DRUHE cislo: ') );

// takze funkcia Number() sa pokusi zmenit hodnotu na cislo
// a tym padom sa zacne fungovat matematika;)




// MDN - dokumentacia pre HTML, CSS, JAVASCRIPT
// ------------------------------------------------
// 
// nikto necaka, ze budes vediet kod pisat z hlavy
// programovanie neni memorizacia prikazov
// ty sa nemusis ucit naspamet nazvy funkcii a ake hodnoty ocakavaju
// jednak VSCode ti doplna kod, dava ti rady
// ale hlavne VSETKO si vies dohladat 
// ak hladas informacie o HTML, CSS, JS tak chces MDN:

// https://developer.mozilla.org/en-US/

// ak ja hladam, ako sa v javascripte pouziva repeat
// tak do google napisem "mdn repeat"
// pripadne "mdn javascript repeat"
// ale proste kazdy vyhladavanie zacinam slovom "mdn"

// najdolezitejsia sekcia su podla mna "Examples"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#examples

// nepotrebujes ani anglictinu
// cisto podla prikladov (Examples) vidis, co repeat robi




// ChatGPT, Copilot, Claude... AI 
// ------------------------------------------------
// 
// ChatGPT (a pod.) mozes pouzivat ako lepsi GOOGLE
// casto potrebujes dokopy informacie z povedzme 5+ MDN podstranok
// namiesto manualne vyhladavania mozes pouzivat ChatGPT
// ak mu das otazku napriklad:

// "ako v javascripte spravím funkciu, ktoré číslo zmení na české koruny?"

// a mozno pridas zopar doplnujucich otazok
// eventuelne sa spolocne dopracujete k funkcii ako je tato:

function financial(number) {
	number = number.toLocaleString('cs-CZ', {
		style: 'currency',
		currency: 'CZK'
	});

	return number;
}

// slovicko return vysvetlim na dalsej hodine
// funkcia sa pouziva napriklad takto:

let skaredeCislo = 7654.587654345676543;

console.log(
	'prosím, zaplať mi ' + financial(skaredeCislo)
)

// a v konzole uvidis, ze skaredeCislo sa zmenilo na pekne cislo




// KAZDY PROGRAMATOR ROBI CHYBY
// ------------------------------------------------
// 
// nonstop 
// v konzole budes vidiet chybove hlasky
// ak nevies, co s tym, mozes chybu rozdiskutovat s ChatGPT




// JSDoc
// ------------------------------------------------
// 
// existuje specialny typ komentara
// vytvor novu funkciu, napriklad lepsiPozdrav
// a na riadku OKAMZITE NAD nou zacni pisat /** 
// TAB (alebo Enter) ti doplni tzv JSDoc komentar
// 
// v nom vies slovami popisat, co tvoja nova funkcia robi
// co presne tvoja funkcia ocakava a co vytvori
// ak ocakava meno a priezvisko obe typu String, tak:

/**
 * POZDRAVIME CLOVEKA (a bude to krasne)
 * @param {String} meno
 * @param {String} priezvisko
 */
function lepsiPozdrav(meno, priezvisko) {
	if (meno && priezvisko) {
		console.log('Ahoj ' + meno + ' ' + priezvisko + '!!');
	}
}

// ta cast medzi /** a */ je text, nie kod
// neni to realny kod, ktory by sa spustal
// ale VSCode teraz vdaka tomu komentaru chape, ze meno je String 
// a tym padom ti vie pekne doplnat kod pre pracu so Stringom

// ‼️ tieto JSDoc komentare NIE SU POTREBNE pre chod kodu ‼️
// ‼️ su to BONUSOVE INFORMACIE, ktore tvojmu kodu mozes dat ‼️
//
// su velmi uzitocne pre teba - pretoze VSCode ti lepsie doplna kod
// su velmi uzitocne pre tvojich kolegov 
// ja som autor tejto funkcie
// ak kolegyna pouziva moju funkciu, komentar jej pomoze chapat nonsons, ktory som vytvoril




// PODMIENKA IF 
// ------------------------------------------------
//
// funkcia ocakava, ze do nej posles 2 hodnoty, 2 Stringy
// ale co ak neposles? 
// riadok if (meno && priezvisko) sposobi
// ze riadok 240 sa spusti IBA AK mame meno AJ priezivsko
// && znamena A ZAROVEN
// mame meno? A ZAROVEN mame priezvisko?
// iba vtedy spustime console.log() vypis

lepsiPozdrav();




// ABSENCIA HODNOTY (undefined, null, ...)
// ------------------------------------------------
//
// bez if podmienky by sa konzola pokusila vypisat pozdrav
// ale namiesto meno a priezviska by vypisala "undefined"
// 
// undefined znamena, ze hodnota neexistuje
// undefined je vacsinou chyba
// undefined ty do kodu prakticky nikdy nepises
// undefined je slovo, ktore budes vidiet napriklad v konzole
// a vtedy vies, ze mas v kode asi chybu
// snazis sa pracovat s premennou, ktora nema hodnotu
// ale sa snazis spustit funkciu, ktora existuje 

// podobna hodnota je "null"
// null tiez znamena, ze hodnota neexistuje
// ale null pises do kodu ty, ako programator/ka
// null znamena, ze uplne umyselne premenna nema hodnotu
// napriklad v eshope vo formulari ak nevyplnis polozku "nazov firmy"
// tak to neni chyba, umyselne nenakupujes na firmu
// takze hodnota je umyselne null 


// pre ukazku undefined vypisu v konzole

let score;
console.log('nahral si: ' + score + ' bodov.');

// konzola vypise "nahral si: undefined bodov."
// co je nezmysel
// snazis sa vypisat nieco, co neexistuje 
// toto by bol moment, kedy pridas if podmienku

// sprav to
// vypis tu vetu IBA AK score existuje 