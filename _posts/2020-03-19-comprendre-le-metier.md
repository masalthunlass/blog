---
title: "Comprendre le métier quand on est développeur-se"
date: 2020-03-19
author: "Mathilde Salthun-Lassalle"
---
Nous autres, développeur-se-s, avons le savoir-faire technique pour élaborer un logiciel. Nous avons aussi souvent la responsabilité de construire le bon outil de travail pour nos clients, qui exercent un tout autre métier.


# Le lien fort entre logiciel et métier


Beaucoup de professions utilisent un logiciel quotidiennement. Ce logiciel est tellement étroitement lié à leur activité, qu’il peut même transformer les processus métier plutôt que de les refléter.


Le logiciel impose des restrictions, telles que le respect  d’un ordre d’actions lors de la constitution d’un dossier, ou l’interdiction du téléchargement d’un document hors d’un certain format. Il peut être un progiciel, trop générique, qui ne prend pas toujours en compte une des spécificités d’un métier.  Il peut rendre impossibles des opérations illégales ou frauduleuses, ou bien au contraire, une anomalie dans son code peut être exploitée par les utilisateurs pour réaliser de telles opérations. Il peut évoluer moins vite que les règles et les lois du métier auquel il rend service. On peut parler d’**héritage logiciel**.


À chaque nouvelle version d’un logiciel, les utilisateurs vont avoir tendance à comparer avec l’ancien système. Dans le même temps, lorsqu’ils parlent  de leur métier, ils peuvent avoir tendance à le faire en décrivant les opérations faites dans l’outil. Enfin, la volonté de changer de logiciel peut être la matérialisation de la volonté de changer les processus d’un métier.


# Pourquoi est-ce difficile de faire dialoguer métier et technique ?


Voici des causes que l’on peut observer en projet :



* **“On a le droit de se parler”**, “Nous sommes une même équipe / dans le même camp”…Ce sont des idées qui ne sont pas familières à tout le monde.  Une différence de vision, des préjugés, des habitudes de travail, un vocabulaire exclusif ou même encore un code vestimentaire strict, font que la question inverse se pose parfois  “comment faire pour que le métier s’intéresse aux développeurs ?”

* **Il faut des années pour comprendre un métier**, or le besoin d’un logiciel est pressant. Il y a la volonté d’une solution rapide clé en main dans laquelle on ne va pas investir de temps pour la construire.

* **Une partie de la connaissance du métier  a pu être perdue** suite à un départ. Il y a bien le logiciel mais personne ne sait s’en servir complètement. 

* **Les utilisateurs peuvent être éloignés géographiquement des développeurs**, absents dans les étapes du projet ou ne pas parler la même langue.

* **Les utilisateurs pensent qu’ils doivent imaginent la solution aux problèmes** mais ne pensent pas à expliquer le problème aux techniques afin de profiter de leur expertise. Ou bien la situation inverse : les techniques pensent qu’ils vont construire seuls la solution sans tenir compte des différences d’attentes du métier pour les fonctionnalités.


# Des pistes

* **Emprunter un pont plutôt qu’un ferry**


Selon Martin Fowler et Dan North dans leur conférence the yawning crevasse of doom, il y a deux styles de communication possible entre les techniques et les représentants du métier : au moyen d’un ferry, autrement dit,  un intermédiaire qui joue le rôle de messager (ou d’interprète) entre les deux parties, ou au moyen d’un pont, c’est-à-dire avoir recours à une communication directe. Ils ont une nette préférence pour la seconde option et préconisent (tout comme le mouvement agile avant eux) la colocation des intervenants du projet quel que soit leur métier. Ils estiment que la construction du pont s’avère plus ou moins facile selon la perception que l’on en a. Par exemple, si vous êtes du côté métier et que vous pensez que ce sera difficile, alors vous agirez en créant des spécifications précises ayant valeur d’ordre à l’attention des développeurs avec l’idée qu’il suffira aux développeurs de les suivre pour obtenir le bon logiciel. Au contraire, si vous pensez que ce sera facile, alors vous les inviterez aux discussions, vous serez sereins quant à la possibilité de faire évoluer ce code plus tard lorsque votre vision de cette fonctionnalité sera plus mûre et vous n’hésiterez pas à faire des suggestions.

* **Se mettre en immersion**
  * Certaines entreprises clientes permettent  à l’équipe de leur projet logiciel en cours de passer un moment (voire une journée) en immersion au côté des futurs utilisateurs dans l’exercice de leurs fonctions quotidiennes. C’est une bonne opportunité pour les développeurs de capter un état d’esprit et d’en profiter pour noter le vocabulaire spécifique  entendu afin de s’en resservir dans le logiciel. 
  * Si l’entreprise n’organise pas de tels événements, il est peut être envisageable d’observer un seul utilisateur, tel un ethnographe en mission. 
  * _Faire une journée de support_, c’est-à-dire d’assistance aux utilisateurs qui rencontrent des difficultés à utiliser le logiciel, peut être aussi un moyen de se faire une idée des réalités de l’utilisation du logiciel.

