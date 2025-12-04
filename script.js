const products = [
  // Rosé (Italien)
  {
    name: 'Fantini Cerasuolo d’Abruzzo 2024',
    category: 'rosé',
    country: 'Italien',
    region: 'Abruzzo',
    year: 2024,
    grape: 'Montepulciano',
    price: 99,
    outlet: false,
    description: 'Intens abrikos, jordbær og blodappelsin. Moderne stil med frisk, saltet finish.',
    image: 'https://vinshoppen.dk/media/catalog/product/cache/ead6c8f813c0ae3211a0c62c30ef29ec/image/1604ef5d/fantini-cerasuolo-d-abruzzo-2024.jpg',
  },
  {
    name: 'Pietradolce Etna Rosato',
    category: 'rosé',
    country: 'Italien',
    region: 'Sicilien (Etna)',
    year: 2023,
    grape: 'Nerello Mascalese',
    price: 189,
    outlet: false,
    description: 'Vulkansk mineralitet, hvide kirsebær, citrus og et let tanninbid fra lava-skråningerne.',
    image: 'https://www.vildmedvin.dk/img/600/600/resize/p/i/pietradolce.jpg',
  },
  {
    name: 'Rosarò Salice Salentino Rosato',
    category: 'rosé',
    country: 'Italien',
    region: 'Puglia',
    year: 2022,
    grape: 'Negroamaro',
    price: 119,
    outlet: false,
    description: 'Fyldig syditaliensk rosé med modne jordbær, rosenblade og krydret, tør afslutning.',
    image: 'https://www.salentowineshop.com/wp-content/uploads/2019/06/rosar%C3%B2-salice-salentino-rosato-feudi-di-guagnano.jpg',
  },
  {
    name: 'Chiaretto Spumante Rosé Zeni',
    category: 'rosé',
    country: 'Italien',
    region: 'Veneto (Bardolino)',
    year: 2023,
    grape: 'Corvina / Rondinella',
    price: 139,
    outlet: false,
    description: 'Perlende Chiaretto med ribs, hvid peber og sprød mousse. Perfekt til aperitivo.',
    image: 'https://slagelsevinkompagni.dk/product-images/29/07/spumante-chiaretto-zeni1732523035.5065.png.png',
  },
  {
    name: 'Maremma Toscana Rosato DOC Bio 2022',
    category: 'rosé',
    country: 'Italien',
    region: 'Toscana',
    year: 2022,
    grape: 'Sangiovese',
    price: 125,
    outlet: false,
    description: 'Økologisk toscaner med vilde jordbær, melon og livlig, kølig syre. Server 8-10°C.',
    image: 'https://etilika.dk/20582-large_default/maremma-toscana-rosato-doc-bio-2022-tenuta-moraia.jpg',
  },
  {
    name: 'Cerasuolo d’Abruzzo Classico',
    category: 'rosé',
    country: 'Italien',
    region: 'Abruzzo',
    year: 2023,
    grape: 'Montepulciano',
    price: 109,
    outlet: false,
    description: 'Dyb rosato med tranebær, granatæble og saltet finish. Økologisk dyrket.',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS-o3bqMUq0y8YlHvPTK77bPZjp22y7JVZFR23fFoFjVGZ_t24nq19mK1VXCmxhuod_knaeuDLtYybaBOeGAHPpNpCF-BpU4zDqFKVN_CJwmt5vL3kxCtw',
  },
  {
    name: 'Bardolino Chiaretto Classico',
    category: 'rosé',
    country: 'Italien',
    region: 'Veneto',
    year: 2023,
    grape: 'Corvina / Rondinella',
    price: 89,
    outlet: false,
    description: 'Lys, saftig rosé med jordbær, vandmelon og et strejf citrus. Perfekt som aperitif.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Valtenesi Chiaretto Bio',
    category: 'rosé',
    country: 'Italien',
    region: 'Gardasøen',
    year: 2023,
    grape: 'Groppello / Barbera',
    price: 119,
    outlet: false,
    description: 'Økologisk, lys rosé med hvide ferskner, citrus og floral næse. Server 8-10°C.',
    image: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Rosato di Negroamaro Pet Nat',
    category: 'rosé',
    country: 'Italien',
    region: 'Puglia',
    year: 2022,
    grape: 'Negroamaro',
    price: 149,
    outlet: false,
    description: 'Let mousserende naturvin med lyse røde bær, urtepræg og tør finish.',
    image: 'https://images.unsplash.com/photo-1527098779502-5444f1e62d1a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Calabria Cirò Rosato',
    category: 'rosé',
    country: 'Italien',
    region: 'Calabria',
    year: 2023,
    grape: 'Gaglioppo',
    price: 105,
    outlet: false,
    description: 'Havbris, røde ribs og stenede noter fra Calabrias kyst. Let krydret.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Valle d’Aosta Rosato Alpine',
    category: 'rosé',
    country: 'Italien',
    region: 'Valle d’Aosta',
    year: 2021,
    grape: 'Petit Rouge',
    price: 169,
    outlet: false,
    description: 'Bjergfrisk rosé med tranebær, hvide blomster og krystalklar syre.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Rosato di Aglianico Vulcano',
    category: 'rosé',
    country: 'Italien',
    region: 'Basilicata',
    year: 2022,
    grape: 'Aglianico',
    price: 139,
    outlet: false,
    description: 'Mineralsk rosé fra vulkansk jord med kirsebær, blodappelsin og krydderi.',
    image: 'https://images.unsplash.com/photo-1506377872008-397fd055263f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Sicilia Frappato Rosato',
    category: 'rosé',
    country: 'Italien',
    region: 'Vittoria',
    year: 2023,
    grape: 'Frappato',
    price: 119,
    outlet: false,
    description: 'Let, saftig rosé med røde bær, rosenblade og en elegant bitterhed i finish.',
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Langhe Rosato Nebbiolo',
    category: 'rosé',
    country: 'Italien',
    region: 'Piemonte',
    year: 2022,
    grape: 'Nebbiolo',
    price: 159,
    outlet: false,
    description: 'Delikat nebbiolo-rosé med rosenblade, hindbær og let tanninbid.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bolgheri Rosato Marina',
    category: 'rosé',
    country: 'Italien',
    region: 'Bolgheri',
    year: 2023,
    grape: 'Merlot / Cabernet',
    price: 189,
    outlet: false,
    description: 'Luksuriøs kyst-rosé med saltet fersken, blomster og cremet tekstur.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Lago di Garda Organic Rosé',
    category: 'rosé',
    country: 'Italien',
    region: 'Veneto',
    year: 2023,
    grape: 'Corvina / Molinara',
    price: 115,
    outlet: false,
    description: 'Økologisk rosé med melon, hvide blomster og silkeblød afslutning.',
    image: 'https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Tuscan Rosé Riserva',
    category: 'rosé',
    country: 'Italien',
    region: 'Toscana',
    year: 2021,
    grape: 'Sangiovese',
    price: 209,
    outlet: false,
    description: 'Lagret rosé med bløde tanniner, vilde jordbær og let vanilje fra store fade.',
    image: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Puglia Primitivo Rosato',
    category: 'rosé',
    country: 'Italien',
    region: 'Puglia',
    year: 2023,
    grape: 'Primitivo',
    price: 99,
    outlet: true,
    description: 'Saftspændt rosé med modne jordbær og kirsebær. Outlet-parti med skarp pris.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Umbria Rosato Colli del Trasimeno',
    category: 'rosé',
    country: 'Italien',
    region: 'Umbrien',
    year: 2022,
    grape: 'Sangiovese / Gamay del Trasimeno',
    price: 129,
    outlet: false,
    description: 'Krydret, urtepræget rosé med modne brombær og frisk syre.',
    image: 'https://images.unsplash.com/photo-1527098779502-5444f1e62d1a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Alto Adige Lagrein Rosato',
    category: 'rosé',
    country: 'Italien',
    region: 'Sydtyrol',
    year: 2022,
    grape: 'Lagrein',
    price: 175,
    outlet: false,
    description: 'Alpin rosé med solbær, viol og frisk mountain-crisp syre.',
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Lambrusco Rosato Secco',
    category: 'rosé',
    country: 'Italien',
    region: 'Emilia-Romagna',
    year: 2023,
    grape: 'Lambrusco di Sorbara',
    price: 115,
    outlet: false,
    description: 'Tør, perlende rosato med lyse kirsebær og blomstrende næse. Server let kølig.',
    image: 'https://images.unsplash.com/photo-1506377872008-397fd055263f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Liguria Golfo del Tigullio Rosato',
    category: 'rosé',
    country: 'Italien',
    region: 'Liguria',
    year: 2023,
    grape: 'Sangiovese / Ciliegiolo',
    price: 145,
    outlet: false,
    description: 'Kystnær rosé med saltet finish, hvide blomster og sød citrus.',
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80',
  },
  // Prosecco (Italien)
  {
    name: 'Prosecco Superiore Valdobbiadene DOCG',
    category: 'prosecco',
    country: 'Italien',
    region: 'Valdobbiadene',
    year: 2023,
    grape: 'Glera',
    price: 119,
    outlet: false,
    description: 'Fine, vedvarende bobler med hvide blomster, grønne pærer og let mineralitet.',
    image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Asolo Extra Brut DOCG',
    category: 'prosecco',
    country: 'Italien',
    region: 'Asolo',
    year: 2022,
    grape: 'Glera',
    price: 129,
    outlet: false,
    description: 'Ekstra tør stil med citrus, hvide ferskner og kridtet finish. Server 6-8°C.',
    image: 'https://images.unsplash.com/photo-1510626176961-4b37d0b4e904?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Rosé Millesimato',
    category: 'prosecco',
    country: 'Italien',
    region: 'Treviso',
    year: 2023,
    grape: 'Glera / Pinot Nero',
    price: 115,
    outlet: false,
    description: 'Laksefarvet Prosecco med jordbær, lyse kirsebær og cremet mousse.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cartizze Grand Cru Dry',
    category: 'prosecco',
    country: 'Italien',
    region: 'Cartizze',
    year: 2022,
    grape: 'Glera',
    price: 299,
    outlet: false,
    description: 'Top-cru med cremet mousse, moden pære og lang, elegant finish.',
    image: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Col Fondo Naturale',
    category: 'prosecco',
    country: 'Italien',
    region: 'Conegliano',
    year: 2021,
    grape: 'Glera',
    price: 149,
    outlet: false,
    description: 'Flaskefermenteret, ufiltreret Prosecco med brødkrumme, citrus og saltet kant.',
    image: 'https://images.unsplash.com/photo-1509057199576-632a47484ece?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Frizzante "Vigneto Familiare"',
    category: 'prosecco',
    country: 'Italien',
    region: 'Treviso',
    year: 2023,
    grape: 'Glera',
    price: 89,
    outlet: true,
    description: 'Let perlende frizzante tappet med ølkapsel – citron, æble og blomster.',
    image: 'https://images.unsplash.com/photo-1506377872008-397fd055263f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Brut Metodo Martinotti',
    category: 'prosecco',
    country: 'Italien',
    region: 'Friuli',
    year: 2023,
    grape: 'Glera',
    price: 105,
    outlet: false,
    description: 'Klassisk tankgæret Prosecco med sprød syre, citrus og hvide blomster.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Dry Vigna Vecchia',
    category: 'prosecco',
    country: 'Italien',
    region: 'Valdobbiadene',
    year: 2022,
    grape: 'Glera fra gamle stokke',
    price: 159,
    outlet: false,
    description: 'Let sødmefuld stil med modne pærer, akaciehonning og silkeblød mousse.',
    image: 'https://images.unsplash.com/photo-1527098779502-5444f1e62d1a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Extra Dry Bio',
    category: 'prosecco',
    country: 'Italien',
    region: 'Treviso',
    year: 2023,
    grape: 'Glera',
    price: 99,
    outlet: false,
    description: 'Økologisk Prosecco med hvide ferskner, grønne æbler og balanceret restsukker.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Rosé Brut Bio',
    category: 'prosecco',
    country: 'Italien',
    region: 'Veneto',
    year: 2023,
    grape: 'Glera / Pinot Nero',
    price: 119,
    outlet: false,
    description: 'Økologisk, tør rosé-Prosecco med kirsebær, ribs og energisk mousse.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Superiore Rive di Santo Stefano',
    category: 'prosecco',
    country: 'Italien',
    region: 'Rive di Santo Stefano',
    year: 2022,
    grape: 'Glera',
    price: 185,
    outlet: false,
    description: 'Stejle enkeltmarkers mineralitet med citrus, pære og kridtet finish.',
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Cartizze Pas Dosé',
    category: 'prosecco',
    country: 'Italien',
    region: 'Cartizze',
    year: 2021,
    grape: 'Glera',
    price: 315,
    outlet: false,
    description: 'Udoseret luksus-Prosecco med skarp syre, citrusolie og lang mineralsk hale.',
    image: 'https://images.unsplash.com/photo-1509057199576-632a47484ece?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Valdobbiadene Sui Lieviti',
    category: 'prosecco',
    country: 'Italien',
    region: 'Valdobbiadene',
    year: 2021,
    grape: 'Glera',
    price: 159,
    outlet: false,
    description: 'Traditionel gærkontakt i flaske giver brødkrumme, citron og nøddepræg.',
    image: 'https://images.unsplash.com/photo-1510626176961-4b37d0b4e904?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Colline Trevigiane Brut',
    category: 'prosecco',
    country: 'Italien',
    region: 'Colline Trevigiane',
    year: 2023,
    grape: 'Glera',
    price: 95,
    outlet: false,
    description: 'Frisk, dagligdags boble med æble, citron og let mandel i eftersmag.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Extra Brut Montello',
    category: 'prosecco',
    country: 'Italien',
    region: 'Montello',
    year: 2022,
    grape: 'Glera',
    price: 135,
    outlet: false,
    description: 'Stenede noter, lime og sprød syre fra kølige Montello-skråninger.',
    image: 'https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Rosé Rive di Guia',
    category: 'prosecco',
    country: 'Italien',
    region: 'Rive di Guia',
    year: 2022,
    grape: 'Glera / Pinot Nero',
    price: 155,
    outlet: false,
    description: 'Enkeltmarks rosé med jordbær, fersken og elegante bobler.',
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco DOC Treviso Brut Nature',
    category: 'prosecco',
    country: 'Italien',
    region: 'Treviso',
    year: 2023,
    grape: 'Glera',
    price: 109,
    outlet: false,
    description: 'Brut nature med lime, grønne urter og knasende tør afslutning.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Dry Magnum Festa',
    category: 'prosecco',
    country: 'Italien',
    region: 'Veneto',
    year: 2022,
    grape: 'Glera',
    price: 239,
    outlet: false,
    description: 'Magnum til festbordet med blød mousse, pærer og let honning.',
    image: 'https://images.unsplash.com/photo-1527098779502-5444f1e62d1a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Valdobbiadene Extra Dry',
    category: 'prosecco',
    country: 'Italien',
    region: 'Valdobbiadene',
    year: 2023,
    grape: 'Glera',
    price: 119,
    outlet: false,
    description: 'Ikonisk stil med hvide blomster, grønne æbler og silkeblød mousse.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Bio Sui Lieviti Col Fondo',
    category: 'prosecco',
    country: 'Italien',
    region: 'Asolo',
    year: 2021,
    grape: 'Glera',
    price: 165,
    outlet: false,
    description: 'Øko, naturgæret med let slør. Nøddepræg, brioche og citronskal.',
    image: 'https://images.unsplash.com/photo-1509057199576-632a47484ece?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Rive di Farra di Soligo',
    category: 'prosecco',
    country: 'Italien',
    region: 'Farra di Soligo',
    year: 2022,
    grape: 'Glera',
    price: 175,
    outlet: false,
    description: 'Rive-mark med citrus, hvide blomster og præcis syre.',
    image: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Brut Millesimato 2024',
    category: 'prosecco',
    country: 'Italien',
    region: 'Conegliano-Valdobbiadene',
    year: 2024,
    grape: 'Glera',
    price: 125,
    outlet: false,
    description: 'Årgangsprosecco med citrus, hvide ferskner og kridtet nerve.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Prosecco Valdobbiadene Frizzante',
    category: 'prosecco',
    country: 'Italien',
    region: 'Valdobbiadene',
    year: 2023,
    grape: 'Glera',
    price: 92,
    outlet: false,
    description: 'Let perlende, charmerende og floral – perfekt til lette snacks.',
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80',
  },
  // Smagskasse
  {
    name: 'Italiensk rosé & Prosecco smagskasse (6 flasker)',
    category: 'smagskasse',
    country: 'Italien',
    region: 'Veneto, Piemonte, Sicilien',
    year: 2024,
    grape: 'Mix',
    price: 699,
    outlet: false,
    description: '3 roséer + 3 Prosecco: inkluderer gavekort og gaveklar emballage. Leveres månedligt.',
    image: 'https://images.unsplash.com/photo-1506377872008-397fd055263f?auto=format&fit=crop&w=900&q=80',
  },
];

