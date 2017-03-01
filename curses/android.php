<!DOCTYPE html>
<html lang="en">
<?php
  include('../head.php');
    ?>
<body>
   <?php
        include('../header.php');
    ?>
    
    
    <div class="banner__android">
    <div class="form__content">
       <div class="form__content__form">
        <ul class="form__content__list">
            <li><input placeholder="Nombres" type="text"/><input type="text" placeholder="Apellidos"/></li>
            <li><input placeholder="Correo Electrónico" type="email"/></li>
            <li><select name="" id="" 
            >
               <option value="Peru">Peru</option>
               <option value="Peru">Peru</option>
               <option value="Peru">Peru</option>
               <option value="Peru">Peru</option> 
            </select></li>
            <li><select name="" id=""><option value="Peru">Región donde Reside</option>
            <option value="Peru">Peru</option>
            <option value="Peru">Peru</option>
            <option value="Peru">Peru</option></select></li>
            <li><select name="" id="">
                <option value="Peru">¿Qué edad tiene?</option>
                <option value="Peru">7 - 9 años</option>
                <option value="Peru">10 - 13 años</option>
                <option value="Peru">14 - 18 años</option>
                <option value="">19 - 24 años</option>
                <option value="">25 - 34 años</option>
                <option value="">>35 años</option>
            </select></li>
            <li><select name="" id=""><option value="Peru">¿Carrera de Interés?</option>
            <option value="Peru">Programación con JAVA</option>
            <option value="Peru">Desarrollo Móvil</option>
            <option value="Peru">AutoCAD</option>
            <option value="">Programación WEB</option>
            <option value="">Diseño Gráfico</option>
            <option value="">JavaScript</option>
            </select></li>
            <li><input type="submit" value="Empezar Ahora"></li>
        </ul>
        </div>
    </div>
    <div class="content__banner">
        <p>CARRERA DE DESARROLLO MÓVIL.</p> 
        <p>Certifícate y conviértete en una desarrollador profesional en ANDROID.</p> 
    </div>
        <div class="button__banner">
            <a href="#about" id="abouts" class="section__knowus">Conócenos</a>
            <a href="#curses" id="cursesa">Saber Más</a> 
        </div>
     </div>
   <section class="section__curses" id="curses">
        <article>
            <h1 class="section__title">Carrera de Desarrollo Móvil</h1>
            <p>Una carrera que ofrece todas las herramientas, plataformas y soluciones para introducirse en el desarrollo de aplicaciones y servicios móviles.</p>
        </article>
        <article class="article__curses">
            <div class="article__curses__left">
           
              <div class="hovereffect">
               
               <img src="../images/java-04.png" alt="">
                  
                   <div class="overlay">
                    <h2>¿Estás Interesado?</h2>
                    <a class="info" href="#">Ver Sílabo</a>
                    <a class="info" href="#">Matricúlate</a>
                   </div>
               
              </div>
               
                <div class="article__separator">
                    
                </div>
                <p>Módulo Básico. </p>
            </div>
            <div class="article__curses__center">
              <div class="hovereffect">
               <img src="../images/Mockup3-02-02.png" alt="">
               <div class="overlay">
                    <h2>¿Estás Interesado?</h2>
                    <a class="info" href="#">Ver Sílabo</a>
                    <a class="info" href="#">Matricúlate</a>
                   </div>
              </div>
                <div class="article__separator">
                    
                </div>
                <p>Módulo Intermedio. </p>
            </div>
            <div class="article__curses__right">
            <div class="hovereffect">
                <img src="../images/plano-03.png" alt="">
                <div class="overlay">
                    <h2>¿Estás Interesado?</h2>
                    <a class="info" href="#">Ver Sílabo</a>
                    <a class="info" href="#">Matricúlate</a>
                </div>
            </div>
                <div class="article__separator">
                    
                </div>
                <p>Módulo Avanzado. </p>
            </div>
        </article>
       
    </section>
    <section class="section__about" id="about">
        <article>
            <h1 class="section__title">¿Quiénes Somos?</h1>
            <a 
            onclick="open__modal()"
            class="section__discovery"   >Descúbrelo</a>
              
        </article>
    </section>
    
    <div class="parallax__android">
    </div>
    
    <?php
         include('../footer.php');
    ?>
    <?php
         include('../modal.php');
    ?>
    <?php
         include('../aftercode.php');
    ?>
    
</body>
</html>