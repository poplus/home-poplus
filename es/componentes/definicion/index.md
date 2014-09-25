---
layout: inner-page-es
title: Definición de un Componente Poplus
---

Un des évènements les plus importants ayant eu lieu à PoplusCon fût l'accord concernant les caractéristiques qu'une section de code doit posséder avant de pouvoir être appelé un élément Poplus.

Cette page représente une spécification de v.01, comme convenu par une vingtaine de personnes provenant de diverses organisations qui se trouvaient dans la salle à l'époque. Si vous souhaitez en débattre ou l’améliorer, veuillez-vous joindre à la liste de courrier et nous dire ce qui devrait être différent dans la prochaine version.

## Sept choses qui font un élément Poplus

Si votre code possède les caractéristiques de chacun des points ci-dessous, félicitations, il s’agit d’un élément éligible pour obtenir le sceau d'approbation Poplus.

<ul class="tick-list">
    <li>Mon code sert les sites web à fonction civique/démocratique</li>
    <li>Il résout un problème unique</li>
    <li>Il est possible de l’assembler avec d’autres éléments Poplus</li>
    <li>Il est indifférent de la plate-forme l’accueillant</li>
    <li>Il est indifférent au pays l’accueillant</li>
    <li>Il s’agit d’un logiciel libre et gratuit</li>
    <li>Il possède une API stable et documentée</li>
</ul>

## Qu’est-ce que cela signifie ?

### À fonction civique/démocratique

**Les éléments fonctionnent sur ​​des sites web qui encouragent les gens à contribuer activement dans leur vie de citoyens ou dans leur devoir démocratique.**

Les sites web à fonction civique démocratique comprennent les sites qui :

aide les gens ordinaires à comprendre ce qui se passe dans leurs parlements ou leurs organes gouvernementaux,

* permet aux citoyens de communiquer avec les personnes et les organisations qui affectent leur vie,
* donner aux gens le pouvoir d'effectuer des changements dans leur propre communauté,
* mettre en évidence la corruption et permettre aux gens de faire quelque chose à ce sujet,
* faciliter la transparence et permettre le partage d'informations,
* En règle générale, ces sites sont non commerciaux, non partisans et ouverts à tous.

Votre élément peut très bien fonctionner sur des sites qui ne correspondent pas à ces lignes directrices, mais il doit aussi fonctionner sur des sites comparables à ceux précisés.

### Il résout un problème unique

**Chaque élément ne fait qu'une seule chose.**

Votre élément ne doit résoudre qu’un seul problème au bénéfice des personnes qui administrent des sites web à fonction civiques ou démocratiques. S’il est destiné à résoudre plusieurs problèmes, vous devez le diviser en différents éléments.

Par exemple, il y a des éléments qui élaborent des projets de lois. Il y a ceux qui cherchent à influencer, ceux destinés aux votes et ceux pour les discours. Il existe des éléments qui permettent aux gens de communiquer avec les politiciens, d'autres qui leur permettent d'envoyer des demandes de renseignements.

Chacun de ces éléments peut fonctionner avec d’autres ou de façon indépendante.

Votre élément doit avoir pour objet de résoudre des problèmes évidents, comme l'enregistrement des noms et des fonctions des politiciens. Cela devra être fait de façon minutieuse et, idéalement, cela devrait être basé sur l'expérience : votre propre expérience ou les expériences de ceux qui vont l'utiliser.

De plus, il peut aider à résoudre des questions précises auxquelles la plupart des gens ne penseraient jamais : comme le fait que les politiciens changent parfois leurs noms. Grâce à votre élément, les gens n’auront jamais besoin d'y penser !

### Associable

**Votre élément fonctionne avec d’autres.**

Il s’agit là d’un des éléments clés d'un élément (et c'est de cette caractéristique que l’élément a hérité de son nom). Il doit pouvoir fonctionner avec tous les autres éléments. Les éléments sont comme des blocs de construction : vous pouvez les mettre ensemble pour créer quelque chose de plus grand.

Les sites autonomes ou les plate-formes destinées à les créer (comme Alaveteli) sont des pièces de logiciels dotées d’une grande valeur, mais ne sont pas des éléments.

### Indifférent à la plateforme l’accueillant

