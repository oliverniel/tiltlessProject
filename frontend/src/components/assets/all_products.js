import GT3Driver_edesta from './GT3Driver_edesta.JPG';
import GT3Driver_pohja from './GT3Driver_pohja.JPG';
import GT3Driver_ylapuoli from './GT3Driver_ylapuoli.JPG';
import GT3Fairway_edesta from './GT3Fairway_edesta.JPG';
import GT3Fairway_pohja from './GT3Fairway_pohja.JPG';
import GT3Fairway_ylapuoli from './GT3Fairway_ylapuoli.JPG';
import jaw_lapa from './jaw_lapa.JPG';
import jaw_pohja from './jaw_pohja.JPG';
import jaw_sivu from './jaw_sivu.JPG';
import ltdxls_etuosa from './ltdxls_etuosa.JPG';
import ltdxls_pohja from './ltdxls_pohja.JPG';
import ltdxls_varsi from './ltdxls_varsi.JPG';
import Phantom5_edesta from './Phantom5_edesta.JPG';
import Phantom5_pohja from './Phantom5_pohja.JPG';
import Phantom5_takaa from './Phantom5_takaa.JPG';
import PROV1_paketti from './PROV1_paketti.JPG';
import PROV1_pallo from './PROV1_pallo.JPG';
import PROV1X_paketti from './PROV1X_paketti.JPG';
import PROV1X_pallo from './PROV1X_pallo.JPG';
import putteriSpider_etuosa from './putteriSpider_etuosa.JPG';
import putteriSpider_pohja from './putteriSpider_pohja.JPG';
import putteriSpider_takaa from './putteriSpider_takaa.JPG';
import raudat_kaikki from './raudat_kaikki.JPG';
import raudat_lapa from './raudat_lapa.JPG';
import raudat_sivu from './raudat_sivu.JPG';
import SM10_edesta from './SM10_edesta.JPG';
import SM10_pohja from './SM10_pohja.JPG';
import SM10_ylapuoli from './SM10_ylapuoli.JPG';
import SSNewport_edesta from './SSNewport_edesta.JPG';
import SSNewport_pohja from './SSNewport_pohja.JPG';
import SSNewport_yläpuoli from './SSNewport_yläpuoli.JPG';
import T150_edesta from './T150_edesta.JPG';
import T150_sivu from './T150_sivu.JPG';
import T150_ylapuoli from './T150_ylapuoli.JPG';
import T200UD_edesta from './T200UD_edesta.JPG';
import T200UD_pohja from './T200UD_pohja.JPG';
import T200UD_ylapuoli from './T200UD_ylapuoli.JPG';


