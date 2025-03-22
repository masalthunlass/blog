---
title: "Quand la vitesse génère de la frustration – Épisode 2"
date: 2022-04-29
author: ["Mathilde Salthun-Lassalle","Dora Bartaguiz"]
---
_Nous vous proposons une série d’articles pour traiter les problématiques liées au rythme de production d’un logiciel, les frustrations engendrées et les solutions qui peuvent être apportées pour améliorer la vie de l’équipe._

_Dans le [premier épisode]({{'/2022/03/30/quand-la-vitesse-1.html'| relative_url}}), nous avons abordé le besoin pressant de vitesse._

_Dans ce deuxième épisode, nous nous interrogeons sur les bons leviers de vitesse pour avancer : faut-il sacrifier la qualité car elle ne serait pas l’essentiel ? Faut-il voir grand dès le début ?_
# Vite fait…mal fait ?

La demande impérieuse de nouvelles fonctionnalités encourage l’émergence de comportements contre-productifs. La volonté de produire prime avant tout. La qualité est perçue comme un idéal, un objectif reporté à une date ultérieure.

Pour raccourcir les délais, des étapes pourtant indispensables à la stabilité du logiciel, jugées chronophages, comme la relecture de code ou les tests techniques et fonctionnels, sont occasionnellement ignorées ou bâclées. On compte beaucoup sur la lucidité des utilisateurs quant à la bonne utilisation du logiciel ; car il n’est pas prévu de gérer tous les cas d’erreurs. Lorsqu’un bug complexe est détecté, on ne traite que les symptômes sans régler les causes profondes, en espérant que ça suffise à guérir la plaie. Les choix techniques de conception sont eux aussi le fruit de décisions rapides. En effet, la solution appliquée est souvent la première trouvée, la plus facile et non la plus optimisée sur le long terme. Les conséquences de ces actions se ressentent dans la qualité du produit et de ses données. L’inadéquation entre le besoin et les choix de conception augmente à mesure qu’on reporte à plus tard les manquements d’aujourd’hui et l’équipe entrevoit déjà l’ampleur des futurs chantiers.

Or, la qualité n’est pas un ingrédient ajouté à la fin d’une recette pour en améliorer le rendu, une cerise sur un gâteau : c’est au contraire un ingrédient indispensable. En effet, si le code hérité ne respecte pas les bonnes pratiques, les tâches de routine que sont la lecture, l’ajout ou la modification de code se compliquent. Cela peut affecter le moral de l‘équipe, créer des frustrations et une énergie négative. La piètre qualité du code est un réel frein à l’avancée d’un projet, la première cause de l’allongement du temps de traitement des tâches futures.

Selon la théorie de la vitre brisée (citée dans _The Pragmatic Programmer: From Journeyman to Master, Andy Hunt, Dave Thomas_), qui s’appuie sur des faits statistiques, les petites négligences auxquelles on ne remédie pas rapidement en encourage de nouvelles, jusqu’à fragilisation du système. Si malgré cela, on fait l’impasse en toute connaissance de cause sur un standard de qualité, il est primordial de planifier immédiatement sa résolution à une date proche. Ne pas respecter cette règle expose à la survenue de situations déplaisantes telle que l’impossibilité de réaliser une fonctionnalité ou d’utiliser d’une partie du logiciel en raison du nombre élevé de dysfonctionnements. Le plus à craindre est la nécessité d’une refonte totale qui équivaudrait à recommencer de zéro.

# Un petit pas pour l’Homme, mais un bond de géant pour le projet

Il est souvent attendu de l’équipe de développement qu’elle mette les bouchées doubles, sans réduire la taille des portions (le périmètre fonctionnel), pour atteindre les objectifs fixés. Toute négociation est parfois interprétée comme une non-prise en compte des exigences du métier du commanditaire et un manque d’implication dans le projet.

Pourtant, le découpage du produit en unités de taille adéquate a une incidence directe sur la vitesse. Il existe bien un lien entre la taille du périmètre fonctionnel et le temps qu’il faut pour produire une fonctionnalité : si on augmente l’un on augmente l’autre. Cela est mis en évidence, dans la théorie des files d’attente, par la [loi de Little](http://christian.hohmann.free.fr/index.php/lean-entreprise/value-stream-mapping/447-loi-de-little-encours-et-lead-time) qui définit le temps moyen de réalisation par la division des unités de travail en cours par le débit. Elle donne deux leviers pour accélérer la production, soit augmenter le débit soit réduire la taille du travail en cours.

« Diminuer la taille des portions » est la solution la plus simple à mettre en place et elle a de nombreux avantages. Plus l’étendue du code modifié pour une nouvelle version est petite, moins cela est impactant pour la stabilité du logiciel existant. Les campagnes de tests de non-régression restent aisément dans des fourchettes de durées atteignables. Le temps de réalisation étant plus court, les livraisons peuvent être plus fréquentes, à la fois pour satisfaire les utilisateurs en leur fournissant de petites améliorations régulières et précipiter la collecte de leurs commentaires afin de mieux s’orienter dans les besoins en évolution futurs.

Pour y parvenir, il est intéressant de rechercher le produit minimum viable (MVP : Minimum Viable Product), c’est à dire la fonctionnalité la plus basique et élémentaire. En fonction des feedbacks reçus, elle s’enrichira par petites évolutions successives jusqu’à atteindre sa complétude. Dans les cas où le MVP reste un gros morceau malgré les efforts de découpage, il faut peut-être avoir recours aux [toggles features](https://martinfowler.com/articles/feature-toggles.html) C’est un système d’interrupteurs de fonctionnalités, qui les active ou désactive au besoin. Ainsi, en recette, on teste une brique activée ou non-activée, et en production, on livre brique par brique désactivée, jusqu’à avoir l’ensemble de la fonctionnalité pour l’activer.

Pour mieux visualiser et comprendre les ralentissements en fonction de la charge de travail en cours et des paramètres structurels de l’équipe, nous vous suggérons de regarder le simulateur de flux en ligne de Michel Grootjans [Explaining-flow](https://github.com/michelgrootjans/explaining-flow) qui invite à entrer sa propre configuration de projet (notamment le travail en cours – WIP : Work In Progress) pour en observer le résultat. Dans un des scénarios décrit, on recherche la charge maximale (WIP-limit) pour les membres de l’équipe au-delà de laquelle un goulot d’étranglement perturbe le flux.
# Arrivée à bon port

Dans le cas où vous faites face aux situations présentées dans cet épisode, nous espérons avoir apporté des solutions pour vous aider à améliorer votre quotidien et à réduire les frustrations liées au manque de qualité ou à un grand périmètre difficile à réaliser dans le temps imparti.

Dans le prochain épisode, nous vous proposons d’aborder en quoi l’organisation de l’équipe impacte la vitesse.

[prochain épisode]({{'/2022/05/13/quand-la-vitesse-3.html'| relative_url}})
