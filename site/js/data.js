// Gegevens voor spanje-rendement.nl. Elke maand bijwerken: nieuwe deals bovenaan, cijfers per kwartaal.
// Alleen openbaar gepubliceerde feiten, altijd met bron. Niets schatten of aanvullen.
window.SR_DATA = {
  bijgewerkt: '16 november 2026',

  // Financieringen van debtfunds, banken en platforms die de financier, de kredietnemer of de vakpers openbaar heeft gemaakt.
  financieringen: [
    { datum: '2026-10-26', financier: 'Maslow Capital', bedrag: 126, segment: 'Logistiek', regio: 'Catalonië', gecontroleerd: '2026-11-16',
      titel: 'Twee voorverhuurde bedrijfsgebouwen bij Barcelona', detail: 'Financiering aan Dunas Capital Real Estate voor de aankoop van een voormalig fabrieksterrein in Castellbisbal en de bouw van twee voorverhuurde bedrijfsgebouwen.',
      bron: 'Maslow Capital', url: 'https://maslowcapital.com/blog/2026/10/26/maslow-capital-lends-e126m-for-two-pre-let-industrial-developments-near-barcelona/' },
    { datum: '2026-10-13', financier: 'Cajamar (bank)', bedrag: 8.5, segment: 'Hotels', regio: 'Cádiz', gecontroleerd: '2026-11-16',
      titel: 'Hotel Senator Cádiz', detail: 'Lening aan Atom Hoteles op een viersterrenhotel met 91 kamers. Rente 3,95% vast in het eerste jaar, daarna Euribor plus 0,90%.',
      bron: 'Brainsre News', url: 'https://brainsre.news/atom-hoteles-financiacion-hotel-senator-cadiz/' },
    { datum: '2026-09-17', financier: 'ICO (staatsbank)', bedrag: 73.2, segment: 'Wonen', regio: 'Sevilla', gecontroleerd: '2026-11-16',
      titel: '843 betaalbare huurwoningen in Sevilla Oost', detail: 'Financieringsovereenkomst met Lagoom Living voor 691 sociale huurwoningen en 152 tijdelijke woningen, in publiek-private samenwerking met de gemeente Sevilla en Emvisesa. Totale investering € 143 miljoen.',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/residential/ico-provides-eur73-2m-in-funding-for-lagoom-livings-843-resi-units-in-seville/' },
    { datum: '2026-09-15', financier: 'ING (bank)', bedrag: 57.5, segment: 'Studenten- en flexwonen', regio: 'Madrid', gecontroleerd: '2026-11-16',
      titel: 'Studentenresidentie in Pozuelo de Alarcón', detail: 'Herfinanciering aan Student Experience op een residentie met 594 studio\'s. Looptijd vijf jaar, te verlengen tot zeven jaar.',
      bron: 'Brainsre News', url: 'https://brainsre.news/student-experience-residencia-estudiantes-pozuelo/' },
    { datum: '2026-09-14', financier: 'Goldman Sachs Alternatives', bedrag: 145, segment: 'Hotels', regio: 'Costa del Sol', gecontroleerd: '2026-11-16',
      titel: 'Hotel- en zorgcomplex Oakmond op het Incosol-terrein, Marbella', detail: 'Senior bouwlening aan Ilanga Capital voor een luxehotel met 140 kamers, 28 branded residences en een kliniek van circa 12.000 m² in Río Real. Totale begroting circa € 260 miljoen, de rest uit eigen middelen.',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/hotels/goldman-sachs-finances-eur145m-to-develop-ilangas-incosol-project-in-marbella/' },
    { datum: '2026-09-08', financier: 'Maslow Capital', bedrag: 62.7, segment: 'Wonen', regio: 'Costa Blanca', gecontroleerd: '2026-11-16',
      titel: '131 woningen bij Dénia', detail: 'Faciliteit aan Propea La Sella voor de aankoop van de grond en de bouw van 131 vrijstaande woningen op het golfresort La Sella.',
      bron: 'Maslow Capital', url: 'https://maslowcapital.com/blog/2026/09/08/maslow-capital-provides-a-e62-7-million-facility-for-131-home-residential-development-on-the-costa-blanca/' },
    { datum: '2026-08-07', financier: 'Izilend (FS Capital)', bedrag: 90, segment: 'Kantoren', regio: 'Madrid', gecontroleerd: '2026-11-16',
      titel: 'Kantorencomplex Helios in Campo de las Naciones', detail: 'Financiering met het complex als onderpand: twee kantoorgebouwen van bijna 35.000 m² uit 2019, hoofdkantoor van ING Spanje. De eigenaar is niet genoemd; Rivoli Asset Management trad voor de eigenaar op.',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/offices/izilend-provides-eur90m-financing-for-madrid-office-complex/' },
    { datum: '2026-08-05', financier: 'CaixaBank (bank)', bedrag: 64.42, segment: 'Winkels', regio: 'Madrid', gecontroleerd: '2026-11-16',
      titel: 'Retailpark El Cañaveral in Vicálvaro', detail: 'Bilaterale lening van CaixaBank CIB aan El Cañaveral Desarrollos Terciarios (OMO Retail en Rodríguez Normand) voor een retailpark van 73.974 m² met 54 winkels. Opening gepland eind 2027.',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/retail/caixabank-finances-el-canaveral-retail-park-with-eur64-4m/' },
    { datum: '2026-07-21', financier: 'Maslow Capital', bedrag: 44.2, segment: 'Wonen', regio: 'Costa del Sol', gecontroleerd: '2026-11-16',
      titel: '88 appartementen in Elviria, Marbella', detail: 'Ontwikkelfinanciering voor 88 appartementen in elf blokken, een project van ConceptHomes.',
      bron: 'Maslow Capital', url: 'https://maslowcapital.com/blog/2026/07/21/maslow-capital-provides-e44-2-million-in-financing-for-the-development-of-a-residential-scheme-in-marbella/' },
    { datum: '2026-07-14', financier: 'Maslow Capital', bedrag: null, segment: 'Hotels', regio: 'Madrid, Málaga en Barcelona', gecontroleerd: '2026-11-16',
      titel: 'Vier hotels van het platform Selecto', detail: 'Senior financiering voor vier stadshotels onder de naam Holiday Inn Express, met een ontwikkelwaarde van meer dan € 200 miljoen. Het leenbedrag is niet gepubliceerd.',
      bron: 'Maslow Capital', url: 'https://maslowcapital.com/blog/2026/07/14/maslow-capital-finances-tikehau-capitals-new-hotel-platform-in-iberia-with-a-gross-development-value-of-more-than-e200-million/' },
    { datum: '2026-06-24', financier: 'Cofides (staatsfonds)', bedrag: 11, segment: 'Wonen', regio: 'Madrid', gecontroleerd: '2026-11-16',
      titel: 'Circa 650 betaalbare huurwoningen', detail: 'Lening uit het Fondo de Impacto Social aan Alas Vivienda Asequible en Alquiler voor de aankoop en exploitatie van circa 650 woningen in negen gebouwen.',
      bron: 'EjePrime', url: 'https://www.ejeprime.com/residencial/cofides-concede-a-alas-un-prestamo-de-11-millones-para-adquirir-y-explotar-650-viviendas' },
    { datum: '2026-06-17', financier: 'BBVA (bank)', bedrag: 16.5, segment: 'Wonen', regio: 'Costa del Sol', gecontroleerd: '2026-11-16',
      titel: 'Woningproject Adagio in Estepona', detail: 'Ontwikkelfinanciering met hypotheek aan Metrovacesa voor 94 woningen. Rente Euribor plus 2,5%.',
      bron: 'EjePrime', url: 'https://www.ejeprime.com/empresa/metrovacesa-suscribe-un-prestamo-de-165-millones-con-bbva-para-hacer-vivienda-en-estepona' },
    { datum: '2026-05-07', financier: 'Maslow Capital', bedrag: 40, segment: 'Logistiek', regio: 'Madrid', gecontroleerd: '2026-11-16',
      titel: 'Logistieke grondpositie Alma Meco', detail: 'Lening aan Dunas Capital Real Estate voor een logistiek ontwikkelgebied van meer dan 1,6 miljoen m² op 35 km van Madrid.',
      bron: 'Maslow Capital', url: 'https://maslowcapital.com/blog/2026/05/07/maslow-capital-lends-e40m-to-dunas-capital-for-one-of-the-largest-logistics-developments-in-spain/' },
    { datum: '2026-02-03', financier: 'Maslow Capital', bedrag: 11.2, segment: 'Wonen', regio: 'Costa del Sol', gecontroleerd: '2026-11-16',
      titel: 'Vijf luxe villa\'s in Benahavís', detail: 'Ontwikkelfaciliteit aan KASA Developers voor Altura Residences, vijf villa\'s van 400 m² in La Quinta.',
      bron: 'Maslow Capital', url: 'https://maslowcapital.com/blog/2026/02/03/maslow-capital-provides-e11-2m-to-fund-costa-del-sol-luxury-gated-villa-scheme/' }
  ],

  // Aan- en verkopen. Zonder eigen bron en url komt de regel uit de ranglijst van Brainsre News (2026); daar is alleen de maand bekend.
  transactiesBron: { naam: 'Brainsre News, ranglijst transacties 2026', url: 'https://brainsre.news/transacciones-inmobiliarias-espana-ranking/' },
  transacties: [
    { datum: '2026-11-10', koper: 'Niet bij naam genoemd', verkoper: 'Home Capital Rentals (socimi)', bedrag: 8.8, segment: 'Wonen', regio: 'Madrid', titel: 'Gebouw met 22 woningen voor middellange verhuur in Guindalera', gecontroleerd: '2026-11-16',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/residential/home-capital-sells-madrid-mid-stay-rental-building-for-eur8-8m/' },
    { datum: '2026-11-05', koper: 'Calena Partners', verkoper: 'Atalaya (Actyus, Andbank)', bedrag: null, segment: 'Hotels', regio: 'Mallorca', titel: 'Hotel THB Bamboo Alcudia, 208 kamers, prijs niet gepubliceerd', gecontroleerd: '2026-11-16',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/hotels/calena-partners-acquires-thb-bamboo-alcudia-hotel-in-mallorca/' },
    { datum: '2026-11-03', koper: 'Lokale particuliere belegger, niet bij naam genoemd', verkoper: 'Next Point', bedrag: 13, segment: 'Hotels', regio: 'Mallorca', titel: 'Hotel Garden Saladina in Playa de Muro, 132 kamers', gecontroleerd: '2026-11-16',
      bron: 'Brainsre News, via Expansión', url: 'https://brainsre.news/next-point-vende-hotel-garden-saladina-13-millones/' },
    { datum: '2026-10-30', koper: 'RIU Hotels & Resorts', verkoper: 'Blasson Property Investments en BNP Paribas AM Alts', bedrag: 300, segment: 'Hotels', regio: 'Barcelona', titel: 'Grand Hyatt Barcelona (Princesa Sofía), 465 kamers, meer dan € 300 miljoen', gecontroleerd: '2026-11-16',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/hotels/riu-hotels-acquires-the-grand-hyatt-barcelona-for-over-eur300m/' },
    { datum: '2026-10-27', koper: 'Swiss Life Asset Managers', verkoper: 'Sixth Street', bedrag: 26.25, segment: 'Hotels', regio: 'Roquetas de Mar en Lloret de Mar', titel: 'Twee hotels van Pierre & Vacances, samen 399 kamers', gecontroleerd: '2026-11-16',
      bron: 'Brainsre News, via EjePrime', url: 'https://brainsre.news/swiss-life-adquiere-dos-hoteles-sixth-street/' },
    { datum: '2026-10-19', koper: 'Santander Real Estate Retail Opportunities (fonds van Banco Santander)', verkoper: 'LaSalle Investment Management', bedrag: null, segment: 'Winkels', regio: 'Salamanca', titel: 'Winkelcentrum El Tormes, 22.500 m², minder dan € 70 miljoen', gecontroleerd: '2026-11-16',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/retail/santander-acquires-el-tormes-shopping-centre-in-salamanca-for-under-eur70m/' },
    { datum: '2026-10-09', koper: 'Niet bij naam genoemd', verkoper: 'Vbare Iberian Properties (socimi)', bedrag: 10.9, segment: 'Wonen', regio: 'Madrid', titel: '27 woningen en twee winkels aan de calle Vallehermoso, akte 7 oktober', gecontroleerd: '2026-11-16',
      bron: 'Brainsre News', url: 'https://brainsre.news/vbare-vende-27-viviendas-dos-locales-madrid-10-9-m/' },
    { datum: '2026-09-28', koper: 'Iroko', verkoper: 'Merlin Properties', bedrag: 19.6, segment: 'Kantoren', regio: 'Sant Cugat del Vallès', titel: 'Kantoorgebouw van 10.140 m², vooral verhuurd aan Ricoh España', gecontroleerd: '2026-11-16',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/offices/iroko-acquires-sant-cugat-office-building-from-merlin-for-eur19-6m/' },
    { datum: '2026-09-25', koper: 'Starwood Capital', verkoper: 'Nuveen Real Estate', bedrag: 240, segment: 'Wonen', regio: 'Madrid, Córdoba, Pamplona', titel: 'Vier huurprojecten, circa 1.100 woningen', gecontroleerd: '2026-11-16',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/residential/starwood-acquires-1100-spanish-homes-from-nuveen-for-eur240m/' },
    { datum: '2026-09-21', koper: 'Family office, cliënt van Kiri Asset Management', verkoper: '', bedrag: null, segment: 'Winkels', regio: 'Madrid', titel: 'Twee winkels van samen circa 300 m² aan Fernando VI 11, gesloten in juli', gecontroleerd: '2026-11-16',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/retail/kiri-am-family-office-acquires-two-retail-units-in-madrid/' },
    { datum: '2026-09', koper: 'InmoCaixa', verkoper: 'Bain Capital en FREO Group', bedrag: 385, segment: 'Kantoren', regio: 'Barcelona', titel: 'Edificio Estel, 52.000 m² kantoren' },
    { datum: '2026-08-10', koper: 'Particuliere belegger, niet bij naam genoemd', verkoper: 'BNP Paribas Asset Management', bedrag: 80, segment: 'Hotels', regio: 'Madrid', titel: 'Gran Vía 43, voormalig Hotel Rex, nu hotel Room Mate Macarena, meer dan € 80 miljoen', gecontroleerd: '2026-11-16',
      bron: 'Brainsre News, via El Confidencial', url: 'https://brainsre.news/bnp-vende-80-millones-inmueble-gran-via-43-madrid/' },
    { datum: '2026-08-06', koper: 'Spaans family office, niet bij naam genoemd', verkoper: 'Alfareal', bedrag: null, segment: 'Studenten- en flexwonen', regio: 'Madrid', titel: 'Coliving Galerías in Carabanchel, volledig verhuurd, prijs niet gepubliceerd', gecontroleerd: '2026-11-16',
      bron: 'Iberian Property', url: 'https://www.iberian.property/news/residential/alfareal-sells-madrid-coliving-asset-to-a-spanish-family-office/' },
    { datum: '2026-08', koper: 'Norges Bank en Sonae Sierra', verkoper: 'LSGI', bedrag: 1500, segment: 'Winkels', regio: 'Meerdere regio\'s', titel: 'Portefeuille van acht winkelcentra' },
    { datum: '2026-08', koper: 'M&G Real Estate', verkoper: 'Hines', bedrag: 133, segment: 'Studenten- en flexwonen', regio: 'Barcelona', titel: 'Aparto Diagonal Suites, 526 kamers' },
    { datum: '2026-08', koper: 'Meridia', verkoper: 'Bain Capital, Momentum REIM en Episode', bedrag: 125, segment: 'Studenten- en flexwonen', regio: 'Madrid', titel: 'Flex living in Carabanchel, 977 eenheden' },
    { datum: '2026-07-14', koper: 'Lokaal family office, niet bij naam genoemd', verkoper: '', bedrag: 8.2, segment: 'Hotels', regio: 'Barcelona', titel: 'Gebouw met aparthotel Murmuri bij de Passeig de Gràcia', gecontroleerd: '2026-11-16',
      bron: 'idealista', url: 'https://www.idealista.com/news/inmobiliario/hoteles/2026/07/14/905703-un-family-office-compra-por-8-2-millones-el-apartahotel-murmuri-junto-a-paseo-de' },
    { datum: '2026-07', koper: 'Nuveen Real Estate', verkoper: 'King Street en Medinvest', bedrag: 330, segment: 'Studenten- en flexwonen', regio: 'Meerdere steden', titel: 'Studentenresidenties Bravo' },
    { datum: '2026-07', koper: 'Rivoli', verkoper: 'Nuveen Real Estate', bedrag: 250, segment: 'Winkels', regio: 'Arroyomolinos, Madrid', titel: 'Winkelcentrum Xanadú, resterende 50%' },
    { datum: '2026-07', koper: 'Extendam', verkoper: 'Eurazeo en PSP Investments', bedrag: 145, segment: 'Hotels', regio: 'Madrid en Barcelona', titel: 'Drie hotels, 543 kamers' },
    { datum: '2026-07', koper: 'Square AM', verkoper: 'Starwood Capital', bedrag: 104, segment: 'Kantoren', regio: 'Alcobendas, Madrid', titel: 'Parque Empresarial Omega' },
    { datum: '2026-07', koper: 'Grupo Insur', verkoper: 'Cain en FREO Group', bedrag: 80.9, segment: 'Kantoren', regio: 'Madrid', titel: 'La Sierra Business Area' },
    { datum: '2026-06', koper: 'M7 Real Estate', verkoper: 'Aristeas & Partners Group', bedrag: 181, segment: 'Logistiek', regio: 'Meerdere locaties', titel: 'Portefeuille van 13 logistieke objecten' },
    { datum: '2026-06', koper: 'Grupo Icyesa', verkoper: 'RBA', bedrag: 100, segment: 'Kantoren', regio: 'Barcelona', titel: 'Diagonal 189' },
    { datum: '2026-06', koper: 'GMP', verkoper: 'Metrovacesa en Tishman Speyer', bedrag: 90, segment: 'Kantoren', regio: 'Madrid', titel: 'Hoofdkantoor AstraZeneca' },
    { datum: '2026-04', koper: 'Greystar', verkoper: 'Straco Real Estate', bedrag: 150, segment: 'Studenten- en flexwonen', regio: 'Salamanca en Valencia', titel: 'Twee studentenresidenties, 1.600 bedden' },
    { datum: '2026-04', koper: 'Ardian', verkoper: 'Renfe', bedrag: 108, segment: 'Kantoren', regio: 'Madrid', titel: 'Kantoorgebouw Méndez Álvaro' },
    { datum: '2026-03', koper: 'Natixis', verkoper: 'Atom Hoteles', bedrag: 51, segment: 'Hotels', regio: 'Fuerteventura', titel: 'Eurostars Las Salinas' },
    { datum: '2026-02', koper: 'Castellana Properties', verkoper: 'Henderson Park', bedrag: 340, segment: 'Winkels', regio: 'Madrid', titel: 'Winkelcentrum Islazul' },
    { datum: '2026-02', koper: 'Blasson', verkoper: '', bedrag: 90, segment: 'Hotels', regio: 'Ibiza', titel: 'Ibiza Corso Hotel' },
    { datum: '2026-02', koper: 'Transitions Europe', verkoper: '', bedrag: 22, segment: 'Logistiek', regio: 'Toledo', titel: 'Logistiek centrum, 32.000 m²' },
    { datum: '2026-01', koper: 'Ares Management', verkoper: 'Castellana Properties', bedrag: 279, segment: 'Winkels', regio: 'Meerdere regio\'s', titel: 'Negen winkelparken, 174.305 m²' },
    { datum: '2026-01', koper: 'M&G Real Estate', verkoper: '', bedrag: 239, segment: 'Wonen', regio: 'Madrid en Barcelona', titel: 'Woonprojecten Valdebebas en Barcelona, circa 1.000 eenheden' },
    { datum: '2026-01', koper: 'Atrea Real Estate', verkoper: 'Metrovacesa', bedrag: 200, segment: 'Kantoren', regio: 'Madrid', titel: 'Oria Innovation Campus, twee gebouwen' },
    { datum: '2026-01', koper: 'Argis', verkoper: 'CaixaBank', bedrag: 132, segment: 'Kantoren', regio: 'Sevilla', titel: 'Torre Sevilla' },
    { datum: '2026-01', koper: 'Besant Capital', verkoper: 'Duits pensioenfonds', bedrag: 80, segment: 'Hotels', regio: 'Madrid', titel: 'Hotel Suecia' }
  ],

  // Marktcijfers
  markt: {
    volume: {
      kop: '€ 16,4 miljard', periode: 'januari tot en met september 2026', groei: '25% meer dan een jaar eerder',
      bron: 'CBRE, via Brainsre News, 22 oktober 2026',
      url: 'https://brainsre.news/inversion-inmobiliaria-espana-16383-millones/',
      segmenten: [
        { naam: 'Wonen, inclusief studenten', mln: 5856 }, { naam: 'Hotels', mln: 2922 }, { naam: 'Winkels', mln: 2452 },
        { naam: 'Zorg en overig', mln: 1979 }, { naam: 'Kantoren', mln: 1962 }, { naam: 'Logistiek', mln: 1200 }
      ],
      regios: [
        { naam: 'Madrid', mln: 8000 }, { naam: 'Barcelona', mln: 2100 }, { naam: 'Andalusië', mln: 1300 },
        { naam: 'Regio Valencia', mln: 871 }, { naam: 'Balearen', mln: 579 }, { naam: 'Canarische Eilanden', mln: 383 }
      ]
    },
    rendement: {
      periode: 'derde kwartaal 2026', bron: 'idealista, 13 oktober 2026',
      url: 'https://www.idealista.com/news/inmobiliario/vivienda/2026/10/13/917397-la-rentabilidad-de-la-vivienda-cae-hasta-el-6-2-en-el-tercer-trimestre',
      landelijk: [
        { naam: 'Kantoren', pct: 11.2 }, { naam: 'Winkels', pct: 10.0 }, { naam: 'Woningen', pct: 6.2 }, { naam: 'Garages', pct: 6.0 }
      ],
      steden: [
        { naam: 'Murcia', pct: 6.8 }, { naam: 'Castellón de la Plana', pct: 7.2 }, { naam: 'Huelva', pct: 7.4 },
        { naam: 'Barcelona', pct: 4.4 }, { naam: 'Madrid', pct: 4.3 }, { naam: 'Palma', pct: 4.3 }, { naam: 'San Sebastián', pct: 3.3 }
      ]
    }
  },

  // Woningprijzen over de afgelopen 36 maanden, als vergelijking naast het veld Waardestijging.
  // Per regio de prijsindex aan het begin (van) en aan het eind (tot) van de periode, zoals de bron die geeft.
  // De site rekent daaruit het gemiddelde per jaar. Bijwerken zodra de bron een nieuw kwartaal publiceert:
  // beide indexcijfers vervangen, zodat de periode precies drie jaar blijft.
  waardestijging: {
    jaren: 3,
    thuis: [
      { land: 'Nederland', periode: 'derde kwartaal 2023 tot derde kwartaal 2026',
        bron: 'CBS, prijsindex bestaande koopwoningen, 22 oktober 2026', url: 'https://opendata.cbs.nl/statline/#/CBS/nl/dataset/85792NED/table',
        regios: [
          { naam: 'Nederland', van: 126.4, tot: 156.4 }, { naam: 'Noord-Holland', van: 122.6, tot: 144.9 },
          { naam: 'Zuid-Holland', van: 124.8, tot: 154.5 }, { naam: 'Provincie Utrecht', van: 124.3, tot: 158.2 },
          { naam: 'Noord-Brabant', van: 127, tot: 158.3 }, { naam: 'Gelderland', van: 130.8, tot: 166.2 },
          { naam: 'Amsterdam', van: 119.1, tot: 135.4 }, { naam: 'Rotterdam', van: 123.3, tot: 147.5 }
        ] },
      { land: 'België', periode: 'tweede kwartaal 2023 tot tweede kwartaal 2026 (voorlopig cijfer)',
        bron: 'Eurostat, woningprijsindex, 1 oktober 2026', url: 'https://ec.europa.eu/eurostat/databrowser/view/prc_hpi_q/default/table',
        regios: [ { naam: 'België', van: 134.55, tot: 145.99 } ] }
    ],
    spanje: [
      { land: 'Spanje', periode: 'tweede kwartaal 2023 tot tweede kwartaal 2026',
        bron: 'INE, Índice de Precios de Vivienda, 7 september 2026', url: 'https://www.ine.es/dyngs/Prensa/IPV2T26.htm',
        regios: [
          { naam: 'Spanje', van: 81.478, tot: 111.095 }, { naam: 'Andalusië', van: 79.633, tot: 110.903 },
          { naam: 'Balearen', van: 83.119, tot: 112.048 }, { naam: 'Canarische Eilanden', van: 82.101, tot: 110.44 },
          { naam: 'Catalonië', van: 83.186, tot: 109.046 }, { naam: 'Madrid', van: 81.641, tot: 111.85 },
          { naam: 'Murcia', van: 80.369, tot: 113.192 }, { naam: 'Regio Valencia', van: 80.817, tot: 111.696 }
        ] }
    ]
  },

  // Overdrachtsbelasting (ITP) op bestaand vastgoed, algemeen tarief per regio.
  itp: {
    stand: '2026', bron: 'Gibobs, overzicht ITP 2026', url: 'https://www.gibobs.com/blog/itp-2026/',
    regios: [
      { naam: 'Andalusië', van: 7, tot: 7 }, { naam: 'Aragón', van: 8, tot: 8 }, { naam: 'Asturië', van: 8, tot: 8 },
      { naam: 'Balearen', van: 8, tot: 11 }, { naam: 'Canarische Eilanden', van: 6.5, tot: 6.5 }, { naam: 'Cantabrië', van: 10, tot: 10 },
      { naam: 'Castilla-La Mancha', van: 9, tot: 9 }, { naam: 'Castilla y León', van: 8, tot: 8 }, { naam: 'Catalonië', van: 10, tot: 13 },
      { naam: 'Extremadura', van: 8, tot: 8 }, { naam: 'Galicië', van: 10, tot: 10 }, { naam: 'La Rioja', van: 7, tot: 7 },
      { naam: 'Madrid', van: 6, tot: 6 }, { naam: 'Murcia', van: 8, tot: 8 }, { naam: 'Navarra', van: 6, tot: 6 },
      { naam: 'Baskenland', van: 4, tot: 7 }, { naam: 'Regio Valencia', van: 10, tot: 10 }
    ]
  }
};
