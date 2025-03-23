---
title: "Quality view : Matérialiser la qualité du code pour les non-techniques "
date: 2024-05-25
author: "Mathilde Salthun-Lassalle"
---

Lors de la conférence NewCrafts qui a eu lieu le 16 et 17 mai 2024 à Paris, Philippe Bourgau (agile & craft coach) et Mirna Mahloud (développeuse & coach) ont animé un atelier sur la méthode de « Quality view ».  

Cet article donne un aperçu de la méthodologie « quality view » telle que je l’ai appréhendée. Je recommande la lecture des articles de [Philippe Bourgau](https://philippe.bourgau.net/a-quality_view-workshop-to-discuss-technical-excellence/)  et de [Colin Breck](https://blog.colinbreck.com/using-quality_views-to-communicate-software-quality-and-evolution/) pour des informations plus précises.  

 

Si vous avez le rôle fonctionnel au sein d’une équipe de développement ou bien si vous êtes commanditaire d’un produit logiciel, vous avez peut-être déjà ressenti de la perplexité face à une équipe de développeurs qui vous annonce que la fonctionnalité que vous souhaitez représente une tâche longue et complexe. De votre côté, en tant que développeur-se, vous peinez régulièrement à obtenir du temps pour améliorer la qualité d’un code médiocre (ajout de test, refactoring…) en raison de l’importance accordée à la livraison de nouveautés.  

Dessiner ensemble une « quality view » est un moyen de réconcilier les besoins de chacun en rendant accessible et visible ce qui « se trouve sous le capot ».  

Pour y parvenir, toutes les parties prenantes impliquées dans le développement du produit sont invitées à collaborer afin de créer une représentation de la qualité du système actuel. 

 

# Comment dessiner une quality view  

 

Prenons l’exemple donné lors de l’atelier, d’une équipe en charge de la réalisation d’un logiciel de réservation de cours pour des étudiants. Cela fait 1 an que Julian, développeur junior, a démarré l’implémentation seul. Il a partiellement mis en place des tests unitaires mais a rencontré des difficultés techniques en raison de son inexpérience.  Il a été rejoint par Ingmar, stagiaire  depuis 6 mois, qui a essentiellement travaillé sur une seule fonctionnalité, et Sandy une développeuse senior arrivée il y a une semaine, qui a eu juste le temps de parcourir le code. Penelope, la project manager (PM), a désormais plus de disponibilité pour le suivi du projet. Elle s’inquiète des fonctionnalités encore manquantes.  

Les impératifs de délais et de budget, poussent à se concentrer uniquement sur la valeur ajoutée. Or, parmi les facteurs qui vont impacter le rythme des livraisons futures, comme le niveau de séniorité technique, le niveau de connaissance de la base de code ou la stabilité de l’équipe, il en est un que les non-techniques n’anticipent pas : ce sont les conséquences des choix techniques passés. En particulier le rôle que joue la qualité du code.  Obtenir une vue fidèle et partagée de la qualité de l’existant peut donc s’avérer stratégique. C’est un outil d’aide à la décision des actions à mener en priorité pour parvenir aux objectifs sans ignorer les risques. 

 

 

 

## Etape 1 - Dessiner le squelette nu du logiciel 

En premier lieu, il est nécessaire d’avoir une vue réaliste des modules du logiciel et de leurs dépendances. 

Chaque membre de l’équipe commence par dessiner de son côté sa vision des composants du logiciel en fonction de ses connaissances (ce sur quoi il a travaillé, la documentation dont il dispose, ce qu’il a compris…). Dans un second temps, on forme des paires de participants pour mettre en commun leurs visions et créer un nouveau schéma du système. Enfin toute l’équipe se rassemble pour co-dessiner la vue finale du système. 


![step 1]({{ '/assets/quality_view/step-1.png' | relative_url }})

_Légende : Un schéma pour une personne seule ou une paire. Dans le schéma final, il ne doit exister que des carrés représentant des modules et leurs liens._ 

![step 1 module]({{ '/assets/quality_view/step-1_module.png' | relative_url }})

_Légende : un exemple du formalisme d’un module de code à l’étape 1 sur le schéma final de groupe. Il n’a aucune couleur. Il comporte plusieurs zones dans les coins supérieurs ou inférieurs qui seront complétées dans les étapes suivantes. Les modules sont nommés et reliés entre eux selon leurs dépendances._  

 

 Il peut arriver que des malentendus se dissipent grâce à cet exercice.  Lors du workshop, par groupe de quatre, nous représentions chacun-e un-e membre de l’équipe décrite précédemment, et nous avions chacun-e une fiche résumée des connaissances de notre personnage. Nous avons ainsi découvert à la fin de cette étape, que Penelope, notre PM, croyait à l’existence d’un déploiement de l’application sur AWS décrit dans le schéma d’architecture initial alors que les développeur-se-s n’en avaient aucune connaissance.  

 

 

 

## Etape 2 - Proportionner les composants 

Chaque bloc représentant un module est proportionné en fonction de sa taille, ici la mesure prise est le nombre de lignes de code. Cette étape n’a pas été réalisée lors de l’atelier, il nous a été donné un schéma déjà proportionné. Je suppose que l’intérêt réside dans le fait que plus un module comporte de lignes de code, plus il peut y résider de bugs, ou simplement de complexité, qui vont   allonger le temps de sa maitrise par les développeur-se-s.  


![step 2]({{ '/assets/quality_view/step-2.png' | relative_url }})
_Légende : Un schéma de groupe (simplifié) de l’étape 2_ 

 

## Etape 3 – Colorier selon la qualité de code 

 

Seuls les développeur-se-s participent à cette étape. 

 

D’abord chacun de leur côté, puis en paire, ils établissent un schéma classant chaque module en fonction de leur degré de qualité selon leur estimation. Les schémas vont différer en fonction de leur connaissance du module et de leurs critères personnels de qualité. La réconciliation des schémas se fera en discutant leurs différentes perceptions. Nous avons choisi dans notre équipe de nuancer le score de qualité du code par la qualité perçue par Penelope, notre PM, chargée des tests exploratoires. Cela n’était pas, néanmoins, une consigne donnée. 


![step 3]({{ '/assets/quality_view/step-3.png' | relative_url }})

_Légende : Un schéma pour une personne seule ou une paire_ 

Une échelle de nuances de qualité de code est donnée :  allant du vert (très bon) puis jaune puis orange vers le rouge (très mauvais). L’équipe des développeur-se-s au complet complète ensuite le squelette de l’application en coloriant chaque bloc selon sa qualité. 


![step 3 final]({{ '/assets/quality_view/step-3-final.png' | relative_url }})
_Légende : Un schéma de groupe (simplifié) de l’étape 3_ 

 

## Etape 4 – Matérialiser la qualité des tests 

 

Seuls les développeur-se-s participent à cette étape. 

 

L’objectif de cette étape est d’indiquer dans le dessin pour chaque module la qualité de ses tests par une échelle colorée dans une case en bas à gauche. (vert très bon à rouge très mauvais). On peut éventuellement pour cela s’appuyer sur des métriques (ex le taux de couverture) mais il est important de discuter de ses critères. Cette évaluation est également d’abord à réaliser seul-e puis en paire puis avec tout le groupe. 

![step 4]({{ '/assets/quality_view/step-4.png' | relative_url }})

_Légende : Un schéma de groupe (simplifié) de l’étape 4_ 

 

 

 

## Etape 5 – Matérialiser les capacités de chacun 

 

Seuls les développeur-se-s participent à cette étape. 

 

Cette étape veut rendre compte du niveau de connaissance de la base de code de chaque développeur-se et de sa confiance quant à sa capacité à intervenir dans un module. Cette information va influencer le rythme de développement, et renseigne sur la capacité à ajouter de nouvelles fonctionnalités. Il est évident qu’un code de piètre qualité ne sera pas facile à changer sans causer de régressions. De même, une personne nouvellement arrivée passera par un temps d’analyse plus long comparé à celle qui a tout écrit de A à Z. 

 

En haut à gauche de chaque bloc-module, une zone dédiée est découpée verticalement en 4 parties selon le code suivant : 

 (de gauche à droite) 

    zone 1 : « je ne sais pas si c’est facile ou difficile  » 

    zone 2 : « je sais que c’est difficile, j’ai essayé une fois » 

    zone 3 : « je gère mais pas si simple » 

    zone 4 : « aucun problème » 

Chaque développeur-se y dépose sa marque (par exemple son initiale) dans la zone à laquelle il ou elle s’identifie pour chaque module. Dans notre exemple, malgré sa séniorité, Sandy, en dernière recrue, a souvent coché la zone 1. Tandis que l’initiale de Julian, qui était présent depuis le démarrage, était plus fréquemment placée en zone 4. 

Cela donne un histogramme de compétences comme ceci : 

![step 5 histogramme]({{ '/assets/quality_view/step-5-histo.png' | relative_url }})

_Légende : Un histogramme de compétence_ 



![step 5]({{ '/assets/quality_view/step-5.png' | relative_url }})

_Légende : Un schéma simplifié de l’étape 5_ 

 

 

## Etape 6 – Indiquer les bugs des 6 derniers mois  

 

Cette étape vise à mettre en évidence les modules ayant été impactés par des bugs. Une case au coin supérieur droit de chaque module est prévue pour contenir un point par bug. J’y vois un moyen de statuer sur la stabilité d’un module. Plus il a connu de bugs plus il me parait fragile. 


![step 6]({{ '/assets/quality_view/step-6.png' | relative_url }})

_Légende : Un schéma simplifié de l’étape 6_ 

 

## Etape 7 – Indiquer les prochains impacts  

 

Les fonctionnels de l’équipe jouent un rôle central à cette étape. Ils présentent les nouvelles fonctionnalités attendues pondérées par un score de valeur et par ordre de priorité. La fonctionnalité A est peut-être hautement indispensable, elle aura la note de 3 diamants, la B un peu moins, on la notera 2 diamants et la C viendra ensuite avec une moindre attente de la part du métier, évaluée à 1 diamant.  L’équipe technique déduit de la description du besoin les modules prochainement impactées et reporte le score en nombre de diamants pour chacun dans le coin inférieur droit. 

![step 7]({{ '/assets/quality_view/step-7.png' | relative_url }})

_Légende : Un schéma simplifié de l’étape 7, ici la valeur métier est exprimée en nombre de losanges bleus. Plus il y a de losanges plus elle est importante._ 

 

## Etape 8 – Voter pour les points chauds  

A ce stage, l’équipe a sous les yeux une cartographie du système actuel. Il y a surement de nombreux points d’attention, des zones instables, des zones inexplorées et obscures, des zones à fort enjeu… Il est temps de voter pour décider des modules où l’équipe veut diriger toute son attention en priorité car, rappelez-vous, les délais et le budget pèsent sur les décisions et menacent la réussite du projet. 

Chaque membre dispose de 3 votes sous la forme de points à placer dans une case en bas du module. Personnellement je porte une attention plus grande aux points du code qui vont avoir à être modifiés pour ajouter de la valeur métier et à ceux qui sont particulièrement bogués mais tout autre critère, comme l’ajout de tests ou le besoin de monter en compétences, est bon à considérer.  

![step 8]({{ '/assets/quality_view/step-8.png' | relative_url }})

_Légende : Un schéma simplifié de l’étape 8, les modules A et E ont été choisis par l’équipe comme points chauds_ 

 

## Etape 9 – Se mettre d’accord sur les actions 

 

Afin que les résultats de cette collaboration fructueuse se répercutent en actions efficaces pour le produit logiciel, l’équipe se doit de s’accorder sur des actions à mettre en place. Faut-il organiser de nouveaux ateliers (example mapping…) ? Faut-il entamer une action de refactorisation ? Faut-il prioriser et planifier la fonctionnalité A ? Faut-il penser à des actions de montée en compétences ? 

Il a été évoqué que la quality view pouvait être mise à jour une fois des actions menées. 

 

 

## Plus qu’un outil de visualisation 

A mon sens, le rôle du « quality view » va au-delà de la clarification des risques liés au développement du produit, et de son aide à la prise de décisions. L’implication de toutes les parties dans cet atelier peut entamer ou renforcer la cohésion de l’équipe et son habitude à se considérer comme partenaires. Le partage des connaissances et des points de vue réussit à pointer les faiblesses et les forces aussi bien du système logiciel que du groupe humain (cf. capacité). Le processus de commencer seul les étapes puis de fusionner les points de vue par paire avant une mise en commun, amène une implication personnelle de chaque personne. Vous ne verrez pas de participants muets dont le point de vue n’a pas été pris en compte. 

 

## Conseils de mise en place 

Une discussion avec les animateurs m’a confirmé que les étapes pouvaient être aussi bien réalisées en présentiel qu’en distanciel avec des outils comme Miro par exemple. Il demande cependant une bonne préparation en amont. Compte tenu du peu de disponibilités éventuelles des acteurs nécessaires à sa tenue, il est encouragé de donner des consignes pour que les schémas à faire seul soient déjà réalisés par chacun-e avant la réunion. 

 

 