// Udskift alle produktbilleder med en kurateret liste af verificerede vinfotos (rosé/prosecco)
const imagePools = {
  'rosé': [
    'https://images.pexels.com/photos/161601/wine-rose-provence-pink-161601.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/4664300/pexels-photo-4664300.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/340996/pexels-photo-340996.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/1407857/pexels-photo-1407857.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/1407855/pexels-photo-1407855.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/2147508/pexels-photo-2147508.jpeg?auto=compress&cs=tinysrgb&w=900',
  ],
  prosecco: [
    'https://images.pexels.com/photos/1407859/pexels-photo-1407859.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/4051440/pexels-photo-4051440.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/3570/wine-restaurant-glass-drink.jpg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/264793/pexels-photo-264793.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/1407856/pexels-photo-1407856.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/1407858/pexels-photo-1407858.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/143731/pexels-photo-143731.jpeg?auto=compress&cs=tinysrgb&w=900',
  ],
};

const poolIndex = { 'rosé': 0, prosecco: 0 };
products.forEach((product) => {
  const pool = imagePools[product.category];
  if (pool && pool.length) {
    const idx = poolIndex[product.category] % pool.length;
    product.image = pool[idx];
    poolIndex[product.category] += 1;
  }
});

const productGrid = document.getElementById('product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search');
const cartItems = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
const giftWrap = document.getElementById('gift-wrap');
const giftBox = document.getElementById('gift-box');
const checkoutBtn = document.querySelector('[data-checkout]');
const toast = document.querySelector('.toast');
const STORAGE_CART = 'nvh-cart';
const STORAGE_WRAP = 'nvh-giftWrap';
const STORAGE_BOX = 'nvh-giftBox';
const cart = new Map();

