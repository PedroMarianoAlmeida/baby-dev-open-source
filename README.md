[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![Open Source](https://img.shields.io/badge/Open%20Source-Contribua%20%F0%9F%98%8E-yellowgreen)

# Baby Dev

Portal de vagas tech focado em primeiras oportunidades. Vagas serão adicionadas pelos "curadores", pessoas que vasculham a rede em buscam dessas oportunidades e divulgarão aqui (citando as fontes)

## Demo

- Projeto em produção: <https://vagasbabydev.vercel.app/>
- [Design (Figma)](https://www.figma.com/file/mcsd2v0thC57nfBPxt1VAM/Baby-Dev?node-id=12%3A230)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contribuições

O projeto está aberto a contribuições, veja as issues abertas!
(caso seja em código, ver arquivo [**Guia do Código.md**](https://github.com/PedroMarianoAlmeida/baby-dev-open-source/blob/main/Guia%20do%20C%C3%B3digo.md) para entender as regras)

## Tech Stack

- **Next** (e todo seu ecossistema: React, JavaScript, HTML, CSS, etc)
- **React Hook Form + Yup**: Formulários e validação de dados
- **Storybook**: Para facilitar as contribuições!
- **Jest + React Testing Library**: Testes unitários!
- **Json server** (temporariamente): Para simular o backend
- **Atomic Design**: Não é um framework nem nada, mas é uma boa prática relevante de ser incluída 😉

_Sem framework CSS, utilizando os CSS Modules nativos do Next_

## Rode na sua máquina

Clone o projeto: `git clone https://github.com/PedroMarianoAlmeida/baby-dev-open-source.git`

Abra o diretório do projeto: `cd my-project`

Instale as dependências (com **yarn**): `yarn`

Instale json server globalmente na sua máquina: `npm install -g json-server`

Rode o backend local: `yarn db`

Rode o projeto localmente: `yarn dev`

Rode o Storybook do projeto localmente `yarn storybook`

Rode os testes do projeto localmente: `yarn test`

## Contribuidores

- [felipesntr](https://github.com/felipesntr)
- [mauriciomikulski](https://github.com/mauriciomikulski)
- [devrodrigomolina](https://github.com/devrodrigomolina)

Não apareceram porque reescrevi o repositório e perdi o commits deles =/

# Links Úteis

### Next

- [Como abrir nova aba interna (usando Link do Next)](https://stackoverflow.com/a/71029662/12828114)
- [Como liberar de carregar qualquer imagem](https://stackoverflow.com/a/73951135/12828114)

### Path Mapping

Aquele lance do import ter `import { alguma coisa } from '@issoÉPathMapping'`

- <https://blog.rocketseat.com.br/path-mapping-typescript/>

### Storybook

#### Utilizados como guia para integração do Next com o Storybook (feito pelo Maurício)

- <https://storybook.js.org/docs/react/get-started/install>
- <https://storybook.js.org/docs/react/get-started/whats-a-story>

#### Utilizado para adicionar os estilos globais no Storybook([commit](https://github.com/PedroMarianoAlmeida/baby-dev-open-source/commit/8c7fc82b060510dc65500059ab2bf56863a3fe1d#diff-98b614e1838b171ee71c04450a8f1a562753193fb7d4f53a4de8b9b5a7e980ee)), e acho que vai ser pra resolver o problema da imagem

- <https://www.youtube.com/watch?v=i5tvZ9f7gJw&t=203s>

#### Utilizado para o Path Map do Typescript funcionar ([commit](https://github.com/PedroMarianoAlmeida/baby-dev-open-source/commit/29124a2a1ededd8194d412e9dd88b6525af5c968))

- <https://storybook.js.org/docs/react/builders/webpack>

### Jest

- <https://blog.logrocket.com/testing-next-js-apps-jest/>: Exemplo passo a passo
- <https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler>: Que referenciou a documentação 🤡
- [configurando Jest com o TS Path Mapping](https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring) (mas veio do [stackoverflow](https://stackoverflow.com/questions/52860868/typescript-paths-not-resolving-when-running-jest) 😉)

### React hook form

- [Integrando com yup - sessão Custom Hook with Resolver](https://react-hook-form.com/advanced-usage)
- [Integrando componente customizado](https://react-hook-form.com/api/usecontroller/controller)

#### Criando um componente separado integrado ao formulário

- [Usar o Register completo](https://react-hook-form.com/api/useform/register/)
- [Como passar as props e o ref](https://reactjs.org/docs/forwarding-refs.html)
- TypeScript: [props](https://dev.to/giselamd/creating-a-react-input-component-in-typescript-hai) e [ref](https://stackoverflow.com/questions/33796267/how-to-use-refs-in-react-with-typescript)
- [Resolvendo eslint - Error: Component definition is missing display name react/display-name](https://stackoverflow.com/a/43356103/12828114)

#### Json Server

- [Tutorial em português](https://www.fabricadecodigo.com/json-server/)
- [Tutorial indicado na documentação oficial](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)
- [Tutorial do The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD)

### Queries

- [sort](https://github.com/typicode/json-server#slice), [limit](https://github.com/typicode/json-server#slice) e [filter](https://github.com/typicode/json-server#filter): Usadas em Buscas Recentes

### Outros

- <https://readme.so/>: Usei pro readme, e como editor online de markdown
- [Adicionando licença a um repositório](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository)
- [Explicação do Atômic Design](https://www.youtube.com/watch?v=XGPRyL7TXsk&t=159s)
- [Playlist Spotify que me ajuda na concentração =D](https://open.spotify.com/playlist/5O0m5JxHVsyBWTYW5yuR12)
- [Criando incluindo no projeto uma Favicon](https://dev.to/jcubic/favicon-for-next-js-and-typescript-9gk)
- [Pegando o nome por extenso do mês a partir da data](https://stackoverflow.com/a/18648314/12828114)
