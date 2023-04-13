dnes = new Date();
mesiac = dnes.getMonth() + 1;
den = dnes.getDate();
kalendar = new Array("Nový rok", "Alexandra", "Daniela", "Drahoslav", "Andrea", "Antónia",
    "Bohuslava/Róbert", "Severín", "Alexej", "Dáša", "Malvína",
    "Ernest", "Rastislav", "Radovan", "Dobroslav", "Kristína",
    "Nataša", "Bohdana", "Drahomíra", "Dalibor", "Vincent", "Zora",
    "Miloš", "Timotej", "Gejza", "Tamara", "Bohuš", "Alfonz",
    "Gašpar", "Ema", "Emil",
    "Tatiana", "Erika/Erik", "Blažej", "Veronika", "Agáta", "Dorota",
    "Vanda", "Zoja", "Zdenko", "Gabriela", "Dezider", "Perla",
    "Arpád", "Valentín", "Pravoslav", "Ida", "Miloslava", "Jaromír",
    "Vlasta", "Lívia", "Eleonóra", "Etela", "Roman/Romana",
    "Matej", "Frederik/Frederika", "Viktor", "Alexander",
    "Zlatica", "",
    "Albín", "Anežka", "Bohumil/Bohumila", "Kazimír", "Fridrich",
    "Radoslav/Radoslava", "Tomáš/Róbert", "Alan/Alana", "Františka",
    "Branislav/Bruno", "Angela/Angelika", "Gregor", "Vlastimil",
    "Matilda", "Svetlana", "Boleslav", "Ľubica", "Eduard", "Jozef",
    "Víazoslav", "Blahoslav", "Beňadik", "Adrián", "Gabriel",
    "Marián", "Emanuel", "Alena", "Soňa", "Miroslav", "Vieroslava",
    "Benjamín",
    "Hugo", "Zita", "Richard", "Izidor", "Miroslava", "Irena",
    "Zoltán/Róbert", "Albert", "Milena", "Igor", "Július", "Estera",
    "Aleš", "Justína", "Fedor", "Dana/Danica", "Rudolf", "Valér",
    "Jela", "Marcel", "Ervín", "Slavomír", "Vojtech", "Juraj",
    "Marek", "Jaroslava", "Jaroslav", "Jarmila", "Lea",
    "Anastázia",
    "Sviatok práce", "Žigmund", "Galina", "Florián", "Lesana/Lesia", "Hermína",
    "Monika/Róbert", "Ingrida", "Roland", "Viktória", "Blažena",
    "Pankrác", "Servác", "Bonifác", "Žofia", "Svetozár", "Gizela",
    "Viola", "Gertrúda", "Bernard", "Zina", "Júlia/Juliana",
    "Želmíra", "Ela", "Urban", "Dušan", "Iveta", "Viliam", "Vilma",
    "Ferdinand", "Petronela/Petrana",
    "Žaneta", "Xénia", "Karolína", "Lenka", "Laura", "Norbert",
    "Róbert", "Medard", "Stanislava", "Margaréta", "Dobroslava",
    "Zlatko", "Anton", "Vasil", "Vít", "Blanka", "Adolf", "Vratislav",
    "Alfréd", "Valéria", "Alojz", "Paulína", "Sidónia", "Ján",
    "Tadeáš", "Adriana", "Ladislav/Ladislava", "Beata",
    "Peter/Pavol/Petra", "Melánia",
    "Diana", "Berta", "Miloslav", "Prokop", "Cyril/Metod", "Patrik/Patrícia",
    "Oliver", "Ivan", "Lujza", "Amália", "Milota", "Nina", "Margita",
    "Kamil", "Henrich", "Drahomír", "Bohuslav", "Kamila", "Dušana",
    "Ižja/Eliáš", "Daniel", "Magdaléna", "Ožga", "Vladimír",
    "Jakub", "Anna/Hana", "Božena", "Krištof", "Marta", "Libuša",
    "Ignác",
    "Božidara", "Gustáv", "Jerguš", "Dominik/Dominika", "Hortenzia",
    "Jozefína", "Štefánia", "Oskar", "Ľubomíra", "Vavrinec",
    "Zuzana", "Darina", "Ľubomír", "Mojmír", "Marcela", "Leonard",
    "Milica", "Elena/Helena", "Lýdia", "Anabela", "Jana", "Tichomír",
    "Filip", "Bartolomej", "Ľudovít", "Samuel", "Silvia", "Augustín",
    "Nikola/Nikolaj", "Ružena", "Nora",
    "Drahoslava", "Linda", "Belo", "Rozália", "Regína", "Alica",
    "Marianna", "Miriama", "Martina", "Oleg", "Bystrík",
    "Mária", "Ctibor", "Ľudomil", "Jolana", "Ľudmila", "Olympia",
    "Eugénia", "Konštantín", "Ľuboslav/Ľuboslava", "Matúš", "Móric",
    "Zdenka", "Ľuboš/Ľubor", "Vladislav", "Edita", "Cyprián",
    "Václav", "Michal/Michaela", "Jarolím",
    "Arnold", "Levoslav", "Stela", "František", "Viera", "Natália",
    "Eliška", "Brigita", "Dionýz", "Slavomíra", "Valentína",
    "Maximilián", "Koloman", "Boris", "Terézia", "Vladimíra",
    "Hedviga", "Lukáš", "Kristián", "Vendelín", "Uršuža", "Sergej",
    "Alojzia", "Kvetoslava", "Aurel", "Demeter", "Sabína", "Dobromila",
    "Klára", "Šimon/Simona", "Aurélia",
    "Denis/Denisa", "", "Hubert", "Karol", "Imrich", "Renáta",
    "René", "Bohumír", "Teodor", "Tibor", "Martin/Maroš", "Svätopluk",
    "Stanislav", "Irma", "Leopold", "Agnesa", "Klaudia", "Eugen",
    "Alžbeta", "Félix", "Elvíra", "Cecília", "Klement", "Emília",
    "Katarína", "Kornel", "Milan", "Henrieta", "Vratko",
    "Ondrej/Andrej",
    "Edmund", "Bibiána", "Oldrich", "Barbora", "Oto", "Mikuláš",
    "Ambróz", "Marína", "Izabela", "Radúz", "Hilda", "Otília",
    "Lucia", "Branislava/Bronislava", "Ivica", "Albína", "Kornélia",
    "Sláva/Slávka", "Judita", "Dagmara", "Bohdan", "Adela", "Nadežda",
    "Adam/Eva", "Vianoce", "Štefan", "Filoména", "Ivana/Ivona", "Milada",
    "Dávid", "Silvester");
