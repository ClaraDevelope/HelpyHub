// https://www.guiaongs.org/directorio/
// change.org
// hacesfalta.org
import { v4 as uuidv4 } from 'uuid'
export const PROJECTS = [
  {
    id: uuidv4(),
    nombreCampaña: 'Emergencia en Gaza',
    nombreEntidad: 'UNRWA',
    resumenProyecto:
      'Israel está llevando a cabo un genocidio contra el pueblo palestino mediante una campaña sistemática de violencia, ocupación y opresión. La masacre de civiles, incluidos niños, a través de bombardeos indiscriminados y ataques militares, el bloqueo brutal de Gaza que impide el acceso a alimentos, medicinas y otros recursos esenciales, y la continua expansión de asentamientos ilegales que despojan a los palestinos de sus hogares y tierras, son parte de esta cruel política de exterminio. Estas acciones representan una clara violación de los derechos humanos y un intento deliberado de borrar la identidad y existencia del pueblo palestino. ¡Elegir nos hace libres. Por eso en UNRWA llevamos 70 años trabajando para que los refugiados de Palestina puedan decidir su propio destino, sin que nadie les ocupe, les ataque y les niegue sus derechos! Afortunadamente, tú eres libre de decidir entre no dar apoyo, o ayudarnos a mantener la dignidad a la población refugiada de Palestina.',
    etiquetas: [
      'derechos humanos',
      'ayuda humanitaria',
      'emergencia',
      'destacado'
    ],
    presencial: true,
    online: true,
    lugarDesarrollo: 'Palestina',
    web: 'https://unrwa.es/',
    img: 'https://i.pinimg.com/564x/d9/c9/ee/d9c9ee9c78b0755caec627e21c338090.jpg'
    // img: 'https://i.pinimg.com/564x/59/03/27/5903279462acb00dca3cb2a96f81a074.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'BDS',
    nombreEntidad: 'RESCOP',
    resumenProyecto:
      'Llevamos casi un año viviendo un genocidio en directo contra el pueblo palestino, con ataques militares indiscriminados que han causado la muerte de miles de civiles y la destrucción de hogares e infraestructuras esenciales en Gaza y Cisjordania. Los responsables de estos crímenes siguen impunes, mientras la comunidad internacional, incluyendo algunos gobiernos europeos, no respeta los acuerdos y leyes internacionales que deberían proteger a los palestinos. Las violaciones sistemáticas de derechos humanos y las continuas agresiones no encuentran freno ni justicia en los tribunales internacionales. En respuesta a esta situación, la campaña de Boicot, Sanciones y Desinversión (BDS) es una iniciativa global liderada por la sociedad civil palestina desde 2005. Consiste en: Boicot: Evitar el consumo de productos y servicios israelíes, así como la participación en eventos culturales y académicos patrocinados por el Estado de Israel. Sanciones: Presionar a los gobiernos y organizaciones internacionales para que impongan sanciones diplomáticas, económicas y militares contra Israel.  Desinversión: Incentivar a instituciones y empresas a retirar sus inversiones de compañías que apoyan o se benefician de la ocupación israelí y la violación de derechos humanos. El objetivo del BDS es obligar a Israel a cumplir con el derecho internacional, poner fin a la ocupación y colonización de todas las tierras árabes, garantizar el derecho de retorno de los refugiados palestinos y reconocer los derechos fundamentales de los ciudadanos árabes-palestinos de Israel.',
    etiquetas: [
      'derechos humanos',
      'ayuda humanitaria',
      'emergencia',
      'destacado'
    ],
    presencial: true,
    online: true,
    lugarDesarrollo: 'cualquiera',
    web: 'https://boicotisrael.net/',
    img: 'https://bdsmovement.net/sites/default/files/bds-logo-card.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Emergencia en la República Democrática del Congo',
    nombreEntidad: 'ACNUR',
    resumenProyecto:
      'En 2024, como resultado de la prevalente inseguridad y del alarmante resurgimiento de la violencia perpetrada por grupos armados irregulares en los últimos dos años, casi seis millones de personas han sido desplazadas en las provincias de Ituri, Kivu del Norte, Kivu del Sur y Tanganyika. Día con día se deterioran las condiciones de vida de las personas desplazadas en la República Democrática del Congo, pues, al agotarse los recursos, muchas de ellas necesitan asistencia humanitaria para satisfacer las necesidades más apremiantes.',
    etiquetas: [
      'derechos humanos',
      'ayuda humanitaria',
      'emergencia',
      'destacado'
    ],
    presencial: false,
    online: true,
    lugarDesarrollo: 'República Democrática del Congo',
    web: 'https://www.acnur.org/es-es/emergencias/emergencia-en-republica-democratica-del-congo',
    img: 'https://www.acnur.org/sites/default/files/legacy-images/5d39c6463.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Adopta Un Abuelo',
    nombreEntidad: 'Adopta Un Abuelo',
    resumenProyecto:
      'Acompaña y haz felices a mayores que te necesitan. Adopta un abuelo y visítale o llámale cada semana. Puedes elegir hacerlo online o presencial en la residencia que prefieras, contamos con más de 300.',
    etiquetas: ['destacado', 'intergeneracional', 'voluntariado'],
    presencial: true,
    online: true,
    lugarDesarrollo: 'Cualquiera',
    web: 'https://adoptaunabuelo.org/',
    img: 'https://adoptaunabuelo.org/wp-content/uploads/2023/02/enriqueta.webp'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 2',
    nombreEntidad: 'Nombre de la Entidad 2',
    resumenProyecto: 'Resumen o explicación del Proyecto 2',
    etiquetas: ['', ''],
    presencial: false,
    online: true,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 2',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 3',
    nombreEntidad: 'Nombre de la Entidad 3',
    resumenProyecto: 'Resumen o explicación del Proyecto 3',
    etiquetas: ['', '', ''],
    presencial: true,
    online: true,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 3',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 1',
    nombreEntidad: 'Nombre de la Entidad 1',
    resumenProyecto: 'Resumen o explicación del Proyecto 1',
    etiquetas: ['', '', ''],
    presencial: true,
    online: false,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 1',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 2',
    nombreEntidad: 'Nombre de la Entidad 2',
    resumenProyecto: 'Resumen o explicación del Proyecto 2',
    etiquetas: ['', ''],
    presencial: false,
    online: true,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 2',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 3',
    nombreEntidad: 'Nombre de la Entidad 3',
    resumenProyecto: 'Resumen o explicación del Proyecto 3',
    etiquetas: ['', '', ''],
    presencial: true,
    online: true,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 3',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 1',
    nombreEntidad: 'Nombre de la Entidad 1',
    resumenProyecto: 'Resumen o explicación del Proyecto 1',
    etiquetas: ['', '', ''],
    presencial: true,
    online: false,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 1',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 2',
    nombreEntidad: 'Nombre de la Entidad 2',
    resumenProyecto: 'Resumen o explicación del Proyecto 2',
    etiquetas: ['', ''],
    presencial: false,
    online: true,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 2',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 3',
    nombreEntidad: 'Nombre de la Entidad 3',
    resumenProyecto: 'Resumen o explicación del Proyecto 3',
    etiquetas: ['', '', ''],
    presencial: true,
    online: true,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 3',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 1',
    nombreEntidad: 'Nombre de la Entidad 1',
    resumenProyecto: 'Resumen o explicación del Proyecto 1',
    etiquetas: ['', '', ''],
    presencial: true,
    online: false,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 1',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 2',
    nombreEntidad: 'Nombre de la Entidad 2',
    resumenProyecto: 'Resumen o explicación del Proyecto 2',
    etiquetas: ['', ''],
    presencial: false,
    online: true,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 2',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 3',
    nombreEntidad: 'Nombre de la Entidad 3',
    resumenProyecto: 'Resumen o explicación del Proyecto 3',
    etiquetas: ['', '', ''],
    presencial: true,
    online: true,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 3',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 1',
    nombreEntidad: 'Nombre de la Entidad 1',
    resumenProyecto: 'Resumen o explicación del Proyecto 1',
    etiquetas: ['', '', ''],
    presencial: true,
    online: false,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 1',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 2',
    nombreEntidad: 'Nombre de la Entidad 2',
    resumenProyecto: 'Resumen o explicación del Proyecto 2',
    etiquetas: ['', ''],
    presencial: false,
    online: true,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 2',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  },
  {
    id: uuidv4(),
    nombreCampaña: 'Nombre de la Campaña 3',
    nombreEntidad: 'Nombre de la Entidad 3',
    resumenProyecto: 'Resumen o explicación del Proyecto 3',
    etiquetas: ['', '', ''],
    presencial: true,
    online: true,
    lugarDesarrollo: 'Lugar donde se desarrolla el Proyecto 3',
    web: '',
    img: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
  }
]
