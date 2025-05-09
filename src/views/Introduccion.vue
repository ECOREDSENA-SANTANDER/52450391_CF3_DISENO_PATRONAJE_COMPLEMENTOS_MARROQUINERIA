<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-left") La marroquinería es un arte y una industria que combina diseño, funcionalidad y precisión en la confección de productos de cuero y otros materiales. Para garantizar la calidad y resistencia de estos artículos, es fundamental seguir un proceso técnico estructurado que abarca desde el diseño hasta el ensamblaje final; por tal razón, se presenta una guía paso a paso que facilitará la confección de productos de marroquinería, abordando técnicas clave como el armado, la costura y la aplicación de acabados.
    
    .row.fondoi.align-items-center.p-0.mb-0(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-5

        .row.justify-content-center.align-items-center.mb-0          
          .col-lg-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/DBieMFMYY94?si=GIu5YQ90exwK4frd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Guía práctica de confección en marroquinería
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
