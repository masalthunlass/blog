---
title: "Les Feature Toggles* : Activer / Désactiver dynamiquement une fonctionnalité d’un logiciel"
date: 2019-01-13
author: "Mathilde Salthun-Lassalle"
---

_* La désignation ne fait pas consensus et la liste des termes synonymes est très longue : Feature Flag, Feature Switch, Conditional Feature, Feature flipper, Feature Bits, Gatekeepers…._

# Le principe

À la livraison d’une nouvelle version d’un logiciel sur un environnement, toutes les nouvelles fonctionnalités sont rendues disponibles immédiatement. Au contraire, le modèle de design Feature Toggle* a pour but de fournir un interrupteur de fonctionnalités qui active ou désactive une partie du code sans nécessiter ni redéploiement ni redémarrage de l’application.
# Les usages possibles

Cette fonctionnalité peut avoir de nombreux usages. Les cas suivants en sont un exemple et ne représentent pas l’exhaustivité des situations.

**CAS 1 – Différents besoins sur différents environnements**

Pratiquer des livraisons régulières, fréquentes et de petite taille est une des conditions à garantir pour l’agilité d’un projet (Continuous Delivery). L’enjeu est le maintien d’un cycle de développement court pour limiter les risques du rythme élevé de changements. Or si cette stratégie s’avère un atout en environnement de recette, où la validation de petites briques logicielles réduit la durée de la phase de tests, elle peut être difficile à réaliser en environnement de production. En effet, une fonctionnalité peut représenter plusieurs itérations de développements et il serait incongru de la mettre à disposition de l’utilisateur de façon incomplète. Le système de feature toggles rend possible la livraison de parties de fonctionnalités en mode désactivé sans que cela n’affecte la stabilité du code. L’activation pourra être réalisée au bout de quelques semaines, une fois que l’ensemble du code nécessaire aura été livré.

**CAS 2 – Incident suite à une livraison**

Lorsqu’un dysfonctionnement est rencontré en production par un utilisateur suite à une récente livraison, il sera possible de désactiver la fonctionnalité pour réduire l’instabilité du logiciel en attendant une résolution.

**CAS 3 – Dépendances entre équipes**

Il n’est pas rare que plusieurs équipes travaillent en parallèle sur des besoins différents et dans des délais qui leur sont propres tout en ayant en commun une ou plusieurs applications. Par exemple, l’interface peut être la même pour toutes les équipes. Lorsque le moment est venu pour une équipe de livrer son travail, elle se trouve gênée par les développements encore en cours ou en validation des autres équipes sur l’application partagée. Si chaque équipe a mis en place des toggles,  la livraison sera envisageable à la condition que chaque fonctionnalité non encore terminée soit désactivée.

**CAS 4 – Tests comparatifs**

Il existe une catégorie de Feature toggles dont l’activation se fait par utilisateur. La condition d’activation peut être déterminée par un profil de permissions ou encore l’appartenance à un échantillon. Au lieu de plusieurs environnements, un seul est nécessaire pour comparer des résultats entre différents groupe d’utilisateurs et valider une approche.

**AUTRES CAS – L’activation de fonctionnalités peut aussi…**

* concerner la configuration d’un système opérationnel déjà en service afin de déterminer les meilleurs paramètres (court terme) ou bien de maintenir un service stratégique au détriment d’un autre en dégradant les performances à son profit (long terme)
* être amenée à rester sur le long terme dans le cas du besoin de customisation de fonctionnalités par utilisateur (par exemple un mode « utilisateur premium»)

Selon Martin Fowler 1 – son blog, il existe deux axes de qualification pour un feature toggle, son dynamisme (changements au déploiement / à chaud / par requête) et sa longévité (nombre de jours / mois / années). Cette classification doit orienter vers le choix d’une implémentation.
# Un rapide aperçu avec FF4J

**FF4J  (Feature Flipping for Java)** est un framework en licence libre apache 2.

Une fois les dépendances nécessaires ajoutées (ff4j-core, junit, ff4j-web) et la configuration paramétrée, il faudra créer un service fournissant une instance de la classe FF4J.

**Étape 1. Créer un feature toggle**

Cela consiste à insérer une nouvelle entrée dans un feature store (le système de stockage) précisant l’identifiant du toggle, sa description, son statut d’activation, son groupe d’appartenance, les rôles d’utilisateurs ou les stratégies associés. L’offre de système de stockage des données est large : mémoire, bases relationnelles ou no-sql.

```
    CREATE TABLE FF4J_FEATURES (
    "FEAT_UID"            VARCHAR(100),
    "ENABLE"              INTEGER NOT NULL,
    "DESCRIPTION"         VARCHAR(1000),
    "STRATEGY"            VARCHAR(1000),
    "EXPRESSION"      VARCHAR(255),
    "GROUPNAME"           VARCHAR(100),
    PRIMARY KEY("FEAT_UID")
);
```

_ci-dessus : Table prévue pour le stockage en base relationnelle, le champ « enable » stocke 1 pour le statut « activé » 0 pour « désactivé »._

**Étape 2. Utiliser le feature toggle dans le code**

L’identifiant choisi à l’étape 1 permettra de vérifier l’état d’activation.

```
If (ff4j.check("id.du.toggle")) {
  doBehiavorA()
}  else {
  doBehiavorB()
}

```


ci-dessus : si le toggle est activé alors le comportement A est joué sinon le comportement B fonctionne.

**Étape 3 . Déployer le code sur un environnement**

**Étape 4 . Contrôler l’activation via la console d’administration**
![prochain épisode]({{'/assets/toggle_feature/toggleConsole.jpg'| relative_url}})

_ci -dessus : Une interface graphique permet de réaliser l’opération sans nécessiter de compétences techniques._
# Limites

Ce mécanisme complexifie le code : deux cas de comportements sont implémentés en même temps donc deux fois plus de code. Il est donc conseillé de réfléchir aux bons emplacements stratégiques dans le code et de limiter le nombre de recours. Dans le même ordre d’idée, le nombre total de fonctionnalités couvertes se doit de rester faible pour rester maintenable.

Heureusement, ce risque est diminué dans la plupart des usages puisqu’ils répondent à un besoin temporaire. Néanmoins, cette situation temporaire va induire une opération supplémentaire de nettoyage du code, une fois que la fonctionnalité est activée de manière définitive.

Il existe également quelques cas où la sécurisation avec un toggle n’est pas envisageable. J’ai notamment déjà rencontré le cas lors d’un changement structurel important au niveau du modèle en projet .

Il existe une controverse. En effet, les outils de gestion de versions (tel que Git) apportent une aide précieuse dans la résolution de certaines problématiques (ex. CAS 3). Si la pratique très courante du Feature Branching (séparation des fonctionnalités en branches) est jugée inadaptée face au défi de l’intégration et de la livraison continues pour les uns 1 – martin fowler blog, elle reste une réponse possible lorsque bien exécutée pour d’autres 2 – james mckay blog. Ces approches peuvent aussi être utilisées côte à côte.

Enfin, cette approche va de pair et prendra tout son sens dans un contexte où l’automatisation des tests et des déploiements est déjà en place.
# Quelques implémentations

Flaggr (Android), angular-feature-flags (Angular), rollout.io (javascript), Togglz (Java), au sein du framework Spring (Java)…
