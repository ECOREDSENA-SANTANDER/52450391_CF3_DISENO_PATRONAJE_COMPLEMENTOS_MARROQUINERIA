<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Guía paso a paso para la confección de productos de marroquinería
        
      .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
        .col-lg-12
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}", alt='Imagen decorativa.'
            )
            .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
              p.mb-4 En el sector de la marroquinería, al igual que en otros ámbitos productivos, es fundamental seguir una serie de fases secuenciales para el desarrollo de un producto. Este material de formación se centra en las tres últimas etapas del proceso productivo.
              br
              br
              p.mb-0 En la fabricación de artículos de marroquinería es crucial conocer los conceptos de armado y costura, estas actividades consisten en montar una pieza sobre otra mediante adhesivos y posteriormente, unirlas con puntadas manuales o mecánicas. Este proceso no solo define la resistencia del producto, sino que también influye en su estética y acabado.
 
      p.mb-0(data-aos="fade-left") Para la confección de bolsos, es recomendable comenzar con el armado de los bolsillos y la colocación de chapetas, siempre teniendo en cuenta el diseño seleccionado.

      separador
      #t_1_1.titulo-segundo.mb-4
        h2 1.1 Confección de bolsillos
      
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-5.col-md-8.col-8.mb-4
          img.img-a.img-t(src='@/assets/curso/tema1/2.png', alt='')
        .col-lg-7.mb-4
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-2.col-md-9.col-9
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/3.svg', alt='')
            .col-lg-10
              p.mb-3 La confección de bolsillos es un aspecto clave en la producción de accesorios como bolsos y billeteras, ya que cumplen diversas funciones que pueden diferenciar un producto de otro; existen principalmente dos tipos de bolsillos utilizados en este proceso:
          ul.lista-ul
            li.d-flex.mb-1
              i.fas.fa-circle-check
              p.mb-0 Bolsillo porta celular.
            li.d-flex.mb-3
              i.fas.fa-circle-check
              p.mb-0 Bolsillo con cierre.
          p.mb-0(data-aos="fade-left") La correcta elaboración de estos elementos contribuye tanto a la funcionalidad como a la estética del producto final, asegurando su calidad y atractivo en el mercado.


      .titulo.mb-5.ps-5.pe-3(data-aos="fade-right")
        img(src='@/assets/curso/tema1/titulo.png', alt='Imagen decorativa')
        h3.mb-0.text-white.mx-2 Bolsillo porta celular

      p.mb-4(data-aos="fade-left") La función del bolsillo porta celular es, como su nombre indica, permitir el almacenamiento de un teléfono móvil. Para garantizar su eficacia, este accesorio debe someterse a un proceso de confección particular que implica no solo conocer, sino también ejecutar rigurosamente una serie de fases y pasos específicos.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-md-9.mb-4
          .titulo-sexto.color-secundario.mb-3
            h5 Figura 1. 
            | Bolsillo porta celular
          img.mb-2(src='@/assets/curso/tema1/4.svg', alt='La figura representa un bolsillo diseñado para portar un celular, compuesto por un fondo con un patrón de lunares verdes sobre un fondo blanco. En el centro, se encuentra un rectángulo rojo dividido en dos secciones, que corresponde al bolsillo.')
          figcaption Fuente: SENA
        .col-lg-8.mb-4
          .bg2.p-lg-5.p-4
            p.mb-4.my-4 #[b Paso 1:] ubique de manera centrada el bolsillo en el forro, teniendo en cuenta las pinzas y dejando 5 cm en la parte superior. Una vez ubicado el bolsillo debe pasar una costura vertical a partir del cuarto punto superior al cuarto punto inferior.
            p.mb-4 #[b Paso 2:] pase costuras por el lateral derecho, luego por la parte inferior teniendo en cuenta realizar el doblez en cada marcación de puntos para confeccionar las pinzas del porta celular.
            p.mb-4 Por último, continúe la costura por el lateral izquierdo. Recuerde rematar al iniciar y al terminar cada costura.

      .row.fondo1.align-items-center.p-2.mb-5(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario.mb-4
            h5 Figura 2. 
            | Costuras
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-8.mb-4
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.col-md-9.mb-2
                  img.mb-2(src='@/assets/curso/tema1/5.svg', alt='La figura presenta dos representaciones de costuras en una superficie con un patrón de puntos verdes sobre fondo blanco. En ambas ilustraciones, se incluye un rectángulo rojo con divisiones internas, ubicado en el centro de cada superficie. Las diferencias entre ambas representaciones radican en la disposición de las divisiones dentro del rectángulo rojo, lo que sugiere distintos métodos de costura o unión en la estructura.')
                .col-lg-6.col-md-9.mb-2
                  img.mb-2(src='@/assets/curso/tema1/6.svg', alt='La figura presenta dos representaciones de costuras en una superficie con un patrón de puntos verdes sobre fondo blanco. En ambas ilustraciones, se incluye un rectángulo rojo con divisiones internas, ubicado en el centro de cada superficie. Las diferencias entre ambas representaciones radican en la disposición de las divisiones dentro del rectángulo rojo, lo que sugiere distintos métodos de costura o unión en la estructura.')
              figcaption Fuente: SENA

      .titulo.mb-5.ps-5.pe-3(data-aos="fade-right")
        img(src='@/assets/curso/tema1/titulo.png', alt='Imagen decorativa')
        h3.mb-0.text-white.mx-2 Bolsillo con cierre

      p.mb-4(data-aos="fade-left") La función del bolsillo con cierre es permitir el almacenaje de objetos de forma segura y que no se salgan con el movimiento provocado por el usuario.
      p.mb-4(data-aos="fade-right") El bolsillo con cierre requiere de un proceso de confección distinto al de otro tipo de bolsillos. Por ende, es necesario conocer y aplicar cada uno de los pasos que permiten la construcción adecuada del bolsillo con cierre.

      .row.fondo1.align-items-center.p-2.mb-4(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario.mb-4
            h5 Figura 3. 
            | Bolsillo con cierre
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-8.mb-4
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-4.col-md-6.mb-2
                  img.mb-2(src='@/assets/curso/tema1/7.svg', alt='La figura expone un proceso de confección de un bolsillo con cierre, dividido en tres etapas. En los extremos izquierdo y derecho, se expone una pieza de tela verde unida a una base naranja, con un cierre amarillo en la parte superior, donde en el lado derecho se incluyen hilos sueltos. En la parte central, se ilustra la pieza con un patrón de puntos verdes sobre fondo blanco, con una abertura horizontal donde se ha incorporado el cierre amarillo, indicando el punto de integración del bolsillo en la superficie.')
                .col-lg-4.col-md-6.mb-2
                  img.mb-2(src='@/assets/curso/tema1/8.svg', alt='La figura expone un proceso de confección de un bolsillo con cierre, dividido en tres etapas. En los extremos izquierdo y derecho, se expone una pieza de tela verde unida a una base naranja, con un cierre amarillo en la parte superior, donde en el lado derecho se incluyen hilos sueltos. En la parte central, se ilustra la pieza con un patrón de puntos verdes sobre fondo blanco, con una abertura horizontal donde se ha incorporado el cierre amarillo, indicando el punto de integración del bolsillo en la superficie.')
                .col-lg-4.col-md-6.mb-2
                  img.mb-2(src='@/assets/curso/tema1/9.svg', alt='La figura expone un proceso de confección de un bolsillo con cierre, dividido en tres etapas. En los extremos izquierdo y derecho, se expone una pieza de tela verde unida a una base naranja, con un cierre amarillo en la parte superior, donde en el lado derecho se incluyen hilos sueltos. En la parte central, se ilustra la pieza con un patrón de puntos verdes sobre fondo blanco, con una abertura horizontal donde se ha incorporado el cierre amarillo, indicando el punto de integración del bolsillo en la superficie.')
              figcaption Fuente: SENA

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.col-md-8.col-8
          img.mb-0(src='@/assets/curso/tema1/10.png', alt='')
        .col-lg-7.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.col-md-9.col-9.mb-4
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/11.png', alt='')
            .col-lg-10.mb-2
              p.mb-3 La elaboración del bolsillo con cierre se realizará sobre el forro opuesto, previamente preparado, utilizando el cartón y el cierre. Luego, se posicionará el forro interno del bolsillo, doblado 0.8 cm, de manera que la costura inferior coincida con la parte inferior del cierre. Sobre el derecho, se pasarán las costuras sin rematar ni al inicio ni al final.
          p.mb-0 A continuación, retire el bolsillo de la máquina, dé vuelta y saque las hebras por el revés para anudarlas. Posteriormente, coloque el extremo inferior del forro interno del bolsillo sobre la parte superior del cierre. Con el derecho, inicie la costura en uno de los extremos de la costura inferior y recorra el contorno de la caja sin rematar al inicio ni al final; una vez finalizado, retire el bolsillo de la máquina, extraiga las hebras por el revés y anúdelas.
      
      p.mb-0(data-aos="fade-left") Por último, cierre los lados del bolsillo realizando una costura que remate al inicio y al final. De este modo, el bolsillo quedará oculto en el revés del forro principal, mostrando en el derecho únicamente el cierre.
     
     
      separador
      #t_1_2.titulo-segundo.mb-4
        h2 1.2 Confección bolso de pinza y variaciones

      p.mb-4(data-aos="fade-left") En este espacio se expondrán diferentes etapas y variaciones en la confección de bolsos de pinza, con cambios en los colores, tamaños y detalles como solapas y bolsillos. Estos diseños permiten adaptar el modelo a diversas necesidades y estilos.
      
      .row.fondo1.align-items-center.p-2.mb-4(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario.mb-4
            h5 Figura 4. 
            | Bolso de pinza y variaciones
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-10.mb-4
              .row.justify-content.align-items-start.mb-0
                .col-lg-7.mb-2
                  img.mb-2(src='@/assets/curso/tema1/12.svg', alt='La figura ilustra diferentes variaciones en la confección de un bolso de pinza. Se presentan múltiples etapas y modificaciones en el diseño, destacando la combinación de piezas en colores naranja, verde y amarillo. En la parte superior, se ilustran variaciones en la estructura del bolsillo y su ensamblaje. En la parte inferior, se ilustran distintas configuraciones del bolsillo con detalles en la costura y en el refuerzo superior. La secuencia general sugiere un proceso de construcción progresivo con distintas opciones de acabado.')
              .row.justify-content.align-items-start.mb-0
                .col-lg-6.mb-2.pe-1
                  img.mb-2(src='@/assets/curso/tema1/13.svg', alt='La figura ilustra diferentes variaciones en la confección de un bolso de pinza. Se presentan múltiples etapas y modificaciones en el diseño, destacando la combinación de piezas en colores naranja, verde y amarillo. En la parte superior, se ilustran variaciones en la estructura del bolsillo y su ensamblaje. En la parte inferior, se ilustran distintas configuraciones del bolsillo con detalles en la costura y en el refuerzo superior. La secuencia general sugiere un proceso de construcción progresivo con distintas opciones de acabado.')
                .col-lg-6.mb-2.ps-1
                  img.mb-2(src='@/assets/curso/tema1/14.svg', alt='La figura ilustra diferentes variaciones en la confección de un bolso de pinza. Se presentan múltiples etapas y modificaciones en el diseño, destacando la combinación de piezas en colores naranja, verde y amarillo. En la parte superior, se ilustran variaciones en la estructura del bolsillo y su ensamblaje. En la parte inferior, se ilustran distintas configuraciones del bolsillo con detalles en la costura y en el refuerzo superior. La secuencia general sugiere un proceso de construcción progresivo con distintas opciones de acabado.')
              figcaption.mb-0 Fuente: SENA

      p.mb-4(data-aos="fade-left") Para confeccionar el bolso de pinza, lo primero que debe hacer es unir los porta cierres o falsos internos con los forros del cuerpo, si lo va a confeccionar con cierre, debe ubicarlo entre estas dos piezas y con los dientes del cierre encontrados con el porta cierre, debe realizar esta operación para ambas caras del bolso y así poder formar el cierre, una vez unidos debe poner la llave del cierre y pespuntar sobre el porta cierre.

      .row.fondo1.align-items-center.p-2.mb-5(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 5. 
            | Unión de porta cierre 
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10.mb-4
              .row.justify-content.align-items-start.mb-0
                .col-lg-12.mb-2
                  img(src='@/assets/curso/tema1/15.svg', alt='La figura describe el proceso de unión de un porta cierre en una pieza de tela. Se incluyen varias etapas del ensamblaje, destacando la combinación de colores naranja y verde en las piezas. En la primera sección, se ilustra una estructura con una línea de costura y una indicación de pliegue hacia abajo. Luego, se presentan diferentes vistas de la pieza, incluyendo cortes rectangulares y una variación con bordes curvados en la parte inferior. Finalmente, se ilustra una versión ensamblada con un acabado en forma trapezoidal, indicando el cierre del proceso de unión.')
              figcaption.mb-3 Fuente: SENA

      p.mb-0(data-aos="fade-left") Una los laterales y la parte inferior de los forros, tal como lo expone la figura. Abra las pinzas y pase costura en cada una, rematando al inicio y al final. Realice el mismo proceso con los cuerpos del material externo del bolso.

      separador
      #t_1_3.titulo-segundo.mb-4
        h2 1.3 Confección bolso con base
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .fondo7.p-lg-5.p-3
      
            .tarjetaf.p-lg-4.p-3.mb-0.my-5
              SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")(@mouseover="mostrarIndicador = false")
                .row.justify-content-center.align-items-center.p-0.p-lg-4
                  .col-lg-5
                    p.mb-4 Para confeccionar el bolso con base, lo primero es envivar la base. Luego, para sellar el vivo, corte un cuadrado de 2 cm x 2 cm del mismo material y úselo para envolver ambas puntas del vivo y remátelo.
                  .col-lg-7
                    .bs.p-lg-4.p-3
                      .titulo-sexto.color-secundario.my-lg-4.my-2
                        h5 Figura 6. 
                        | Confección bolso con base
                      img.mb-3(src='@/assets/curso/tema1/16.svg', alt='La figura ilustra el proceso de confección de un bolso con base, utilizando piezas de color azul. En la primera sección, se presentan elementos rectangulares y una estructura principal de forma ovalada, con una unión en la parte inferior donde se incorpora un componente alargado. En la segunda sección, se ilustra una vista superior del bolso ya ensamblado, con un contorno reforzado en tono dorado y una pequeña extensión en la parte inferior, lo que sugiere un ajuste o cierre en la base.')
                      figcaption.mb-0 Fuente: SENA
                .row.justify-content-center.align-items-center.p-0.p-lg-4
                  .col-lg-5
                    p.mb-4 Una los laterales del cuerpo del bolso con una costura, superponiéndolos de manera que ambos queden “derecho con derecho”. Es importante rematar al inicio y al final de cada costura para garantizar mayor resistencia.
                  .col-lg-7
                    .bs.p-lg-4.p-3
                      .titulo-sexto.color-secundario.my-lg-4.my-2
                        h5 Figura 7. 
                        | Confeccionar el bolso con base
                      img.mb-3(src='@/assets/curso/tema1/17.svg', alt='La figura representa el proceso de confección de un bolso con base mediante una serie de pasos secuenciales. Se incluyen piezas rectangulares y pequeñas secciones adicionales en tonos azul. En la primera etapa, una de las piezas rectangulares es doblada, como indica la flecha, y posteriormente se realiza una costura en el borde. Luego, la pieza se transforma en una estructura cilíndrica abierta en la parte inferior. En la última etapa, se observa cómo la base ovalada es unida a la estructura cilíndrica, completando el proceso de ensamblaje del bolso.')
                      figcaption.mb-0 Fuente: SENA
                .row.justify-content-center.align-items-center.p-0.p-lg-4
                  .col-lg-5
                    p.mb-4 A continuación, fije la base envivada y la boca inferior del cuerpo del bolso con una costura, siguiendo las indicaciones de la figura. Para evitar que la base se desplace, primero asegúrela con remates en la parte superior, inferior y en los puntos medios de los laterales.
                  .col-lg-7
                    .bs.p-lg-4.p-3
                      .titulo-sexto.color-secundario.my-lg-4.my-2
                        h5 Figura 8. 
                        | Confección con cierre
                      img.mb-3(src='@/assets/curso/tema1/18.svg', alt='La figura representa un proceso de confección que incluye la incorporación de un cierre. Se ilustran varios pasos secuenciales: inicio con piezas de tela en diferentes colores, inserción del cierre en una abertura, ensamblaje de las piezas mediante costura, formación de una estructura cilíndrica y finalización con el cierre del extremo abierto.')
                      figcaption.mb-0 Fuente: SENA
                .row.justify-content-center.align-items-center.p-0.p-lg-4
                  .col-lg-5
                    p.mb-4 Ahora una los porta cierres o falsos internos con los forros del cuerpo, si lo va a confeccionar con cierre, debe ubicarlo entre estas dos piezas y con los dientes del cierre encontrados con el porta cierre, debe realizar esta operación para ambas caras del bolso y así poder formar el cierre, una vez unidos debe poner la llave del cierre y pespuntar sobre el porta cierre.
                  .col-lg-7
                    .bs.p-lg-4.p-3
                      .titulo-sexto.color-secundario.my-lg-4.my-2
                        h5 Figura 9. 
                        | Fijar base envivada
                      img.mb-3(src='@/assets/curso/tema1/19.svg', alt='La figura expone el proceso de fijación de una base envivada en una estructura de bolso. Se presentan múltiples etapas de ensamblaje con piezas en colores azul, naranja, rojo y amarillo. En la parte superior, se ilustran diferentes configuraciones del bolsillo, variando su tamaño y posición en la estructura. En la parte inferior, se ilustra la secuencia de costura y ensamblaje de la base, asegurando su fijación con detalles en los bordes superiores. La última sección indica la unión final, resaltando el refuerzo del contorno mediante un proceso de envivado.')
                      figcaption.mb-0 Fuente: SENA
                .row.justify-content-center.align-items-center.p-0.p-lg-4
                  .col-lg-5
                    p.mb-4 Una los laterales de los forros del bolso con costura montando uno sobre otro de manera que ambos se encuentren derecho con derecho, recuerde rematar al inicio y al final de cada costura.
                  .col-lg-7
                    .bs.p-lg-4.p-3
                      .titulo-sexto.color-secundario.my-lg-4.my-2
                        h5 Figura 10. 
                        | Unir laterales
                      img.mb-3(src='@/assets/curso/tema1/20.svg', alt='La figura ilustra el proceso de unión de los laterales en la confección de un bolso o estuche. Se presentan varias etapas, comenzando con la adición de pequeños elementos a los costados. Luego, se incorpora un bolsillo adicional de otro color en la parte frontal. Posteriormente, se realizan costuras en los bordes laterales y superiores para asegurar la estructura. Finalmente, se añade una correa en la parte superior, completando el diseño funcional del objeto.')
                      figcaption.mb-0 Fuente: SENA

      .bg1.p-lg-5.p-4.mb-0(data-aos="fade-left")
        p.mb-0 Una vez finalizadas las estructuras, fije las chapetas al cuerpo externo del bolso de manera simétrica y asegúrelas con pespunte. A continuación, doble el borde del forro hacia el revés y repita el mismo procedimiento con el bolso externo, aplicando solución de caucho en ambas piezas. Realice cortes de descarga en las uniones de costura superiores e introduzca el forro dentro del bolso exterior, asegurándolos con pespunte, como se ilustra en la figura. Por último, instale los herrajes y la cargadera según el diseño.

      separador
      #t_1_4.titulo-segundo.mb-4
        h2 1.4 Confección bolso de giro

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.col-md-2.col-4
          img.mb-3(src='@/assets/curso/tema1/bolso.svg')
        .col-lg-11.col-md-10
          p.mb-4(data-aos="fade-left") Para confeccionar el bolso de giro, comience uniendo los porta cierres o falsos internos con sus respectivos forros, colocando el cierre entre ambas piezas, con los dientes orientados hacia el porta cierre externo. Este proceso se conoce como “entalegar cierre”. Repita esta operación en ambas caras del bolso para formar el cierre completo. Una vez unidos, inserte la llave del cierre y realice un pespunte sobre el porta cierre externo para asegurar la estructura.

      .row.fondo1.align-items-center.p-2.mb-4(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 11. 
            | Bolso de giro
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.mb-4
              img.mb-3(src='@/assets/curso/tema1/21.svg', alt='La figura representa el proceso de confección de un bolso de giro. Se ilustran varias etapas que incluyen la preparación de dos piezas rectangulares de tela en diferentes colores, la superposición y costura de los bordes con un patrón en zigzag. Luego, se incorpora un cierre en la parte central, asegurándolo con costuras laterales. Finalmente, las piezas son ensambladas y reforzadas para completar la estructura del bolso.')
              figcaption.mb-3 Fuente: SENA
      
      p.mb-4(data-aos="fade-left") Ahora, coloque cada extremo del cierre previamente preparado entre el corte del giro en material y el corte del giro en forro, asegurándose de que el cierre quede alineado con el lado derecho del material exterior del giro. Este procedimiento debe realizarse de la misma manera en ambos extremos y se conoce como “entalegar”.

      .row.fondo1.align-items-center.p-2.mb-5(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 12. 
            | Entalegar
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4.col-md-9.col-9.mb-4
              img.mb-3(src='@/assets/curso/tema1/22.svg', alt='La figura describe el proceso de entalegar en la confección. Se observa una estructura en forma de asa o correa compuesta por dos piezas de tela de distintos colores unidas mediante costuras reforzadas. En uno de los extremos, se agregan elementos de sujeción en color negro, posiblemente hebillas o remaches, para asegurar la unión y funcionalidad del diseño.')
              figcaption.mb-3 Fuente: SENA
      
      .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
        .col-lg-12
          .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/bl2.png')})`}", alt='Imagen decorativa.'
            )
            .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
              p.mb-4(data-aos="fade-left") En el bolso de giro, las chapetas se ubican en los laterales, específicamente en la parte superior del giro. Por ello, es fundamental confeccionarlas antes de unir el giro a los cuerpos. Estas deben fijarse con pespuntes de manera simétrica en ambos lados, considerando que su tamaño dependerá de los herrajes a utilizar. Es importante prestar especial atención durante su confección, asegurándose de unirlas únicamente al cuerpo exterior del giro. Para ello, se debe separar el giro de forro, de modo que el pespunte solo se aplique sobre el giro de cuero.
              br
              br
              p.mb-4(data-aos="fade-right") Posteriormente, una los cuerpos con su respectivo forro mediante una costura en el perímetro. Una vez completado este paso, proceda a envivar ambos cuerpos. Para sellar corte un cuadro de 2 cm x 2 cm del mismo material del bolso, envuelva con él ambas puntas del “vivo” y remate para asegurar un acabado limpio.

      
      .row.fondo1.align-items-center.p-2.mb-4(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 13. 
            | Unir las piezas
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.mb-4
              img.mb-3(src='@/assets/curso/tema1/23.svg', alt='La figura representa el proceso de unión de piezas en la confección. Se inicia con dos piezas rectangulares de tela en diferentes colores que son alineadas y unidas mediante una costura perimetral. Posteriormente, se refuerzan los bordes con una costura adicional y se incorpora un elemento en la parte inferior, posiblemente para facilitar el cierre o el ensamblaje con otra parte del producto final.')
              figcaption.mb-3 Fuente: SENA
      
      p.mb-4(data-aos="fade-left") Finalmente, rodee los cuerpos con el giro y el cierre previamente unidos. Comience fijando una cara y luego la otra, asegurando una correcta alineación; para garantizar que el giro se mantenga en su lugar, aplique pespuntes con precisión y uniformidad.

      .bg3.p-lg-5.p-4.mb-4
        p.mb-0.text-white.text-center #[b Vivo:] es una tira de material, generalmente de cuero o tela, que se coloca en los bordes de un bolso para reforzarlo y darle un acabado estético.

      p.mb-4(data-aos="fade-left") Para asegurar que el giro no se desplace, primero fíjelo con remates en la parte superior, inferior y en los puntos medios de los laterales, garantizando que el cierre quede alineado y equidistante en ambos lados. Finalmente, ribetee el interior e instale los herrajes y la cargadera según el diseño.

      .row.fondo1.align-items-center.p-2.mb-4(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 14. 
            | Ribetear
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.mb-4
              img.mb-3(src='@/assets/curso/tema1/24.svg', alt='La figura ilustra el proceso de ribetear en la confección de un bolso o accesorio. Se presentan varias etapas que inician con dos piezas rectangulares de tela en colores diferentes, las cuales son unidas y aseguradas con costuras en el borde. Luego, se refuerzan las piezas con un ribete que proporciona mayor resistencia y un acabado estético. Finalmente, estas piezas se incorporan a la estructura principal del bolso, garantizando un diseño funcional y resistente.')
              figcaption.mb-3 Fuente: SENA
      
      p.mb-0(data-aos="fade-left") La variación de este diseño consiste en añadir una tapa a la estructura del bolso; para confeccionarla, cierre el perímetro inferior con una costura por el revés del material, asegurándose de que los lados derechos queden enfrentados. Luego, voltee la pieza al derecho y realice un pespunte en el perímetro previamente unido. A continuación, doble la parte superior y únala con pespunte a la parte posterior del bolso; si desea incorporar esta variación, es fundamental realizar este procedimiento antes de ensamblar los cuerpos al giro.


      separador
      #t_1_5.titulo-segundo.mb-4
        h2 1.5 Confección bolso curvo con pinza
      
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.col-md-2.col-4
          img.mb-3(src='@/assets/curso/tema1/bl3.svg')
        .col-lg-11.col-md-10
          p.mb-4(data-aos="fade-left") La confección de un bolso curvo con pinza inicia con la costura de las pinzas para dar volumen, paso seguido, se unen los cuerpos con su forro, asegurando la curvatura. Posteriormente, se fija el cierre y se ensambla el giro de forma simétrica; para terminar el bolso se instalan los herrajes y la cargadera para un acabado funcional, como se expone en la figura.

      .row.fondo1.align-items-center.p-2.mb-5(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 15. 
            | Bolso curvo con pinza
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.mb-4
              img.mb-3(src='@/assets/curso/tema1/25.svg', alt='La figura representa el proceso de confección de un bolso curvo con pinza. Se incluyen varias piezas de tela con formas curvas y rectangulares que se ensamblan en diferentes etapas. Se incorporan elementos como bolsillos rectangulares con cierres en la parte frontal. Luego, las piezas inferiores y superiores son unidas mediante costuras, formando la estructura del bolso. Finalmente, se realizan ajustes y acabados para darle forma definitiva al diseño.')
              figcaption.mb-3 Fuente: SENA
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.col-md-7.col-9.mb-4
          img.mb-0(src='@/assets/curso/tema1/bl4.png', alt='')
        .col-lg-7.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2
              img.mb-3.d-none.d-lg-block(src='@/assets/curso/tema1/bl5.svg', alt='')
            .col-lg-10
              p.mb-3(data-aos="fade-left") Para confeccionar este bolso, comience cerrando las pinzas tanto en los forros como en los cuerpos exteriores. Luego, una los porta cierres o falsos internos con los forros del cuerpo. Si el diseño incluye un cierre, colóquelo entre estas dos piezas, asegurándose de que los dientes queden orientados hacia el porta cierre. Repita este procedimiento en ambas caras del bolso para formar el cierre completo. 
          .bg7.p-3
            p.mb-0(data-aos="fade-right") Finalmente, inserte la llave del cierre y realice un pespunte sobre el porta cierre para reforzar la estructura, como se expone en la figura:

      .row.fondo1.align-items-center.p-2.mb-4(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 16. 
            | Cerrar pinzas
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-6.mb-4
              img.mb-3(src='@/assets/curso/tema1/26.svg', alt='La figura detalla el proceso de cierre de pinzas en la confección de un bolso. Se identifican varias piezas de tela, algunas con bolsillos, que presentan cortes en la parte inferior. Estos cortes son doblados y cosidos para generar volumen y forma en la estructura del bolso. En la siguiente etapa, se agregan elementos de sujeción en los laterales, posiblemente para reforzar la unión y mejorar la funcionalidad del diseño.')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              figcaption.mb-3 Fuente: SENA
  
      p.mb-4(data-aos="fade-left") Una los perímetros de los forros con costura, asegurándose de rematar al inicio y al final de cada puntada, tal como se evidencia en la figura, realice el mismo procedimiento con los cuerpos del material externo del bolso. Una vez terminadas las estructuras, fije las chapetas de manera simétrica al cuerpo externo del bolso y asegúrelas con pespunte para garantizar su estabilidad y acabado.
      p.mb-4(data-aos="fade-right") Doble la boca del forro hacia el revés y realice el mismo procedimiento con el bolso externo, aplicando solución de caucho en ambas piezas. Luego, haga cortes de descarga en las uniones de costura superiores e inserte el forro dentro del bolso exterior; asegúrelos con pespunte, tal como se ilustra en la figura, debe instalar los herrajes y la cargadera según el diseño.

      .row.fondo1.align-items-center.p-2(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 17. 
            | Pegado chapetas
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.mb-4
              img.mb-3(src='@/assets/curso/tema1/27.svg', alt='La figura ilustra el proceso de pegado de chapetas en la confección de un bolso. Se presentan varias etapas donde inicialmente se pliega la parte superior de la pieza principal, asegurándola con costuras. Posteriormente, se adhieren chapetas en los laterales, elementos que refuerzan la estructura y facilitan la incorporación de accesorios. En la fase final, se integra una correa mediante las chapetas, completando el diseño del bolso con un sistema de sujeción funcional.')
              figcaption.mb-3 Fuente: SENA




      separador
      #t_1_6.titulo-segundo.mb-5
        h2 1.6 Confección de billetera femenina

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-9.fondo5.p-lg-5.p-4.mb-3
          .tarjeta.tarjeta--gris.p-lg-4.p-3.my-5.mb-0
            PasosB.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4(titulo="Paso 1")
                .col-lg-10
                  h4.mb-4 Paso 1: pegado del forro
                  ul.lista-ul
                    li.d-flex.mb-1
                      i.fas.fa-circle-check
                      p.mb-0 Aplica cemento de contacto XL en el reverso del primer porta documentos.
                    li.d-flex.mb-1
                      i.fas.fa-circle-check
                      p.mb-0 Adhiere el primer lado del forro en la parte inferior de la primera incisión.
              .row.justify-content-center.align-items-center(titulo="Paso 2")
                .col-lg-10
                  h4.mb-4 Paso 2: fijación del otro extremo
                  ul.lista-ul
                    li.d-flex.mb-1
                      i.fas.fa-circle-check
                      p.mb-0 Pega el otro extremo del forro en la parte superior de la misma abertura del porta documentos.
              .row.justify-content-center.align-items-center(titulo="Paso 3")
                .col-lg-10
                  h4.mb-4 Paso 3: repetición del proceso
                  ul.lista-ul
                    li.d-flex.mb-1
                      i.fas.fa-circle-check
                      p.mb-0 Realiza este procedimiento en cada abertura.
                    li.d-flex.mb-1
                      i.fas.fa-circle-check
                      p.mb-0 Asegúrate de colocar el forro correspondiente en cada sección.
              .row.justify-content-center.align-items-center(titulo="Paso 4")
                .col-lg-10
                  h4.mb-4 Paso 4: sellado de bordes
                  ul.lista-ul
                    li.d-flex.mb-1
                      i.fas.fa-circle-check
                      p.mb-0 Usa tinta marroquinera para sellar los bordes y lograr un acabado profesional.
        .col-lg-3.col-md-5.col-7.mb-3
          img(src='@/assets/curso/tema1/28.png', alt='')

      
      .row.fondo1.align-items-center.p-2.mb-0(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 18. 
            | Partes billetera
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.mb-4
              img.mb-3(src='@/assets/curso/tema1/29.svg', alt='La figura representa la distribución de las diferentes partes de una billetera, clasificadas por materiales como forro, cuero y odena. Se ilustran múltiples compartimentos diseñados para tarjetas y billetes, organizados en capas. El forro se ubica en la parte interna, mientras que el cuero constituye la estructura principal. La odena se emplea en áreas específicas para refuerzo.')
              figcaption.mb-3 Fuente: SENA



      
      .row.fondo2.align-items-center.p-lg-4.p-2(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .titulo-sexto.color-secundario.my-lg-0.my-4
            h5 Figura 19. 
            | Cemento de contacto XL
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.mb-0
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-3.col-md-2.col-3.mb-4.my-4
                  img.mb-3.img-a.img-t(src='@/assets/curso/tema1/30.svg', alt='La figura presenta un recipiente que contiene cemento de contacto y tiene un diseño característico de productos adhesivos industriales.')
                .col-lg-9.col-md-10.mb-4
                  p.mb-0 Como referencia se adjunta este cemento de contacto XL que es un adhesivo ampliamente utilizado en diversas aplicaciones. En el mercado, se pueden encontrar múltiples marcas que ofrecen este tipo de producto, cada una con características y especificaciones particulares.
              
      p.mb-4(data-aos="fade-left") Otra pieza que debe preparar es la parte superior, donde debe adherir el refuerzo al cuerpo de cuero por el revés, asegurándose de dejar libre un perímetro de 0.8 cm.

      .row.fondo1.align-items-center.p-2.mb-4(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 20. 
            | Parte superior
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.mb-4
              img.mb-3(src='@/assets/curso/tema1/31.svg', alt='La figura representa un esquema de distribución de materiales para la parte superior de un producto,  relacionado con marroquinería. Se identifican tres tipos de materiales diferenciados por colores: forro (azul), cuero (naranja) y odena (marrón). Se incluyen líneas punteadas amarillas, indicando costuras o uniones, y una flecha roja que señala un punto específico en la estructura. La disposición de los elementos sugiere un proceso de ensamblaje o corte de piezas.')
              figcaption.mb-3 Fuente: SENA
  
      p.mb-4(data-aos="fade-left") En la billetera femenina, hay una pieza denominada “billetera de cierre”. Para confeccionarla, se debe ubicar el cierre entre la pieza de cuero o material, con los dientes orientados hacia el derecho de esta, y el forro, siguiendo la indicación de la figura. A continuación, realizar una costura, asegurando el remate al inicio y al final.
      p.mb-4(data-aos="fade-right") Posteriormente, se debe fijar con pespunte el otro lado del cierre a la tapa costura, previamente doblada 0.5 cm en ambos lados. Luego, unir el cierre con su otra parte, instalando la llave correspondiente. Para terminar esta parte de este conjunto, se adhiere al forro de la billetera o parte interna, asegurándolo con una costura en la parte inferior de ambas piezas, tal como se expone en la figura.


      .row.fondo1.align-items-center.p-2.mb-4(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 21. 
            | Billetera de cierre
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-3.col-md-7.mb-4
              img.mb-3(src='@/assets/curso/tema1/32.svg', alt='La figura expone una billetera con cierre. Se distinguen diferentes materiales mediante colores, donde la parte superior es de tono azul y la inferior en naranja. Un cierre con dientes amarillos y un cursor metálico marca la división entre ambas secciones. En la parte superior derecha se incluyen líneas horizontales que podrían representar ranuras para tarjetas o un compartimento adicional dentro del diseño.')
              figcaption.mb-3 Fuente: SENA
  
      p.mb-4(data-aos="fade-left") Ahora es necesario unir al forro de la billetera el porta documentos, en la parte media derecha con costura en su lado derecho e inferior de forma que la parte inferior pueda ser cubierta con el lado superior del tapacosturas como se expone en la figura.

      .row.fondo1.align-items-center.p-2.mb-5(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
          
          .titulo-sexto.color-secundario
            h5 Figura 22. 
            | Unir al forro de la billetera
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.mb-4
              img.mb-3(src='@/assets/curso/tema1/33.svg', alt='La figura presenta el proceso de unión del forro de una billetera, detallando los materiales involucrados: forro, cuero y odena. Se incluyen representaciones de las piezas individuales organizadas por material y su posterior ensamblaje en la billetera. En el lado derecho, se ilustran dos imágenes que muestran el resultado final tras la integración de los componentes, destacando compartimentos y cierres en la estructura interna.')
              figcaption.mb-3 Fuente: SENA
  
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5.col-md-7.col-9.mb-4
          img.mb-0(src='@/assets/curso/tema1/bl6.png', alt='')
        .col-lg-7.mb-0
          .row.justify-content-center.align-items-center.mb-lg-3.mb-md-4.mb-4
            .col-lg-2
              img.mb-3.d-none.d-lg-block(src='@/assets/curso/tema1/bl7.svg', alt='')
            .col-lg-10
              p.mb-0(data-aos="fade-left") Es el momento de confeccionar el monedero. Primero, doble el lado superior, derecho e izquierdo por el revés, utilizando solución de caucho, asegurándose de abarcar el forro del monedero. Luego, realice un pespunte en el lado superior y proceda a confeccionar los pliegues, montando los puntos de referencia de adentro hacia afuera. A continuación, pespunte la parte inferior.
          .bg7.p-3
            p.mb-0(data-aos="fade-right") Seguidamente, una el primer doblez del monedero al forro de la billetera, cubriendo el lado izquierdo del porta documentos y asegurando que la parte inferior quede oculta bajo el lado superior del tapacosturas. Finalmente, cubra el porta documentos y el monedero con el tapacosturas y realice un pespunte a 2 mm.


      separador
      #t_1_7.titulo-segundo.mb-5
        h2 1.7 Confección del monedero
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .fondo7.p-lg-5.p-3
      
            .tarjetaf.p-lg-4.p-3.mb-0.my-5
              SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")(@mouseover="mostrarIndicador = false")
                .row.justify-content-center.align-items-center.p-0.p-lg-4
                  .col-lg-5
                    p.mb-4(data-aos="fade-left") Para garantizar un acabado de calidad, es importante utilizar materiales resistentes, costuras firmes y un correcto ensamblaje de las piezas. Se recomienda precisión en los cortes y doble refuerzo en las uniones para mayor durabilidad en la confección de artículos como éste.
                  .col-lg-7
                    .bs.p-lg-4.p-3
                      .titulo-sexto.color-secundario.my-lg-4.my-2
                        h5 Figura 23. 
                        | Confección del monedero
                      img.mb-3(src='@/assets/curso/tema1/34.svg', alt='La figura representa el proceso de confección de un monedero, detallando las capas de materiales utilizadas. Se incluyen tres tipos de componentes: forro en color azul, cuero en tono naranja y odena en marrón. A la izquierda, una leyenda identifica cada material. En el centro, una herramienta de corte realiza un recorte sobre una pieza de cuero con forro. A la derecha, se ilustra una sección del monedero ensamblado, incluyendo ranuras para tarjetas y un cierre con costura decorativa.')
                      figcaption.mb-0 Fuente: SENA
                .row.justify-content-center.align-items-center.p-0.p-lg-4
                  .col-lg-5
                    p.mb-4(data-aos="fade-left") Ahora es necesario preparar la tapa del monedero. Para ello, doble la parte exterior de la tapa utilizando solución de caucho, asegurándose de que el doblez sea de 0.5 cm sobre el perímetro del forro. Luego, recorte los sobrantes con un corte diagonal desde el extremo hacia adentro.
                    p.mb-4(data-aos="fade-right") A continuación, realice un pespunte en los laterales y en la parte inferior. El pespunte en el lado superior de la tapa debe efectuarse uniendo esta con el forro, desde el punto donde comienza la boca del monedero hasta donde finaliza.
                  .col-lg-7
                    .bs.p-lg-4.p-3
                      .titulo-sexto.color-secundario.my-lg-4.my-2
                        h5 Figura 24. 
                        | Tapa del monedero
                      img.mb-3(src='@/assets/curso/tema1/35.svg', alt='La figura representa el proceso de ensamblaje de la tapa del monedero, destacando los materiales empleados: forro en color azul, cuero en tono naranja y odena en marrón. Se presentan varias etapas de la construcción, incluyendo piezas individuales y su integración en el diseño final. Se aprecian detalles como bolsillos para tarjetas, costuras decorativas y el mecanismo de cierre. La secuencia de imágenes ilustra la colocación y fijación de la tapa sobre la estructura del monedero.')
                      figcaption.mb-0 Fuente: SENA
                .row.justify-content-center.align-items-center.p-0.p-lg-4
                  .col-lg-5
                    p.mb-4(data-aos="fade-left") ¡Muy bien!, hemos completado con éxito la primera parte. Ahora el forro está listo con las piezas funcionales de la billetera. A continuación, se debe ubicar el broche en el falso superior de manera centrada. Generalmente, se utiliza un broche imán debido a su fácil instalación, asegurándose de que su parte funcional quede en el derecho del material del falso.
                    p.mb-4(data-aos="fade-right") Luego, doble la parte inferior del falso hacia el revés con solución de caucho, respetando un margen de 0.8 cm. Posteriormente, pespunte el borde inferior doblado del falso a la parte superior del forro, que ya contiene las piezas de la billetera.
                  .col-lg-7
                    .bs.p-lg-4.p-3.mb-4
                      .titulo-sexto.color-secundario.my-lg-4.my-2
                        h5 Figura 25. 
                        | Ubicar broche
                      img.mb-3(src='@/assets/curso/tema1/36.svg', alt='La figura ilustra el proceso de ubicación del broche en el monedero, utilizando los materiales identificados en la leyenda: forro en color azul, cuero en tono naranja y odena en marrón. Se presentan tres ilustraciones que muestran la disposición del broche en la tapa del monedero y su integración en el diseño. Se destacan detalles como ranuras para tarjetas, costuras y una cremallera, además de la ubicación precisa del mecanismo de cierre en la solapa del monedero.')
                      figcaption.mb-0 Fuente: SENA
                  p.mb-0(data-aos="fade-left") Una vez lista la parte interna, mida su tamaño con el exterior, considerando el margen de doblez de 0.8 cm. Luego, dóblelas para definir con precisión el punto donde se instalará la otra parte del broche.

      p.mb-4(data-aos="fade-left") Seguidamente, adhiera la parte interna a la parte exterior respetando el margen de 0.8 cm, utilizando solución de caucho. Para lograr un mejor acabado, selle los bordes del cuerpo de la billetera con tinta marroquinera y deje secar. Luego, doble la margen sobre la parte interna, ayudándose con un punzón en las zonas curvas, que en este caso son salientes.
      p.mb-0(data-aos="fade-left") Una vez seco, realice un pespunte a lo largo del perímetro, asegurándose de coser en el centro del margen, con esto, la billetera queda completamente terminada.


      separador
      #t_1_8.titulo-segundo.mb-4
        h2 1.8 Confección de correa

      p.mb-4(data-aos="fade-left") Para la confección de la correa o cinturón, el primer paso consiste en unir ambos lados del cinturón utilizando solución de caucho y asegurar la adhesión golpeando suavemente con un martillo. Luego, realice un pespunte a lo largo del perímetro.
      p.mb-5(data-aos="fade-left") A continuación, debe unir ambos lados del pasador siguiendo el mismo procedimiento y pespunte también su perímetro para reforzar la unión.

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          .fondof.p-lg-5.p-md-4.p-4
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11.col-md-11
                .titulo-sexto.color-secundario
                  h5 Figura 26. 
                  | Correa
                img.mb-3(src='@/assets/curso/tema1/37.svg', alt='La figura ilustra el proceso de confección de la correa, mostrando distintas etapas del corte y ensamblaje. Se representan tiras de material en color marrón, algunas en su forma original y otras con costuras agregadas. También se incluye una herramienta de corte, lo que indica la preparación de las piezas antes del ensamblado final. La secuencia destaca la transformación de las tiras en una correa terminada mediante procesos de corte y costura.')
                figcaption.mb-4 Fuente: SENA
  
                p.mb-4(data-aos="fade-left") Ubique el pasador a 7.5 cm de uno de los extremos del cinturón y únalo con una costura que abarque todo su ancho. A continuación, con la cuchilla, realice una perforación a 4 cm del extremo, asegurándose de que tenga una longitud de 2.5 cm y un ancho de 0.5 cm.
          
                .titulo-sexto.color-secundario
                  h5 Figura 27. 
                  | Ubicar pasador
                img.mb-3(src='@/assets/curso/tema1/38.svg', alt='La figura representa el proceso de ubicación del pasador en la correa. Se presentan dos ilustraciones que muestran diferentes etapas de ensamblaje. En la primera, el pasador se encuentra atravesado en la correa, mientras que en la segunda, se observa fijado con costuras y con la intervención de una herramienta para su ajuste. Se resalta el uso de costuras para asegurar la pieza, lo que contribuye a la estabilidad y funcionalidad del diseño final.')
                figcaption.mb-4 Fuente: SENA
        
                p.mb-4(data-aos="fade-left") Introduzca el cinturón en la hebilla, asegurándose de pasar el palillo de la hebilla a través de la perforación. Notará que es posible cubrir la parte interna del pasador con el doblez del cinturón que envuelve la hebilla. Para fijarlo, se puede utilizar cemento de contacto XL y reforzar con una costura que una el doblez al cuerpo del cinturón. Para una mejor terminación, también es posible remachar la unión.
                
                .bg4.p-4.mb-5
                  .row.justify-content.align-items-center
                    .col-lg-2
                      img.mb-0.img-t.img-a.d-none.d-lg-block(src='@/assets/curso/tema1/39.svg', alt='')
                    .col-lg-10
                      p.mb-2 #[b Nota.] 
                      p.mb-0 Pueden existir establecimientos en su ciudad que ofrecen este servicio.

      
                .titulo-sexto.color-secundario
                  h5 Figura 28. 
                  | Cinturón en la hebilla
      
                img.mb-3(src='@/assets/curso/tema1/40.svg', alt='La figura representa el proceso de fijación del cinturón a la hebilla. Se presentan dos ilustraciones que muestran distintas etapas del ensamblaje. En ambas, la correa de color marrón se sujeta a una hebilla de tono amarillo mediante dobleces y costuras reforzadas. La primera imagen destaca la inserción del extremo de la correa a través de la hebilla y la presencia del pasador, mientras que la segunda muestra la pieza completamente ajustada y asegurada con puntadas visibles.')
                figcaption.mb-4 Fuente: SENA
  
                p.mb-4(data-aos="fade-left") En el extremo opuesto del cinturón, es necesario realizar perforaciones utilizando un sacabocados, comenzando a 8 cm del borde y manteniendo un intervalo de 3 cm entre cada una. Estas perforaciones pueden reforzarse con ojalillos, los cuales pueden colocarse en establecimientos especializados que ofrecen este servicio. Una vez completado este proceso, el cinturón estará listo para su uso.

                .titulo-sexto.color-secundario
                  h5 Figura 29. 
                  | Perforaciones
                img.mb-3(src='@/assets/curso/tema1/41.svg', alt='La figura representa el proceso de perforación en el cinturón. Se observa la correa de color marrón con una hebilla amarilla asegurada mediante costuras. A lo largo de la correa, se han realizado perforaciones alineadas para permitir el ajuste de la hebilla. Un recuadro en tono verde resalta la sección donde se encuentran los orificios, indicando su ubicación y función dentro del diseño del cinturón.')
                figcaption.mb-4 Fuente: SENA

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
