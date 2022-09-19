class Slides extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = `
    <div id="slides" class="cover-slides">
		<ul class="slides-container">
			<li class="text-left">
				<img src="images/slider-01.jpg" alt="">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h1 class="m-b-20"><strong>Bienvenidos  a<br> CupBop Restaurant</strong></h1>
							<p class="m-b-40">Un Nuevo concepto de cocina tradicional Japonesa..</p>
							<p><a class="btn btn-lg btn-circle btn-outline-new-white" href="#">Haz tu pedido</a></p>
						</div>
					</div>
				</div>
			</li>
			<li class="text-left">
				<img src="images/slider-02.jpg" alt="">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h1 class="m-b-20"><strong>Welcome To <br> CupBop Restaurant - Asian Food</strong></h1>
							<p class="m-b-40">A new concept of traditional Japanese cuisine.</p>
							<p><a class="btn btn-lg btn-circle btn-outline-new-white" href="#">Haz tu pedido</a></p>
						</div>
					</div>
				</div>
			</li>
			<li class="text-left">
				<img src="images/slider-03.jpg" alt="">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h1 class="m-b-20"><strong>Bienvenidos <br> Cupbop Restaurante de Comida Asiatica</strong></h1>
							<p class="m-b-40">Hacemos domicilios en zonas cercanas, tambien tenemos la opcion de pedido para recoger en los restaurantes.</p>
							<p><a class="btn btn-lg btn-circle btn-outline-new-white" href="#">Haz tu pedido</a></p>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="slides-navigation">
			<a href="#" class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
			<a href="#" class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
		</div>
	</div>
    `

  }
}

window.customElements.define("slides-us", Slides)