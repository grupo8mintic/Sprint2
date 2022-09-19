class Contactos extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = `
    <div class="contact-imfo-box">
		<div class="container">
			<div class="row">
				<div class="col-md-4 arrow-right">
					<i class="fa fa-volume-control-phone"></i>
					<div class="overflow-hidden">
						<h4>Telefono</h4>
						<p class="lead">
							+57 123-456-4590
						</p>
					</div>
				</div>
				<div class="col-md-4 arrow-right">
					<i class="fa fa-envelope"></i>
					<div class="overflow-hidden">
						<h4>Email</h4>
						<p class="lead">
							cupbopasianfood@gmail.com
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<i class="fa fa-map-marker"></i>
					<div class="overflow-hidden">
						<h4>Ubicacion</h4>
						<p class="lead">
							Calle 8 No. 88 -88, Barranquilla
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    `
  }
}

window.customElements.define("contact-us", Contactos);