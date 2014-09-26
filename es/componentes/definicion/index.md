---
layout: inner-page-es
title: Definición de un Componente Poplus
---
<!-- /es/componentes/definicion/index.md -->

Una de las cosas más relevantes que ha pasado en Poplus es el acuerdo sobre las características que un programa informatico debe tener antes de ser llamado un componente Poplus.

Esta página despliega una primera versión en la que participaron más de veinte personas de distintas organizaciones. Si quieres debatir al respecto o mejorarla, por favor únete a nuestro mailing list y plantea tus inquietudes.


## Las 7 características de un componente Poplus

Un componente Poplus tiene 7 características. Si tu código tiene todas estas características, entonces ¡Felicitaciones! Es un componente digno del sello de aprobación Poplus.

<ul class="tick-list">
    <li> Mi código ayuda a sitios Cívico / Democráticos.</li>
    <li>Resuelve un problema específico.</li>
    <li>Dialoga con otros componentes Poplus</li>
    <li>Funciona en cualquier plataforma</li>
    <li>Funciona en cualquier país</li>
    <li> Es un software gratis y de código abierto</li>
    <li>Tiene una API estable y documentada</li>
</ul>

##  ¿Qué significa esto?

### Cívico / Democrático

**Los componentes trabajan en páginas que empoderan a las personas en sus vidas cívicas o democráticas.**

Las páginas cívicas o democráticas incluyen sitios que:

* Ayudan a gente común y corriente a entender lo que está pasando en sus parlamentos o gobiernos.
* Permiten a ciudadanos contactar a personas y/o organizaciones que tienen un efecto en sus vidas.
* Le entregan a las personas el poder para ejercer cambio en sus comunidades.
* Facilitan la transparencia, y permiten compartir información.
* Generalmente estos sitios no son ni comerciales o político-partidistas, y son abiertos a todas las personas.
* Tu componente puede trabajar bien en sitios que no cumplen con lo anterior, pero también en sitios que sí.

### Resuelve un solo problema.

**Cada componente hace solamente una cosa.**

Tu componente debería solucionar un problema para personas con sitios cívicos o democráticos. Si hace más de una cosa entonces deberías dividirlo en dos componentes.

Por ejemplo, existen componentes que modelan leyes. Hay algunos que modelan personas, votos, y discursos. Hay componentes que ayudan a las personas a contactar políticos, y otros que ayudan a que se envíen solicitudes de información.

Cada uno de estos componentes puede trabajar en conjunto con otros componentes, o bien de manera independiente.

Tu componente puede solucionar problemas obvios, como el almacenamiento de nombres y cargos de políticos. Debe hacerlo con muchos cuidado, e idealmente debe estar creado  la experiencia: tu propia experiencia o la experiencia de quienes la van a usar. 

También puede ayudar con problemas más pequeños, cosas que la mayoría de las personas quizás antes ni siquiera había pensado, como el hecho de que muchas veces los políticos cambian sus nombres. Gracias a tu componente, las personas no tendrán que pensar al respecto.


### Componible

**Que dialoguen con otros componentes.**

Este es uno de los elementos clave de un componente (y de donde proviene el término componente) - debe poder conectarse con otros componentes. Los componentes deben entenderse como piezas de bloques: puedes ponerlos juntos para hacer algo más grande. 

Sitios autónomos, o las plataformas para construirlas (como Alaveteli) son pedazos de software muy valiosos, pero no son componentes.

Las personas deben poder utilizar tus componentes en cualquier sitio web, sin importar qué plataforma utilizan.

Tus componentes pueden ser escritos en cualquier lenguaje o infraestructura - eso es porque la interacción debe ser sobre una API (ver más abajo), por lo que el código subyacente no es tan importante para la persona implementádolo. Escribe tu componente en el lenguaje que te sea más cómodo.

Idealmente, tu componente puede ser ofrecido en la nube o en una versión SAAS: eso lo hace muy fácil para que las personas lo usen. Al mismo tiempo, debería ser relativamente fácil de instalar, configurar y deployar, pues muchos usuarios eventualmente querrán hacer su propia versión local.

Docker es una manera muy simple de hacer esto muy fácil.

### Independencia de País

**Los componentes funcionan en todas partes.**

Poplus fue creado para organizaciones en todas partes pudieran compartir y colaborar en código. Existimos para que las personas no tengan que continuamente reinventar la rueda, o bien escribir un nuevo código cuando ese código ya existe.

Por lo mismo, tu componente debe ser deployable en cualquier parte del mundo. Esto significa el mínimo número de supuestos sobre modelos políticos y estructura. Significa que la interfaz y la data deberían funcionar en otros idiomas (piensa en árabe o ruso, no inglés y español), y preferiblemente en varios lenguajes simultáneamente.

Reconocemos que no es fácil modelar todos los sistemas del mundo. Si no puedes con todo lo anterior guíate por lo siguiente: debería ser más fácil adaptar el componente a un país completamente distinto, que empezar desde cero.

En muchos casos valdrá la pena trabajar en grupos en otros países, en un conjunto de datos, antes de comenzar a desarrollar un código. La comunidad Poplus te puede ayudar a hacer esas conexiones.

### Libre, de código abierto

**Tu componente debe tener el espíritu del código abierto.**

Cuando hablamos de código abierto no hablamos que tu componente debe tener una licencia de código abierto (aunque por supuesto eso es esencial).

Desarrollar un componente significa ser abierto en todos los sentidos. Tu código debe estar en Github, o en un repositorio de código abierto similar, con un issue tracker público donde cualquiera pueda contribuir.

Debes comprometerte a mantener tu componente responsablemente y responsivamente, y si te das cuenta que ya no tienes la capacidad para seguir haciéndolo, entonces deberás prepararlo para traspasar la responsabilidad a alguien más.

### Estable, documentado

**Los usuarios de la API deberían poder confiar en componentes.**

Para que los componentes puedan operar juntos, todas las funcionalidades deben ser expuestas sobre APIs. Estas APIs deben estar muy bien documentadas para que cualquiera pueda usarlas, y para que futuros colaboradores puedan trabajar con ellas también

Recomendamos una API tipo-REST sobre HTTP. Si no sabes lo que esto significa tu desarrollador sí debería (o grita por ayuda en la lista de correo).

Como otros sitios y otros componentes dependerán de esta, es esencial que la API sea estable. Nuevos puntos de entrada pueden ser agregados, pero los existentes no deberían desaparecer, o cambiar su significado, sin un cambio de versión o pasar por un ciclo de obsolescencia apropiado.

## ¿Cumples con los 7 puntos?

Maravilloso. Has creado un componente Poplus. Por favor cuéntanos y te ayudaremos a comunicarlo con personas que puedan usarlo.

### ¿Cumples con 4?¿Necesitas ayuda para llegar a los 7?

Deja un mensajito en nuestra lista de correos - hay desarrolladores amistosos que te pueden ayudar con preguntas o problemas.
