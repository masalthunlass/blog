---
title: "La vision Software Craftsmanship du métier de développeur"
date: 2019-03-05
author: "Mathilde Salthun-Lassalle"
---

_Selon l'Office national d'information sur les enseignements et les professions, un-e développeur-se est
un-e « Expert-e des langages informatiques [qui] traduit la demande d'un client en lignes de code
informatique. La révolution numérique le [place] parmi les professionnel-le-s les plus recherché-e-s, surtout s'il-elle sait
s'adapter et élargir ses compétences. »[1]._ Cette définition montre le haut niveau d'exigences du
métier puisqu'il est attendu à la fois de l'expertise et un large éventail de compétences.
Si la majorité des développeurs en France ont suivi de longues études (master universitaire ou école
d'ingénieurs) ou un cursus spécialisé (DUT), cette formation initiale ne suffira pas pour répondre à de
telles exigences. Le secteur informatique est en évolution constante à un rythme soutenu: les
technologies et les pratiques sont en permanence questionnées, émergent ou sont abandonnées. Dans
un tel contexte en mouvement, quels standards suivre ? Quelles stratégies adopter pour rester à jour ?
D'autre part, elle questionne de manière implicite le rôle du développeur. S'il doit savoir s'adapter,
n'est-il pour autant qu'un simple exécutant des demandes du client? Un traducteur des demandes en
lignes de code ? Son expertise ne se borne-t-elle qu'à la connaissance des langages de programmation ?
## L'agilité dans le développement logiciel
Un cycle de développement démarre traditionnellement par une définition des besoins, suivie de la
réalisation du logiciel, des tests et de la livraison en production. La tendance dominante en matière
de gestion de projets a d'abord été un long et souvent unique cycle[2]. Dans ce schéma de projet, bien
que le développeur et le client n'ont que peu (ou trop tardivement) échangé sur leurs expertises et
leurs visions du projet, la définition des besoins a valeur de contrat. Par la suite, la naissance et la
large adoption des méthodes Agile a marqué une rupture, en instaurant des cycles itératifs courts [3].
Cette approche aspire à créer les conditions pour livrer rapidement et régulièrement des
fonctionnalités à grande valeur ajoutée en encourageant les feedbacks et en autorisant les
redéfinitions de besoins fréquentes. Pensées en réponse aux travers du cycle en V, les valeurs
défendues dans le manifeste agile [4] redéfinissent les priorités de la manière suivante:
1. Un logiciel opérationnel plus qu'une documentation exhaustive.
2. L'adaptation au changement plus que le suivi d'un plan.
3. Les individus et leurs interactions plus que les processus et les outils.
4. La collaboration avec les clients plus que la négociation contractuelle.

## Élever le niveau du développement logiciel
   Le software craftsmanship s'apparente à une culture ou un état d'esprit dont les valeurs sont le
   prolongement des valeurs agiles pour en prévenir les dérives ou pallier aux manquements. Il est
   décrit pour la première fois dans le livre de Robert C. Martin[S] et a aussi son manifeste[6]. Il
   rassemble des développeurs qui souhaitent élever le niveau du développement professionnel de logiciel. Ce
   qu'il faut comprendre par élever le niveau c'est pratiquer et répandre le savoir-faire à la manière des
   artisans ( craftsmanship signifie artisanat) en orientant ses efforts sur quatre axes indispensables :
# 1 . Produire des logiciels bien conçus et pas seulement opérationnels
   **pourquoi ?** Un client attend de son logiciel qu'il fasse le travail et soit livré dans les temps. Ces deux
   impératifs ne doivent pas éclipser la considération pour la qualité. En effet, maintenir une bonne
   qualité de code est stratégiquement le meilleur investissement. Une mauvaise qualité de code mènera
   à des difficultés de maintenance et d'évolution pouvant aller jusqu'à des retards de livraison, un coût
   plus élevé, ou même un abandon de projet. De plus, produire un mauvais code a un impact
   psychologique sur le développeur en terme de satisfaction sur son travail et entraîne une défiance vis
   à vis du métier du point de vue des autres intervenants du projet.

   **comment ?** Pour parvenir à maintenir la qualité, le mouvement préconise tout d'abord de se former.
   En restant curieux envers les nouveautés technologiques, on recherche les meilleurs outils et on
   s'entraîne à les maîtriser. A contre-pied du mythe du développeur- génie de l'informatique, il
   encourage à rester humble sur son expertise pour ne pas surestimer ses capacités. En ne se sentant
   pas tout-puissant, mais humain ayant droit à l'erreur, il convient d'agir en faveur de la prévention des
   défauts. L'accent est fortement mis sur les tests automatisés (TDD, BDD .. ) dans l'idée de se donner les
   moyens au plus tôt de garantir la qualité de son travail.
# 2. Ajouter de la valeur et pas seulement s'adapter aux changements
   **pourquoi ?** La valeur d'une fonctionnalité est définie par le client en fonction de l'importance du
   service rendu. Le rapport entre la valeur fonctionnelle d'un produit et son coût de conception se doit
   de rester raisonnable. Les évolutions successives fréquentes dans la méthode agile doivent se faire
   dans cette optique.

   **comment ?** Le développeur, loin d'être uniquement centré sur la technique qui le passionne, utilise
   son expertise pour challenger les besoins fonctionnels afin de faire émerger les meilleures solutions
   ou encore d'identifier continuellement au plus tôt et de traiter les facteurs de ralentissement ou de
   blocage du projet. Là encore, les bonnes pratiques de programmation lui servent de guide ; comme
   les principes KISS (keep it simple stupid) ou YAGNI (you ain't gonna need it), visant à ne s'attacher à
   garder le code le plus simple possible et à ne concevoir que le minimum nécessaire, évitant l'ajout de
   code superflu qui servirait« au cas où».
# 3 . Maintenir une communauté de professionnels et pas seulement des individus et leurs interactions 
   **pourquoi ?** Le métier de développeur, contrairement à une idée reçue très répandue, est
   indéniablement un métier d'équipe où la collaboration est plus efficace que la compétition. Une
   équipe est composée de membres de tous niveaux, toutes expériences, toutes formations et de toutes opinions responsables des mêmes lignes de code. La cohésion et le partage de connaissances
   contribuent à créer un contexte favorable indispensable à la création d'un bon logiciel, plus que les
   compétences personnelles de chacun.

   **comment ?** Les craftsmen sont invités à échanger et s'entraîner sur les meilleures pratiques lors
   d'ateliers (coding dojo ... ), à donner un avis en toute bienveillance sur le code des collègues (revue de
   code) ou à ré-écrire du code existant pour l'améliorer (refactoring). Il est courant de travailler en
   binôme (pair programming) sur le même poste, l'un ayant le rôle d'exécutant, l'autre ayant un regard
   sur le code produit.
# 4 . Construire des partenariats productifs et pas seulement collaborer avec les clients
   **pourquoi ?** La raison d'être du logiciel est le service qu'il rend au client. Cet axe encourage à
   construire un vrai partenariat sain avec le client en optant pour la transparence sur le déroulement du
   projet et sur les difficultés rencontrées.

   **comment ?** Il faut s'astreindre à ne jamais s'engager sur des réalisations ou des délais qui ne peuvent
   raisonnablement être tenus en surestimant les capacités de l'équipe dans le but de gagner un marché
   ou l'estime d'un client. Autrement dit, savoir dire non au client lorsque cela compromet le projet.
   Dans le même temps, des efforts doivent être faits par l'équipe technique pour comprendre le métier,
   du client, au regard de la nécessité de comprendre le problème avant de proposer la bonne solution.
   Chaque partie devrait s'appuyer sur l'expertise de l'autre. Dans ce contexte, la confiance mutuelle
   peut émerger.

## Le rôle du développeur
   Dans ce manifeste, il y a la ré-affirmation du rôle que le développeur doit jouer dans la conception
   d'un bon produit logiciel. La formation des développeurs est envisagée comme un processus continu
   au sein d'une communauté où chacun est à la fois maître et élève. Cet échange lui permet de se
   maintenir à jour, de maintenir la cohésion avec ses pairs et peut être la condition pour aller vers une
   vision partagée du code au sein de l'équipe. Cependant, il vise l'excellence sans s'enfermer dans son
   domaine. Son expertise dépasse la seule connaissance de la programmation, elle prend en compte les
   pratiques de développement, les enjeux de la gestion du projet ou encore la connaissance du métier
   du client. Les développeurs ne sont pas dans une attitude de flexibilité passive face aux demandes du
   client, ils sont engagés dans le bon déroulement du projet en tant qu'acteurs et conseillers. Ils
   ambitionnent de concevoir des logiciels de qualité qui ne soient pas seulement des logiciels qui
   fonctionnent sans bug et qui répondent au besoin en surface: le code doit être sûr (testé), simple et
   expressif (compréhensible par le plus grand nombre), facile à faire évoluer, maintenable dans la
   durée et produit avec un coût raisonnable.

# Références
   [1] onisep <br/>
   [2] cycle en V ou en cascades  <br/>
   [3] moins de 3 semaines  <br/>
   [4] [le manifeste agile](https://manifesteagile.fr/)  <br/>
   [5] Robert C. Martin  <br/>
   [6] [le manifeste softsware craftsmanship](https://manifesto.softwarecraftsmanship.org/#/fr-fr)
