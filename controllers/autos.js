AutosSchema = require('../Models/Autos.model');
ModelSchema = require('../Models/model.car');
yearSchema = require('../Models/yea.models.cars');

exports.insert = (req, res) =>  {
    // to add multiples documents
   const autos = [
    {
        _id: 1,
        slug: 'acura',
        make: 'Acura '
       },{
           _id: 2,
           slug: 'alfa-romero',
           make: 'Alfa Romero'
       },{
           _id: 3,
           slug: 'audi',
           make: 'Audi'
       },{
           _id: 4,
           slug: 'bentley',
           make: 'Bentley'
       },{
           _id: 5,
           slug: 'bmw',
           make: 'BMW'
       },{
           _id: 6,
           slug: 'chevrolet',
           make: 'Chevrolet'
       },{
           _id: 7,
           slug: 'dodge',
           make: 'Dodge'
       },{
           _id: 8,
           slug: 'fiat' ,
           make: 'FIAT'
       },{
           _id: 9, 
           slug: 'ford',
           make: 'Ford'
       },{
           _id: 10,
           slug:'jeep',
           make: 'Jeep'
       },{
           _id: 11,
           slug: 'mazda',
           make: 'Mazda'
       },{
           _id: 12,
           slug: 'mercedes',
           make: 'Mercedes-Benz'
       },{
           _id: 13,
           slug: 'nissan',
           make: 'Nissan'
       },{
           _id: 14,
           slug: 'volks',
           make: 'Volkswagen'
       },{
           _id: 15,
           slug: 'toyota',
           make:'Toyota'
       }

   ];
       
    console.log('parte loop');

    AutosSchema.collection.insert(autos, (err, doc) => {
        if(err) res.send({msg: 'no mames un error: '+  err});
        res.json({msg: 'multiples docs is added'});
    });
}