dniVMesiaci = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
kalendarIndex = 0;
for (i = 0; i < (mesiac - 1); i++) kalendarIndex += dniVMesiaci[i];
kalendarIndex += (den - 1);

/*---------------------------------------------------------------------*/

var quotes = new Array()
quotes[0] = 'Najväčším umením je byť človekom.'
quotes[1] = 'Ani najkrajšie slovo nemá cenu, ak sa rozchádza s činom.'
quotes[2] = 'Najbližšie k pravde má ten, kto tvrdí, že k pravde je veľmi ďaleko.'
quotes[3] = 'Kde sa pred statočným človekom dvere zatvárajú, tam vládne nestatočnosť.'
quotes[4] = 'Najcennejšou devízou človeka je jeho charakter.'
quotes[5] = 'Pravda má úžasnú moc. Aj keď ju ukrižujú, vždy vstane z mŕtvych.'
quotes[6] = 'Mýli sa ten, kto si myslí, že je neomylný.'
quotes[7] = 'Kto nemiluje, zaživa zomiera.'
quotes[8] = 'Starý je iba ten, komu je dlhý deň.'
quotes[9] = 'Šaty robia človeka, ale nie jeho charakter.'
quotes[10] = 'Najťažšie je o pravde presvedčiť hlupáka.'
quotes[11] = 'Múdry je ten, kto sa učí na chybách iných.'
quotes[12] = 'Hodnota slova závisí, od akého človeka pochádza.'
quotes[13] = 'Najväčším umením je odstrániť rozdiel medzi slovami a činmi.'
quotes[14] = 'Najťažšie je narovanať krivé charaktery.'
quotes[15] = 'Pravda je ako korenie. Nie je dobré dávať jej naraz priveľa.'
quotes[16] = 'Šťastný môže byť iba ten, kto sa naučí byť so všetkým spokojný.'
quotes[17] = 'Inteligentný človek je skromný, lebo vie, že oproti tomu, čo ešte nevie, vie veľmi málo.'
quotes[18] = 'Česť a svedomie sa nedajú na trhu kúpiť, ale predať áno.'
quotes[19] = 'Minulosť je najlepšou učiteľkou budúcnosti.'
quotes[20] = 'Aj malá lož môže zapríčiniť veľké škody.'
quotes[21] = 'Sebca nikdy nebolia problémy, ktoré spôsobil druhým.'
quotes[22] = 'Pozrieť sa pravde do očí robí najväčšie problémy luhárovi.'
quotes[23] = 'Nepríjemná pravda je hodnotnejšia ako kvetnatá lož.'
quotes[24] = 'Najlepšiu pamäť má smrť. Na nikoho nezabudne.'
quotes[25] = 'Nejeden človek dokáže za peniaze urobiť všetko, len nie byť človekom.'
quotes[26] = 'Najťažšie medzi ľuďmi je nájsť človeka.'
quotes[27] = 'Hlupák je preto hlupákom, lebo si myslí, že je najmúdrejší.'
quotes[28] = 'Sláva odoberá rozum a klamstvo charakter.'
quotes[29] = 'Najvážnejšou chorobou politiky je, že produkuje krásne reči a zväčša kyslé plody.'
quotes[30] = 'Kritika je jediná vedecká disciplína, ktorá je vedecky chápaná najmenej.'

var whichquote = Math.floor(Math.random() * (quotes.length));

/*---------------------------------------------------------------------*/

const nameday = document.querySelector("#names");
const namedayspan = nameday.querySelector("span");

for (; ;) {
    namedayspan.textContent = "Dnes má meniny " + kalendar[kalendarIndex] + " | Zajtra má meniny " + kalendar[kalendarIndex + 1];
    setTimeout(wait, 5000);
    namedayspan.textContent = (quotes[whichquote]);
    setTimeout(wait, 5000);
}

function wait() {}