* **Confronter les visions**
  * _Event storming_ : cette méthodologie invite tout le monde à s’interroger sur les processus métier en oubliant la technologie (les notions d’écran, de base de données ou encore d’apis sont proscrites). À l’aide d’un formalisme spécifique, on confronte ensemble sa compréhension des événements métier, de leurs déclencheurs et de leurs conséquences. Cela donne un schéma des opérations du métier et un point de départ pour construire l’architecture du logiciel.
  * Si vous ne parlez pas la même langue (comprendre le même “langage métier”), passez par des schémas. Il peut être bénéfique de se forcer à dessiner.
  * _Demander du feedback_ : Il existe divers moyens d’obtenir du feedback de la part des utilisateurs.  Un moyen efficace est de montrer du concret, comme un prototype, un POC (proof of concept, preuve de concept), une version simplifiée d’une fonctionnalité élaborée à partir de la compréhension des techniques pour en discuter avec les experts du métier. Cela amène souvent immédiatement d’autres questions qui vont donner lieu à une mise à jour du prototype. Ainsi des cycles d’aller-retours peuvent se poursuivre jusqu’à obtenir le produit satisfaisant.  Une autre méthode consiste à livrer un produit pour une poignée d’utilisateurs seulement et d’observer leur utilisation. Ont-il l’usage attendu du logiciel ? Quelles fonctionnalités sont les plus utiles ? Une interface peut aussi leur permettre de commenter  leur expérience sur le logiciel.

* **S’appuyer sur des exemples**
  * _Behaviour-Driven Design (BDD)_ : cette méthodologie comporte une réunion “Three amigos” (3 amis,  développeur-se, représentant-e métier et testeur-se) ayant pour objectif de définir ensemble des scénarios du comportement du logiciel afin d’implémenter des tests automatiques. Les exemples sont le point de départ de l’écriture de ces scénarios qui à partir de données conformes à la réalité rendent compte des règles métier à suivre. Le formalisme utilisé nommé gherkin donne un cadre à suivre :
  
```
 given (étant donné) un état initial
 when (quand) cette action se produit
 then(alors) il est obtenu ce résultat.
 ```

  
  * _Example mapping_ : Cet exercice invite à définir au moins un exemple par règle métier. Cela éveille des questions parmi les participants qui les notent et challengent les règles énoncées. La finalité peut être de trouver le bon découpage et les critères d’acceptation d’une fonctionnalité.

* **Se former**
    * Lire ou  regarder des vidéos sur le domaine
    * Prendre des cours sur le métier

* **Garder le langage métier dans le code**
  * On m’a raconté l’anecdote suivante. Dans une entreprise où la connaissance d’une partie du métier avait été perdue, une développeuse a travaillé en binôme avec un expert du domaine pour lire le code du logiciel de l’entreprise. La développeuse a extrait les règles métier qui ont été ensuite validées par l’expert métier. Ainsi la connaissance a été retrouvée.
  * Aligner tests unitaires écrits par les techniques et critères d’acceptation définis par le métier peut être se révéler une bonne stratégie pour le futur du logiciel. On s’assure non seulement de l’implémentation des bonnes règles mais aussi qu’elle seront comprises par n’importe quel lecteur à l’avenir ouvrant la voie à la possibilité de faire rapidement et de manière sûre des changements dans le code. Faire lire le code des tests unitaires à un fonctionnel peut être fait lorsqu’un développeur veut s’assurer qu’il écrit bien les bons tests.
  * D’après D. North et M. Fowler, le langage de la programmation affecte la communication. Il ne devrait pas y avoir de traduction à faire entre le  vocabulaire des utilisateurs (les concepts du métier) et le vocabulaire du logiciel (le nom des abstractions du modèle). [note : ils sont anglophones. La question de coder ou non dans une autre langue que l’anglais est un débat sans fin]. Ils alertent aussi sur le fait qu’un modèle ne doit pas être trop gros car il deviendrait trop abstrait et difficile à appréhender. Il est idéal qu’il soit découpé en petits modèles de différents contextes.


# pour aller plus loin

* [Dan North et Martin Fowler, the yawning crevasse of doom (info Q)](https://www.infoq.com/presentations/Fowler-North-Crevasse-of-Doom/)
* [L’event storming est expliqué en quelques mots par un Arollien (avec d’autres concepts)](https://www.arolla.fr/ncrafts-2015-du-craftsmanship-du-f-de-la-passion/)
* [L’event storming expliqué par son créateur Alberto Brandolini](https://ziobrando.blogspot.com/2013/11/introducing-event-storming.html)
* [Le BDD expliqué par un Arollien](https://www.arolla.fr/le-bdd-quest-ce-que-cest/)
* [L’example mapping expliqué](https://blog.myagilepartner.fr/index.php/2019/04/26/example-mapping/)
