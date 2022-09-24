# Guia do Código

## Atenção nas importações

Esse projeto tem o Path Map para evitar os

`import AlgumaCoisa from "../../../labirinto-de-rotas"`

Tudo que for dentro da pasta src pode começar com `src/` (sem o ponto mesmo), mas muitas coisas já tá melhor mapeado e podemos trocar por exemplo o `src/components/atoms/MeuComponente` por `@atoms/MeuComponente`
Para ver todos (e até criar mais se necessário), ir no arquivo **tsconfig.json** e ver a propridade **paths** (ir também no arquivo **jest.config.js** e ver a propridade **moduleNameMapper**)

Então usar importações relativas apenas dentro do universo do componente (o que será sempre arrastando junto sem _quebrar_ 🥰)

## Vai criar ou Editar um Componente?

### Reutilize código!

Olhe o Storybook, nas sessões **atoms** e **molecules** pode já ter muito dos componentes base que você precisa (como Box, Text com variantes de tamanhos, etc).

### Estrutura de Pastas

Cada novo componente deve ficar dentro de uma pasta dentro de componentes (**atoms**, **molecules** ou **organisms**) e deve seguir a seguinte estrutura (qualquer dúvida olhar a pasta `atoms/Box` para usar como referência pois é o mais simples):

- **index.tsx** (apenas com o import default, não implementar lá): Isso é pra poder ao importar não precisar passar o nome dentro da pasta, mas tb não ficar todos os componentes com nome index.tsx e depois com 500 abas abertas fica difícil saber qual é qual
- **NomeDoComponente.tsx**: Componente principal que será pego pelo index.tsx da pasta com a implementação, é o seu componente (ou a porta de entrada, onde chama os outros)
- **NomeDoComopnente.module.css**: Módulo CSS onde fica o estilo, no arquivo principal ele deve ser importado com o código.
- **NomeDoComopnente.stories.tsx**: Arquivo que carrega no Storybook (alterar lá dentro o endereço do import, e o _title_ - e preferencialmente o nome do componente também)
- **NomeDoComopnente.test.tsx**: Arquivo com o test do componente

Obs: Se o componente tiver _componentes filhos_ poderão ter outras pastas com essa mesma estrutura (mas se não for fazer tudo pode manter tudo em uma só - mesmo com outros componentes, ou .test ou .stories ou .modules, desde que não passe de 10 arquivos na pasta)

### Commits

Curtos (com poucas alterações), e um título que explica o que foi feito

### Procedimento para contribuição

- Clone o projeto e rode na sua máquina (explicado no readme)
- Crie uma nova branch e vá pra ela: `git checkout -b nome-branch`
- Faça suas alterações
- Rode os testes para garantir que não tem nada quebrado
- Suba o código `git push origin nome-branch`
- Abra o Github online e faça um Pull Request - já vai aparecer essa opção pra você (explicando as mudanças - veja [esse exemplo](https://github.com/PedroMarianoAlmeida/baby-dev-open-source/pull/3))

### Usou algum vídeo/blog/stack overflow?

Atualize a sessão **Links Úteis** do Readme
