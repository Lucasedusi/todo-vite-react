# Search Dev

## Descrição do Projeto

<p align="left">O projeto Search Dev é uma aplicação com o intuito de buscar Dev's através da API do Github, sendo assim pode-se buscar um usuário e visualizar o seu perfil com as suas principais informações, além de disso, há a possiblidade de buscar os repositórios do respectivo usuário.<br /> Lembrando que ao buscar um usuário inexistente ou deixar o campo de busca em branco será retornados os dvidos tratamentos de erros  </p>


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


### Demostração

<h1 align="center">
  <img alt="TodoLista" title="#TodoList" src="./src/assets/tasklist.png" />
</h1>

<a href="https://todo-list-gbdev13.vercel.app/" target="_blank">
<img src="https://user-images.githubusercontent.com/71772559/178192066-d52e0cf7-906e-4baa-80f3-4b49dde153c0.png" />
</a>


### Principais Features

- [x] Buscar usuário
- [x] Listar informações do Usuário
- [x] Buscar repositorios do Usuário


### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ViteJs](https://vitejs.dev/guide/)
- [Styled-Components](https://styled-components.com/)

<strong>Qual o motivo de usar Styled-Component?</strong>

Facilidade na manutenção do código, tornando a semântica dos componentes muito óbvio, além disso a sua adaptação com as props facilita a utilização temas globais.


### Instalação

```bash
# Clone este repositório
$ git clone https://github.com/Lucasedusi/todo-vite-react.git

# Acesse a pasta do projeto no terminal/cmd
$ cd todo-vite-react

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:5173 - acesse <http://localhost:5173>
```

### Estrutura de Pastas

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **assets** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação;

  - **components** - Diretório onde são criados os componentes da aplicação;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP;

  - **styles** - Diretório onde são criados estilos globais da aplicação;
    
- **app.tsx** - Arquivo onde são criados importados as rotas e os estilos globais da aplicação;

- **Routes.tsx** - Arquivo onde são criados as rotas da aplicação;



### Autor
---

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/33089713?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Lucas Eduardo</b></sub></a> <a href="https://www.linkedin.com/in/lucas-eduardo-pereira-andrade-8224751b2/" title="">🚀</a>


Feito com ❤️ por Lucas Eduardo 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Lucas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucas-eduardo-pereira-andrade-8224751b2/)](https://www.linkedin.com/in/lucas-eduardo-pereira-andrade-8224751b2/)
[![Gmail Badge](https://img.shields.io/badge/-lucaseduardodev@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lucaseduardodev@gmail.com)](mailto:lucaseduardodev@gmail.com)
