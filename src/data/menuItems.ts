export type MenuItem = {
    id: number;
    name: string;
    description: string;
    price: string;
    category: 'antipasti' | 'antipasti-warmes' | 'pasta' | 'pizza' | 'risotto' | 'pesce' | 'carne' | 'beilagen' | 'weine-rose' | 'weine-rosso' | 'weine-bianco' | 'alkoholfrei' | 'bier';
    tags?: string[];
    options?: {
        name: string;
        price: string;
    }[];
};

export const menuItems: MenuItem[] = [
    // Antipasti
    {
        id: 1,
        name: 'Bruschetta Classico',
        description: '2 Stück – mit Knoblauch, Tomaten, Basilikum & nativem Olivenöl extra',
        price: '8',
        category: 'antipasti',
        tags: ['vegetarisch', 'vegan']
    },
    {
        id: 2,
        name: 'Insalata di Pomodoro',
        description: 'Cherry-Tomaten, Schalotten & Avocado, mariniert mit Aceto & extra nativem Olivenöl',
        price: '13',
        category: 'antipasti',
        tags: ['vegetarisch', 'vegan']
    },
    {
        id: 3,
        name: 'Formaggio di Capra',
        description: 'Gratinierter Ziegenkäse mit Mandeln & Honig auf Rucola, dazu marinierte Rote Bete mit Aceto Balsamico',
        price: '15',
        category: 'antipasti',
        tags: ['vegetarisch']
    },
    {
        id: 4,
        name: 'Burrata Pugliese',
        description: 'Cremige Burrata auf San-Marzano-Tomaten mit Basilikumpesto',
        price: '16',
        category: 'antipasti',
        tags: ['vegetarisch']
    },
    {
        id: 5,
        name: 'Vitello Tonnato',
        description: 'Kalbfleisch-Carpaccio mit feiner Thunfisch-Kapernsauce',
        price: '15',
        category: 'antipasti'
    },
    {
        id: 6,
        name: 'Dreierlei Tatar',
        description: 'Rindertatar mit Trüffel, Lachstatar mit Avocado & Tomatentatar mit Stracciatella di Burrata',
        price: '28',
        category: 'antipasti'
    },
    {
        id: 7,
        name: 'Scampi al Forno',
        description: 'Ofengegarene Garnelen mit Cherry-Tomaten, Knoblauch & Peperoncino',
        price: '17',
        category: 'antipasti'
    },
    {
        id: 8,
        name: 'Calamari Sorrentina',
        description: 'Baby-Kalamar kräftig angebraten mit Sherry-Tomaten, Artischocken & Knoblauch',
        price: '17',
        category: 'antipasti'
    },
    {
        id: 9,
        name: 'Tataki di Tonno',
        description: 'Kalt serviertes Thunfischfilet, mariniert mit Limette & gerösteten sizilianischen Pistazien',
        price: '17',
        category: 'antipasti'
    },
    {
        id: 10,
        name: 'Insalata di Polpo',
        description: 'Oktopussalat mit Oliven, Babykartoffeln, Staudensellerie & frischen Kräutern, mariniert in Zitronen-Olivenöl',
        price: '17',
        category: 'antipasti'
    },
    {
        id: 11,
        name: 'Carpaccio di Manzo',
        description: 'Rinderfilet-Carpaccio auf Rucola & gehobeltem Parmesan',
        price: '17',
        category: 'antipasti',
        options: [
            {
                name: 'Pecorino & frischer Trüffel',
                price: '21'
            }
        ]
    },

    // Warmes Antipasti
    {
        id: 12,
        name: 'Insalata Mista di Stagione',
        description: 'Bunter Saisonsalat',
        price: '11',
        category: 'antipasti-warmes',
        tags: ['vegetarisch', 'vegan'],
        options: [
            {
                name: 'Gebratene Garnelen oder Rinderfiletstreifen',
                price: '21'
            }
        ]
    },

    // Pasta
    {
        id: 13,
        name: 'Pasta all’Arrabbiata con Burrata',
        description: 'Würzige Tomatensauce, Basilikum & cremige Burrata',
        price: '15',
        category: 'pasta',
        tags: ['vegetarisch'],
        options: [
            {
                name: 'Rinderfiletstreifen oder Garnelen',
                price: '19'
            }
        ]
    },
    {
        id: 14,
        name: 'Pasta Asparagi e Salmone',
        description: 'Mit grünem Spargel & Lachs in Hummercremesauce',
        price: '18',
        category: 'pasta'
    },
    {
        id: 15,
        name: 'Spaghetti Aglio, Olio e Peperoncino',
        description: 'Knoblauch, Olivenöl & Chili',
        price: '14',
        category: 'pasta',
        tags: ['vegetarisch', 'vegan'],
        options: [
            {
                name: 'Garnelen',
                price: '19'
            }
        ]
    },
    {
        id: 16,
        name: 'Gnocchi Gorgonzola e Spinaci',
        description: 'In cremiger Gorgonzolasauce mit jungem Spinat',
        price: '17',
        category: 'pasta',
        tags: ['vegetarisch']
    },
    {
        id: 17,
        name: 'Spaghetti alle Vongole',
        description: 'Mit Venusmuscheln, Weißwein, Knoblauch & Petersilie',
        price: '19',
        category: 'pasta'
    },
    {
        id: 18,
        name: 'Ravioli Porcini e Tartufo',
        description: 'Steinpilz-Ravioli mit Trüffelcremesauce & frischem Trüffel',
        price: '19',
        category: 'pasta',
        tags: ['vegetarisch']
    },
    {
        id: 19,
        name: 'Cacio e Pepe',
        description: 'Klassisch römisch – Pecorino & schwarzer Pfeffer',
        price: '14',
        category: 'pasta',
        tags: ['vegetarisch']
    },

    // Pizza
    {
        id: 20,
        name: 'Pizza Bresaola',
        description: 'Mit San Marzano Tomatensauce, Fior di Latte Mozzarella, Bresaola (luftgetrockneter Rinderschinken), Rucola, gehobeltem Parmesan und Cherry-Tomaten',
        price: '18',
        category: 'pizza'
    },
    {
        id: 21,
        name: 'Pizza Frutti di Mare',
        description: 'Mit San Marzano Tomatensauce, Fior di Latte Mozzarella, gebratenen Meeresfrüchten mit Knoblauch, leicht pikant',
        price: '18',
        category: 'pizza'
    },
    {
        id: 22,
        name: 'Pizza Tartufo',
        description: 'Mit Trüffelcreme, Bufala Mozzarella und frischem Trüffel',
        price: '18',
        category: 'pizza',
        tags: ['vegetarisch']
    },
    {
        id: 23,
        name: 'Pizza Verde',
        description: 'Mit Fior di Latte Mozzarella, Gorgonzola, grünem Spargel, Spinat und Kirschtomaten',
        price: '17',
        category: 'pizza',
        tags: ['vegetarisch']
    },
    {
        id: 24,
        name: 'Pizza Caprese',
        description: 'Mit San Marzano Tomatensauce, Fior di Latte Mozzarella, Bufala Mozzarella, San Marzano Tomaten und frischem Basilikum',
        price: '16',
        category: 'pizza',
        tags: ['vegetarisch']
    },

    // Risotto
    {
        id: 25,
        name: 'Risotto Vegetariano',
        description: 'Mit Artischocken, grünem Spargel & Kirschtomaten',
        price: '18',
        category: 'risotto',
        tags: ['vegetarisch', 'vegan'],
        options: [
            {
                name: 'Garnelen',
                price: '23'
            }
        ]
    },

    // Pesce (Fish)
    {
        id: 26,
        name: 'Filetto di Tonno',
        description: 'Kurz gegrilltes Thunfischfilet in Teriyaki-Glasur',
        price: '26',
        category: 'pesce'
    },
    {
        id: 27,
        name: 'Gamberoni alla Griglia',
        description: 'Wildfanggarnelen vom Grill mit Kräutern, Knoblauch & Chili',
        price: '28',
        category: 'pesce'
    },
    {
        id: 28,
        name: 'Polpo alla Siciliana',
        description: 'Gegrillter Oktopus in sizilianischer Tomatensauce mit Oliven, Knoblauch & mediterranen Kräutern',
        price: '26',
        category: 'pesce'
    },

    // Carne (Meat)
    {
        id: 29,
        name: 'Filetto di Manzo',
        description: 'Rinderfilet (deutsche Färse) vom Grill mit Rotweinschalottenreduktion',
        price: '32',
        category: 'carne'
    },
    {
        id: 30,
        name: 'Saltimbocca alla Romana',
        description: 'Kalbsmedaillons mit Bresaola & Salbeibutter',
        price: '24',
        category: 'carne'
    },
    {
        id: 31,
        name: 'Lammrücken alla Griglia',
        description: 'Vom Grill in Pecorino-Cremesauce mit Rucola & Pecorino',
        price: '25',
        category: 'carne'
    },

    // Beilagen (Side Dishes)
    {
        id: 32,
        name: 'Rosmarin-Kartoffeln',
        description: '',
        price: '8',
        category: 'beilagen',
        tags: ['vegetarisch', 'vegan']
    },
    {
        id: 33,
        name: 'Mediterranes Gemüse',
        description: '',
        price: '8',
        category: 'beilagen',
        tags: ['vegetarisch', 'vegan']
    },
    {
        id: 34,
        name: 'Trüffelpasta',
        description: '',
        price: '12',
        category: 'beilagen',
        tags: ['vegetarisch']
    },
    {
        id: 35,
        name: 'Spaghetti aglio e olio',
        description: '',
        price: '8',
        category: 'beilagen',
        tags: ['vegetarisch', 'vegan']
    },
    {
        id: 36,
        name: 'Kartoffelpüree mit pikantem Rahmspinat',
        description: '',
        price: '9',
        category: 'beilagen',
        tags: ['vegetarisch']
    },
    {
        id: 37,
        name: 'Süßkartoffelpüree',
        description: '',
        price: '8',
        category: 'beilagen',
        tags: ['vegetarisch', 'vegan']
    },

    // Weine - Rosé
    {
        id: 38,
        name: 'Ros Alba Rosé (Friaul)',
        description: 'Elegant, feinfruchtig und frisch',
        price: '8.00',
        category: 'weine-rose',
        options: [
            {
                name: '0,2l',
                price: '8.00'
            },
            {
                name: '0,75l',
                price: '37.00'
            }
        ]
    },

    // Weine - Rotwein (Rosso)
    {
        id: 39,
        name: 'Timineri Syrah (Sizilien)',
        description: 'Trocken, vollmundig und leicht',
        price: '9.00',
        category: 'weine-rosso',
        options: [
            {
                name: '0,2l',
                price: '9.00'
            },
            {
                name: '0,75l',
                price: '37.00'
            }
        ]
    },
    {
        id: 40,
        name: 'Primitivo di Puglia',
        description: 'Fruchtig, trocken und leicht',
        price: '8.00',
        category: 'weine-rosso',
        options: [
            {
                name: '0,2l',
                price: '8.00'
            },
            {
                name: '0,75l',
                price: '37.00'
            }
        ]
    },
    {
        id: 41,
        name: 'Montepulciano d’Abbruzzo',
        description: 'Kräftig und vollmundig',
        price: '9.00',
        category: 'weine-rosso',
        options: [
            {
                name: '0,2l',
                price: '9.00'
            },
            {
                name: '0,75l',
                price: '38.00'
            }
        ]
    },
    {
        id: 42,
        name: 'Rotwein der Woche',
        description: '',
        price: '14.00',
        category: 'weine-rosso',
        options: [
            {
                name: '0,2l',
                price: '14.00'
            }
        ]
    },

    // Weine - Weißwein (Bianco)
    {
        id: 43,
        name: 'Pinot Grigio IGT (Friaul)',
        description: 'Frisch, ausgewogen, mit feiner Frucht',
        price: '8.00',
        category: 'weine-bianco',
        options: [
            {
                name: '0,2l',
                price: '8.00'
            },
            {
                name: '0,75l',
                price: '27.00'
            }
        ]
    },
    {
        id: 44,
        name: 'Sauvignon Friaul Italien',
        description: 'Trocken, fruchtig, mit feiner Frische',
        price: '8.00',
        category: 'weine-bianco',
        options: [
            {
                name: '0,2l',
                price: '8.00'
            },
            {
                name: '0,75l',
                price: '36.00'
            }
        ]
    },
    {
        id: 45,
        name: 'Terre del Po Riesling (Piemont)',
        description: 'Frisch, aromatisch und trocken',
        price: '9.00',
        category: 'weine-bianco',
        options: [
            {
                name: '0,2l',
                price: '9.00'
            },
            {
                name: '0,75l',
                price: '38.00'
            }
        ]
    },
    {
        id: 46,
        name: 'Weißwein der Woche',
        description: '',
        price: '14.00',
        category: 'weine-bianco',
        options: [
            {
                name: '0,2l',
                price: '14.00'
            }
        ]
    },

    // Alkoholfreie Getränke
    {
        id: 47,
        name: 'Purezza (laut/leise)',
        description: 'Premium Table Water',
        price: '6.90',
        category: 'alkoholfrei',
        options: [
            {
                name: '0,75l',
                price: '6.90'
            }
        ]
    },
    {
        id: 48,
        name: 'Cola',
        description: '',
        price: '4.20',
        category: 'alkoholfrei',
        options: [
            {
                name: '0,2l',
                price: '4.20'
            }
        ]
    },
    {
        id: 49,
        name: 'Fanta',
        description: '',
        price: '4.20',
        category: 'alkoholfrei',
        options: [
            {
                name: '0,2l',
                price: '4.20'
            }
        ]
    },
    {
        id: 50,
        name: 'Cola Zero',
        description: '',
        price: '4.20',
        category: 'alkoholfrei',
        options: [
            {
                name: '0,2l',
                price: '4.20'
            }
        ]
    },
    {
        id: 51,
        name: 'Verschiedene Säfte',
        description: '',
        price: '4.20',
        category: 'alkoholfrei',
        options: [
            {
                name: '0,2l',
                price: '4.20'
            }
        ]
    },
    {
        id: 52,
        name: 'Säfte als Schorle',
        description: '',
        price: '4.20',
        category: 'alkoholfrei',
        options: [
            {
                name: '0,3l',
                price: '4.20'
            }
        ]
    },

    // Bier
    {
        id: 53,
        name: 'Bitburger',
        description: 'Vom Fass',
        price: '4.70',
        category: 'bier'
    },
    {
        id: 54,
        name: 'Alsterwasser',
        description: 'Vom Fass',
        price: '4.70',
        category: 'bier'
    },
    {
        id: 55,
        name: 'Peroni',
        description: 'Flaschenbier (auch 0,0%)',
        price: '4.90',
        category: 'bier'
    },
    {
        id: 56,
        name: 'Benediktiner',
        description: 'Flaschenbier (auch alkoholfrei)',
        price: '6.50',
        category: 'bier'
    }
];