exports.modelos = (req, res) => {
    const modelos = [
        {
          _id: 1,
          slug: "cl",
          model: "CL",
          idmake: 1
        },
        {
          _id: 2,
          slug: "integra",
          model: "Integra",
          idmake: 1
        },
        {
          _id: 3,
          slug: "legend",
          model: "Legend",
          idmake: 1
        },
        {
          _id: 4,
          slug: "mdx",
          model: "MDX",
          idmake: 1
        },
        {
          _id: 5,
          slug: "nsx",
          model: "NSX",
          idmake: 1
        },
        {
          _id: 6,
          slug: "rdx",
          model: "RDX",
          idmake: 1
        },
        {
          _id: 7,
          slug: "rl",
          model: "RL",
          idmake: 1
        },
        {
          _id: 8,
          slug: "rsx",
          model: "RSX",
          idmake: 1
        },
        {
          _id: 9,
          slug: "slx",
          model: "SLX",
          idmake: 1
        },
        {
          _id: 10,
          slug: "tl",
          model: "TL",
          idmake: 1
        },
        {
          _id: 11,
          slug: "tsx",
          model: "TSX",
          idmake: 1
        },
        {
          _id: 12,
          slug: "vigor",
          model: "Vigor",
          idmake: 1
        },
        {
          _id: 13,
          slug: "zdx",
          model: "ZDX",
          idmake: 1
        },
        {
          _id: 14,
          slug: 164,
          model: 164,
          idmake: 2
        },
        {
          _id: 15,
          slug: "spider",
          model: "Spider",
          idmake: 2
        },
        {
          _id: 16,
          slug: 100,
          model: 100,
          idmake: 3
        },
        {
          _id: 17,
          slug: 200,
          model: 200,
          idmake: 3
        },
        {
          _id: 18,
          slug: 4000,
          model: 4000,
          idmake: 3
        },
        {
          _id: 19,
          slug: "4000cs-quattro",
          model: "4000CS Quattro",
          idmake: 3
        },
        {
          _id: 20,
          slug: "4000s",
          model: "4000s",
          idmake: 3
        },
        {
          _id: 21,
          slug: "4000s-quattro",
          model: "4000s Quattro",
          idmake: 3
        },
        {
          _id: 22,
          slug: "5000cs",
          model: "5000CS",
          idmake: 3
        },
        {
          _id: 23,
          slug: "5000cs-quattro",
          model: "5000CS Quattro",
          idmake: 3
        },
        {
          _id: 24,
          slug: "5000s",
          model: "5000S",
          idmake: 3
        },
        {
          _id: 25,
          slug: 80,
          model: 80,
          idmake: 3
        },
        {
          _id: 26,
          slug: 8090,
          model: "80/90",
          idmake: 3
        },
        {
          _id: 27,
          slug: 90,
          model: 90,
          idmake: 3
        },
        {
          _id: 28,
          slug: "a3",
          model: "A3",
          idmake: 3
        },
        {
          _id: 29,
          slug: "a4",
          model: "A4",
          idmake: 3
        },
        {
          _id: 30,
          slug: "a5",
          model: "A5",
          idmake: 3
        },
        {
          _id: 31,
          slug: "a6",
          model: "A6",
          idmake: 3
        },
        {
          _id: 32,
          slug: "a7",
          model: "A7",
          idmake: 3
        },
        {
          _id: 33,
          slug: "a8",
          model: "A8",
          idmake: 3
        },
        {
          _id: 34,
          slug: "allroad",
          model: "Allroad",
          idmake: 3
        },
        {
          _id: 35,
          slug: "cabriolet",
          model: "Cabriolet",
          idmake: 3
        },
        {
          _id: 36,
          slug: "coupe-gt",
          model: "Coupe GT",
          idmake: 3
        },
        {
          _id: 37,
          slug: "coupe-quattro",
          model: "Coupe Quattro",
          idmake: 3
        },
        {
          _id: 38,
          slug: "q5",
          model: "Q5",
          idmake: 3
        },
        {
          _id: 39,
          slug: "q7",
          model: "Q7",
          idmake: 3
        },
        {
          _id: 40,
          slug: "quattro",
          model: "Quattro",
          idmake: 3
        },
        {
          _id: 41,
          slug: "r8",
          model: "R8",
          idmake: 3
        },
        {
          _id: 42,
          slug: "riolet",
          model: "riolet",
          idmake: 3
        },
        {
          _id: 43,
          slug: "rs-4",
          model: "RS 4",
          idmake: 3
        },
        {
          _id: 44,
          slug: "rs-6",
          model: "RS 6",
          idmake: 3
        },
        {
          _id: 45,
          slug: "rs4",
          model: "RS4",
          idmake: 3
        },
        {
          _id: 46,
          slug: "rs6",
          model: "RS6",
          idmake: 3
        },
        {
          _id: 47,
          slug: "s4",
          model: "S4",
          idmake: 3
        },
        {
          _id: 48,
          slug: "s5",
          model: "S5",
          idmake: 3
        },
        {
          _id: 49,
          slug: "s6",
          model: "S6",
          idmake: 3
        },
        {
          _id: 50,
          slug: "s8",
          model: "S8",
          idmake: 3
        },
        {
          _id: 51,
          slug: "tt",
          model: "TT",
          idmake: 3
        },
        {
          _id: 52,
          slug: "v8",
          model: "V8",
          idmake: 3
        },
        {
          _id: 53,
          slug: "arnage",
          model: "Arnage",
          idmake: 4
        },
        {
          _id: 54,
          slug: "azure",
          model: "Azure",
          idmake: 4
        },
        {
          _id: 55,
          slug: "azure-t",
          model: "Azure T",
          idmake: 4
        },
        {
          _id: 56,
          slug: "brooklands",
          model: "Brooklands",
          idmake: 4
        },
        {
          _id: 57,
          slug: "continental",
          model: "Continental",
          idmake: 4
        },
        {
          _id: 58,
          slug: "continental-flying-s",
          model: "Continental Flying S",
          idmake: 4
        },
        {
          _id: 59,
          slug: "continental-gt",
          model: "Continental GT",
          idmake: 4
        },
        {
          _id: 60,
          slug: "continental-gtc",
          model: "Continental GTC",
          idmake: 4
        },
        {
          _id: 61,
          slug: "continental-super",
          model: "Continental Super",
          idmake: 4
        },
        {
          _id: 62,
          slug: "mulsanne",
          model: "Mulsanne",
          idmake: 4
        },
        {
          _id: 63,
          slug: "1-series",
          model: "1 Series",
          idmake: 5
        },
        {
          _id: 64,
          slug: "3-series",
          model: "3 Series",
          idmake: 5
        },
        {
          _id: 65,
          slug: 325,
          model: 325,
          idmake: 5
        },
        {
          _id: 66,
          slug: 330,
          model: 330,
          idmake: 5
        },
        {
          _id: 67,
          slug: "5-series",
          model: "5 Series",
          idmake: 5
        },
        {
          _id: 68,
          slug: 525,
          model: 525,
          idmake: 5
        },
        {
          _id: 69,
          slug: 530,
          model: 530,
          idmake: 5
        },
        {
          _id: 70,
          slug: 545,
          model: 545,
          idmake: 5
        },
        {
          _id: 71,
          slug: 550,
          model: 550,
          idmake: 5
        },
        {
          _id: 72,
          slug: "6-series",
          model: "6 Series",
          idmake: 5
        },
        {
          _id: 73,
          slug: 600,
          model: 600,
          idmake: 5
        },
        {
          _id: 74,
          slug: 645,
          model: 645,
          idmake: 5
        },
        {
          _id: 75,
          slug: 650,
          model: 650,
          idmake: 5
        },
        {
          _id: 76,
          slug: "7-series",
          model: "7 Series",
          idmake: 5
        },
        {
          _id: 77,
          slug: 745,
          model: 745,
          idmake: 5
        },
        {
          _id: 78,
          slug: 750,
          model: 750,
          idmake: 5
        },
        {
          _id: 79,
          slug: 760,
          model: 760,
          idmake: 5
        },
        {
          _id: 80,
          slug: "8-series",
          model: "8 Series",
          idmake: 5
        },
        {
          _id: 81,
          slug: "alpina-b7",
          model: "Alpina B7",
          idmake: 5
        },
        {
          _id: 82,
          slug: "m",
          model: "M",
          idmake: 5
        },
        {
          _id: 83,
          slug: "m-roadster",
          model: "M Roadster",
          idmake: 5
        },
        {
          _id: 84,
          slug: "m3",
          model: "M3",
          idmake: 5
        },
        {
          _id: 85,
          slug: "m5",
          model: "M5",
          idmake: 5
        },
        {
          _id: 86,
          slug: "m6",
          model: "M6",
          idmake: 5
        },
        {
          _id: 87,
          slug: "x3",
          model: "X3",
          idmake: 5
        },
        {
          _id: 88,
          slug: "x5",
          model: "X5",
          idmake: 5
        },
        {
          _id: 89,
          slug: "x5-m",
          model: "X5 M",
          idmake: 5
        },
        {
          _id: 90,
          slug: "x6",
          model: "X6",
          idmake: 5
        },
        {
          _id: 91,
          slug: "x6-m",
          model: "X6 M",
          idmake: 5
        },
        {
          _id: 92,
          slug: "z3",
          model: "Z3",
          idmake: 5
        },
        {
          _id: 93,
          slug: "z4",
          model: "Z4",
          idmake: 5
        },
        {
          _id: 94,
          slug: "z4-m",
          model: "Z4 M",
          idmake: 5
        },
        {
          _id: 95,
          slug: "z4-m-roadster",
          model: "Z4 M Roadster",
          idmake: 5
        },
        {
          _id: 96,
          slug: "z8",
          model: "Z8",
          idmake: 5
        },
        {
          _id: 97,
          slug: 1500,
          model: 1500,
          idmake: 6
        },
        {
          _id: 98,
          slug: 2500,
          model: 2500,
          idmake: 6
        },
        {
          _id: 99,
          slug: 3500,
          model: 3500,
          idmake: 6
        },
        {
          _id: 100,
          slug: "apv",
          model: "APV",
          idmake: 6
        },
        {
          _id: 101,
          slug: "astro",
          model: "Astro",
          idmake: 6
        },
        {
          _id: 102,
          slug: "avalanche",
          model: "Avalanche",
          idmake: 6
        },
        {
          _id: 103,
          slug: "avalanche-1500",
          model: "Avalanche 1500",
          idmake: 6
        },
        {
          _id: 104,
          slug: "avalanche-2500",
          model: "Avalanche 2500",
          idmake: 6
        },
        {
          _id: 105,
          slug: "aveo",
          model: "Aveo",
          idmake: 6
        },
        {
          _id: 106,
          slug: "bel-air",
          model: "Bel Air",
          idmake: 6
        },
        {
          _id: 107,
          slug: "beretta",
          model: "Beretta",
          idmake: 6
        },
        {
          _id: 108,
          slug: "blazer",
          model: "Blazer",
          idmake: 6
        },
        {
          _id: 109,
          slug: "camaro",
          model: "Camaro",
          idmake: 6
        },
        {
          _id: 110,
          slug: "caprice",
          model: "Caprice",
          idmake: 6
        },
        {
          _id: 111,
          slug: "caprice-classic",
          model: "Caprice Classic",
          idmake: 6
        },
        {
          _id: 112,
          slug: "cavalier",
          model: "Cavalier",
          idmake: 6
        },
        {
          _id: 113,
          slug: "citation",
          model: "Citation",
          idmake: 6
        },
        {
          _id: 114,
          slug: "classic",
          model: "Classic",
          idmake: 6
        },
        {
          _id: 115,
          slug: "cobalt",
          model: "Cobalt",
          idmake: 6
        },
        {
          _id: 116,
          slug: "cobalt-ss",
          model: "Cobalt SS",
          idmake: 6
        },
        {
          _id: 117,
          slug: "colorado",
          model: "Colorado",
          idmake: 6
        },
        {
          _id: 118,
          slug: "corsica",
          model: "Corsica",
          idmake: 6
        },
        {
          _id: 119,
          slug: "corvair",
          model: "Corvair",
          idmake: 6
        },
        {
          _id: 120,
          slug: "corvair-500",
          model: "Corvair 500",
          idmake: 6
        },
        {
          _id: 121,
          slug: "corvette",
          model: "Corvette",
          idmake: 6
        },
        {
          _id: 122,
          slug: "cruze",
          model: "Cruze",
          idmake: 6
        },
        {
          _id: 123,
          slug: "equinox",
          model: "Equinox",
          idmake: 6
        },
        {
          _id: 124,
          slug: "express",
          model: "Express",
          idmake: 6
        },
        {
          _id: 125,
          slug: "express-1500",
          model: "Express 1500",
          idmake: 6
        },
        {
          _id: 126,
          slug: "express-2500",
          model: "Express 2500",
          idmake: 6
        },
        {
          _id: 127,
          slug: "express-3500",
          model: "Express 3500",
          idmake: 6
        },
        {
          _id: 128,
          slug: "g-series-1500",
          model: "G-Series 1500",
          idmake: 6
        },
        {
          _id: 129,
          slug: "g-series-2500",
          model: "G-Series 2500",
          idmake: 6
        },
        {
          _id: 130,
          slug: "g-series-3500",
          model: "G-Series 3500",
          idmake: 6
        },
        {
          _id: 131,
          slug: "g-series-g10",
          model: "G-Series G10",
          idmake: 6
        },
        {
          _id: 132,
          slug: "g-series-g20",
          model: "G-Series G20",
          idmake: 6
        },
        {
          _id: 133,
          slug: "g-series-g30",
          model: "G-Series G30",
          idmake: 6
        },
        {
          _id: 134,
          slug: "hhr",
          model: "HHR",
          idmake: 6
        },
        {
          _id: 135,
          slug: "hhr-panel",
          model: "HHR Panel",
          idmake: 6
        },
        {
          _id: 136,
          slug: "impala",
          model: "Impala",
          idmake: 6
        },
        {
          _id: 137,
          slug: "impala-ss",
          model: "Impala SS",
          idmake: 6
        },
        {
          _id: 138,
          slug: "k5-blazer",
          model: "K5 Blazer",
          idmake: 6
        },
        {
          _id: 139,
          slug: "lumina",
          model: "Lumina",
          idmake: 6
        },
        {
          _id: 140,
          slug: "lumina-apv",
          model: "Lumina APV",
          idmake: 6
        },
        {
          _id: 141,
          slug: "luv",
          model: "LUV",
          idmake: 6
        },
        {
          _id: 142,
          slug: "malibu",
          model: "Malibu",
          idmake: 6
        },
        {
          _id: 143,
          slug: "malibu-maxx",
          model: "Malibu Maxx",
          idmake: 6
        },
        {
          _id: 144,
          slug: "metro",
          model: "Metro",
          idmake: 6
        },
        {
          _id: 145,
          slug: "monte-carlo",
          model: "Monte Carlo",
          idmake: 6
        },
        {
          _id: 146,
          slug: "monza",
          model: "Monza",
          idmake: 6
        },
        {
          _id: 147,
          slug: "prizm",
          model: "Prizm",
          idmake: 6
        },
        {
          _id: 148,
          slug: "s10",
          model: "S10",
          idmake: 6
        },
        {
          _id: 149,
          slug: "s10-blazer",
          model: "S10 Blazer",
          idmake: 6
        },
        {
          _id: 150,
          slug: "silverado",
          model: "Silverado",
          idmake: 6
        },
        {
          _id: 151,
          slug: "silverado-1500",
          model: "Silverado 1500",
          idmake: 6
        },
        {
          _id: 152,
          slug: "silverado-2500",
          model: "Silverado 2500",
          idmake: 6
        },
        {
          _id: 153,
          slug: "silverado-3500",
          model: "Silverado 3500",
          idmake: 6
        },
        {
          _id: 154,
          slug: "silverado-3500hd",
          model: "Silverado 3500HD",
          idmake: 6
        },
        {
          _id: 155,
          slug: "silverado-hybrid",
          model: "Silverado Hybrid",
          idmake: 6
        },
        {
          _id: 156,
          slug: "sonic",
          model: "Sonic",
          idmake: 6
        },
        {
          _id: 157,
          slug: "sportvan-g10",
          model: "Sportvan G10",
          idmake: 6
        },
        {
          _id: 158,
          slug: "sportvan-g20",
          model: "Sportvan G20",
          idmake: 6
        },
        {
          _id: 159,
          slug: "sportvan-g30",
          model: "Sportvan G30",
          idmake: 6
        },
        {
          _id: 160,
          slug: "ssr",
          model: "SSR",
          idmake: 6
        },
        {
          _id: 161,
          slug: "suburban",
          model: "Suburban",
          idmake: 6
        },
        {
          _id: 162,
          slug: "suburban-1500",
          model: "Suburban 1500",
          idmake: 6
        },
        {
          _id: 163,
          slug: "suburban-2500",
          model: "Suburban 2500",
          idmake: 6
        },
        {
          _id: 164,
          slug: "tahoe",
          model: "Tahoe",
          idmake: 6
        },
        {
          _id: 165,
          slug: "tracker",
          model: "Tracker",
          idmake: 6
        },
        {
          _id: 166,
          slug: "trailblazer",
          model: "Trailblazer",
          idmake: 6
        },
        {
          _id: 167,
          slug: "traverse",
          model: "Traverse",
          idmake: 6
        },
        {
          _id: 168,
          slug: "uplander",
          model: "Uplander",
          idmake: 6
        },
        {
          _id: 169,
          slug: "vega",
          model: "Vega",
          idmake: 6
        },
        {
          _id: 170,
          slug: "venture",
          model: "Venture",
          idmake: 6
        },
        {
          _id: 171,
          slug: "volt",
          model: "Volt",
          idmake: 6
        },
        {
          _id: 172,
          slug: "aries",
          model: "Aries",
          idmake: 7
        },
        {
          _id: 173,
          slug: "aspen",
          model: "Aspen",
          idmake: 7
        },
        {
          _id: 174,
          slug: "avenger",
          model: "Avenger",
          idmake: 7
        },
        {
          _id: 175,
          slug: "caliber",
          model: "Caliber",
          idmake: 7
        },
        {
          _id: 176,
          slug: "caravan",
          model: "Caravan",
          idmake: 7
        },
        {
          _id: 177,
          slug: "challenger",
          model: "Challenger",
          idmake: 7
        },
        {
          _id: 178,
          slug: "charger",
          model: "Charger",
          idmake: 7
        },
        {
          _id: 179,
          slug: "colt",
          model: "Colt",
          idmake: 7
        },
        {
          _id: 180,
          slug: "d150",
          model: "D150",
          idmake: 7
        },
        {
          _id: 181,
          slug: "d150-club",
          model: "D150 Club",
          idmake: 7
        },
        {
          _id: 182,
          slug: "d250",
          model: "D250",
          idmake: 7
        },
        {
          _id: 183,
          slug: "d250-club",
          model: "D250 Club",
          idmake: 7
        },
        {
          _id: 184,
          slug: "d350",
          model: "D350",
          idmake: 7
        },
        {
          _id: 185,
          slug: "d350-club",
          model: "D350 Club",
          idmake: 7
        },
        {
          _id: 186,
          slug: "dakota",
          model: "Dakota",
          idmake: 7
        },
        {
          _id: 187,
          slug: "dakota-club",
          model: "Dakota Club",
          idmake: 7
        },
        {
          _id: 188,
          slug: "daytona",
          model: "Daytona",
          idmake: 7
        },
        {
          _id: 189,
          slug: "durango",
          model: "Durango",
          idmake: 7
        },
        {
          _id: 190,
          slug: "dynasty",
          model: "Dynasty",
          idmake: 7
        },
        {
          _id: 191,
          slug: "grand-caravan",
          model: "Grand Caravan",
          idmake: 7
        },
        {
          _id: 192,
          slug: "intrepid",
          model: "Intrepid",
          idmake: 7
        },
        {
          _id: 193,
          slug: "journey",
          model: "Journey",
          idmake: 7
        },
        {
          _id: 194,
          slug: "magnum",
          model: "Magnum",
          idmake: 7
        },
        {
          _id: 195,
          slug: "monaco",
          model: "Monaco",
          idmake: 7
        },
        {
          _id: 196,
          slug: "neon",
          model: "Neon",
          idmake: 7
        },
        {
          _id: 197,
          slug: "nitro",
          model: "Nitro",
          idmake: 7
        },
        {
          _id: 198,
          slug: "omni",
          model: "Omni",
          idmake: 7
        },
        {
          _id: 199,
          slug: "ram",
          model: "Ram",
          idmake: 7
        },
        {
          _id: 200,
          slug: "ram-1500",
          model: "Ram 1500",
          idmake: 7
        },
        {
          _id: 201,
          slug: "ram-1500-club",
          model: "Ram 1500 Club",
          idmake: 7
        },
        {
          _id: 202,
          slug: "ram-2500",
          model: "Ram 2500",
          idmake: 7
        },
        {
          _id: 203,
          slug: "ram-2500-club",
          model: "Ram 2500 Club",
          idmake: 7
        },
        {
          _id: 204,
          slug: "ram-3500",
          model: "Ram 3500",
          idmake: 7
        },
        {
          _id: 205,
          slug: "ram-3500-club",
          model: "Ram 3500 Club",
          idmake: 7
        },
        {
          _id: 206,
          slug: "ram-50",
          model: "Ram 50",
          idmake: 7
        },
        {
          _id: 207,
          slug: "ram-van-1500",
          model: "Ram Van 1500",
          idmake: 7
        },
        {
          _id: 208,
          slug: "ram-van-2500",
          model: "Ram Van 2500",
          idmake: 7
        },
        {
          _id: 209,
          slug: "ram-van-3500",
          model: "Ram Van 3500",
          idmake: 7
        },
        {
          _id: 210,
          slug: "ram-van-b150",
          model: "Ram Van B150",
          idmake: 7
        },
        {
          _id: 211,
          slug: "ram-van-b250",
          model: "Ram Van B250",
          idmake: 7
        },
        {
          _id: 212,
          slug: "ram-van-b350",
          model: "Ram Van B350",
          idmake: 7
        },
        {
          _id: 213,
          slug: "ram-wagon-b150",
          model: "Ram Wagon B150",
          idmake: 7
        },
        {
          _id: 214,
          slug: "ram-wagon-b250",
          model: "Ram Wagon B250",
          idmake: 7
        },
        {
          _id: 215,
          slug: "ram-wagon-b350",
          model: "Ram Wagon B350",
          idmake: 7
        },
        {
          _id: 216,
          slug: "ramcharger",
          model: "Ramcharger",
          idmake: 7
        },
        {
          _id: 217,
          slug: "shadow",
          model: "Shadow",
          idmake: 7
        },
        {
          _id: 218,
          slug: "spirit",
          model: "Spirit",
          idmake: 7
        },
        {
          _id: 219,
          slug: "sprinter",
          model: "Sprinter",
          idmake: 7
        },
        {
          _id: 220,
          slug: "stealth",
          model: "Stealth",
          idmake: 7
        },
        {
          _id: 221,
          slug: "stratus",
          model: "Stratus",
          idmake: 7
        },
        {
          _id: 222,
          slug: "viper",
          model: "Viper",
          idmake: 7
        },
        {
          _id: 223,
          slug: "viper-rt10",
          model: "Viper RT/10",
          idmake: 7
        },
        {
          _id: 224,
          slug: 500,
          model: 500,
          idmake: 8
        },
        {
          _id: 225,
          slug: "nuova-500",
          model: "Nuova 500",
          idmake: 8
        },
        {
          _id: 226,
          slug: "aerostar",
          model: "Aerostar",
          idmake: 9
        },
        {
          _id: 227,
          slug: "aspire",
          model: "Aspire",
          idmake: 9
        },
        {
          _id: 228,
          slug: "bronco",
          model: "Bronco",
          idmake: 9
        },
        {
          _id: 229,
          slug: "bronco-ii",
          model: "Bronco II",
          idmake: 9
        },
        {
          _id: 230,
          slug: "c-max-hybrid",
          model: "C-MAX Hybrid",
          idmake: 9
        },
        {
          _id: 231,
          slug: "club-wagon",
          model: "Club Wagon",
          idmake: 9
        },
        {
          _id: 232,
          slug: "contour",
          model: "Contour",
          idmake: 9
        },
        {
          _id: 233,
          slug: "country",
          model: "Country",
          idmake: 9
        },
        {
          _id: 234,
          slug: "courier",
          model: "Courier",
          idmake: 9
        },
        {
          _id: 235,
          slug: "crown-victoria",
          model: "Crown Victoria",
          idmake: 9
        },
        {
          _id: 236,
          slug: "e-350-super-duty",
          model: "E-350 Super Duty",
          idmake: 9
        },
        {
          _id: 237,
          slug: "e-350-super-duty-van",
          model: "E-350 Super Duty Van",
          idmake: 9
        },
        {
          _id: 238,
          slug: "e-series",
          model: "E-Series",
          idmake: 9
        },
        {
          _id: 239,
          slug: "e150",
          model: "E150",
          idmake: 9
        },
        {
          _id: 240,
          slug: "e250",
          model: "E250",
          idmake: 9
        },
        {
          _id: 241,
          slug: "e350",
          model: "E350",
          idmake: 9
        },
        {
          _id: 242,
          slug: "econoline-e150",
          model: "Econoline E150",
          idmake: 9
        },
        {
          _id: 243,
          slug: "econoline-e250",
          model: "Econoline E250",
          idmake: 9
        },
        {
          _id: 244,
          slug: "econoline-e350",
          model: "Econoline E350",
          idmake: 9
        },
        {
          _id: 245,
          slug: "edge",
          model: "Edge",
          idmake: 9
        },
        {
          _id: 246,
          slug: "escape",
          model: "Escape",
          idmake: 9
        },
        {
          _id: 247,
          slug: "escort",
          model: "Escort",
          idmake: 9
        },
        {
          _id: 248,
          slug: "escort-zx2",
          model: "Escort ZX2",
          idmake: 9
        },
        {
          _id: 249,
          slug: "excursion",
          model: "Excursion",
          idmake: 9
        },
        {
          _id: 250,
          slug: "exp",
          model: "EXP",
          idmake: 9
        },
        {
          _id: 251,
          slug: "expedition",
          model: "Expedition",
          idmake: 9
        },
        {
          _id: 252,
          slug: "expedition-el",
          model: "Expedition EL",
          idmake: 9
        },
        {
          _id: 253,
          slug: "explorer",
          model: "Explorer",
          idmake: 9
        },
        {
          _id: 254,
          slug: "explorer-sport",
          model: "Explorer Sport",
          idmake: 9
        },
        {
          _id: 255,
          slug: "explorer-sport-trac",
          model: "Explorer Sport Trac",
          idmake: 9
        },
        {
          _id: 256,
          slug: "f-250-super-duty",
          model: "F-250 Super Duty",
          idmake: 9
        },
        {
          _id: 257,
          slug: "f-350-super-duty",
          model: "F-350 Super Duty",
          idmake: 9
        },
        {
          _id: 258,
          slug: "f-series",
          model: "F-Series",
          idmake: 9
        },
        {
          _id: 259,
          slug: "f-series-super-duty",
          model: "F-Series Super Duty",
          idmake: 9
        },
        {
          _id: 260,
          slug: "f150",
          model: "F150",
          idmake: 9
        },
        {
          _id: 261,
          slug: "f250",
          model: "F250",
          idmake: 9
        },
        {
          _id: 262,
          slug: "f350",
          model: "F350",
          idmake: 9
        },
        {
          _id: 263,
          slug: "f450",
          model: "F450",
          idmake: 9
        },
        {
          _id: 264,
          slug: "fairlane",
          model: "Fairlane",
          idmake: 9
        },
        {
          _id: 265,
          slug: "falcon",
          model: "Falcon",
          idmake: 9
        },
        {
          _id: 266,
          slug: "festiva",
          model: "Festiva",
          idmake: 9
        },
        {
          _id: 267,
          slug: "fiesta",
          model: "Fiesta",
          idmake: 9
        },
        {
          _id: 268,
          slug: "five-hundred",
          model: "Five Hundred",
          idmake: 9
        },
        {
          _id: 269,
          slug: "flex",
          model: "Flex",
          idmake: 9
        },
        {
          _id: 270,
          slug: "focus",
          model: "Focus",
          idmake: 9
        },
        {
          _id: 271,
          slug: "focus-st",
          model: "Focus ST",
          idmake: 9
        },
        {
          _id: 272,
          slug: "freestar",
          model: "Freestar",
          idmake: 9
        },
        {
          _id: 273,
          slug: "freestyle",
          model: "Freestyle",
          idmake: 9
        },
        {
          _id: 274,
          slug: "fusion",
          model: "Fusion",
          idmake: 9
        },
        {
          _id: 275,
          slug: "galaxie",
          model: "Galaxie",
          idmake: 9
        },
        {
          _id: 276,
          slug: "gt",
          model: "GT",
          idmake: 9
        },
        {
          _id: 277,
          slug: "gt500",
          model: "GT500",
          idmake: 9
        },
        {
          _id: 278,
          slug: "laser",
          model: "Laser",
          idmake: 9
        },
        {
          _id: 279,
          slug: "lightning",
          model: "Lightning",
          idmake: 9
        },
        {
          _id: 280,
          slug: "ltd",
          model: "LTD",
          idmake: 9
        },
        {
          _id: 281,
          slug: "ltd-crown-victoria",
          model: "LTD Crown Victoria",
          idmake: 9
        },
        {
          _id: 282,
          slug: "model-t",
          model: "Model T",
          idmake: 9
        },
        {
          _id: 283,
          slug: "mustang",
          model: "Mustang",
          idmake: 9
        },
        {
          _id: 284,
          slug: "probe",
          model: "Probe",
          idmake: 9
        },
        {
          _id: 285,
          slug: "ranger",
          model: "Ranger",
          idmake: 9
        },
        {
          _id: 286,
          slug: "taurus",
          model: "Taurus",
          idmake: 9
        },
        {
          _id: 287,
          slug: "taurus-x",
          model: "Taurus X",
          idmake: 9
        },
        {
          _id: 288,
          slug: "tempo",
          model: "Tempo",
          idmake: 9
        },
        {
          _id: 289,
          slug: "thnk",
          model: "Th!nk",
          idmake: 9
        },
        {
          _id: 290,
          slug: "thunderbird",
          model: "Thunderbird",
          idmake: 9
        },
        {
          _id: 291,
          slug: "torino",
          model: "Torino",
          idmake: 9
        },
        {
          _id: 292,
          slug: "transit-connect",
          model: "Transit Connect",
          idmake: 9
        },
        {
          _id: 293,
          slug: "windstar",
          model: "Windstar",
          idmake: 9
        },
        {
          _id: 294,
          slug: "zx2",
          model: "ZX2",
          idmake: 9
        },
        {
          _id: 295,
          slug: "cherokee",
          model: "Cherokee",
          idmake: 10
        },
        {
          _id: 296,
          slug: "comanche",
          model: "Comanche",
          idmake: 10
        },
        {
          _id: 297,
          slug: "commander",
          model: "Commander",
          idmake: 10
        },
        {
          _id: 298,
          slug: "compass",
          model: "Compass",
          idmake: 10
        },
        {
          _id: 299,
          slug: "grand-cherokee",
          model: "Grand Cherokee",
          idmake: 10
        },
        {
          _id: 300,
          slug: "liberty",
          model: "Liberty",
          idmake: 10
        },
        {
          _id: 301,
          slug: "patriot",
          model: "Patriot",
          idmake: 10
        },
        {
          _id: 302,
          slug: "wrangler",
          model: "Wrangler",
          idmake: 10
        },
        {
          _id: 303,
          slug: 323,
          model: 323,
          idmake: 11
        },
        {
          _id: 304,
          slug: 626,
          model: 626,
          idmake: 11
        },
        {
          _id: 305,
          slug: 929,
          model: 929,
          idmake: 11
        },
        {
          _id: 306,
          slug: "b-series",
          model: "B-Series",
          idmake: 11
        },
        {
          _id: 307,
          slug: "b-series-plus",
          model: "B-Series Plus",
          idmake: 11
        },
        {
          _id: 308,
          slug: "b2000",
          model: "B2000",
          idmake: 11
        },
        {
          _id: 309,
          slug: "b2500",
          model: "B2500",
          idmake: 11
        },
        {
          _id: 310,
          slug: "b2600",
          model: "B2600",
          idmake: 11
        },
        {
          _id: 311,
          slug: "cx-5",
          model: "CX-5",
          idmake: 11
        },
        {
          _id: 312,
          slug: "cx-7",
          model: "CX-7",
          idmake: 11
        },
        {
          _id: 313,
          slug: "cx-9",
          model: "CX-9",
          idmake: 11
        },
        {
          _id: 314,
          slug: "familia",
          model: "Familia",
          idmake: 11
        },
        {
          _id: 315,
          slug: "glc",
          model: "GLC",
          idmake: 11
        },
        {
          _id: 316,
          slug: "mazda2",
          model: "Mazda2",
          idmake: 11
        },
        {
          _id: 317,
          slug: "mazda3",
          model: "Mazda3",
          idmake: 11
        },
        {
          _id: 318,
          slug: "mazda5",
          model: "Mazda5",
          idmake: 11
        },
        {
          _id: 319,
          slug: "mazda6",
          model: "Mazda6",
          idmake: 11
        },
        {
          _id: 320,
          slug: "mazda6-5-door",
          model: "Mazda6 5-Door",
          idmake: 11
        },
        {
          _id: 321,
          slug: "mazda6-sport",
          model: "Mazda6 Sport",
          idmake: 11
        },
        {
          _id: 322,
          slug: "mazdaspeed-3",
          model: "Mazdaspeed 3",
          idmake: 11
        },
        {
          _id: 323,
          slug: "mazdaspeed6",
          model: "Mazdaspeed6",
          idmake: 11
        },
        {
          _id: 324,
          slug: "miata-mx-5",
          model: "Miata MX-5",
          idmake: 11
        },
        {
          _id: 325,
          slug: "millenia",
          model: "Millenia",
          idmake: 11
        },
        {
          _id: 326,
          slug: "mpv",
          model: "MPV",
          idmake: 11
        },
        {
          _id: 327,
          slug: "mx-3",
          model: "MX-3",
          idmake: 11
        },
        {
          _id: 328,
          slug: "mx-5",
          model: "MX-5",
          idmake: 11
        },
        {
          _id: 329,
          slug: "mx-6",
          model: "MX-6",
          idmake: 11
        },
        {
          _id: 330,
          slug: "navajo",
          model: "Navajo",
          idmake: 11
        },
        {
          _id: 331,
          slug: "protege",
          model: "Protege",
          idmake: 11
        },
        {
          _id: 332,
          slug: "protege5",
          model: "Protege5",
          idmake: 11
        },
        {
          _id: 333,
          slug: "rx-7",
          model: "RX-7",
          idmake: 11
        },
        {
          _id: 334,
          slug: "rx-8",
          model: "RX-8",
          idmake: 11
        },
        {
          _id: 335,
          slug: "tribute",
          model: "Tribute",
          idmake: 11
        },
        {
          _id: 336,
          slug: "190e",
          model: "190E",
          idmake: 12
        },
        {
          _id: 337,
          slug: "300ce",
          model: "300CE",
          idmake: 12
        },
        {
          _id: 338,
          slug: "300d",
          model: "300D",
          idmake: 12
        },
        {
          _id: 339,
          slug: "300e",
          model: "300E",
          idmake: 12
        },
        {
          _id: 340,
          slug: "300sd",
          model: "300SD",
          idmake: 12
        },
        {
          _id: 341,
          slug: "300se",
          model: "300SE",
          idmake: 12
        },
        {
          _id: 342,
          slug: "300sl",
          model: "300SL",
          idmake: 12
        },
        {
          _id: 343,
          slug: "300te",
          model: "300TE",
          idmake: 12
        },
        {
          _id: 344,
          slug: "400e",
          model: "400E",
          idmake: 12
        },
        {
          _id: 345,
          slug: "400se",
          model: "400SE",
          idmake: 12
        },
        {
          _id: 346,
          slug: "400sel",
          model: "400SEL",
          idmake: 12
        },
        {
          _id: 347,
          slug: "500e",
          model: "500E",
          idmake: 12
        },
        {
          _id: 348,
          slug: "500sec",
          model: "500SEC",
          idmake: 12
        },
        {
          _id: 349,
          slug: "500sel",
          model: "500SEL",
          idmake: 12
        },
        {
          _id: 350,
          slug: "500sl",
          model: "500SL",
          idmake: 12
        },
        {
          _id: 351,
          slug: "600sec",
          model: "600SEC",
          idmake: 12
        },
        {
          _id: 352,
          slug: "600sel",
          model: "600SEL",
          idmake: 12
        },
        {
          _id: 353,
          slug: "600sl",
          model: "600SL",
          idmake: 12
        },
        {
          _id: 354,
          slug: "c-class",
          model: "C-Class",
          idmake: 12
        },
        {
          _id: 355,
          slug: "cl-class",
          model: "CL-Class",
          idmake: 12
        },
        {
          _id: 356,
          slug: "cl65-amg",
          model: "CL65 AMG",
          idmake: 12
        },
        {
          _id: 357,
          slug: "clk-class",
          model: "CLK-Class",
          idmake: 12
        },
        {
          _id: 358,
          slug: "cls-class",
          model: "CLS-Class",
          idmake: 12
        },
        {
          _id: 359,
          slug: "e-class",
          model: "E-Class",
          idmake: 12
        },
        {
          _id: 360,
          slug: "g-class",
          model: "G-Class",
          idmake: 12
        },
        {
          _id: 361,
          slug: "g55-amg",
          model: "G55 AMG",
          idmake: 12
        },
        {
          _id: 362,
          slug: "gl-class",
          model: "GL-Class",
          idmake: 12
        },
        {
          _id: 363,
          slug: "glk-class",
          model: "GLK-Class",
          idmake: 12
        },
        {
          _id: 364,
          slug: "m-class",
          model: "M-Class",
          idmake: 12
        },
        {
          _id: 365,
          slug: "r-class",
          model: "R-Class",
          idmake: 12
        },
        {
          _id: 366,
          slug: "s-class",
          model: "S-Class",
          idmake: 12
        },
        {
          _id: 367,
          slug: "sl-class",
          model: "SL-Class",
          idmake: 12
        },
        {
          _id: 368,
          slug: "sl65-amg",
          model: "SL65 AMG",
          idmake: 12
        },
        {
          _id: 369,
          slug: "slk-class",
          model: "SLK-Class",
          idmake: 12
        },
        {
          _id: 370,
          slug: "slk55-amg",
          model: "SLK55 AMG",
          idmake: 12
        },
        {
          _id: 371,
          slug: "slr-mclaren",
          model: "SLR McLaren",
          idmake: 12
        },
        {
          _id: 372,
          slug: "sls-amg",
          model: "SLS AMG",
          idmake: 12
        },
        {
          _id: 373,
          slug: "sls-class",
          model: "SLS-Class",
          idmake: 12
        },
        {
          _id: 374,
          slug: "sprinter",
          model: "Sprinter",
          idmake: 12
        },
        {
          _id: 375,
          slug: "sprinter-2500",
          model: "Sprinter 2500",
          idmake: 12
        },
        {
          _id: 376,
          slug: "sprinter-3500",
          model: "Sprinter 3500",
          idmake: 12
        },
        {
          _id: 377,
          slug: "w123",
          model: "W123",
          idmake: 12
        },
        {
          _id: 378,
          slug: "w126",
          model: "W126",
          idmake: 12
        },
        {
          _id: 379,
          slug: "w201",
          model: "W201",
          idmake: 12
        },
        {
          _id: 380,
          slug: "200sx",
          model: "200SX",
          idmake: 13
        },
        {
          _id: 381,
          slug: "240sx",
          model: "240SX",
          idmake: 13
        },
        {
          _id: 382,
          slug: "280zx",
          model: "280ZX",
          idmake: 13
        },
        {
          _id: 383,
          slug: "300zx",
          model: "300ZX",
          idmake: 13
        },
        {
          _id: 384,
          slug: "350z",
          model: "350Z",
          idmake: 13
        },
        {
          _id: 385,
          slug: "350z-roadster",
          model: "350Z Roadster",
          idmake: 13
        },
        {
          _id: 386,
          slug: "370z",
          model: "370Z",
          idmake: 13
        },
        {
          _id: 387,
          slug: "altima",
          model: "Altima",
          idmake: 13
        },
        {
          _id: 388,
          slug: "armada",
          model: "Armada",
          idmake: 13
        },
        {
          _id: 389,
          slug: "cube",
          model: "Cube",
          idmake: 13
        },
        {
          _id: 390,
          slug: "datsunnissan-z-car",
          model: "Datsun/Nissan Z-car",
          idmake: 13
        },
        {
          _id: 391,
          slug: "frontier",
          model: "Frontier",
          idmake: 13
        },
        {
          _id: 392,
          slug: "gt-r",
          model: "GT-R",
          idmake: 13
        },
        {
          _id: 393,
          slug: "juke",
          model: "JUKE",
          idmake: 13
        },
        {
          _id: 394,
          slug: "leaf",
          model: "Leaf",
          idmake: 13
        },
        {
          _id: 395,
          slug: "maxima",
          model: "Maxima",
          idmake: 13
        },
        {
          _id: 396,
          slug: "murano",
          model: "Murano",
          idmake: 13
        },
        {
          _id: 397,
          slug: "nv1500",
          model: "NV1500",
          idmake: 13
        },
        {
          _id: 398,
          slug: "nv2500",
          model: "NV2500",
          idmake: 13
        },
        {
          _id: 399,
          slug: "nv3500",
          model: "NV3500",
          idmake: 13
        },
        {
          _id: 400,
          slug: "nx",
          model: "NX",
          idmake: 13
        },
        {
          _id: 401,
          slug: "pathfinder",
          model: "Pathfinder",
          idmake: 13
        },
        {
          _id: 402,
          slug: "pathfinder-armada",
          model: "Pathfinder Armada",
          idmake: 13
        },
        {
          _id: 403,
          slug: "quest",
          model: "Quest",
          idmake: 13
        },
        {
          _id: 404,
          slug: "rogue",
          model: "Rogue",
          idmake: 13
        },
        {
          _id: 405,
          slug: "sentra",
          model: "Sentra",
          idmake: 13
        },
        {
          _id: 406,
          slug: "stanza",
          model: "Stanza",
          idmake: 13
        },
        {
          _id: 407,
          slug: "titan",
          model: "Titan",
          idmake: 13
        },
        {
          _id: 408,
          slug: "versa",
          model: "Versa",
          idmake: 13
        },
        {
          _id: 409,
          slug: "xterra",
          model: "Xterra",
          idmake: 13
        },
        {
          _id: 410,
          slug: "beetle",
          model: "Beetle",
          idmake: 14
        },
        {
          _id: 411,
          slug: "cabriolet",
          model: "Cabriolet",
          idmake: 14
        },
        {
          _id: 412,
          slug: "cc",
          model: "CC",
          idmake: 14
        },
        {
          _id: 413,
          slug: "corrado",
          model: "Corrado",
          idmake: 14
        },
        {
          _id: 414,
          slug: "eos",
          model: "Eos",
          idmake: 14
        },
        {
          _id: 415,
          slug: "eurovan",
          model: "Eurovan",
          idmake: 14
        },
        {
          _id: 416,
          slug: "fox",
          model: "Fox",
          idmake: 14
        },
        {
          _id: 417,
          slug: "gli",
          model: "GLI",
          idmake: 14
        },
        {
          _id: 418,
          slug: "golf",
          model: "Golf",
          idmake: 14
        },
        {
          _id: 419,
          slug: "golf-iii",
          model: "Golf III",
          idmake: 14
        },
        {
          _id: 420,
          slug: "gti",
          model: "GTI",
          idmake: 14
        },
        {
          _id: 421,
          slug: "jetta",
          model: "Jetta",
          idmake: 14
        },
        {
          _id: 422,
          slug: "jetta-iii",
          model: "Jetta III",
          idmake: 14
        },
        {
          _id: 423,
          slug: "new-beetle",
          model: "New Beetle",
          idmake: 14
        },
        {
          _id: 424,
          slug: "passat",
          model: "Passat",
          idmake: 14
        },
        {
          _id: 425,
          slug: "phaeton",
          model: "Phaeton",
          idmake: 14
        },
        {
          _id: 426,
          slug: "quantum",
          model: "Quantum",
          idmake: 14
        },
        {
          _id: 427,
          slug: "r32",
          model: "R32",
          idmake: 14
        },
        {
          _id: 428,
          slug: "rabbit",
          model: "Rabbit",
          idmake: 14
        },
        {
          _id: 429,
          slug: "rio",
          model: "rio",
          idmake: 14
        },
        {
          _id: 430,
          slug: "riolet",
          model: "riolet",
          idmake: 14
        },
        {
          _id: 431,
          slug: "routan",
          model: "Routan",
          idmake: 14
        },
        {
          _id: 432,
          slug: "scirocco",
          model: "Scirocco",
          idmake: 14
        },
        {
          _id: 433,
          slug: "tiguan",
          model: "Tiguan",
          idmake: 14
        },
        {
          _id: 434,
          slug: "touareg",
          model: "Touareg",
          idmake: 14
        },
        {
          _id: 435,
          slug: "touareg-2",
          model: "Touareg 2",
          idmake: 14
        },
        {
          _id: 436,
          slug: "type-2",
          model: "Type 2",
          idmake: 14
        },
        {
          _id: 437,
          slug: "vanagon",
          model: "Vanagon",
          idmake: 14
        },
        {
          _id: 438,
          slug: "4runner",
          model: "4Runner",
          idmake: 15
        },
        {
          _id: 439,
          slug: "avalon",
          model: "Avalon",
          idmake: 15
        },
        {
          _id: 440,
          slug: "camry",
          model: "Camry",
          idmake: 15
        },
        {
          _id: 441,
          slug: "camry-hybrid",
          model: "Camry Hybrid",
          idmake: 15
        },
        {
          _id: 442,
          slug: "camry-solara",
          model: "Camry Solara",
          idmake: 15
        },
        {
          _id: 443,
          slug: "celica",
          model: "Celica",
          idmake: 15
        },
        {
          _id: 444,
          slug: "corolla",
          model: "Corolla",
          idmake: 15
        },
        {
          _id: 445,
          slug: "cressida",
          model: "Cressida",
          idmake: 15
        },
        {
          _id: 446,
          slug: "echo",
          model: "Echo",
          idmake: 15
        },
        {
          _id: 447,
          slug: "fj-cruiser",
          model: "FJ Cruiser",
          idmake: 15
        },
        {
          _id: 448,
          slug: "highlander",
          model: "Highlander",
          idmake: 15
        },
        {
          _id: 449,
          slug: "highlander-hybrid",
          model: "Highlander Hybrid",
          idmake: 15
        },
        {
          _id: 450,
          slug: "ipsum",
          model: "Ipsum",
          idmake: 15
        },
        {
          _id: 451,
          slug: "land-cruiser",
          model: "Land Cruiser",
          idmake: 15
        },
        {
          _id: 452,
          slug: "matrix",
          model: "Matrix",
          idmake: 15
        },
        {
          _id: 453,
          slug: "mr2",
          model: "MR2",
          idmake: 15
        },
        {
          _id: 454,
          slug: "paseo",
          model: "Paseo",
          idmake: 15
        },
        {
          _id: 455,
          slug: "previa",
          model: "Previa",
          idmake: 15
        },
        {
          _id: 456,
          slug: "prius",
          model: "Prius",
          idmake: 15
        },
        {
          _id: 457,
          slug: "prius-c",
          model: "Prius c",
          idmake: 15
        },
        {
          _id: 458,
          slug: "prius-plug-in",
          model: "Prius Plug-in",
          idmake: 15
        },
        {
          _id: 459,
          slug: "prius-plug-in-hybrid",
          model: "Prius Plug-in Hybrid",
          idmake: 15
        },
        {
          _id: 460,
          slug: "prius-v",
          model: "Prius v",
          idmake: 15
        },
        {
          _id: 461,
          slug: "rav4",
          model: "RAV4",
          idmake: 15
        },
        {
          _id: 462,
          slug: "sequoia",
          model: "Sequoia",
          idmake: 15
        },
        {
          _id: 463,
          slug: "sienna",
          model: "Sienna",
          idmake: 15
        },
        {
          _id: 464,
          slug: "solara",
          model: "Solara",
          idmake: 15
        },
        {
          _id: 465,
          slug: "supra",
          model: "Supra",
          idmake: 15
        },
        {
          _id: 466,
          slug: "t100",
          model: "T100",
          idmake: 15
        },
        {
          _id: 467,
          slug: "t100-xtra",
          model: "T100 Xtra",
          idmake: 15
        },
        {
          _id: 468,
          slug: "tacoma",
          model: "Tacoma",
          idmake: 15
        },
        {
          _id: 469,
          slug: "tacoma-xtra",
          model: "Tacoma Xtra",
          idmake: 15
        },
        {
          _id: 470,
          slug: "tercel",
          model: "Tercel",
          idmake: 15
        },
        {
          _id: 471,
          slug: "truck-xtracab-sr5",
          model: "Truck Xtracab SR5",
          idmake: 15
        },
        {
          _id: 472,
          slug: "tundra",
          model: "Tundra",
          idmake: 15
        },
        {
          _id: 473,
          slug: "tundramax",
          model: "TundraMax",
          idmake: 15
        },
        {
          _id: 474,
          slug: "venza",
          model: "Venza",
          idmake: 15
        },
        {
          _id: 475,
          slug: "xtra",
          model: "Xtra",
          idmake: 15
        },
        {
          _id: 476,
          slug: "yaris",
          model: "Yaris",
          idmake: 15
        }
      ];

      ModelSchema.collection.insert(modelos, (err, doc) => {
        if(err) res.send({msg: 'no mames un error: '+  err});
        res.json({msg: 'multiples docs of model cars is added'});
    });     
}