let all_products = [
    {
        id: 1,
        name: 'GT3 Driver',
        brand: 'Titleist',
        type: 'Driver',
        describtion: '•	Titleistin GT3-draiveri antaa pallolle äärimmäisen kovan nopeuden. Erinomainen säädettävyys sopii pelaajille, jotka haluavat optimoida lyöntipituuden ja hallita lentorataa.',
        price: 699,
        images: [
            { src: GT3Driver_edesta, alt: 'GT3Driver_edesta' },
            { src: GT3Driver_pohja, alt: 'GT3Driver_pohja' },
            { src: GT3Driver_ylapuoli, alt: 'GT3Driver_ylapuoli' }
        ],
        hand: ['Right', 'Left'],
        shaft: ['Mitsubishi SH DRV/FWY Tensei 1K Black 65', 'Mitsubishi SH DRV/FWY Tensei 1K Blue 55'],
        flex: ['Stiff', 'X-Stiff'],
        loft: ['8°','9°', '10°'],
        new: true,
    },
    {
        id: 2,
        name: 'GT3 Fairway',
        brand: 'Titleist',
        type: 'Fairway wood',
        describtion: '•	Titleistin GT3 tarjoaa hallittavuutta, kovaa pallon nopeutta sekä matalia spinnilukemia. Se on ihanteellinen valinta taitaville golffareille, jotka arvostavat äärimmäistä lyöntipituutta. Korkeampi lyöntipinta erottaa GT3:n GT2:sta. Tätä profiilia suosivat monet pelaajat, jotka haluavat lyödä palloa metallisella väyläpuulla ja jotka pitävät syvemmän mallisen lyöntipinnan ulkonäöstä.',
        price: 379,
        images: [
            { src: GT3Fairway_edesta, alt: 'GT3Fairway_edesta' },
            { src: GT3Fairway_pohja, alt: 'GT3Fairway_pohja' },
            { src: GT3Fairway_ylapuoli, alt: 'GT3Fairway_ylapuoli' }
        ],
        hand: ['Right', 'Left'],
        shaft: ['Mitsubishi SH DRV/FWY Tensei 1K Black 75', 'Mitsubishi SH DRV/FWY Tensei 1K Blue 65'],
        flex: ['Stiff', 'X-Stiff'],
        loft: ['13.5°', '15°'],
        new: true,
    },
    {
        id: 3,
        name: 'T200U 3G Utility',
        brand: 'Titleist',
        type: 'Utility iron',
        describtion: '•	Titleist T200 Utility perustuu samannimiseen suosittuun rautasettiin, mutta siinä on lisää anteeksiantavuutta ja se antaa sinulle hallinnan, jota tarvitset lyödäksesi kakkos- tai kolmosrautaa luottavaisin mielin. Mailaa voidaan käyttää sekä tiiltä että väylältä, ja se on erinomainen valinta monille tourpelaajille.',
        price: 299,
        images: [
            { src: T200UD_edesta, alt: 'T200UD_edesta' },
            { src: T200UD_pohja, alt: 'T200UD_pohja' },
            { src: T200UD_ylapuoli, alt: 'T200UD_ylapuoli' }
        ],
        hand: ['Right', 'Left'],
        shaft: 'Project X HZRDUS Black 4G',
        flex: '6.0',
        loft: ['17°/2-iron', '20°/3-iron'],
        new: true,
    },
    {
        id: 4,
        name: 'T150 irons (5-pw)',
        brand: 'Titleist',
        type: 'Iron',
        describtion: '•	Titleistin tiimi käy tourpelaajien ja tavoitteellisten harrastajagolffarien kanssa läpi T-Series-rautamailojen jokaisen ominaisuuden – hallittavuuden, lyöntipituuden, lentoradan, anteeksiantavuuden, ulkonäön, lyöntiäänen ja tuntuman – jotta lopputulos olisi peliä parantava rautamaila. Titleist T150 pohjautuu T100:n täysin taottuun rakenteeseen, mutta on suunniteltu kuumemmaksi ja lyö pidemmälle. Entistäkin anteeksiantavammassa mallissa on myös luottamusta herättävä muotoilu.',
        price: 1249,
        images: [
            { src: T150_edesta, alt: 'T150_edesta' },
            { src: T150_sivu, alt: 'T150_sivu' },
            { src: T150_ylapuoli, alt: 'T150_ylapuoli' }
        ],
        hand: ['Right', 'Left'],
        shaft: 'Project X LZ',
        flex: ['6.0'],
        loft: ['25','28','32','36','40','44'],
        new: true,
    },
    {
        id: 5,
        name: 'SM10 Wedge',
        brand: 'Titleist',
        type: 'Wedge',
        describtion: '•	Kun bägissä on Titleist SM10 -wedget, mahdollisuudet parantaa tasoitustasi kasvavat. Tarkka kontakti, optimaalinen lentorata, ainutlaatuinen spinni – ja huikeat Bob Vokey -pohjahionnat – varmistavat, että saat kaiken tarvittavan lähipelin terävöittämiseen. SM10 on suunniteltu hienoihin lyönteihin – yksinkertaisiin ja ikimuistoisiin.',
        price: 179,
        images: [
            { src: SM10_edesta, alt: 'SM10_edesta' },
            { src: SM10_pohja, alt: 'SM10_pohja' },
            { src: SM10_ylapuoli, alt: 'SM10_yläpuoli' }
        ],
        hand: ['Right', 'Left'],
        shaft: ['Graphite regular', 'Stiff'],
        flex:'',
        loft:['50°', '52°', '54°', '56°', '58°', '60°'],
        new: true,
    },
    {
        id: 6,
        name: 'Phantom 5',
        brand: 'Scotty Cameron',
        type: 'Putter',
        describtion: '•	Tässä on Scottyn malletputterien ikisuosikki. Phantom 5 tunnetaan kompaktista mallet-muotoilustaan ja blade-tyyppisestä tuntumastaan. Putterissa on uusi, modernimpi muotoilu. Tarkkuusjyrsityssä putterissa on ruostumatonta 303-terästä ja 6061-alumiinia. Aiempiin malleihin verrattuna tämän mallin siivekkeiden kulma on suorempi. Uudistetun ylälinjan elegantit, jyrsityt tähtäyspisteet tekevät mailasta vakuuttavan näköisen. Pisteitä on korostettu läpikuultavalla smoke-värillä.',
        price: 499,
        images: [
            { src: Phantom5_edesta, alt: 'Phantom5_edesta' },
            { src: Phantom5_pohja, alt: 'Phantom5_pohja' },
            { src: Phantom5_takaa, alt: 'Phantom5_takaa' }
        ],
        hand: ['Right', 'Left'],
        shaft: 'Scotty Cameron Pistolini grip (Grippi)',
        flex: ['34" (Pituus)','35" (Pituus)'],
        loft:'',
        new: true,
    },
    {
        id: 7,
        name: 'SS Newport 2',
        brand: 'Scotty Cameron',
        type: 'Putter',
        describtion: '•	Scotty Cameronin Studio Style Newport 2 on tourien innoittama ja ajaton blade-putteri, jossa on terävät linjat ja klassinen ilme. Tarkkuusjyrsitty lyöntipinta ja tasainen painon jakautuminen varmistavat vakaan tuntuman ja puhtaan osuman, mikä tekee mailasta erinomaisen valinnan pelaajille, jotka etsivät greeneille hallittavuutta ja miellyttävää tuntumaa.',
        price: 499,
        images: [
            { src: SSNewport_edesta, alt: 'SSNewport_edesta' },
            { src: SSNewport_pohja, alt: 'SSNewport_pohja' },
            { src: SSNewport_yläpuoli, alt: 'SSNewport_yläpuoli' }
        ],
        hand: ['Right', 'Left'],
        shaft: ['34" (Pituus)','35" (Pituus)'],
        flex: 'Putter-flex',
        loft:'3°',
        new: true,
    },
    {
        id: 8,
        name: 'MD5 Jaws',
        brand: 'Callaway',
        type: 'Wedge',
        describtion: 'Tässä käytetty Callawayn MD5 Jaws wedge. Lavassa jonkinverran naarmuja, mutta muuten hyvässä kunnossa. Ei kivilommoja. Grippi on kulunut',
        price: 89,
        images: [
            { src: jaw_lapa, alt: 'jaw_lapa' },
            { src: jaw_pohja, alt: 'jaw_pohja' },
            { src: jaw_sivu, alt: 'jaw_sivu' }
        ],
        hand: 'Right',
        shaft: 'Callaway Impact Wedge-flex',
        flex: 'Wedge-flex',
        loft: '56°',
        new: false,
    },
    {
        id: 9,
        name: 'LTDX LS Low Spin',
        brand: 'Cobra',
        type: 'Driver',
        describtion: 'Cobran LTDX LS Low Spin -draiveri, joka on tarkoitettu kokeneemmille pelaajille. HOT- Face -teknologia takaa maksimaalisen pallon nopeuden ja matalan spinni. Draiverissa on myös säädettävä painojärjestelmä, joka mahdollistaa lyöntipituuden optimoinnin. Mailan pää on hyvässä kunnossa, vain pieniä jälkiä käytöstä.',
        price: 250,
        images: [
            { src: ltdxls_etuosa, alt: 'ltdxls_etuosa' },
            { src: ltdxls_pohja, alt: 'ltdxls_pohja' },
            { src: ltdxls_varsi, alt: 'ltdxls_varsi' }
        ],
        hand: 'Right',
        shaft: 'Mitsubishi Kai\'li 60s',
        flex: 'Stiff',
        loft: '9° (säädettävät +/- 1°)',
        new: false,
    },
    {
        id: 10,
        name: 'T100 irons (5-pw)',
        brand: 'Titleist',
        type: 'Iron',
        describtion: 'Titleistin tour-tason rautasetti. Lavoissa vähän, mutta jonkin verran naarmuja käytöstä. 8-raudassa pieni kiven lommo, ei vaikuta pelaamiseen. Gripit vaihdettavassa kunnossa.',
        price: 599,
        images: [
            { src: raudat_kaikki, alt: 'raudat_kaikki' },
            { src: raudat_lapa, alt: 'raudat_lapa' },
            { src: raudat_sivu, alt: 'raudat_sivu' }
        ],
        hand: 'Right',
        shaft: 'True Temper AMT 300 Tour White',
        flex: 'Stiff',
        loft: ['46°', '42°', '38°', '34°', '30°', '26°'],
        new: false,
    },
    {
        id: 11,
        name: 'Pro V1 (12-pack)',
        brand: 'Titleist',
        type: 'Ball',
        describtion: 'Titleist Pro V1 on ihanteellinen valinta useimmille golffareille, ja samalla koko golfmaailman pelatuin pallomalli. Pro V1:n viimeisimmät uudistukset tarjoavat entistä parempaa lentopituutta ja vakaampia tuloksia. Pro V1x:ään verrattuna Pro V1 lentää matalammalla ja spinnaa pitkässä pelissä vähemmän. Greeneillä sen spinni on samanlainen, ja tuntuma pehmeämpi',
        price: 64.99,
        images: [
            { src: PROV1_paketti, alt: 'PROV1_paketti' },
            { src: PROV1_pallo, alt: 'PROV1_pallo' }
        ],
        hand: '',
        shaft: '',
        flex: '',
        loft: '',
        new: true,
    },
    {
        id: 12,
        name: 'Pro V1x (12-pack)',
        brand: 'Titleist',
        type: 'Ball',
        describtion: '•	Titleist Pro V1x:ssä on korkea lentorata, täsmällinen spinni ja erinomainen hallittavuus. Se tarjoaa entistä parempaa lentopituutta ja vakaampia tuloksia parantaen peliä ja suorituskykyä. Pro V1:een verrattuna Pro V1x lentää pidemmälle, spinnaa pitkässä pelissä enemmän ja tuntuu kiinteämmältä. Pro V1x -pallo sopii äärimmäistä suorituskykyä, korkeampaa lentorataa ja parempaa spinniä arvostaville pelaajille.',
        price: 64.99,
        images: [
            { src: PROV1X_paketti, alt: 'PROV1X_paketti' },
            { src: PROV1X_pallo, alt: 'PROV1X_pallo' }
        ],
        hand: '',
        shaft: '',
        flex: '',
        loft: '',
        new: true,
    },
    {
        id: 13,
        name: 'Putter Spider Tour III',
        brand: 'TaylorMade',
        type: 'Putter',
        describtion: 'TaylorMade Spider Tour on tourtasoista suorituskykyä tarjoava mallet-putteri kaikille golffareille. Putterin small slant -liitos viittaa siihen, että putterin varren ja lavan välinen niska on lyhyt. Putterissa on toe hang -painotus. Se sopii pelaajille, joilla on hieman kaartuva puttausliike. Kunto on kuin uusi, mutta grippi hieman kulunut',
        price: 239,
        images: [
            { src: putteriSpider_etuosa, alt: 'putteriSpider_etuosa' },
            { src: putteriSpider_pohja, alt: 'putteriSpider_pohja' },
            { src: putteriSpider_takaa, alt: 'putteriSpider_takaa' }
        ],
        hand: 'Right',
        shaft: '34" (pituus)',
        flex: 'Putter-flex',
        loft: '3°',
        new: false,
    }
]