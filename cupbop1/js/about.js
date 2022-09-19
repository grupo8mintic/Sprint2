class About extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback(){
    this.innerHTML = `
    <div class="about-section-box">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-12 text-center">
					<div class="inner-column">
						<h1>Bienvenidos a <span>CupBop Comida Asiatica</span></h1>
						<h4>Little Story</h4>
						<p>La más rica comida asiática en un solo lugar! CupBop es el mejor restaurante de comida tradicional asiática, con
						platos de Japón, Tailandia, Singapur y Vietnam. Vive la experiencia CupBop, en ambientes únicos y con platos
						espectaculares que evocan la cultura asiática. </p>
						<p>Un Nuevo concepto de cocina tradicional Japonesa, de la granja a la mesa " con carnes y verduras frescas de origen local</p>
						<a class="btn btn-lg btn-circle btn-outline-new-white" href="#">Haz tu pedido</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12">
					<img src="images/about-img.jpg" alt="" class="img-fluid">
				</div>
			</div>
		</div>
	</div>
    `

  }
    
}

window.customElements.define("about-us", About);