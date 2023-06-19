import { Component, ElementRef, AfterViewInit, ViewChild, OnInit, OnDestroy } from '@angular/core';
import 'bootstrap';



@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements AfterViewInit, OnInit, OnDestroy {
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
  private interval: any;

  ngOnInit() {
    this.botonSeleccionado = null; // Establecer el valor inicial a null
    this.mostrarContenido = Array(this.informacionBotones.length).fill(false);

    const intervalTime = 3000;

    this.interval = setInterval(() => {
      this.nextSlide();
    }, intervalTime);
  }
  
  ngOnDestroy() {
    clearInterval(this.interval);
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
      description: 'En el siguiente gráfico se puede observar cómo más de la mitad de las mujeres encuestadas (65%) afirmaron haber vivido algún tipo de violencia de género, a lo largo de su vida. '
    },
    {
      url: '../assets/images/graficas/Imagen 2.png',
      title: 'Porcentaje de mujeres que han vivido algún tipo de violencia de género en los últimos 12 meses nivel nacional.',
      description: 'El siguiente gráfico muestra como alrededor de 32 de cada 100 mujeres encuestadas (31.6%), han vivido algún tipo de violencia de género durante los últimos 12 meses.'
    },
    {
      url: '../assets/images/graficas/Imagen 3.png',
      title: 'Porcentaje de mujeres que han vivido algún tipo de violencia de género a lo largo de su vida y en los últimos 12 meses a nivel zona 7.',
      description: 'En el siguiente gráfico se puede observar como de las 3 provincias que conforman la zona 7, a lo largo de su vida las mujeres pertenecientes a la provincia de Zamora Chinchipe presentan el porcentaje más alto de mujeres que han vivido algún tipo de violencia de género con un 72%, seguido por la provincia de El Oro con un 70% y luego Loja con un 67% de respuestas afirmativas. Por otra parte, en lo que concierne a los últimos 12 meses, los resultados se asemejan a los de los resultados de violencia a lo largo de su vida, pues, la provincia de Zamora Chinchipe es la que presenta el porcentaje más alto de violencia de género de la zona 7, seguido por El Oro y finalmente Loja con 35%, 32% y 30% respectivamente.'
    },
    {
      url: '../assets/images/graficas/Imagen 4.png',
      title: 'Porcentaje de violencia contra las mujeres por ámbito a nivel nacional.',
      description: 'En el siguiente gráfico, se pueden distinguir los porcentajes de violencia contra la mujer segmentados en diferentes ámbitos, a lo largo de toda su vida y a a nivel nacional. Por consiguiente, la violencia de género por parte de la pareja representa el porcentaje más alto con el 42% y la violencia de género en el ámbito educativo representa el porcentaje menor con el 19%. Por otro lado, durante los últimos 12 meses, el porcentaje más altos de violencia de genero contra la mujer se encuentran en el ámbito de la pareja con un 18% y el más bajo en el ámbito familiar con un 4%. '
    },
    {
      url: '../assets/images/graficas/Imagen 5.png',
      title: 'Porcentaje de violencia contra las mujeres por ámbito a nivel zona 7 (Zamora Chinchipe).',
      description: 'En el siguiente gráfico se observa los porcentajes de violencia de género contra la mujer para la provincia de Zamora Chinchipe, a lo largo de la vida y durante los últimos 12 meses, divididos por ámbito. Consecuentemente, los porcentajes más altos de violencia de género contra la mujer se encuentran en el ámbito de la pareja actual o expareja tanto a lo largo de sus vidas como en los últimos 12 meses con el 52% y el 21%, respectivamente. Por otro lado, los porcentajes de violencia de género contra la mujer más bajos por ámbito, según los datos de la encuesta, se encuentran en el ámbito laboral con un 18% a lo largo de la vida y un 4% en los últimos 12 meses.'
    },
    {
      url: '../assets/images/graficas/Imagen 6.png',
      title: 'Porcentaje de violencia contra las mujeres por ámbito a nivel zona 7 (Loja).',
      description: 'Similarmente, para la provincia de Loja, los porcentajes más altos de violencia de género contra la mujer se encuentran en el ámbito de la pareja actual o ex pareja tanto a lo largo de sus vidas como en los últimos 12 meses con el 44% y el 19%, respectivamente. Por el contrario, el porcentaje más bajo durante los últimos 12 meses y a lo largo de la vida se encuentran en el ámbito familiar con un 19% y 5% respectivamente.'
    },
    {
      url: '../assets/images/graficas/Imagen 7.png',
      title: 'Porcentaje de violencia contra las mujeres por ámbito a nivel zona 7 (Zamora).',
      description: 'Siguiendo con la tendencia de las otras 2 provincias, los porcentajes más altos de violencia contra la mujer encuentran en el ámbito de la pareja actual o expareja con el 20% durante los últimos 12 meses y 46% a lo largo de su vida. Por otra parte, los porcentajes más bajos se encuentran en el ámbito familiar durante los últimos 12 meses con 3% y en el ámbito educativo con un 17% a lo largo de sus vidas.'
    },
    {
      url: '../assets/images/graficas/Imagen 8.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género en cualquier ámbito, según el tipo de agresión a nivel nacional.',
      description: 'A continuación, de acuerdo con la información presentada en el siguiente gráfico, se puede determinar a la violencia psicológica como el tipo de violencia de género contra la mujer más común a nivel nacional, ya que el 57% del total de mujeres encuestadas respondieron haber vivido este tipo de violencia. Mientras tanto, la violencia económica y patrimonial destaca como la menos común con solamente el 16% del total de mujeres encuestadas afirmaron haber sido víctimas de este tipo de violencia.'
    },
    {
      url: '../assets/images/graficas/Imagen 9.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género en cualquier ámbito, según el tipo de agresión a nivel zona 7.',
      description: 'Según los resultados de la encuesta, presentados en el siguiente gráfico, se puede observar que la violencia psicológica es el tipo de violencia con los porcentajes más altos para las 3 provincias y la violencia económica y patrimonial es el tipo de violencia que presenta los porcentajes más bajos para las 3 provincias. Estos resultados son similares a los encontrados para el resto de las provincias.'
    },
    {
      url: '../assets/images/graficas/Imagen 10.png',
      title: 'Porcentaje de mujeres que han vivido algún tipo violencia de género por parte de su pareja o ex pareja a lo largo de su vida a nivel nacional.',
      description: 'De acuerdo con la información presentada en el presente gráfico, el 43% del total de mujeres encuestadas a nivel nacional, afirmaron haber vivido algún tipo de violencia de genero por parte de su pareja actual o expareja a lo largo de su vida.  43 de cada 100 mujeres en el Ecuador han vivido a lo largo de sus vidas, algún tipo de violencia por parte de su pareja actual o ex pareja.'
    },
    {
      url: '../assets/images/graficas/Imagen 11.png',
      title: 'Porcentaje de mujeres que han vivido algún tipo violencia de género por parte de su pareja o ex pareja a lo largo de su vida y en los últimos 12 meses, a nivel zona 7.',
      description: 'A continuación, se observa los porcentajes de mujeres que han vivido algún tipo de violencia de género por parte de su pareja actual o ex pareja a lo largo de sus vidas y en los últimos 12 meses, correspondientes a la zona 7. Para las 3 provincias, los porcentajes de violencia para este ámbito superan el 40% y durante los últimos 12 meses los porcentajes para las 3 provincias son mayores al 19%.'
    },
    {
      url: '../assets/images/graficas/Imagen 12.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género por parte de su pareja o ex pareja a lo largo de su vida, según el tipo de violencia a nivel nacional. ',
      description: 'Según el grafico, a continuación, se puede observar que el tipo de violencia más común cuando se trata de violencia perpetrada por su pareja actual o ex pareja es la de tipo psicológica con un porcentaje del 41% del total de mujeres encuestadas.'
    },
    {
      url: '../assets/images/graficas/Imagen 13.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género a largo de su vida y en los últimos 12 meses, en cualquier ámbito y de cualquier tipo, según características sociodemográficas (Etnia) a nivel nacional.',
      description: 'Según la siguiente gráfica las mujeres que se identifican como afrodescendientes son aquellas que han vivido mayores porcentajes de violencia de cualquier tipo y en cualquier ámbito tanto a lo largo de sus vidas como en los últimos 12 meses. Por otra parte, las mujeres pertenecientes a la etnia montubia fueron las que reportaron los porcentajes más bajos tanto a lo largo de su vida como durante los últimos 12 meses.'
    },
    {
      url: '../assets/images/graficas/Imagen 14.png',
      title: 'Prevalencia violencia de género contra las mujeres a largo de su vida y en los últimos 12 meses, en cualquier ámbito y de cualquier tipo, según características sociodemográficas (Nivel de instrucción).',
      description: 'A continuación, se puede inferir, de acuerdo con los datos presentados en la gráfica, que las mujeres con ningún tipo de nivel de instrucción o de algún centro de alfabetización, son las que presentan el porcentaje más alto de haber vivido violencia de cualquier tipo y en cualquier ámbito, a lo largo de sus vidas con un 71%. Mientras que, durante los últimos 12 meses, las mujeres con nivel educativo medio o bachillerato presentaron el porcentaje más alto de violencia ya sea de cualquier tipo y en cualquier ámbito con un 35%. Por otro lado, las mujeres que presentaron los porcentajes más bajos de violencia de genero a lo largo de sus vidas fueron las mujeres con un nivel de educación alto o superior con un 63% y durante los últimos 12 meses fueron las mujeres con ningún nivel de educación o de algún centro con el 23%.'
    },
    {
      url: '../assets/images/graficas/Imagen 15.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género a largo de su vida y en los últimos 12 meses, en cualquier ámbito y de cualquier tipo, según características sociodemográficas (Estado Civil).',
      description: 'Según los resultados obtenidos de la encuesta y presentados en la siguiente gráfica, se observa que las mujeres separadas, divorciadas o viudas son las que presentan el porcentaje más alto de violencia de género a lo largo de sus vidas, ya sea de cualquier tipo y en cualquier ámbito con un 77% de porcentaje de afirmación. Subsecuentemente, las mujeres solteras son las que han vivido menos violencia de genero ya sea de cualquier tipo y en cualquier ámbito a lo largo de sus vidas. Sin embargo, durante los últimos 12 meses las mujeres solteras son las que respondieron haber vivido más violencia de género de cualquier tipo y en cualquier ámbito con un 36%, mientras que las mujeres casadas o unidas presentan el porcentaje mejor con un 29% de porcentaje de afirmación. '
    },
    {
      url: '../assets/images/graficas/Imagen 16.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género a largo de su vida y en los últimos 12 meses, en cualquier ámbito y de cualquier tipo, según características sociodemográficas (Edad).',
      description: 'Según el siguiente gráfico, se puede determinar que las mujeres pertenecientes a un rango de edad entre 30 a 44 años, son las que respondieron haber vivido mayor violencia de genero ya sea de cualquier tipo y en cualquier ámbito con un 69% de porcentaje de afirmación. Adicionalmente, las mujeres pertenecientes a un rango de edad entre 15 a 17 años son las que respondieron haber vivido menor violencia de genero a lo largo de sus vidas ya sea de cualquier tipo y en cualquier ámbito con un 45%. Por otra parte en lo que concierne a los últimos 12 meses, las mujeres pertenecientes a un rango de edad de entre 18 a 29 años son las que respondieron haber vivido más violencia de genero ya sea de cualquier tipo y en cualquier ámbito con un 41% de porcentaje de afirmación. Mientras tanto, las mujeres pertenecientes a un rango de edad de entre 65 años en adelante respondieron haber vivido menos violencia de genero de cualquier tipo y en cualquier ámbito durante los últimos 12 meses con solamente un 17% de respuestas afirmativas. '
    },
    {
      url: '../assets/images/graficas/Imagen 17.png',
      title: 'Porcentaje de mujeres que han vivido violencia de género a largo de su vida y en los últimos 12 meses, en cualquier ámbito y de cualquier tipo, según características sociodemográficas (Área).',
      description: 'Según el siguiente gráfico, el 66% de las mujeres pertenecientes al área urbana respondió haber vivido violencia de genero a lo largo de sus vidas ya sea de cualquier tipo y en cualquier ámbito y durante los últimos 12 meses el porcentaje fue de 33%. Por otro lado, el 63% de mujeres pertenecientes al área rural respondió haber vivido violencia de genero a lo largo de sus vidas ya sea de cualquier tipo y en cualquier ámbito y durante los últimos 12 meses el porcentaje es de 27%. Los resultados tanto en el área urbana y rural presentan similitudes significativas.'
    },
    {
      url: '../assets/images/graficas/Imagen 18.png',
      title: 'Porcentaje de mujeres que han vivido violencia ginecológica y obstétrica y obstétrica a lo largo de sus vidas a nivel nacional.',
      description: 'Según el siguiente gráfico, 48 de cada 100 mujeres pertenecientes a un rango de edad de 15 años en adelante, han vivido violencia ginecológica y obstétrica a lo largo de sus vidas, mientras que en lo que respecta a violencia obstétrica 42 de cada 100 mujeres pertenecientes a un rango de edad de 15 años en adelante, han vivido este tipo de violencia.'
    },
    {
      url: '../assets/images/graficas/Imagen 19.png',
      title: 'Porcentaje de mujeres que han vivido violencia ginecológica y obstétrica y obstétrica a lo largo de sus vidas a nivel zona 7.',
      description: 'A continuación, a nivel de la zona 7 se puede observar que para la provincia de Zamora Chinchipe 55 de cada 100 mujeres respondieron haber vivido violencia ginecológica y obstétrica y violencia obstétrica a lo largo de sus vidas. Para el caso de la provincia de Loja, 59 de 100 mujeres respondieron haber vivido violencia ginecológica y obstétrica y 51 mujeres de 100 respondieron haber vivido violencia de tipo obstétrica. Por último, en la provincia de El Oro 42 de cada 100 mujeres encuestadas, respondieron haber vivido violencia ginecológica y obstétrica, y 38 de cada 100 mujeres respondieron haber vivido violencia obstétrica.'
    },
    {
      url: '../assets/images/graficas/Imagen 20.png',
      title: 'Autoidentificación étnica.',
      description: '59 de cada 100 mujeres indígenas están de acuerdo en que una esposa debe obedecer a su esposo en todo lo que él ordene. 24 de cada 100 mujeres mestizas están de acuerdo en que una esposa debe obedecer a su esposo en todo lo que él ordene.'
    },
    {
      url: '../assets/images/graficas/Imagen 21.png',
      title: 'Nivel de Educación.',
      description: '63 de cada 100 mujeres con ningún nivel de instrucción o de centro de alfabetización están de acuerdo que una esposa debe obedecer a su esposo en todo lo que él ordene.  7 de cada 100 mujeres con nivel de instrucción superior están de acuerdo que una esposa debe obedecer a su esposo en todo lo que él ordene. '
    },
    {
      url: '../assets/images/graficas/Imagen 22.png',
      title: 'Grupos de Edad',
      description: '47 de cada 100 mujeres en un rango de edad de 65 años en adelante, a nivel nacional, consideran que una esposa debe obedecer a su esposo en todo lo que él ordene. 16 de cada 100 mujeres en un rango de edad de 15 a 17 y de 18 a 29, a nivel nacional, consideran que una esposa debe obedecer a su esposo en todo lo que él ordene.'
    },
    {
      url: '../assets/images/graficas/Imagen 23.png',
      title: 'Estado Conyugal',
      description: '33 de cada 100 mujeres casadas o unidas, a nivel nacional, consideran que una esposa debe obedecer a su esposo en todo lo que él ordene. 13 de cada 100 mujeres solteras, a nivel nacional, consideran que una esposa debe obedecer a su esposo en todo lo que él ordene.'
    },
    {
      url: '../assets/images/graficas/Imagen 24.png',
      title: 'Autoidentificación étnica.',
      description: 'De 100 mujeres más de la mitad, es decir más del 50%, pertenecientes a todos los grupos de autoidentificación étnica, a nivel nacional, están de acuerdo con que las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres.'
    },
    {
      url: '../assets/images/graficas/Imagen 25.png',
      title: 'Nivel de Instrucción.',
      description: '72 de cada 100 mujeres con ningún nivel de instrucción o con centro de alfabetización, a nivel nacional, están de acuerdo con que las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres.  47 de cada 100 mujeres con nivel de instrucción superior, a nivel nacional, están de acuerdo con que las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres.'
    },
    {
      url: '../assets/images/graficas/Imagen 26.png',
      title: 'Grupos de Edad',
      description: '43 de cada 100 mujeres pertenecientes a un rango de edad de 15 a 17 años y 42 de cada 100 mujeres pertenecientes a un rango de edad de 18 a 29 años, a nivel nacional, están de acuerdo con que las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres. 72 de cada 100 mujeres pertenecientes a un rango de edad de 65 años en adelante, a nivel nacional, están de acuerdo con que las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres.'
    },
    {
      url: '../assets/images/graficas/Imagen 27.png',
      title: 'Estado Conyugal',
      description: '62 de cada 100 mujeres casadas o unidas, a nivel nacional, están de acuerdo con que las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres. 64 de cada 100 mujeres separadas, divorciadas o viudas, a nivel nacional, están de acuerdo con que las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres. 42 de cada 100 mujeres solteras, a nivel nacional, están de acuerdo con que las mujeres deben actuar y vestirse recatadamente para no provocar a los hombres.'
    },
    {
      url: '../assets/images/graficas/Imagen 28.png',
      title: 'Autoidentificación Étnica',
      description: '32 de cada 100 mujeres indígenas, a nivel nacional, creen que Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera. 13 de cada 100 mujeres mestizas, a nivel nacional, creen que Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera.'
    },
    {
      url: '../assets/images/graficas/Imagen 29.png',
      title: 'Nivel de Instrucción',
      description: '38 de cada 100 mujeres con ningún nivel de instrucción o de un centro de alfabetización, a nivel nacional, creen que Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera. 6 de cada 100 mujeres con un nivel de instrucción superior, a nivel nacional, creen que Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera.'
    },
    {
      url: '../assets/images/graficas/Imagen 30.png',
      title: 'Grupos de Edad',
      description: '8 de cada 100 mujeres, pertenecientes a un rango de edad de entre 15 a 17 años, a nivel nacional, creen que Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera. 28 de cada 100 mujeres, pertenecientes a un rango de edad de 65 años en adelante, a nivel nacional, creen que Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera. '
    },
    {
      url: '../assets/images/graficas/Imagen 31.png',
      title: 'Estado Conyugal',
      description: '18 de cada 100 mujeres casadas o unidas, a nivel nacional, creen que Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera. 7 de cada 100 mujeres solteras, a nivel nacional, creen que Las mujeres deben tener relaciones sexuales con su esposo o pareja cuando él quiera. '
    },
    {
      url: '../assets/images/graficas/Imagen 32.png',
      title: 'Autoidentificación Étnica.',
      description: 'Mas del 80% de las mujeres pertenecientes a todos los grupos de autoidentificación étnica, a nivel nacional, creen que una mujer tiene el mismo derecho para trabajar y ganar dinero. Es decir, 84 de cada 100 mujeres indígenas; 86 de cada 100 mujeres afrodescendientes; 81 de cada 100 mujeres montubias y 87 de cada 100 mujeres mestizas.'
    },
    {
      url: '../assets/images/graficas/Imagen 33.png',
      title: 'Nivel de Instrucción',
      description: '78 de cada 100 mujeres con ningún nivel de instrucción o de algún centro de alfabetización, a nivel nacional, creen que una mujer tiene el mismo derecho para trabajar y ganar dinero. 90 de cada 100 mujeres con un nivel de educación superior, a nivel nacional, creen que una mujer tiene el mismo derecho para trabajar y ganar dinero.'
    },
    {
      url: '../assets/images/graficas/Imagen 34.png',
      title: 'Grupos de Edad ',
      description: 'Mas del 80% de mujeres pertenecientes a todos los rangos de edad a nivel nacional, creen que una mujer tiene el mismo derecho para trabajar y ganar dinero. En otras palabras, 90 de cada 100 mujeres entre 15 a 17 años; 88 de cada 100 mujeres entre 18 a 29 años; 86 de cada 100 mujeres entre 30 a 44; 86 de cada 100 mujeres de 45 a 64 años y 82 de cada 100 mujeres de 65 años en adelante.'
    },
    {
      url: '../assets/images/graficas/Imagen 35.png',
      title: 'Estado Conyugal ',
      description: 'Más del 80% de mujeres pertenecientes a todas las categorías de estado conyugal a nivel nacional creen que una mujer tiene el mismo derecho para trabajar y ganar dinero. Es decir, 85 de cada 100 mujeres solteras, 85 de cada 100 mujeres separadas, divorciadas o viudas y 89 de cada 100 mujeres solteras.'
    },
    {
      url: '../assets/images/graficas/Imagen 36.png',
      title: 'Número total de casos de feminicidios por meses enero a mayo 2022.',
      description: 'Según los datos del presente gráfico se puede observar que, abril es el mes donde se presentó la mayor cantidad de casos de feminicidios con 37 casos y febrero el mes en donde se presentó la menor cantidad con 12 para lo que va del año 2022.'
    },
    {
      url: '../assets/images/graficas/Imagen 37.png',
      title: 'Número total de casos de feminicidios por provincia enero a mayo 2022.',
      description: 'De acuerdo con el presente gráfico, la provincia con más casos de femicidio para lo que va del 2022 es Guayas con 34. Mientras que, El Oro es la provincia con más casos de feminicidios para la zona 7 durante el 2022.'
    },
    {
      url: '../assets/images/graficas/Imagen 38.png',
      title: 'Número total de casos de feminicidios por grupos de edad enero a mayo 2022.',
      description: 'La mayor cantidad de casos de femicidios se encuentran en los rangos de edades de 18 a 25 años y de 26 a 35 años con 33 casos para ambos rangos respectivamente. La edad promedio de las víctimas de feminicidio es de 30 años, la edad mínima es de 3 meses y la edad máxima de 64 años. 19 de los 118 casos de feminicidio reportaron antecedentes de violencia y 83 no se conocen. 4 de los 118 casos de feminicidio reportaron boleta de auxilio y 75 no se conocen. '
    },
    {
      url: '../assets/images/graficas/Imagen 39.png',
      title: 'Numero de femicidios y transfemicidios según el tipo de arma, excluyendo muertes relacionadas al crimen orgqnizado.',
      description: 'En 20 de los 55 casos de femicidios y transfemicidios (excluyendo las muertes relacionadas al crimen organizado = 60) se utilizaron armas de fuego.  En 16 de los 55 casos de femicidios y transfemicidios se utilizaron armas blancas.'
    },
    {
      url: '../assets/images/graficas/Imagen 40.png',
      title: 'Casos de femicidios y transfemicidios por la forma de muerte, excluyendo casos relacionados al crimen organizado.',
      description: 'La forma de muerte de 20 de los 55 casos de femicidios y transfemicidios, (excluyendo las muertes relacionadas al crimen organizado = 60) fue por dsiparos. La forma de muerte de 15 de los 55 casos de femicidios y transfemicidios fue por apuñalamiento y 1 por machetazos. '
    },
    {
      url: '../assets/images/graficas/Imagen 41.png',
      title: 'Femicidios que presentaron signos de abuso o violencia sexual.',
      description: '8 de 100 femicidios presentó signos de abuso o violencia sexual para mayo del 2022. 81 de 100 femicidios no presentó signos de abuso o violencia sexual para mayo del 2022.'
    },
    {
      url: '../assets/images/graficas/Imagen 42.png',
      title: 'Relación del femicida con la víctima ',
      description: 'En 50 de cada 100 femicidios para mayo del 2022, el femicida tenía un vínculo sentimental con la víctima. En 15 de cada 100 femicidios para mayo del 2022, el femicida tenía un vínculo familiar con la víctima.'
    }
  ];
  
  currentSlideIndex = 0;

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }
  
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }
  
}
