Esta prueba fue creada usando Cypress.io con npm como instalador de paquetes, y javascript
como lenguaje de programación.

para ejecutar las pruebas debe asegurarse de tener instalado node.js, que puede ser 
descargado en el siguiente link: https://nodejs.org/es/download/

Pasos para instalar dependencias y ejecutar las pruebas:

1. Clona este repositorio en la carpeta de su elección con "git clone https://github.com/DaniloBurgos/prueba_globant.git"
2. Accede a la carpeta main "cd prueba_globant"
3. Ejecute el comando "npm install" desde la carpeta creada con una linea de comandos (git bash)

Una vez descargadas todas las dependencias indicadas en el archivo "package.json" puede ejecutar las pruebas
tanto de e2e como de API de dos formas distintas:

1. FORMA UNO: Desde el runner de Cypress:
1.1 Para ejecutar el runner de cypress ejecute el comando "npx cypress open"
1.2 Elija la opción "E2E Testing" y a continuación su navegador de preferencia y presione "Start E2E Testing"
1.3 Para ejecutar la prueba e2e presione el elemento "buy_objects.spec.js" ubicado en la carpeta "e2e"
1.4 Para ejecutar la prueba API presione el elemento "api_user_crud.spec.js" ubicado en la carpeta "intagration\API"

2. FORMA DOS: Desde la consola bash (headless) con scripts definidos en "package.json":
2.1 Para ejecutar el test e2e, ejecute el comando "npm run ui_test" desde bash, obtendrá un reporte de este tipo:

 (Run Finished)
       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  buy_objects.spec.js                      00:15        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:15        1        1        -        -        -


2.2 Para ejecutar el test API, ejecute el comando "npm run api_test" desde bash, obtendrá un reporte de este tipo:

  (Run Finished)
       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  api_user_crud.spec.js                    00:01        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:01        1        1        -        -        -

3. Para ejecutar ambas pruebas, ejecute el comando "npm run suite", obtendrá un reporte de este tipo:

(Run Finished)
       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  e2e/pruebaBancoPichincha.spec.cy.js      00:13        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  integration/API/api_test.spec.js         00:01        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:15        2        2        -        -        -  
