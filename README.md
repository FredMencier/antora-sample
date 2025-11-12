# antora-sample

Ce repo est une demo d'utilisation de l'outil __Antora__ en utilisant les nouveautés des différentes version de Java

Antora s'appuie sur le format AsciiDoc

- https://docs.asciidoctor.org/
- https://antora.org/

## Antora multi component sample

Cet exemple d'utilisation d'__Antora__ présente les points suivants :
- Définition de plusieurs composants
    - component-java24
    - component-java25
    - entrance-doc
- Définition du fichier __antora-playbook.yml__ permettant de créer et d'aggréger les différents composants dans une même documentation
- Utilisation d'une ui custom : ui-bundle qui est un fork de la ui-bundle-spring
- Utilisation d'une image Docker Antora permettant de builder la documentation en local (sans install d'Antora)
- Création d'une extension __Macro__ (card-block.js) permettant d'ajouter un rendu de type __Card__ sur la home page (entance-doc)
- Definition d'un workflow github actions (__publish.yml__) permettant de publier le site static :
    - https://fredmencier.github.io/antora-sample/entrance-doc/1.0.0/index.html


Run Antora using docker image
```shell
docker run -v /Users/fredericmencier/Projects/antora-sample:/antora:Z --rm -t antora/antora antora-playbook.yml
```

Build d'une image custom Antora
```shell
docker build -t docker-antora-custom -f Dockerfile.antora .
```

Run Antora using custom docker image
```shell
docker run -v /Users/fredericmencier/Projects/antora-sample:/antora:Z --rm -t docker-antora-custom antora-playbook.yml
```