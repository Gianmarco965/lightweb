// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
function span__close() {
    modal.style.display = "none";
}
function span__close2() {
    modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }     else if (event.target==modal2){
            modal2.style.display="none";
        }
   
}

function modal__open2()
{
      modal2.style.display = "block";
}

 function modal__open(valor, categoria){
   
    //----------------Enmiendas Biológicas----------------
        //HUMIC TIERRA
    if (valor == 1) {
        
         var contenidos =new Array(6);
            // Get the button that opens the modal
         contenidos[0]="Permite la retención de agua y nutrientes, descompacta los suelos arcillosos.";
         contenidos[1]="Está formulado para ser empleado por sistemas de riego o gravedad.";
         contenidos[2]="Aumenta la capacidad de intercambio cationico.";
         contenidos[3]="Permite reemplazar parcial o totalmente los guanos o estiércol fresco.";
         contenidos[4] ="Es una enmienda orgánica líquida que aporta una alta concentración de materia orgánica.";
         contenidos[5] ="Bioestimulante y mejorando la capacidad de resistencia frente a estados de estrés ambiental.";  
        
        
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "HUMIC TIERRA";
             document.getElementById('modal__producto__img').src="images/categoria/enmiendas_biologicas/productos/humictierra.png";
            
             document.getElementById('modal__header__titulo').innerHTML = "HUMIC TIERRA";
        
        
            add__informacion__modal(6,contenidos);
            document.getElementById('modal__descarga__ficha').href = "files/HUMICTIERRA.pdf";
            
        document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
    
    } 
        //FULVIC TIERRA
    else if (valor == 2)
        {
          var contenidos =new Array(3);
            // Get the button that opens the modal
         contenidos[0]="Concentración de ácidos fúlvicos puro con materia orgánica. ";
         contenidos[1]="Permite una rápida absorción vía estomas por su gran capacidad de asimilación.";
         contenidos[2]="Se puede aplicar sólo como ingrediente adicional dentro de cualquier plan nutricional de fondo.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "FULVIC TIERRA";
             document.getElementById('modal__producto__img').src="images/categoria/enmiendas_biologicas/productos/fulvictierra.png";
            
             document.getElementById('modal__header__titulo').innerHTML = "FULVIC TIERRA";
        
        
            add__informacion__modal(3,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/FULVICTIERRA.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
        }
     
        //HUMIC TIERRA EXTRACTO
     else if (valor==3)
         {
             var contenidos =new Array(6);
            // Get the button that opens the modal
         contenidos[0]="Permite la retención de agua y nutrientes, descompacta los suelos arcillosos.";
         contenidos[1]="Está formulado para ser empleado por sistemas de riego o gravedad.";
         contenidos[2]="Aumenta la capacidad de intercambio cationico.";
         contenidos[3]="Permite reemplazar parcial o totalmente los guanos o estiércol fresco.";
         contenidos[4]="Es una enmienda orgánica líquida que aporta una alta concentración de materia orgánica.";
         contenidos[5]="Bioestimulante y mejorando la capacidad de resistencia frente a estados de estrés ambiental.";  
        
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "HUMIC TIERRA EXTRACTO"; document.getElementById('modal__producto__img').src="images/categoria/enmiendas_biologicas/productos/humictierra.png";
             document.getElementById('modal__header__titulo').innerHTML = "HUMIC TIERRA EXTRACTO";
        
            add__informacion__modal(6,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/HUMICTIERRAEXTRACTO.pdf";
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     
     else if (valor==4)
         {
            var contenidos =new Array(4);
            // Get the button that opens the modal
         contenidos[0]="Es una concentración de ácidos húmicos y fúlvicos puro con materia orgánica.";
         contenidos[1]="Se puede aplicar como ingrediente adicional dentro de cualquier plan nutricional de fondo vía foliar.";
         contenidos[2]="Está formulado para ser empleado por sistemas de riego o gravedad.";
         contenidos[3]="Permite una rápida absorción vía estomas por su gran capacidad de asimilación de la planta.";
           
        
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "TERRA MAGNESIO"; document.getElementById('modal__producto__img').src="images/categoria/nutricionales/productos/terramagnesio.jpg";
             document.getElementById('modal__header__titulo').innerHTML = "TERRA MAGNESIO";
        
            add__informacion__modal(4,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/TERRAMAGNESIO.pdf";  
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     else if (valor==5)
         {
              var contenidos =new Array(6);
            // Get the button that opens the modal
             contenidos[0]="Controla la producción de auxinas.";
             contenidos[1]="Estimula otros sistemas enzimáticos.";
             contenidos[2]="Necesario en la formación de hidratos de carbono.";
             contenidos[3]="Tiene antagonismo con el Fosforo y Sodio.";
             contenidos[4]="Su deficiencia ocasiona retardo en el crecimiento.";
             contenidos[5]="Entrenudos cortos.";
           
        
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "TERRA ZINC"; document.getElementById('modal__producto__img').src="images/categoria/nutricionales/productos/terrazinc.jpg";
             document.getElementById('modal__header__titulo').innerHTML = "TERRA ZINC";
        
            add__informacion__modal(6,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/TERRAZINC.pdf";
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     else if (valor==6)
         {
             var contenidos =new Array(5);
            // Get the button that opens the modal
             contenidos[0]="Especialmente indicada para la corrección de carencias de calcio por via foliar.";
             contenidos[1]="Basada en una formulación a base de nitrato de calcio con extractos húmicos.";
             contenidos[2]="Está formulado para ser empleado por sistemas de riego o gravedad.";
             contenidos[3]="Usada en tratamientos nutricionales foliares.";
             contenidos[4]="Permite una rápida absorción vía estomas por su gran capacidad de asimilación de la planta.";
             
           
        
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "TERRA CALCIO"; document.getElementById('modal__producto__img').src="images/categoria/nutricionales/productos/terracalcio.jpg";
             document.getElementById('modal__header__titulo').innerHTML = "TERRA CALCIO";
        
            add__informacion__modal(5,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/TERRACALCIO.pdf"; 
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     else if (valor==7)
         {
             var contenidos =new Array(8);
            // Get the button that opens the modal
             contenidos[0]="Transporte de Carbohidratos.";
             contenidos[1]="Promueve la producción de proteínas.";
             contenidos[2]="Promueve la fotosíntesis.";
             contenidos[3]="Intensifica el transporte y almacenaje de fotosintatos.";
             contenidos[4]="Mejora la eficiencia de fertilizantes nitrogenados.";
             contenidos[5]="Es el responsable de la síntesis de licopeno.";
             contenidos[6]="Usos autorizados.";
             contenidos[7]="Tratamientos nutricionales foliares en cualquier cultivo.";
             
             // When the user clicks the button, open the modal 
             modal.style.display = "block";
             document.getElementById('modal__producto__titulo').innerHTML = "TERRA POTASIO";  document.getElementById('modal__producto__img').src="images/categoria/nutricionales/productos/terrapotasio.png";
             document.getElementById('modal__header__titulo').innerHTML = "TERRA POTASIO";
        
             add__informacion__modal(8,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/TERRAPOTASIO.pdf"; 
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     else if (valor==8)
         {
            var contenidos =new Array(8);
            // Get the button that opens the modal
             contenidos[0]="Reduce la caída de flores y frutos.";
             contenidos[1]="Mejora la calidad de la fruta.";
             contenidos[2]="Prolonga la vida postcosecha.";
             contenidos[3]="Mejora la firmeza de la fruta.";
             contenidos[4]="Participa en el crecimiento del tubo polínico.";
             contenidos[5]="Forma parte de la pared celular contribuyendo a la resistencia a plagas.";
             contenidos[6]="Contribuye activamente a la regulación hormonal.";
             contenidos[7]="Participa en la traslocación de azúcares.";
             
             // When the user clicks the button, open the modal 
             modal.style.display = "block";
             document.getElementById('modal__producto__titulo').innerHTML = "TERRA CALCIBORO";  document.getElementById('modal__producto__img').src="images/categoria/nutricionales/productos/terracalciboro.jpg";
             document.getElementById('modal__header__titulo').innerHTML = "TERRA CALCIBORO";
             add__informacion__modal(8,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/TERRACALCIBORO.pdf"; 
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     else if (valor==9)
         {
             var contenidos =new Array(8);
             // Get the button that opens the modal
             contenidos[0]="Controla Hongos vía floema, xilema y bacterias en los diferentes estados fenológicos de las plantas.";
             contenidos[1]="Es de doble acción preventiva y curativa, no contiene cobre metálico.";
             contenidos[2]="No es fitotóxico aun aumentando la dosis.";
             contenidos[3]="No causa resistencia alguna en hongos y/o bacterias.";
             contenidos[4]="Puede ser usado en prevención como curativo recomendado por los profesionales.";
             contenidos[5]="Puede aplicarse después de la poda para evitar hongos de madera en heridas.";
             contenidos[6]="Se puede aplicar vía pulverizadora. mecánica o por sistema de riego por goteo.";
             contenidos[7]="Es compatible con otros fungicidas bactericidas dentro de un programa fitosanitario.";
             
             // When the user clicks the button, open the modal 
             modal.style.display = "block";
             document.getElementById('modal__producto__titulo').innerHTML = "TERRA CUP";  document.getElementById('modal__producto__img').src="images/categoria/inductores_de_defensa/productos/terracup.png";
             document.getElementById('modal__header__titulo').innerHTML = "TERRA CUP";
             add__informacion__modal(8,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/TERRACUP.pdf"; 
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     else if (valor==10)
         {
             var contenidos =new Array(5);
             // Get the button that opens the modal
             contenidos[0]="Ha sido elaborado para control de hongos en la etapa inicial de campaña.";
             contenidos[1]="Por su perfecta formulación controla un ataque de hongos en tan solo 24 horas.";
             contenidos[2]="Se puede utilizar en etapas iniciales como brotación, floración.";
             contenidos[3]="Puede ser usado en prevención como curativo.";
             contenidos[4]="Debe ser aplicado con espolvoreadora manual o mecánica.";
             
             
             // When the user clicks the button, open the modal 
             modal.style.display = "block";
             document.getElementById('modal__producto__titulo').innerHTML = "BOTRAID COBRE(CU)";  document.getElementById('modal__producto__img').src="images/categoria/inductores_de_defensa/productos/botraidcobre.png";
             document.getElementById('modal__header__titulo').innerHTML = "BOTRAID COBRE(CU)";
        
             add__informacion__modal(5,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/BOTRAIDCOBRE.pdf"; 
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
             
         }
     else if (valor==11)
         {
            var contenidos =new Array(6);
            // Get the button that opens the modal
             contenidos[0]="Es ideal para integrarlo al programa fitosanitario.";
             contenidos[1]="Por su perfecta formulación controla un ataque de hongos en tan solo 24 horas.";
             contenidos[2]="Se puede utilizar en etapas iniciales como brotación, floración.";
             contenidos[3]="Puede ser usado en prevención como curativo.";
             contenidos[4]="Debe ser aplicado con espolvoreadora manual o mecánica.";
             contenidos[5]="Absorbe la humedad de las heridas o picaduras de pájaros.";
             
             
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "BOTRAID AZUFRE(S)"; document.getElementById('modal__producto__img').src="images/categoria/inductores_de_defensa/productos/botraidazufre.png";
             document.getElementById('modal__header__titulo').innerHTML = "BOTRAID AZUFRE(S)";
        
             add__informacion__modal(6,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/BOTRAIDAZUFRE.pdf";  
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
             
         }
     else if (valor==12)
         {
            var contenidos =new Array(5);
            // Get the button that opens the modal
             contenidos[0]="Se puede aplicar como preventivo y curativo por su alta concentración y eficacia al principio de campaña.";
             contenidos[1]="Contrarresta la acción de las enfermedades fungicas y bacterianas.";
             contenidos[2]="Aporta exoelicitores y activa endoelisitores que estimulan la síntesis.";
             contenidos[3]="Es un producto cero carencia, no crea resistencia en las plantas y puede combinarse con productos químicos.";
             contenidos[4]="Actúa como un inductor de la Fitoalexina natural de la planta.";
            
             
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "ALEXIN PA 100 BT ENZYM"; document.getElementById('modal__producto__img').src="images/categoria/fungicidas_bactericidas/productos/alexinpa100btenzym.png";
             document.getElementById('modal__header__titulo').innerHTML = "ALEXIN PA 100 BT ENZYM";
             add__informacion__modal(5,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/ALEXINPA100BTENZYM.pdf";
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
             
         }
     else if (valor==13)
         {
             var contenidos =new Array(5);
             // Get the button that opens the modal
             contenidos[0]="Se puede aplicar como preventivo y curativo por su alta concentración y eficacia al principio de campaña.";
             contenidos[1]="Actúa como protector solar para todo tipo de vegetales, frutas y hortalizas.";
             contenidos[2]="Reduce el estrés térmico y golpe de sol.";
             contenidos[3]="Reduce la temperatura de la hoja.";
             contenidos[4]="Aumenta la fotosíntesis.";
             contenidos[5]="La acción reflectante de sus partículas elimina en mejor forma el interior de los árboles.";
             
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "PROTECSUN FRUITS";  document.getElementById('modal__producto__img').src="images/categoria/protectores_solares/productos/protecsunfruits.png";
             document.getElementById('modal__header__titulo').innerHTML = "PROTECSUN FRUITS";
        
             add__informacion__modal(5,contenidos);
             document.getElementById('modal__descarga__ficha').href="files/PROTECSUNFRUITS.pdf";
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     else if(valor==14)
         {
             var contenidos =new Array(5);
             // Get the button that opens the modal
             contenidos[0]="Se utiliza como un insecticida natural.";
             contenidos[1]="Su aplicación es recomendada cuando se manifiesta la infestación.";
             contenidos[2]="Se aplica con maquina espolvoreadora de motor preferencialmente para garantizar que el producto esté debidamente aplicado.";
             contenidos[3]="Está recomendado para realizar aplicaciones en todo tipo de plantaciones como: uva de mesa, arándanos, paltos, cítricos, entre otros.";
             contenidos[4]="Producto peruano elaborado con las exigencias del mercado nacional e internacional.";
             
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "TERRA INSECT"; document.getElementById('modal__producto__img').src="images/categoria/insecticidas_naturales/productos/terrainsect.png"
            document.getElementById('modal__header__titulo').innerHTML = "TERRA INSECT";
        
            add__informacion__modal(5,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/TERRAINSECT.pdf";
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     else if (valor==15)
         {
            var contenidos =new Array(5);
             // Get the button that opens the modal
             contenidos[0]="Diseñado para aplicarlo como depósito directamente en el suelo.";
             contenidos[1]="Puede aplicarlo en cualquier etapa del año.";
             contenidos[2]="Es recomendable aplicarlo usualmente ya que los insectos habitan en los campos por diferentes razones.";
             contenidos[3]="Se considera un buen aporte al suelo por su alto contenido de silicio muy elemental en las plantas y campos.";
             contenidos[4]="Se aplica en los cultivos de vid, esparrago, granado, vid vinifera, arándano, entre otros.";
             
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "TERRA INSECT GRANULADO"; document.getElementById('modal__producto__img').src="images/categoria/insecticidas_naturales/productos/terrainsect.png"
            document.getElementById('modal__header__titulo').innerHTML = "TERRA INSECT GRANULADO";
        
            add__informacion__modal(5,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/TERRAINSECTGRANULADO.pdf";
              document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria); 
         }
     else if (valor==16)
         {
             var contenidos =new Array(3);
            // Get the button that opens the modal
         contenidos[0]="Concentración de ácidos fúlvicos puro con materia orgánica. ";
         contenidos[1]="Permite una rápida absorción vía estomas por su gran capacidad de asimilación.";
         contenidos[2]="Se puede aplicar sólo como ingrediente adicional dentro de cualquier plan nutricional de fondo.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "FULVIC TIERRA GOLD";
             document.getElementById('modal__producto__img').src="images/categoria/enmiendas_biologicas/productos/fulvictierra.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "FULVIC TIERRA GOLD";
        
        
            add__informacion__modal(3,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/FULVICTIERRAGOLD.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria); 
         }
     else if (valor==17)
         {
              var contenidos =new Array(3);
            // Get the button that opens the modal
         contenidos[0]="Concentración de ácidos fúlvicos puro con materia orgánica. ";
         contenidos[1]="Permite una rápida absorción vía estomas por su gran capacidad de asimilación.";
         contenidos[2]="Se puede aplicar sólo como ingrediente adicional dentro de cualquier plan nutricional de fondo.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "FULVIC TIERRA 16%";
             document.getElementById('modal__producto__img').src="images/categoria/enmiendas_biologicas/productos/fulvictierra.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "FULVIC TIERRA 16%";
        
        
            add__informacion__modal(3,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/FULVICTIERRA16.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     else if (valor==18)
         {
             var contenidos =new Array(4);
            // Get the button that opens the modal
         contenidos[0]="Es un desinfectante natural que actúa como fungicida, bactericida de extractos naturales de origen vegetales.";
         contenidos[1]="Diseñado para post cosecha y su uso en empacadoras de producción de bananos.";
         contenidos[2]="También puede ser usado para control de Sigatoca Negra.";
         contenidos[3]="Controla hongos como, Oídium, Mildiu, Botrytis Cinérea, pudrición de corona Sthemphillium, verticilium, penicilium, cercospora y bacterias como Erwinia y Xhantonomas, thelaviopcis chalara, artracnorsis.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "BT ENZYM DESINFECTANTE";
             document.getElementById('modal__producto__img').src="images/categoria/fungicidas_bactericidas/productos/btenzymdesinfectante.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "BT ENZYM DESINFECTANTE";
        
        
            add__informacion__modal(4,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/BTENZYMDESINFECTANTE.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);
         }
     else if (valor==19)
         {
            var contenidos =new Array(4);
            // Get the button that opens the modal
         contenidos[0]="Es un inductor de defensa natural actua como fungicida, bactericida de extractos naturales de origen vegetales.";
         contenidos[1]="Debe ser aplicado durante todas las etapas de cultivo hasta la cosecha.";
         contenidos[2]="Debe aplicarse al inicio de envero hasta la cosecha.";
         contenidos[3]="Controla hongos como, Oídium, Mildiu, Botrytis Cinérea, pudrición de corona Sthemphillium, verticilium, penicilium, cercospora y bacterias como Erwinia y Xhantonomas, thelaviopcis chalara, artracnorsis.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "ALEXIN PA-100 BT ENZYM POLVO";
             document.getElementById('modal__producto__img').src="images/categoria/fungicidas_bactericidas/productos/alexinpa100btenzympolvo.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "ALEXIN PA-100 BT ENZYM POLVO";
        
        
            add__informacion__modal(4,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/ALEXINPA100BTENZYMPOLVO.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);  
             
         }
     else if (valor==20)
         {
             
             var contenidos =new Array(4);
            // Get the button that opens the modal
         contenidos[0]="Controla bacterias y hongos fitopatógenos.";
         contenidos[1]="Efectivo en aplicaciones foliares y al suelo.";
         contenidos[2]="Tiene acción sistémica; permite que las plantas distribuyan de mejor manera los macro y micro nutrrimentos.";
         contenidos[3]="Por su acción enzimática, desnaturaliza a las células de bacterias y hongos.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "BT ENZYM";
             document.getElementById('modal__producto__img').src="images/categoria/fungicidas_bactericidas/productos/btenzymdesinfectante.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "BT ENZYM";
        
        
            add__informacion__modal(4,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/BTENZYM.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria); 
         }
     else if (valor==21)
         {
            var contenidos =new Array(4);
            // Get the button that opens the modal
         contenidos[0]="No genera resistencia en los insectos.";
         contenidos[1]="No es tóxico para animales de sangre caliente.";
         contenidos[2]="No deja residuos en plantas, frutos, suelo o agua.";
         contenidos[3]="El intervalo de seguridad entre la primera aplicación y la cosecha es de cero días.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "IT ENZYM";
             document.getElementById('modal__producto__img').src="images/categoria/insecticidas_naturales/productos/itenzym.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "IT ENZYM";
        
        
            add__informacion__modal(4,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/ITENZYM.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);  
             
         }
     else if (valor==22)
         {
            var contenidos =new Array(4);
            // Get the button that opens the modal
         contenidos[0]="Producto altamente eficaz en la solución de problemas micro nutrimentales en la mayoría de cultivos.";
         contenidos[1]="Desbloquea los nutrimentos en el suelo facilitando su disponibilidad para las plantas.";
         contenidos[2]="Es un mejorador de algunas características fisicoquímicas del suelo .";
         contenidos[3]="Por sus características enzimáticas actúa como coadyuvante para optimizar la absorción de los nutrimentos.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "NM ENZYM";
             document.getElementById('modal__producto__img').src="images/categoria/nutricionales/productos/nmenzym.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "NM ENZYM";
        
        
            add__informacion__modal(4,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/NMENZYM.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);   
             
         }
        else if (valor==23)
            {
              var contenidos =new Array(4);
            // Get the button that opens the modal
         contenidos[0]="Es un producto que no presenta toxicidad.";
         contenidos[1]="Permite su utilización mediante aplicaciones foliares o a través de sistemas de fertirrigación.";
         contenidos[2]="Las dosis a utilizar vía riego varía de 5 a 8litros/ha.";
         contenidos[3]="Concentrado soluble, elaborado con fósforo y potasio de alta solubilidad, extracto de algas, ácidos húmicos y fúlvicos.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "FOSFITO TERRA POTASIO";
             document.getElementById('modal__producto__img').src="images/categoria/nutricionales/productos/fosfitoterrapotasio.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "FOSFITO TERRA POTASIO";
        
        
            add__informacion__modal(4,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/FOSFITOTERRAPOTASIO.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);   
                
            }
        else if (valor==24)
            {
                
               var contenidos =new Array(6);
            // Get the button that opens the modal
         contenidos[0]="Producto a base de silicato de aluminio hidratado.";
         contenidos[1]="Tiene como fundamento la absorción de humedad y grasas que se producen en los frutales.";
         contenidos[2]="Es usado principalmente para combatir todo tipo de enfermedades fungosas.";
         contenidos[3]="Va asociado tanto a los fungicidas tanto químicos como orgánicos.";
        contenidos[4]="Se utiliza como insecticida natural para la prevención de ataques de insectos.";
        contenidos[5]="Producto esterilizado y envasado en el Perú.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "KAOLINA TERRA";
             document.getElementById('modal__producto__img').src="images/categoria/fungicidas_bactericidas/productos/kaolinaterra.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "KAOLINA TERRA";
        
        
            add__informacion__modal(6,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/KAOLINATERRA.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria);   
                  
                
            }
     else if (valor==25)
         {
              var contenidos =new Array(6);
            // Get the button that opens the modal
         contenidos[0]="Es componente importante de la biosíntesis de los ácidos grasos.";
         contenidos[1]="Influye en la reserva energética por medio del control del metabolismo de carbohidratos.";
         contenidos[2]="Aumenta la formación de raíces laterales.";
         contenidos[3]="Activa el crecimiento de la planta al influir sobre el crecimiento de la extensión celular.";
        contenidos[4]="Así como el cobre, participa en la fijación de radicales de oxigeno.";
        contenidos[5]="Influye directamente sobre la fotosíntesis y participa en la formación de los cloroplastos.";
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "TERRA MANGANESO";
             document.getElementById('modal__producto__img').src="images/categoria/nutricionales/productos/terramanganeso.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "TERRA MANGANESO";
        
        
            add__informacion__modal(6,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/TERRAMANGANESO.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria); 
         }
     else if (valor==26)
         {
             var contenidos =new Array(5);
            // Get the button that opens the modal
         contenidos[0]="Es un nutriente orgánico de rápida y total absorción por las plantas.";
         contenidos[1]="Contiene una equilibrada y óptima relación entre péptidos de cadena corta, péptidos de cadena larga y aminoácidos.";
         contenidos[2]="Obtenido a partir de proteína animal por un proceso original de hidrólisis controlada con purificación final por intercambio iónico.";
         contenidos[3]="Activa el crecimiento de la planta al influir sobre el crecimiento de la extensión celular.";
        contenidos[4]="Se puede aplicar tanto en pulverización foliar como en aplicación al suelo y está indicado como nutriente orgánico y bioestimulante de la vegetación .";
        
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "TERRA AMIN";
             document.getElementById('modal__producto__img').src="images/categoria/nutricionales/productos/terraamin.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "TERRA AMIN";
        
        
            add__informacion__modal(5,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/TERRAAMIN.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria); 
         }
     else if (valor==27)
         {
             var contenidos =new Array(5);
            // Get the button that opens the modal
         contenidos[0]="Inductor de defensa natural actua como fungicida, bactericida de .";
         contenidos[1]="Contiene una equilibrada y óptima relación entre péptidos de cadena corta, péptidos de cadena larga y aminoácidos.";
         contenidos[2]="Obtenido a partir de proteína animal por un proceso original de hidrólisis controlada con purificación final por intercambio iónico.";
         contenidos[3]="Activa el crecimiento de la planta al influir sobre el crecimiento de la extensión celular.";
        contenidos[4]="Se puede aplicar tanto en pulverización foliar como en aplicación al suelo y está indicado como nutriente orgánico y bioestimulante de la vegetación .";
        
           
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
            document.getElementById('modal__producto__titulo').innerHTML = "ALEXÍN PA-100 BT ENZYM CU LÍQUIDO";
             document.getElementById('modal__producto__img').src="images/categoria/nutricionales/productos/alexinpa100btenzympolvo.png"
            
             document.getElementById('modal__header__titulo').innerHTML = "ALEXÍN PA-100 BT ENZYM CU LÍQUIDO";
        
        
            add__informacion__modal(5,contenidos);
            document.getElementById('modal__descarga__ficha').href="files/ALEXINPA100BTENZYMCULIQUIDO.pdf"; 
            
             document.getElementById('modal__footer__h3').innerHTML = evaluar__categoria(categoria); 
         }
     
}

function add__informacion__modal(veces,contenidos)
{
    var ul = document.getElementById("modal__ul__lista");
    $("#modal__ul__lista").empty();
    for  (i=0;i<veces;i++)
    {
        var li =document.createElement("li");
      li.appendChild(document.createTextNode(contenidos[i].toString()));
        ul.appendChild(li);       
    }       
}

function evaluar__categoria(categoria)
{
    if (categoria==0)
        {
           return "Sociedad Agrícola Tierra SAC | Productos | Enmiendas Biológicas"; 
        }
    else if (categoria==1)
        {
            return "Sociedad Agrícola Tierra SAC | Productos | NUTRICIONALES";
        }
    else if (categoria==2)
        {
            return "Sociedad Agrícola Tierra SAC | Productos | INDUCTORES DE DEFENSA";
        }
    else if (categoria==3)
        {
            return "Sociedad Agrícola Tierra SAC | Productos | FUNGICIDAS BACTERICIDAS";
        }
    else if (categoria==4)
        {
            return "Sociedad Agrícola Tierra SAC | Productos | PROTECTORES SOLARES";
        }
    else if (categoria==5)
        {
            return "Sociedad Agrícola Tierra SAC | Productos | DINASTÍA ALEXÍN";
        }
    else if (categoria==6)
        {
            return "Sociedad Agrícola Tierra SAC | Productos | INSECTICIDAS NATURALES";
        }
    else
        {    
            return "Sociedad Agrícola Tierra SAC | Productos | xD";
        }
}

function mostrarOcultar(id) {
        divID = document.getElementById(id);
        if(divID.style.display == "")
                divID.style.display = "none";
        else
                divID.style.display = "";
}