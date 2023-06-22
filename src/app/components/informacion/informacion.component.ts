import { Component, ElementRef, AfterViewInit, ViewChild, OnInit, OnDestroy } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements AfterViewInit, OnInit {
  @ViewChild('container') container!: ElementRef;
  

  mostrarCards = true;
  mostrarInfo = false;
  mostrarCarousel = false;

  cards = [
    { image: '../../assets/images/tipo1.png', title: 'Violencia física', description: 'Todo acto u omisión que produzca o pudiese producir daño o sufrimiento físico, dolor o muerte, así como cualquier otra forma de maltrato o agresión, castigos corporales, que afecte la integridad física, provocando o no lesiones, ya sean internas, externas o ambas, esto como resultado del uso de la fuerza o de cualquier objeto que se utilice con la intencionalidad de causar daño y de sus consecuencias, sin consideración del tiempo que se requiera para su recuperación.' },
    { image: '../../assets/images/tipo2.png', title: 'Violencia sexual', description: 'Toda acción que implique la vulneración o restricción del derecho a la integridad sexual y a decidir voluntariamente sobre su vida sexual y reproductiva, a través de amenazas, coerción, uso de la fuerza e intimidación, incluyendo la violación dentro del matrimonio o de otras relaciones vinculares y de parentesco, exista o no convivencia, la transmisión intencional de infecciones de transmisión sexual (ITS), así como la prostitución forzada, la trata con fines de explotación sexual, el abuso o acoso sexual, la esterilización forzada y otras prácticas análogas.' },
    { image: '../../assets/images/tipo3.png', title: 'Violencia psicológica', description: 'Cualquier acción, omisión o patrón de conducta dirigido a causar daño emocional, disminuir la autoestima, afectar la honra, provocar descrédito, menospreciar la dignidad personal, perturbar, degradar la identidad cultural, expresiones de identidad juvenil o controlar la conducta, el comportamiento, las creencias o las decisiones de una mujer, mediante la humillación, intimidación, encierros, aislamiento, tratamientos forzados o cualquier otro acto que afecte su estabilidad psicológica y emocional.' },
    { image: '../../assets/images/tipo4.png', title: 'Violencia económica y patrimonial', description: 'Es toda acción u omisión que se dirija a ocasionar un menoscabo en los recursos económicos y patrimoniales de las mujeres, incluidos aquellos de la sociedad conyugal y de la sociedad de bienes de las uniones de hecho, a través de: 1. La perturbación de la posesión, tenencia o propiedad de sus bienes muebles o inmuebles; 2. La pérdida, sustracción, destrucción, retención o apropiación indebida de objetos, instrumentos de trabajo, documentos personales, bienes, valores y derechos patrimoniales; 3. La limitación de los recursos económicos destinados a satisfacer sus necesidades o la privación de los medios indispensables para vivir una vida digna; así como la evasión del cumplimiento de sus obligaciones alimentarias; 4. La limitación o control de sus ingresos; y, 5. Percibir un salario menor por igual tarea, dentro de un mismo lugar de trabajo.' },
    { image: '../../assets/images/tipo5.png', title: 'Violencia gineco-obstétrica', description: 'Se considera a toda acción u omisión que limite el derecho de las	mujeres embarazadas o no, a recibir servicios de salud gineco-obstétricos.  Se expresa a través del	maltrato, de la imposición de prácticas culturales y científicas no consentidas o la violación del secreto profesional, el abuso de medicalización, y la no establecida en protocolos, guías o normas;	las acciones que consideren los procesos naturales de embarazo, parto y posparto como patologías, la esterilización forzada, la pérdida de autonomía y capacidad para decidir libremente sobre sus cuerpos y su sexualidad, impactando negativamente en la calidad de vida y salud sexual y reproductiva de mujeres en toda su diversidad y la Ley en el Art. 12 establece los ámbitos donde se desarrolla la violencia contra las mujeres. Intrafamiliar o doméstico, Educativo, Laboral, Deportivo, Estatal e institucional, Centros de Privación de Libertad, Mediático y cibernético, En el espacio público o comunitario, Centros e instituciones de salud y Emergencias y situaciones humanitarias.' },
    { image: '../../assets/images/tipo6.png', title: 'Violencia política', description: 'Es aquella violencia cometida por una persona o grupo de personas, directa o indirectamente, en contra de las mujeres que sean candidatas, militantes, electas, designadas o que ejerzan cargos públicos, defensoras de derechos humanos, feministas, lideresas políticas o sociales, o en contra de su familia. Esta violencia se orienta a acortar, suspender, impedir o restringir su accionar o el ejercicio de su cargo, o para inducirla u obligarla a que efectúe en contra de su voluntad una acción o incurra en una omisión, en el cumplimiento de sus funciones, incluida la falta de acceso a bienes públicos u otros recursos para el adecuado cumplimiento de sus funciones.' }
  ];

  currentPageIndex = 0;
  cardsPerPage = 3;
  totalPages: number;
  containerElement: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.totalPages = Math.ceil(this.cards.length / this.cardsPerPage);
    this.containerElement = this.elementRef.nativeElement;
    this.botonSeleccionado = 0;
  }
  

  ngAfterViewInit() {
    this.containerElement = this.elementRef.nativeElement.querySelector('.row');
    
  }

  previousPage(event: Event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      this.scrollToCard();
    }
  }

  nextPage(event: Event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    if (this.currentPageIndex < this.totalPages - 1) {
      this.currentPageIndex++;
      this.scrollToCard();
    }
  }

  scrollToCard() {
    const cardWidth = this.container.nativeElement.offsetWidth;
    const scrollLeft = cardWidth * this.currentPageIndex;
    this.container.nativeElement.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  }

  isCardActive(card: any): boolean {
    const activeCardIndex = this.currentPageIndex * this.cardsPerPage;
    const cardIndex = this.cards.indexOf(card);
    return cardIndex >= activeCardIndex && cardIndex < activeCardIndex + this.cardsPerPage;
  }
  
  mostrarTresCards() {
    this.mostrarCards = true;
    this.mostrarInfo = false;
    this.mostrarCarousel = false;
  }

  mostrarInformacion() {
    this.mostrarCards = false;
    this.mostrarInfo = true;
    this.mostrarCarousel = false;
  }

  mostrarCarrusel() {
    this.mostrarCards = false;
    this.mostrarInfo = false;
    this.mostrarCarousel = true;
  }
  
  botonSeleccionado: number | null = null;

  informacionBotones = [
    { descripcion: 'Violencia ejercida en el núcleo familiar por parte del cónyuge, la pareja en unión de hecho, el conviviente, los ascendientes, los descendientes, las hermanas, los hermanos, los parientes por consanguinidad y afinidad y las personas con las que la víctima mantenga o haya mantenido vínculos familiares, íntimos, afectivos, conyugales, de convivencia, noviazgo o de cohabitación.' },
    { descripcion: 'Comprende el contexto de enseñanza y aprendizaje siendo ejecutada por docentes, personal administrativo, compañeros u otro miembro de la comunidad educativa de todos los niveles.' },
    { descripcion: 'Comprende el contexto laboral en donde se ejerce el derecho al trabajo y donde se desarrollan las actividades productivas, en el que la violencia es ejecutada por personas que tienen un vínculo o convivencia de trabajo con la víctima, independientemente de la relación jerárquica. Incluye condicionar la contratación o permanencia en el trabajo a través de favores de naturaleza sexual; la negativa a contratar a la víctima o a respetar su permanencia o condiciones generales de trabajo; el descrédito público por el trabajo realizado y no acceso a igual remuneración por igual tarea o función, así como el impedimento a las mujeres de que se les acredite el período de gestación y lactancia.' },
    { descripcion: 'Comprende el contexto público o privado en el cual la violencia es ejercida en la práctica deportiva formativa, de alto rendimiento, profesional, adaptada/paralímpica, amateur, escolar o social. ' },
    { descripcion: 'Comprende el contexto en el que la violencia es ejecutada en el ejercicio de la potestad estatal, de manera expresa o tácita y que se traduce en acciones u omisiones, provenientes del Estado. Comprende toda acción u omisión de instituciones, personas jurídicas, servidoras y servidores públicos o de personal de instituciones privadas; y, de todo tipo de colectivo u organización, que incumpliendo sus responsabilidades en el ejercicio de sus funciones, retarden, obstaculicen o impidan que las mujeres tengan acceso a las políticas públicas y a sus servicios derivados; y, a que ejerzan los derechos previstos en esta Ley.' },
    { descripcion: 'Se ejerce en centros de privación de libertad, por el personal que labora en los centros.' },
    { descripcion: 'Ejercida a través de los medios de comunicación públicos, privados o comunitarios, sea por vía tradicional o por cualquier tecnología de la información, incluyendo las redes sociales, plataformas virtuales o cualquier otro.' },
    { descripcion: 'Se ejerce de manera individual o colectiva en lugares o espacios públicos, privados de acceso público; espacios de convivencia barrial o comunitaria; transporte público y otros de uso común tanto rural como urbano, mediante toda acción física, verbal o de connotación sexual no consentida, que afecte la seguridad e integridad de las mujeres, niñas y adolescentes.' },
    { descripcion: 'Se ejerce en los centros de salud pública y privada, en contra de las usuarias del Sistema Nacional de Salud, ejecutada por el personal administrativo, auxiliares y profesionales de la salud.' },
    { descripcion: 'Se ejerce en situaciones de emergencia y desastres que promuevan las desigualdades entre hombres y mujeres, que pongan en riesgo la integridad física, psicológica y sexual de mujeres: niñas, adolescentes, jóvenes, adultas y adultas mayores.' }
  ];

  mostrarContenido: boolean[] = [];

  ngOnInit() {
    this.botonSeleccionado = null; // Establecer el valor inicial a null
    this.mostrarContenido = Array(this.informacionBotones.length).fill(false);

  }
  
  seleccionarBoton(index: number) {
    if (this.botonSeleccionado === index) {
      this.botonSeleccionado = null;
      this.mostrarContenido[index] = false;
    } else {
      this.botonSeleccionado = index;
      this.mostrarContenido.fill(false);
      this.mostrarContenido[index] = true;
    }
  }

  

  images: { url: string, title: string, description: string }[] = [
    {
      url: '../assets/images/graficas/Imagen 1.png',
      title: 'Porcentaje de mujeres que han vivido algún tipo de violencia de género a lo largo de su vida nivel nacional.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 2.png',
      title: 'Porcentaje de mujeres que han vivido algún tipo de violencia de género en los últimos 12 meses nivel nacional.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 3.png',
      title: 'Porcentaje de mujeres que han vivido algún tipo de violencia de género a lo largo de su vida y en los últimos 12 meses a nivel zona 7.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 4.png',
      title: 'Porcentaje de violencia contra las mujeres por ámbito a nivel nacional.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 5.png',
      title: 'Porcentaje de violencia contra las mujeres por ámbito a nivel zona 7 (Zamora Chinchipe).',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 6.png',
      title: 'Porcentaje de violencia contra las mujeres por ámbito a nivel zona 7 (Loja).',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 7.png',
      title: 'Porcentaje de violencia contra las mujeres por ámbito a nivel zona 7 (Zamora).',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 8.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género en cualquier ámbito, según el tipo de agresión a nivel nacional.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 9.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género en cualquier ámbito, según el tipo de agresión a nivel zona 7.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 10.png',
      title: 'Porcentaje de mujeres que han vivido algún tipo violencia de género por parte de su pareja o ex pareja a lo largo de su vida a nivel nacional.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 11.png',
      title: 'Porcentaje de mujeres que han vivido algún tipo violencia de género por parte de su pareja o ex pareja a lo largo de su vida y en los últimos 12 meses, a nivel zona 7.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 12.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género por parte de su pareja o ex pareja a lo largo de su vida, según el tipo de violencia a nivel nacional. ',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 13.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género a largo de su vida y en los últimos 12 meses, en cualquier ámbito y de cualquier tipo, según características sociodemográficas (Etnia) a nivel nacional.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 14.png',
      title: 'Prevalencia violencia de género contra las mujeres a largo de su vida y en los últimos 12 meses, en cualquier ámbito y de cualquier tipo, según características sociodemográficas (Nivel de instrucción).',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 15.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género a largo de su vida y en los últimos 12 meses, en cualquier ámbito y de cualquier tipo, según características sociodemográficas (Estado Civil).',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 16.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género a largo de su vida y en los últimos 12 meses, en cualquier ámbito y de cualquier tipo, según características sociodemográficas (Edad).',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 17.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género a largo de su vida y en los últimos 12 meses, en cualquier ámbito y de cualquier tipo, según características sociodemográficas (Área).',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 18.png',
      title: 'Porcentaje de mujeres que han vivido violencia ginecológica y obstétrica y obstétrica a lo largo de sus vidas a nivel nacional.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 19.png',
      title: 'Porcentaje de mujeres que han vivido violencia ginecológica y obstétrica y obstétrica a lo largo de sus vidas a nivel zona 7.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 20.png',
      title: 'Una esposa debe obedecer a su esposo en todo lo que él ordene. - Autoidentificación étnica.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 21.png',
      title: 'Una esposa debe obedecer a su esposo en todo lo que él ordene. - Nivel de Educación.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 22.png',
      title: 'Una esposa debe obedecer a su esposo en todo lo que él ordene. - Grupos de Edad',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 23.png',
      title: 'Una esposa debe obedecer a su esposo en todo lo que él ordene. - Estado Conyugal',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 24.png',
      title: 'Las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres. - Autoidentificación étnica.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 25.png',
      title: 'Las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres. - Nivel de Instrucción.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 26.png',
      title: 'Las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres. - Grupos de Edad',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 27.png',
      title: 'Las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres. - Estado Conyugal',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 28.png',
      title: 'Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera. - Autoidentificación Étnica',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 29.png',
      title: 'Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera. - Nivel de Instrucción',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 30.png',
      title: 'Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera. - Grupos de Edad',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 31.png',
      title: 'Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera. - Estado Conyugal',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 32.png',
      title: 'Una mujer tiene el mismo derecho para trabajar y ganar dinero. - Autoidentificación Étnica.',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 33.png',
      title: 'Una mujer tiene el mismo derecho para trabajar y ganar dinero. - Nivel de Instrucción',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 34.png',
      title: 'Una mujer tiene el mismo derecho para trabajar y ganar dinero. - Grupos de Edad ',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 35.png',
      title: 'Una mujer tiene el mismo derecho para trabajar y ganar dinero. - Estado Conyugal ',
      description: 'Fuente: INEC, Encuesta Nacional sobre Relaciones Familiares y Violencia de Género contra las Mujeres – ENVIGMU, 2019.'
    },
    {
      url: '../assets/images/graficas/Imagen 36.png',
      title: 'Número total de casos de feminicidios por meses enero a mayo 2022.',
      description: 'Fuente: ALDEA, Reporte Femi(ni)cidios Ecuador enero – mayo 2022.'
    },
    {
      url: '../assets/images/graficas/Imagen 37.png',
      title: 'Número total de casos de feminicidios por provincia enero a mayo 2022.',
      description: 'De acuerdo con el presente gráfico, la provincia con más casos de femicidio para lo que va del 2022 es Guayas con 34. Mientras que, El Oro es la provincia con más casos de feminicidios para la zona 7 durante el 2022.'
    },
    {
      url: '../assets/images/graficas/Imagen 38.png',
      title: 'Número total de casos de feminicidios por grupos de edad enero a mayo 2022.',
      description: 'Fuente: ALDEA, Reporte Femi(ni)cidios Ecuador enero – mayo 2022.'
    },
    {
      url: '../assets/images/graficas/Imagen 39.png',
      title: 'Numero de femicidios y transfemicidios según el tipo de arma, excluyendo muertes relacionadas al crimen orgqnizado.',
      description: 'Fuente: ALDEA, Reporte Femi(ni)cidios Ecuador enero – mayo 2022.'
    },
    {
      url: '../assets/images/graficas/Imagen 40.png',
      title: 'Casos de femicidios y transfemicidios por la forma de muerte, excluyendo casos relacionados al crimen organizado.',
      description: 'Fuente: ALDEA, Reporte Femi(ni)cidios Ecuador enero – mayo 2022.'
    },
    {
      url: '../assets/images/graficas/Imagen 41.png',
      title: 'Femicidios que presentaron signos de abuso o violencia sexual.',
      description: 'Fuente: ALDEA, Reporte Femi(ni)cidios Ecuador enero – mayo 2022.'
    },
    {
      url: '../assets/images/graficas/Imagen 42.png',
      title: 'Relación del femicida con la víctima ',
      description: 'Fuente: ALDEA, Reporte Femi(ni)cidios Ecuador enero – mayo 2022.'
    }
  ];
  
  currentSlideIndex = 0;

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--; // Disminuir el índice de la diapositiva actual
    }    
  }
  
  nextSlide() {
    if (this.currentSlideIndex < this.images.length - 1) {
      this.currentSlideIndex++; // Aumentar el índice de la diapositiva actual
    }
  }
  
}
