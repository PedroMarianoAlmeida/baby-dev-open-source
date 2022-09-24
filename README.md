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
- **Storybook**: Para facilitar as contribuições!
- **Jest + React Testing Library**: Testes unitários!
- **Atomic Design**: Não é um framework nem nada, mas é uma boa prática relevante de ser incluída 😉

_Sem framework CSS, utilizando os CSS Modules nativos do Next_

## Rode na sua máquina

Clone o projeto: `git clone https://github.com/PedroMarianoAlmeida/baby-dev-open-source.git`

Abra o diretório do projeto: `cd my-project`

Instale as dependências (com **yarn**): `yarn`

Rode o projeto localmente: `yarn dev`

Rode o Storybook do projeto localmente `yarn storybook`

Rode os testes do projeto localmente: `yarn test`

## Contribuidores

- [felipesntr](https://github.com/felipesntr)
- [mauriciomikulski](https://github.com/mauriciomikulski)

Não apareceram porque reescrevi o repositório e perdi o commits deles =/

# Links Úteis

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

#### Jest

- <https://blog.logrocket.com/testing-next-js-apps-jest/>: Exemplo passo a passo
- <https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler>: Que referenciou a documentação 🤡
- [configurando Jest com o TS Path Mapping](https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring) (mas veio do [stackoverflow](https://stackoverflow.com/questions/52860868/typescript-paths-not-resolving-when-running-jest) 😉)

#### Outros

- <https://readme.so/>: Usei pro readme, e como editor online de markdown
- [Adicionando licença a um repositório](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository)
- [Explicação do Atômic Design](https://www.youtube.com/watch?v=XGPRyL7TXsk&t=159s)
- [Playlist Spotify que me ajuda na concentração =D](https://open.spotify.com/playlist/5O0m5JxHVsyBWTYW5yuR12)
