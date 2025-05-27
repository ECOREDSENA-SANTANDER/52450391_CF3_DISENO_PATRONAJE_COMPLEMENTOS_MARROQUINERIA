<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Terminación, empaque e higiene y seguridad industrial

    p.mb-4(data-aos="fade-left") Terminación y empaque es la última fase del proceso de producción, en la que se realiza la limpieza y abrillantado del producto antes de su empaque, ya sea en bolsas o cajas de cartón.
    p.mb-4(data-aos="fade-right") Las principales operaciones en esta etapa incluyen:

    .row.mb-0
      .col-lg-3.col-md-6.mb-0(data-aos="fade-right")
        .overflow-hidden.h-100.bg5.p-4.ps-5
          img.img-a.img-t.mb-4(src='@/assets/curso/tema2/1.png', alt='tema1')
          .row.justify-content-center.mb-3
            .col-10.mb-2
              .bg6.p-1.mb-0
                p.text-center.mb-0.text-white.txp #[b Limpieza]
          p.mb-4.text-center Eliminación de residuos y partículas.
      
      .col-lg-3.col-md-6.mb-0(data-aos="fade-left")
        .overflow-hidden.h-100.bg5.p-4.ps-5
          img.img-a.img-t.mb-4(src='@/assets/curso/tema2/2.png', alt='tema1')
          .row.justify-content-center.mb-3
            .col-10.mb-2
              .bg66.p-1.mb-0.mxt
                p.text-center.mb-0.text-white.txp.ps-1.pe-1 #[b Acondicionamiento] 
          p.mb-4.text-center Verificación de calidad y ajustes finales.
      
      .col-lg-3.col-md-6.mb-0(data-aos="fade-right")
        .overflow-hidden.h-100.bg5.p-4.ps-5
          img.img-a.img-t.mb-4(src='@/assets/curso/tema2/3.png', alt='tema1')
          .row.justify-content-center.mb-3
            .col-10.mb-2
              .bg6.p-1.mb-0
                p.text-center.mb-0.text-white.txp #[b Reparación]
          p.mb-4.text-center Corrección de imperfecciones.
      
      .col-lg-3.col-md-6.mb-0(data-aos="fade-right")
        .overflow-hidden.h-100.bg5.p-4.ps-5
          img.img-a.img-t.mb-4(src='@/assets/curso/tema2/4.png', alt='tema1')
          .row.justify-content-center.mb-3
            .col-10.mb-2
              .bg6.p-1.mb-0
                p.text-center.mb-0.text-white.txp #[b Brillo final] 
          p.mb-4.text-center Aplicación de tratamientos para mejorar la apariencia del producto.

      
    .row.fondo4.align-items-center.p-2.mb-0(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        p.mb-4(data-aos="fade-left") La higiene y seguridad industrial son esenciales para prevenir riesgos de accidentes y enfermedades en el entorno de trabajo. En la industria marroquinera, los operarios están expuestos a diversos peligros debido a la variedad de materiales, insumos, máquinas, equipos y herramientas empleados en la manufactura.
        p.mb-4(data-aos="fade-right") Para garantizar un entorno seguro, es fundamental seguir estas recomendaciones:
        
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
          .col-lg-3.col-md-5.col-6
            img.mb-3(src='@/assets/curso/tema2/5.png', alt='')
          .col-lg-9
            ul.lista-ul
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Mantener orden y limpieza en el puesto de trabajo.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Contar con una iluminación adecuada, ya sea natural o artificial.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Verificar que las herramientas con mango no presenten fisuras.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Asegurar que las herramientas de corte tengan funda de protección y se almacenen correctamente.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Utilizar mesas adecuadas según la operación y las características antropométricas del usuario.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Antes de operar una máquina, comprobar que todos sus componentes estén correctamente ubicados, incluyendo los dispositivos de seguridad.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 No manipular máquinas en funcionamiento.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Utilizar los elementos adecuados para introducir piezas o eliminar residuos en las máquinas.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Desconectar la máquina antes de organizar o limpiar su área.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Realizar o solicitar el mantenimiento de máquinas y herramientas de trabajo.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Consultar las hojas de seguridad antes de manipular tintas, adhesivos o disolventes, y asegurar una ventilación adecuada.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Cerrar y almacenar correctamente los adhesivos, tintes y otros productos después de su uso.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Guardar materiales, insumos y herramientas en estantes o armarios adecuados.
        
        p.mb-4(data-aos="fade-left") Para garantizar la seguridad durante las operaciones, es necesario el uso de elementos de protección personal, que pueden incluir:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12
        SlyderF.custom(columnas="col-lg-4 col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-5
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.my-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/6.png' alt='AvatarTop')
            .bg6.p-2.mb-5
              h4.text-center.text-white.mb-0 Tapabocas N95
          .tarjeta.tarjeta--slyder.b1.p-5
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.my-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/7.png' alt='AvatarTop')
            .bg6.p-2.mb-5
              h4.text-center.text-white.mb-0 Cofia
          .tarjeta.tarjeta--slyder.b1.p-5
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.my-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/8.png' alt='AvatarTop')
            .bg6.p-2.mb-5
              h4.text-center.text-white.mb-0 Overol o bata
          .tarjeta.tarjeta--slyder.b1.p-5
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.my-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/9.png' alt='AvatarTop')
            .bg6.p-2.mb-5
              h4.text-center.text-white.mb-0 Monogafas
          .tarjeta.tarjeta--slyder.b1.p-5
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.my-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/10.png' alt='AvatarTop')
            .bg6.p-2.mb-5
              h4.text-center.text-white.mb-0 Guantes de cirugía
          .tarjeta.tarjeta--slyder.b1.p-5
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.my-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/11.png' alt='AvatarTop')
            .bg6.p-2.mb-5
              h4.text-center.text-white.mb-0 Botas de seguridad

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .bg4.p-lg-5.p-4
          p.mb-0 Es fundamental seguir estas prácticas seguras y recordar que cada operario es responsable de su seguridad y la de su entorno. Además, se deben adoptar posturas adecuadas en el puesto de trabajo y evitar el uso de accesorios como pulseras o anillos que puedan representar un riesgo. El cabello debe permanecer recogido en todo momento, y es imprescindible utilizar los elementos de seguridad correspondientes según la tarea a realizar.
    

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/fin.png', alt='')
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