**Les gens devraient être en mesure d'utiliser votre élément Poplus sur tout site web, peu importe la plateforme qu'ils utilisent.**

Votre élément peut être écrit dans n'importe quelle langage ou structure de programmation. L'interaction devrait être réalisée selon les API (voir ci-dessous) afin que le code sous-jacent ne soit pas si important pour la personne qui le met en œuvre. Créez votre élément dans le langage avec lequel vous êtes le plus à l'aise.

Idéalement, votre élément sera disponible en Cloud ou en version SAAS, ce qui le rend facilement utilisable. Parallèlement, il devrait être relativement facile à installer, à configurer et à mettre en marche, étant donné que de nombreux utilisateurs finiront par vouloir gérer leur propre version hébergée localement.

Docker est un moyen simple de réaliser cela.

### Indifférent du pays l’accueillant

**L’élément fonctionne partout.**

Poplus a été créé afin que les organisations du monde entier puissent partager des codes et ainsi collaborer. Nous existons afin que les gens n’aient pas à réinventer systématiquement la roue ou, autrement dit, à écrire de nouveaux codes alors qu’ils peuvent utiliser les codes existants.

Ainsi, dans la mesure du possible, il doit être possible de faire fonctionner votre élément partout dans le monde. Cela suppose émettre un minimum d'hypothèses concernant les modèles et les structures politiques. Cela signifie aussi que l'interface et les données doivent fonctionner dans d'autres langues (pensez à l’arabe et au russe – pas seulement à l’anglais et à l’espagnol) et, de préférence, en plusieurs langues simultanément.

Nous reconnaissons qu'il n'est pas facile de modéliser tous les systèmes du monde afin qu’ils soient prêts à l’emploi. Si vous ne pouvez pas gérer tout ce qui précède, essayez de réfléchir à ce qui suit : il devrait être plus simple d'adapter l’élément à un pays complètement différent que de repartir de zéro. 

Dans de nombreux cas, il sera intéressant de travailler avec des groupes en provenance d’autres pays sur une norme de données appropriée avant même de commencer à écrire le code. La communauté Poplus peut vous aider à créer des liens intéressants.

### Source libre et gratuite

**Votre élément doit respecter l'esprit de l’Open Source**

Lorsque nous parlons de l'Open Source ou de source libre, nous ne voulons pas seulement dire que votre élément doit avoir une licence Open Source (même si cette partie est essentielle).

Le fait de développer un élément suppose d’être libre dans tous les sens de terme. Ainsi, votre code doit se retrouver sur GitHub ou sur un référentiel équivalent de source libre, avec un tracker publique auquel n'importe qui peut contribuer.

Vous devriez vous engager à l'entretien de votre élément de façon responsable tout en restant réactif. Si vous trouvez que vous n'êtes plus capable de le faire, vous devez être prêt à remettre cette tâche à quelqu'un qui le peut.

### Stable, documenté

**Les utilisateurs de l'API devraient être en mesure de s'appuyer sur les éléments**

Afin que les éléments puissent fonctionner ensemble, toutes les fonctionnalités devraient être exposées sur les API. Ces API doivent être très bien documentés, de sorte que tout le monde puisse les utiliser et que les futurs contributeurs puissent y travailler.

Nous recommandons une API telle que REST-like HTTP. Si vous ne savez pas ce que cela signifie, vos développeurs doivent le savoir (sinon, faites-nous signe via notre liste de diffusion et nous vous aiderons).

Sachant que d'autres sites et éléments s'appuieront sur lui, il est essentiel que l'API soit stable. De nouveaux critères peuvent être ajoutés, mais ceux qui existent déjà ne devraient en aucun cas disparaître, ni changer de sens, sans procéder à un changement de version ou passer par un cycle de dévalorisation approprié.

## Vous avez coché les sept cases ?

Magnifique : vous avez créé un élément Poplus. Veuillez nous en informer et nous vous aiderons à faire passer l’information aux personnes qui souhaitent l'utiliser.

### Avez-vous besoin d'aide pour y arriver ?

Laissez-nous un message sur la [liste de diffusion de Poplus](https://groups.google.com/forum/#!forum/poplus) : il y existe beaucoup de codeurs sympathiques qui peuvent vous aider avec vos questions ou vos problèmes.
