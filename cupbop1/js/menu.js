class Menu extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<a class="navbar-brand" href="index.html">
					<img src="images/logo.png" alt="" />
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbars-rs-food">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a class="nav-link" href="index.html">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="menu.html">Carta</a>
						</li>

						<ul class="nav-item active">
								<li class="submenu">
									<a class="nav-link" href="" id="">Haz tu pedido</a>
									<div id="carrito">
													<table id="lista-carrito" class="u-full-width">
															<thead>
																	<tr>
																			<th>Imagen</th>
																			<th>Nombre</th>
																			<th>Precio</th>
																			<th>Cantidad</th>
																			<th></th>
																	</tr>
															</thead>
															<tbody></tbody>
													</table>

													<a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
									</div>
								</li>

								<li >
										
								</li>
						</ul>

						<li class="nav-item">
							<a class="nav-link" href="about.html">Iniciar Session</a>
						</li>

					</ul>

				</div>
			</div>
		</nav>
    `
  }
}

window.customElements.define("menu-global", Menu);