exports.years = (req, res) => { // a este no le supe su _id generado por mongo
    const years = [
        {
          _id: 1,
          year: 1997,
          idmodel: 1
        },
        {
          _id: 2,
          year: 1998,
          idmodel: 1
        },
        {
          _id: 3,
          year: 1999,
          idmodel: 1
        },
        {
          _id: 4,
          year: 2001,
          idmodel: 1
        },
        {
          _id: 5,
          year: 2002,
          idmodel: 1
        },
        {
          _id: 6,
          year: 2003,
          idmodel: 1
        },
        {
          _id: 7,
          year: 1988,
          idmodel: 2
        },
        {
          _id: 8,
          year: 1992,
          idmodel: 2
        },
        {
          _id: 9,
          year: 1993,
          idmodel: 2
        },
        {
          _id: 10,
          year: 1994,
          idmodel: 2
        },
        {
          _id: 11,
          year: 1995,
          idmodel: 2
        },
        {
          _id: 12,
          year: 1996,
          idmodel: 2
        },
        {
          _id: 13,
          year: 1997,
          idmodel: 2
        },
        {
          _id: 14,
          year: 1998,
          idmodel: 2
        },
        {
          _id: 15,
          year: 1999,
          idmodel: 2
        },
        {
          _id: 16,
          year: 2000,
          idmodel: 2
        },
        {
          _id: 17,
          year: 2001,
          idmodel: 2
        },
        {
          _id: 18,
          year: 1992,
          idmodel: 3
        },
        {
          _id: 19,
          year: 1993,
          idmodel: 3
        },
        {
          _id: 20,
          year: 1994,
          idmodel: 3
        },
        {
          _id: 21,
          year: 1993,
          idmodel: 3
        },
        {
          _id: 22,
          year: 1996,
          idmodel: 3
        },
        {
          _id: 23,
          year: 1997,
          idmodel: 3
        },
        {
          _id: 24,
          year: 1998,
          idmodel: 3
        },
        {
          _id: 25,
          year: 1999,
          idmodel: 3
        },
        {
          _id: 26,
          year: 2000,
          idmodel: 3
        },
        {
          _id: 27,
          year: 2001,
          idmodel: 3
        },
        {
          _id: 28,
          year: 2002,
          idmodel: 3
        },
        {
          _id: 29,
          year: 2003,
          idmodel: 3
        },
        {
          _id: 30,
          year: 2004,
          idmodel: 3
        },
        {
          _id: 31,
          year: 2003,
          idmodel: 3
        },
        {
          _id: 32,
          year: 1996,
          idmodel: 7
        },
        {
          _id: 33,
          year: 1994,
          idmodel: 4
        },
        {
          _id: 34,
          year: 1998,
          idmodel: 4
        },
        {
          _id: 35,
          year: 1999,
          idmodel: 4
        },
        {
          _id: 36,
          year: 2000,
          idmodel: 4
        },
        {
          _id: 37,
          year: 2001,
          idmodel: 4
        },
        {
          _id: 38,
          year: 2002,
          idmodel: 4
        },
        {
          _id: 39,
          year: 2003,
          idmodel: 4
        },
        {
          _id: 40,
          year: 2004,
          idmodel: 4
        },
        {
          _id: 41,
          year: 2005,
          idmodel: 4
        },
        {
          _id: 42,
          year: 2006,
          idmodel: 4
        },
        {
          _id: 43,
          year: 2004,
          idmodel: 4
        },
        {
          _id: 44,
          year: 2008,
          idmodel: 4
        },
        {
          _id: 45,
          year: 2009,
          idmodel: 4
        },
        {
          _id: 46,
          year: 2010,
          idmodel: 4
        },
        {
          _id: 47,
          year: 2011,
          idmodel: 4
        },
        {
          _id: 48,
          year: 2012,
          idmodel: 4
        },
        {
          _id: 49,
          year: 2002,
          idmodel: 5
        },
        {
          _id: 50,
          year: 2003,
          idmodel: 5
        },
        {
          _id: 51,
          year: 2004,
          idmodel: 5
        },
        {
          _id: 52,
          year: 2005,
          idmodel: 5
        },
        {
          _id: 53,
          year: 2006,
          idmodel: 5
        },
        {
          _id: 54,
          year: 1992,
          idmodel: 6
        },
        {
          _id: 55,
          year: 2010,
          idmodel: 7
        },
        {
          _id: 56,
          year: 2010,
          idmodel: 8
        },
        {
          _id: 57,
          year: 2011,
          idmodel: 8
        },
        {
          _id: 58,
          year: 2012,
          idmodel: 8
        },
        {
          _id: 59,
          year: 2011,
          idmodel: 9
        },
        {
          _id: 60,
          year: 2012,
          idmodel: 9
        },
        {
          _id: 61,
          year: 1986,
          idmodel: 10
        },
        {
          _id: 62,
          year: 1997,
          idmodel: 11
        },
        {
          _id: 63,
          year: 1998,
          idmodel: 11
        },
        {
          _id: 64,
          year: 1999,
          idmodel: 11
        },
        {
          _id: 65,
          year: 2000,
          idmodel: 11
        },
        {
          _id: 67,
          year: 2001,
          idmodel: 11
        },
        {
          _id: 68,
          year: 2002,
          idmodel: 11
        },
        {
          _id: 69,
          year: 2003,
          idmodel: 11
        },
        {
          _id: 70,
          year: 2004,
          idmodel: 11
        },
        {
          _id: 71,
          year: 2005,
          idmodel: 11
        },
        {
          _id: 72,
          year: 2006,
          idmodel: 11
        },
        {
          _id: 73,
          year: 2007,
          idmodel: 11
        },
        {
          _id: 74,
          year: 2008,
          idmodel: 11
        },
        {
          _id: 75,
          year: 2009,
          idmodel: 11
        },
        {
          _id: 76,
          year: 2010,
          idmodel: 11
        },
        {
          _id: 77,
          year: 2011,
          idmodel: 11
        },
        {
          _id: 78,
          year: 2012,
          idmodel: 11
        },
        {
          _id: 79,
          year: 1994,
          idmodel: 12
        },
        {
          _id: 80,
          year: 1995,
          idmodel: 12
        },
        {
          _id: 81,
          year: 1996,
          idmodel: 12
        },
        {
          _id: 82,
          year: 1997,
          idmodel: 12
        },
        {
          _id: 83,
          year: 1998,
          idmodel: 12
        },
        {
          _id: 84,
          year: 1994,
          idmodel: 13
        },
        {
          _id: 85,
          year: 1995,
          idmodel: 13
        },
        {
          _id: 86,
          year: 1996,
          idmodel: 13
        },
        {
          _id: 87,
          year: 1997,
          idmodel: 13
        },
        {
          _id: 88,
          year: 1998,
          idmodel: 13
        },
        {
          _id: 89,
          year: 2011,
          idmodel: 14
        },
        {
          _id: 90,
          year: 2012,
          idmodel: 14
        },
        {
          _id: 91,
          year: 2010,
          idmodel: 15
        },
        {
          _id: 92,
          year: 2011,
          idmodel: 15
        },
        {
          _id: 93,
          year: 2012,
          idmodel: 15
        }
      ];

    yearSchema.collection.insert(years, (err, doc) => {
        if(err) res.send({msg: 'no mames un error: '+  err});
        res.json({msg: 'multiples docs is added'});
    })

}


exports.consulta = (req, res) => {
    AutosSchema.find({ _id: {$gte: 1}}, (err, docs) => {
        if(err){res.json({msg: 'some shit is happed'})}
        // var arry = Object.keys(docs).map(function (key){return docs[key];});
        // res.json({arry}) /// convert object to array 
        res.send(docs);
    })
}

exports.getModel = (req, res) => {
    ModelSchema.find({idmake: req.params.id}, (err, doc) => {      
    if(err){res.json({msg: 'some shit is happed'})}
    else{ res.send(doc);}
    })
}

exports.getYear = (req, res) => {
    yearSchema.find({ idmodel: req.params.idmodel }, (err, doc) => {
    if(err){res.json({msg: 'some shit is happed'})}
    else{res.send(doc);}
  })
}
