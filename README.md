**Description du Projet :**

Ce projet vise à développer un système de gestion des employés pour une entreprise. Il permet de stocker, afficher et manipuler des informations sur les employés, les départements et les postes à l'aide d'une base de données SQL. L'interface utilisateur est conçue pour être conviviale et interactive, facilitant ainsi la gestion des données.

**Objectifs :**
Base de Données SQL : Création d'une base de données pour stocker les informations des employés, des départements et des postes.
Requêtes SQL : Utilisation de requêtes SQL pour extraire et afficher les informations sur une page web.
HTML & CSS : Développement d'une interface utilisateur attrayante et intuitive.
Formulaires HTML : Intégration de formulaires pour la saisie de données, permettant l'ajout, la modification et la suppression d'informations.
Navigation : Mise en place de pages de navigation pour parcourir facilement les différentes sections du site.
JavaScript : Utilisation de JavaScript pour ajouter des fonctionnalités interactives.
Structure de la Base de Données
La base de données est composée de trois tables :

**Employee :**

ID (clé primaire)
Prénom
Nom
Adresse
Ancienneté
Département (clé étrangère)
Poste (clé étrangère)

**Department :**

ID (clé primaire)
Nom du département

**Position :**

ID (clé primaire)
Nom du poste
Autorité
Département chef (clé étrangère)
Salaire
Fonctionnalités
Affichage des données : Les informations des employés, départements et postes sont affichées dynamiquement sur la page web.
Manipulation des données : Les utilisateurs peuvent ajouter, modifier ou supprimer des informations via des formulaires.
Interface utilisateur : Design réactif et intuitif, facilitant l'interaction des utilisateurs.
Navigation fluide : Accès aisé aux différentes sections grâce à un menu de navigation.
Technologies Utilisées
Base de Données : SQL (MySQL ou SQLite)

**Cloner le dépôt :**
git clone https://github.com/Mtexier44/SQL_final.git