function formatPrice(value) {
  return `${value.toLocaleString('da-DK')} kr.`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function saveState() {
  const serialized = Array.from(cart.values());
  localStorage.setItem(STORAGE_CART, JSON.stringify(serialized));
  localStorage.setItem(STORAGE_WRAP, JSON.stringify(!!giftWrap.checked));
  localStorage.setItem(STORAGE_BOX, JSON.stringify(!!giftBox.checked));
}

function loadState() {
  try {
    const storedCart = JSON.parse(localStorage.getItem(STORAGE_CART) || '[]');
    storedCart.forEach((item) => cart.set(item.name, item));
    giftWrap.checked = JSON.parse(localStorage.getItem(STORAGE_WRAP) || 'false');
    giftBox.checked = JSON.parse(localStorage.getItem(STORAGE_BOX) || 'false');
  } catch (e) {
    console.warn('Kunne ikke læse gemt kurv', e);
  }
}

function createCard(product) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.category = product.category;
  card.dataset.name = product.name.toLowerCase();
  card.dataset.country = product.country.toLowerCase();
  card.dataset.grape = product.grape.toLowerCase();

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="meta">
      <span class="badge">${product.region}</span>
      <span class="price">${formatPrice(product.price)}</span>
    </div>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="meta">
      <span class="badge">Årgang ${product.year}</span>
      <span class="badge">${product.grape}</span>
    </div>
    <div class="meta">
      ${product.outlet ? '<span class="pill small">Outlet</span>' : '<span class="pill small">Jul</span>'}
      <button class="btn ghost" data-details>Detaljer</button>
      <button class="btn primary" data-add>Tilføj til kurv</button>
    </div>
  `;

  card.querySelector('[data-add]').addEventListener('click', () => addToCart(product));
  card.querySelector('[data-details]').addEventListener('click', () => showDetails(product));
  return card;
}

function renderProducts(filter = 'alle', term = '') {
  productGrid.innerHTML = '';
  const normalized = term.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesFilter = filter === 'alle' || product.category === filter;
    const matchesSearch =
      !normalized ||
      product.name.toLowerCase().includes(normalized) ||
      product.region.toLowerCase().includes(normalized) ||
      product.grape.toLowerCase().includes(normalized);
    return matchesFilter && matchesSearch;
  });

  filtered.forEach((product) => productGrid.appendChild(createCard(product)));

  if (!filtered.length) {
    productGrid.innerHTML = '<p>Ingen vine matcher din søgning. Prøv en anden region.</p>';
  }
}

function addToCart(product) {
  const key = product.name;
  const existing = cart.get(key) || { ...product, qty: 0 };
  existing.qty += 1;
  cart.set(key, existing);
  renderCart();
  showToast(`${product.name} er lagt i kurven`);
}

function removeFromCart(name) {
  cart.delete(name);
  renderCart();
}

function changeQty(name, delta) {
  const item = cart.get(name);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  cart.set(name, item);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h4>${item.name}</h4>
        <div class="muted">${item.region}</div>
        <div class="muted">${formatPrice(item.price)} pr. fl.</div>
      </div>
      <div>
        <div class="qty">
          <button aria-label="Fjern" data-minus>-</button>
          <span style="padding:6px 10px;">${item.qty}</span>
          <button aria-label="Tilføj" data-plus>+</button>
        </div>
        <button class="ghost" data-remove>Fjern</button>
      </div>
    `;

    div.querySelector('[data-minus]').addEventListener('click', () => changeQty(item.name, -1));
    div.querySelector('[data-plus]').addEventListener('click', () => changeQty(item.name, 1));
    div.querySelector('[data-remove]').addEventListener('click', () => removeFromCart(item.name));

    cartItems.appendChild(div);
  });

  if (giftWrap.checked) subtotal += 35;
  if (giftBox.checked) subtotal += 85;

  subtotalEl.textContent = formatPrice(subtotal);
  checkoutBtn.classList.toggle('disabled', cart.size === 0);
  saveState();
}

function showDetails(product) {
  const detail = `\n${product.name}\nÅrgang: ${product.year}\nDrue: ${product.grape}\nRegion: ${product.region}, ${product.country}\nPris: ${formatPrice(
    product.price
  )}\n\n${product.description}`;
  alert(detail);
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter, searchInput.value);
  });
});

searchInput.addEventListener('input', (e) => {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
  renderProducts(activeFilter, e.target.value);
});

giftWrap.addEventListener('change', renderCart);
giftBox.addEventListener('change', renderCart);

document.querySelector('[data-clear]').addEventListener('click', () => {
  cart.clear();
  renderCart();
});

checkoutBtn.addEventListener('click', (e) => {
  if (cart.size === 0) {
    e.preventDefault();
    showToast('Læg rosé eller Prosecco i kurven før checkout');
  } else {
    saveState();
  }
});

document.querySelector('[data-subscribe]')?.addEventListener('click', () => {
  showToast('Smagskasse-abonnement aktiveret – vi sender detaljer på mail');
});

loadState();
renderProducts();
renderCart();
