import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;
  mostrarCards = true;
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
    return this.cards.indexOf(card) >= activeCardIndex && this.cards.indexOf(card) < activeCardIndex + this.cardsPerPage;
  }
  

  mostrarTresCards() {
    this.mostrarCards = true;
    // Aquí puedes agregar la lógica para mostrar las 3 cards
  }

  mostrarInformacion() {
    this.mostrarCards = false;
    // Aquí puedes agregar la lógica para mostrar la información
  }

  mostrarCarrusel() {
    this.mostrarCards = false;
    // Aquí puedes agregar la lógica para mostrar el carrusel de imágenes
  }
}
