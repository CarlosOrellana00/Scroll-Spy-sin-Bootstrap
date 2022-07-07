const encabezados = document.querySelectorAll('.contenedor .encabezado');
const enlaces = document.querySelectorAll('#enlaces a');

const observer = new IntersectionObserver((entradas, observador) => {
	entradas.forEach(entrada => {
    // mostrar elemento en pantalla
		if(entrada.isIntersecting){
      /* marcar "id" del elemento en pantalla
         mostar tambien la seccion en la barra de URL*/
			const id = '#' + entrada.target.id;
			history.pushState({}, entrada.target.innetText, id);
      /*
      recorrer todos los enlaces, para que por cada enlace
      recorra la función
      */
			enlaces.forEach(enlace => {
        /* remover el activo en la etiqueta nav
        al salir de la seccion*/
				enlace.classList.remove('activo');

				const href = enlace.attributes.href.nodeValue;
				if(href === id){
					enlace.classList.add('activo');
				}
			});
		}
	});
}, {
	threshold: 1,
  /* rootmargin: estable los margenes de la pantalla
  -50% = la mitad de la pantalla*/
	rootMargin: '0px 0px -50% 0px'
});

// para que recorra y obserbe los encabezados
encabezados.forEach(encabezado => {
	observer.observe(encabezado);
});