Installe ESLint accompagné des plugins et des packages de configuration que l'on va utiliser :
npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks@^1.7.0

Colle une configuration dans un fichier .eslintrc, qui indiquera à ESLint quels paramètres utiliser.

Installe Prettier : npm install --save-dev prettier
Colle la configuration suivante dans un fichier .prettierrc

Configurer Husky pour empêcher de créer des commits qui ne respectent pas les règles du linter:
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
puis dans .eslinctrc "extends": ["airbnb", "plugin:prettier/recommended"],
Installe Husky pour configurer facilement des git hooks dans ton projet : npm install --save-dev husky lint-staged

Un git hook exécute une commande automatiquement à chaque fois que Git le déclenche, par exemple avant chaque commit ou avant chaque push.
•Dans package.json, ajoute la configuration "husky" &"lint-staged":

// pour les tests
Installe Jest pour écrire et d'exécuter les tests : npm install --save-dev jest-expo @types/jest
Installe React Test Renderer pour tester les composants React : npm install --save-dev react-test-renderer@16.8.3
Ajouter dans le package.json : "jest":... et la commande test pour pvr executer

Execution des tests en tps réel :
package.json....script..test:watch
