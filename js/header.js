function beginHeaderSetUp() {
    console.log("beginHeaderSetUp succesfully started.")
    setNames();
}

function setNames() {

    console.log("setNames succesfully started.")
    dnes = new Date();
    mesiac = dnes.getMonth() + 1;
    den = dnes.getDate();
    const kalendar = ["Nový rok", "Alexandra", "Daniela", "Drahoslav", "Andrea", "Antónia",
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
        "Víťazoslav", "Blahoslav", "Beňadik", "Adrián", "Gabriel",
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
        "Dávid", "Silvester"];
    const dniVMesiaci = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    console.log("setNames variables succesfully configured.")
    var kalendarDnes = 0;
    for (i = 0; i < (mesiac - 1); i++) kalendarDnes += dniVMesiaci[i];
    kalendarDnes += (den - 1); kalendarZajtra = kalendarDnes + 1;
    const kalendarString = "Dnes má meniny " + kalendar[kalendarDnes] + " | Zajtra má meniny " + kalendar[kalendarZajtra];
    setQuote(kalendarString)
}

/*---------------------------------------------------------------------*/

function setQuote(currentName) {
    console.log("setQuote succesfully started.")
    const quotes = [
        'Najväčším umením je byť človekom.',
        'Ani najkrajšie slovo nemá cenu, ak sa rozchádza s činom.',
        'Najbližšie k pravde má ten, kto tvrdí, že k pravde je veľmi ďaleko.',
        'Kde sa pred statočným človekom dvere zatvárajú, tam vládne nestatočnosť.',
        'Najcennejšou devízou človeka je jeho charakter.',
        'Pravda má úžasnú moc. Aj keď ju ukrižujú, vždy vstane z mŕtvych.',
        'Mýli sa ten, kto si myslí, že je neomylný.',
        'Kto nemiluje, zaživa zomiera.',
        'Starý je iba ten, komu je dlhý deň.',
        'Šaty robia človeka, ale nie jeho charakter.',
        'Najťažšie je o pravde presvedčiť hlupáka.',
        'Múdry je ten, kto sa učí na chybách iných.',
        'Hodnota slova závisí, od akého človeka pochádza.',
        'Najväčším umením je odstrániť rozdiel medzi slovami a činmi.',
        'Najťažšie je narovanať krivé charaktery.',
        'Pravda je ako korenie. Nie je dobré dávať jej naraz priveľa.',
        'Šťastný môže byť iba ten, kto sa naučí byť so všetkým spokojný.',
        'Inteligentný človek je skromný, lebo vie, že oproti tomu, čo ešte nevie, vie veľmi málo.',
        'Česť a svedomie sa nedajú na trhu kúpiť, ale predať áno.',
        'Minulosť je najlepšou učiteľkou budúcnosti.',
        'Aj malá lož môže zapríčiniť veľké škody.',
        'Sebca nikdy nebolia problémy, ktoré spôsobil druhým.',
        'Pozrieť sa pravde do očí robí najväčšie problémy luhárovi.',
        'Nepríjemná pravda je hodnotnejšia ako kvetnatá lož.',
        'Najlepšiu pamäť má smrť. Na nikoho nezabudne.',
        'Nejeden človek dokáže za peniaze urobiť všetko, len nie byť človekom.',
        'Najťažšie medzi ľuďmi je nájsť človeka.',
        'Hlupák je preto hlupákom, lebo si myslí, že je najmúdrejší.',
        'Sláva odoberá rozum a klamstvo charakter.',
        'Najvážnejšou chorobou politiky je, že produkuje krásne reči a zväčša kyslé plody.',
        'Kritika je jediná vedecká disciplína, ktorá je vedecky chápaná najmenej.'];

    const whichQuote = Math.floor(Math.random() * (quotes.length));
    const todaysQuote = quotes[whichQuote];
    console.log("setQuote variables succesfully configured.")
    setHeader(currentName, todaysQuote);
}
/*---------------------------------------------------------------------*/

function setHeader(currentName, todaysQuote) {
    console.log("setHeader succesfully started.")
    function loop(currentName, todaysQuote) {
        console.log("setHeaderLoop succesfully started.")

        const nameday = document.querySelector("#names");
        const namedayspan = nameday.querySelector("span");

        console.log("setHeaderLoop variables succesfully configured.");
        loop()

        namedayspan.textContent = currentName;
        setTimeout(function () {
            namedayspan.textContent = todaysQuote;
            loop();
        }, 5000);
        loop();
    }
}
