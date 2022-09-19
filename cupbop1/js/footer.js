class Footer extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = `
    <footer class="footer-area bg-f">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6">
					<h3>Acerca de</h3>
					<p>La más rica comida asiática en un solo lugar! CupBop es el mejor restaurante de comida tradicional asiática, con platos
					de Japón, Tailandia, Singapur y Vietnam. Vive la experiencia CupBop, en ambientes únicos y con platos espectaculares que
					evocan la cultura asiática.</p>
				</div>
				<div class="col-lg-3 col-md-6">
					<h3>Subscribe</h3>
					<div class="subscribe_form">
						<form class="subscribe_form">
							<input name="EMAIL" id="subs-email" class="form_input" placeholder="Email Address..." type="email">
							<button type="submit" class="submit">SUBSCRIBETE</button>
							<div class="clearfix"></div>
						</form>
					</div>
					<ul class="list-inline f-social">
						<li class="list-inline-item"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div class="col-lg-3 col-md-6">
					<h3>Ubicacion</h3>
					<p class="lead">Calle 88 No. 88- 88 Barranquilla, Colombia</p>
					<p class="lead"><a href="#">+57 123-456-4590</a></p>
					<p><a href="#"> cupbopasianfood@gmail.com</a></p>
				</div>
				<div class="col-lg-3 col-md-6">
					<h3>Nuestros horarios</h3>
					
					<p><span class="text-color">Lunes -Viernes</span> 9:Am - 10PM</p>
					<p><span class="text-color">Sabados - Domingo</span> 9:Am - 11PM</p>
					
				</div>
			</div>
		</div>
		
		<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<p class="company-name">All Rights Reserved. &copy; 2022 <a href="#">MinTic Uninorte</a> Design By : 
					<a href="">Equipo 8 NCR-2114</a></p>
					</div>
				</div>
			</div>
		</div>
		
	</footer>
    `
  }
}

window.customElements.define("footer-us", Footer)