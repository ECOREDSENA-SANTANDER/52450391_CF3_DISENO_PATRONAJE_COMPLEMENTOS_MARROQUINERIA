<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La marroquinería es un arte y oficio que combina técnicas de confección con creatividad y precisión para la elaboración de productos en cuero; la presente guía práctica, ofrece un enfoque detallado sobre el proceso de confección de artículos de marroquinería, desde la comprensión de conceptos clave hasta la finalización y seguridad en el trabajo. A través de un esquema estructurado, esta guía permite la adquisición de competencias técnicas esenciales para garantizar productos funcionales y estéticamente atractivos. Se abordan aspectos como la confección de bolsillos, la elaboración de bolsos y otros artículos en cuero, y las medidas necesarias para el acabado y la seguridad industrial.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        .bg1.p-4
          figure
            img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta cinco secciones: conceptos clave en marroquinería, confección de bolsillos, adquisición de competencias técnicas, confección de bolsos y artículos en cuero, y terminación y seguridad industrial. Incluye pasos detallados para la elaboración de bolsillos, tipos de bolsos y medidas de seguridad en el trabajo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
