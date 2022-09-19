class MenuPlatillos extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback(){
    this.innerHTML=`
    <div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="heading-title text-center">
						<h2>Menu</h2>
						<p>En Nuestro Restaurante CupBop contamos con una selección de los platos más representativos y populares de la comida asiática (principalmente comida japonesa, tailandesa, cantonesa y vietnamita).</p>
					</div>
				</div>
			</div>
			
			<div class="row inner-menu-box">
				<div class="col-3">
					<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Todo</a>
						<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Bebidas</a>
						<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Almuerzos</</a>
						<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Cena</a>
					</div>
				</div>
				<!--Bebidas-->
				<div class="col-9">
					<div class="tab-content" id="v-pills-tabContent">
						<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
							<div class="row">
								<div class="col-lg-4 col-md-6 special-grid drinks ">
									<div class="gallery-single fix">
										<img src="images/img-01.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Coca-Cola Sabor Original 1.5 L</h4>
											<p>Gaseosas</p>
											<h5> $<span>6000</span> </h5>
											<a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar Al Carrito</a>
										</div>
									</div>
								</div> <!-- bebida 1-->
								
								<div class="col-lg-4 col-md-6 special-grid drinks">
									<div class="gallery-single fix">
										<img src="images/img-02.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Hit Tropical 500 ml</h4>
											<p>Jugos</p>
											<h5> $4.000</h5>
										</div>
									</div>
								</div><!-- bebida 2-->
								
								<div class="col-lg-4 col-md-6 special-grid drinks">
									<div class="gallery-single fix">
										<img src="images/img-03.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Corona 210 ml</h4>
											<p>Cervezas</p>
											<h5> $5.000</h5>
										</div>
									</div>
								</div><!-- bebida 3-->

								<!--Almuerzos-->
								<div class="col-lg-4 col-md-6 special-grid lunch">
									<div class="gallery-single fix">
										<img src="images/img-04.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Chop Suey Ichiraku Personal</h4>
											<p>Verduras salteadas de zanahoria, cebolla, brócoli, pimentón, repollo con pollo, cerdo, jamón y camarón.</p>
											<h5> $18.000</h5>
										</div>
									</div>
								</div> <!--CARD ALMUERZO 1-->
								
								<div class="col-lg-4 col-md-6 special-grid lunch">
									<div class="gallery-single fix">
										<img src="images/img-05.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Ramen Ichiraku Personal</h4>
											<p>Caldo, huevo, espinaca, alga nori, pastas, champiñones, narutomaki, zanahoria, ajonjoli. (la proteina es cerdo).</p>
											<h5> $18.500</h5>
										</div>
									</div>
								</div>
								
								<div class="col-lg-4 col-md-6 special-grid lunch">
									<div class="gallery-single fix">
										<img src="images/img-06.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Beef Teriyaki</h4>
											<p>Lomo de res en salsa TERIYAKI acompañado de vegetales y arroz Yakimeshi</p>
											<h5> $37.500</h5>
										</div>
									</div>
								</div>
								<!--Cenas y/o comida-->
								<div class="col-lg-4 col-md-6 special-grid dinner">
									<div class="gallery-single fix">
										<img src="images/img-07.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Pastas Low Mein Ichiraku Grande</h4>
											<p>Pastas guisadas con pollo, cerdo, jamon y camaron. (ideal para 4 personas).</p>
											<h5> $29.000</h5>
										</div>
									</div>
								</div>
								
								<div class="col-lg-4 col-md-6 special-grid dinner">
									<div class="gallery-single fix">
										<img src="images/img-08.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Singapur Fajitas</h4>
											<p>Rellenas de lomo al estilo tataki, mango, tomate seco y pasta Vermicelli</p>
											<h5> $20.500</h5>
										</div>
									</div>
								</div>
								
								<div class="col-lg-4 col-md-6 special-grid dinner">
									<div class="gallery-single fix">
										<img src="images/img-09.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Nigiri Sushi</h4>
											<p>Filetitos de pescado sobre bolitas de arroz</p>
											<h5> $24.900</h5>
										</div>
									</div>
								</div>
							</div> <!--Fin panel TODO-->
							
						</div>
						<!--  Bebidas panel-->
						<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
							<div class="row">
								<div class="col-lg-4 col-md-6 special-grid drinks">
									<div class="gallery-single fix">
										<img src="images/img-01.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Coca-Cola Sabor Original 1.5 L</h4>
											<p>Gaseosas</p>
											<h5> $6.000</h5>
										</div>
									</div> 
								</div><!--CARD BEBIDA 1 FIN-->
								
								<div class="col-lg-4 col-md-6 special-grid drinks">
									<div class="gallery-single fix">
										<img src="images/img-02.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Hit Tropical 500 ml</h4>
											<p>Jugos</p>
											<h5> $4.000</h5>
										</div>
									</div>
								</div><!--CARD BEBIDA 2 FIN-->
								
								<div class="col-lg-4 col-md-6 special-grid drinks">
									<div class="gallery-single fix">
										<img src="images/img-03.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Corona 210 ml</h4>
											<p>Cervezas</p>
											<h5> $5.000</h5>
										</div>
									</div>
								</div><!--CARD BEBIDA 2 FIN-->
							</div> <!--ROW FINAL-->
							
						</div><!--FINAL BEBIDAS-->


						<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
							<div class="row">
								<div class="col-lg-4 col-md-6 special-grid lunch">
									<div class="gallery-single fix">
										<img src="images/img-04.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Chop Suey Ichiraku Personal</h4>
											<p>Verduras salteadas de zanahoria, cebolla, brócoli, pimentón, repollo con pollo, cerdo, jamón y camarón.</p>
											<h5> $18.000</h5>
										</div>
									</div>
								</div>
								
								<div class="col-lg-4 col-md-6 special-grid lunch">
									<div class="gallery-single fix">
										<img src="images/img-05.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Ramen Ichiraku Personal</h4>
											<p>Caldo, huevo, espinaca, alga nori, pastas, champiñones, narutomaki, zanahoria, ajonjoli. (la proteina es cerdo).</p>
											<h5> $18.500</h5>
										</div>
									</div>
								</div>
								
								<div class="col-lg-4 col-md-6 special-grid lunch">
									<div class="gallery-single fix">
										<img src="images/img-06.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Beef Teriyaki</h4>
											<p>Lomo de res en salsa TERIYAKI acompañado de vegetales y arroz Yakimeshi</p>
											<h5> $37.500</h5>
										</div>
									</div>
								</div>
							</div>
						</div><!--FINAL ALMUERZOS-->


						<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
							<div class="row">
								<div class="col-lg-4 col-md-6 special-grid dinner">
									<div class="gallery-single fix">
										<img src="images/img-07.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Pastas Low Mein Ichiraku Grande</h4>
											<p>Pastas guisadas con pollo, cerdo, jamon y camaron. (ideal para 4 personas).</p>
											<h5> $29.000</h5>
										</div>
									</div>
								</div>
								
								<div class="col-lg-4 col-md-6 special-grid dinner">
									<div class="gallery-single fix">
										<img src="images/img-08.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Singapur Fajitas</h4>
											<p>Rellenas de lomo al estilo tataki, mango, tomate seco y pasta Vermicelli</p>
											<h5> $20.500</h5>
										</div>
									</div>
								</div>
								
								<div class="col-lg-4 col-md-6 special-grid dinner">
									<div class="gallery-single fix">
										<img src="images/img-09.jpg" class="img-fluid" alt="Image">
										<div class="why-text">
											<h4>Nigiri Sushi</h4>
											<p>Filetitos de pescado sobre bolitas de arroz</p>
											<h5> $24.900</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
    `
  }
}

window.customElements.define("menu-platillos", MenuPlatillos)