En se basant sur une application React
en utilisant la librairie jsonforms.io (en typescript),
créer un formulaire ayant 2 champs :
un champ Nom
un tableau avec dans la colonne de gauche un pays, dans la colonne de droite un pourcentage
le champ nom est un champ texte tout ce qu'il y a de plus classique
le tableau ressemble à cela :
Pays
[Liste de tous les pays (+inconnu) |v] [___]% [+] [Trash]

une fois rempli, cela doit ressembler à :
France 50%
Belgique 20%
Allemagne 10%
Inconnu 20%
Pour être valide l'ensemble doit faire 100%

petites précisions :
quand nous voulons dire "tableau", nous faisons référence à https://jsonforms.io/examples/array/ .
la liste des pays doit doit être autocomplete https://jsonforms.io/examples/autocomplete
pour les pourcentages, une solution consiste à créer un custom control https://jsonforms.io/examples/custom-controls
Plus généralement, la validation des données doit se faire au niveau du custom control et non dans le main. Ce point est fondamental.
Par ailleurs, jsonforms permet de pré-initialiser les données via le json Data : vous devez veiller à ce que votre code fonctionne avec celles-ci et évidemment que lorsqu'on sélectionne les pays, le json soit mis à jour... ((Affichez le....))
(et n'oubliez pas de rendre public l'accès a codesandbox.io pour qu'on puisse voir le résultat ...)
