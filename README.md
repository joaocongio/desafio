# Desafio!!

Este projeto foi desenvolvido com [Create React App](https://github.com/facebook/create-react-app).<br/>

O objetivo do projeto é listar todos os clientes via API (HTTP Request GET), inserir um novo cliente (HTTP Request POST) e remover cliente (HTTP Request DELETE). Para realizar essas requisições foi utilizado o [axios] (https://github.com/axios/axios)<br/>

## <code>/client</code>

A pasta /client é onde está a aplicação com o React, onde está listada os componentes principais e página principal do projeto.<br/>
A estrutura da pasta cliente ficou:<br/>

![Estrutura /client](https://uploaddeimagens.com.br/images/002/673/365/full/estrutura.PNG?1590533181)<br/>

Entrando dentro da pasta **client/src/componentes**, possui os arquivos:<br/>
- <code>AdicionarCliente.js</code>
- <code>ListaClientes.js</code>
- <code>RemoverCliente.js</code>

Eles são os responsáveis por realizar as operações de GET, POST e PUT, sendo o cerebro do projeto. Conforme mecionado no início, foi utilizado Axios para realizar as requisições HTTP.<br/>

Voltando uma pasta, dentro de **src**, será utilizado os arquivos <code>App.js</code> para listar os componentes e <code>index.css</code> para estilizar a página do projeto.<br/>

E por fim, dentro da pasta **client/public** será utilizado o arquivo <code>index.html</code> para exibição dos componentes que foram desenvolvidos.<br/>

## <code>/server</code>

Dentro da pasta /server, possui alguns arquivos importantes, que são eles:<br/>
- <code>db.json</code>
- <code>package-lock.json</code>
- <code>package.json</code>
- <code>yarn.lock</code>

O arquivo <code>db.json</code> está os dados que serão consumidos.<br/>


## Iniciando a aplicação

Para iniciar a aplicação, entramos dentro da pasta **/server** e executamos o comando <code>npm start</code><br/>
**Obs:** Caso esteja iniciando pela primeira vez, antes de executar o comando start, instale as dependências utilizando o comando <code>npm install</code><br/>

Será gerado o link (http://localhost:9004/) e (http://localhost:9004/users)<br/>

Agora entramos dentro da pasta **/client** e executamos o comando <code>npm start</code><br/>
**Obs:** Caso não tenha ainda instalado o Create React App, execute o comando <code>npx create-react-app client</code>, onde o **client** é o nome da pasta que será instalado o React.<br/>
**Obs²:** Caso prefira utilizar <code>yarn</code>, fique à vontade.<br/>

Será gerado o link (http://localhost:3000/)

E para finalizar as preparações, dentro da pasta **/client** execute o comando <code>npm install axios</code>, para instalação do Axios.

Feito isso, vamos por a mão na massa!<br/>

## Componentes

Os arquivos dentro da pasta **componente** são eles:
- <code>AdicionarCliente.js</code>: Responsável por adicionar um cliente. POST
- <code>ListaClientes.js</code>: Responsável por listar os cliente. GET
- <code>RemoverCliente.js</code>: Responsável por excluir um cliente. DELETE<br/>

**Obs:** Não se esqueça de importar o <code>Axios</code> nestes arquivos.

## App.js, index.js, index.html

Dentro do arquivo <code>App.js</code> é necessário importar os compoenentes criados e o arquivo <code>index.css</code>, onde é feito a estilização da aplicação.<br/>

Dentro da <code>div className="App"</code> inserimos os componentes <code>ListarCliente</code>, <code>AdicionarCliente</code> e <code>RemoverCliente</code>, que serão exibidos na **index.html**, que por sua vez possui o id="root". Esta id foi definida dentro do arquivo **index.js** para resgatar os componentes da className="App" e exibir para a **index.html**<br/>

## index.css

No arquivo **index.css** realizamos todas as alterações de estilização da página.