INTRODUCCIÓN

La estructura del proyecto tendrá tres niveles. Las páginas, los contenedores y los componentes. De acuerdo a la filosofia propuesta por React del principio de responsabilidad única, cada nivel tendrá una única responsabilidad. De esta forma puedo garantizar el uso de buenas prácticas, asi como la escabilidad del proyecto. 

RESPONSABILIDADES
    Componentes.
Los componentes serán elementos adaptables. Recibirán por propiedades la información que deben renderizar. Esa es su única función.

    Contenedores.
Los contenedores podrán contender varios componentes a los cuales les pasaran por propiedades los valores exactos que deben renderizar. Su única función será el manejo de información.

    Páginas.
Las páginas serán un conjunto de contenedores. Su función es estructurar los elementos que se deberán mostrar en cada ruta. 

    Composición de responsabilidad.
Las páginas podrán renderizar diferentes contenedores. Un contenedor podrá ser renderizado por diferentes páginas. Cada contenedor podrá utilizar de diferente maneras el mismo componente. Por ejemplo: Un formulario no es más que un conjunto de inputs, pero pueden haber distintos formularios, quizás querramos un formulario para registrar usuarios, otro para iniciar sesión, otro para consultas, crear publicaciones, etc. A la vez, quizás querramos que los usuarios puedan registrarse o iniciar sesión en la primer ruta que se encuentren pero darles la posibilidad de ingresar y de registrarse después, similar a lo que hace Facebook. Por lo tanto, la composición de nuestro proyecto sería, efectivamente, que el formulario sea el componente, cada contenedor utilizará ese componente para crear el formulario de consultas o el de registro, publicaciones, etc. y las pagínas podran renderizar ese mismo contenedor en diferentes rutas, al principio o en una ruta especifica. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

