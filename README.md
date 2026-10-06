# ⚛️ Meu estudo do React 

Repositório de estudos e exemplos práticos com React, criado para aprender os fundamentos da biblioteca e experimentar a construção de interfaces com componentes reutilizáveis.

## 📚 Sobre o projeto 

Este projeto surgiu durante a mudança do **segundo para o terceiro semestre** do curso de **Desenvolvimento de Sistemas**. Quando foi informado que a turma aprenderia React.js no semestre seguinte, fiquei bastante interessado e comecei a pesquisar e estudar a tecnologia por conta própria, antes das aulas começarem.

O repositório reúne exercícios de aprendizado sobre componentes, propriedades (*props*), eventos, estado, formulários, renderização de listas, CSS Modules e navegação entre páginas. Os exemplos têm finalidade educacional; alguns são independentes e não aparecem na interface principal até serem importados e utilizados.

## 🧰 Tecnologias utilizadas 

- **React 19** e **React DOM** para construir e renderizar a interface.
- **JavaScript** com componentes funcionais e JSX.
- **Create React App** (`react-scripts`) para iniciar, testar e gerar o build.
- **React Router DOM 7** para a navegação entre páginas.
- **CSS** e CSS Modules para os estilos.
- **React Icons** para os ícones sociais do rodapé.
- **PropTypes** para declarar as propriedades esperadas por um componente.
- **Testing Library** para testes de interface.

## 📋 Requisitos 

- Node.js e npm instalados.
- Um navegador atualizado.

Confira as versões instaladas:

```bash
node --version
npm --version
```

## 🚀 Instalação e execução

Abra um terminal na pasta raiz do repositório — a mesma pasta deste README e do `package.json` — e instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

O Create React App abrirá o projeto no navegador, normalmente em [http://localhost:3000](http://localhost:3000). Enquanto o servidor estiver ativo, alterações nos arquivos da aplicação são compiladas e exibidas durante o desenvolvimento.

Para interromper o servidor, use `Ctrl+C` no terminal.

## 🧭 Rotas da aplicação 

A interface principal é configurada em `src/App.js`, usando `BrowserRouter`, `Routes` e `Route`. A barra de navegação e o rodapé são compartilhados pelas páginas:

| Caminho | Página | Conteúdo atual |
| --- | --- | --- |
| `/` | Home | Título e texto de exemplo da página inicial. |
| `/empresa` | Empresa | Título e texto de exemplo da página Empresa. |
| `/contatos` | Contatos | Título e texto de exemplo da página Contato. |

Use os links da barra superior para navegar entre as rotas sem recarregar a aplicação. A rota de contato usa o caminho `/contatos` (plural).

## 🧩 Componentes da aplicação 

### Componentes usados nas páginas 

- **`App`** (`src/App.js`): ponto central da interface; configura o roteador, exibe `NavBar`, seleciona uma das páginas conforme a rota e inclui `Footer`.
- **`NavBar`** (`src/components/Layout/NavBar.js`): lista links para Home, Empresa e Contatos, usando `Link` do React Router.
- **`Home`** (`src/components/Paginas/Home.js`): página inicial com conteúdo demonstrativo.
- **`Empresa`** (`src/components/Paginas/Empresa.js`): página de exemplo para a rota da empresa.
- **`Contato`** (`src/components/Paginas/Contato.js`): página de exemplo para a rota de contatos.
- **`Footer`** (`src/components/Layout/Footer.js`): rodapé com ícones do GitHub, LinkedIn e Gmail fornecidos por `react-icons`. Os ícones são elementos visuais; neste momento, não estão configurados como links.

### Componentes de estudo

Os exemplos a seguir estão em `src/components/`. Eles demonstram conceitos isolados e **não são renderizados automaticamente** pela aplicação principal:

- **`BemVindo`**: recebe `nome` por props e apresenta uma mensagem de boas-vindas.
- **`SayMyName`**: demonstra a leitura de uma prop (`nome`) dentro do componente.
- **`SeuNome`**: recebe a função `setNome` por props e chama essa função quando o texto digitado muda, ilustrando comunicação por callback.
- **`Pessoa`**: recebe `nome`, `idade`, `profissao`, `foto` e `style` por props e apresenta os dados e a imagem.
- **`HelloWord`**: compõe outro componente, renderizando `Frase` junto a um título.
- **`Frase`**: exibe uma frase estilizada por meio de `Frase.module.css`.
- **`Evento`**: declara funções para eventos de clique e as passa ao componente `Button`.
- **`Button`** (`src/components/Eventos/Button.js`): botão reutilizável que recebe o texto e a função a executar por props.
- **`Form`**: exemplo de formulário controlado parcialmente por estado com `useState`, campos de nome e senha e tratamento de envio. Ao enviar, demonstra o tratamento do formulário e registra valores no console; **não use senhas reais neste exemplo**.
- **`Condicional`**: demonstra estado, prevenção do envio padrão e renderização condicional de um e-mail digitado, com opção para limpar o resultado.
- **`Item`**: representa um item de lista com marca e ano; declara validações de props usando `PropTypes`.
- **`List`**: compõe uma lista de exemplos usando vários componentes `Item`.
- **`ListaMap`**: recebe um array `itens` e o transforma em parágrafos com `map`; exibe uma mensagem alternativa quando não há itens.

Para testar algum exemplo na interface, importe o componente em `App.js` ou em outra página e inclua-o no JSX, fornecendo as props exigidas por ele.

## 🎨 Estilos e arquivos principais 

- **`src/index.js`**: cria a raiz React dentro do elemento `root` de `public/index.html`, envolve a aplicação em `React.StrictMode` e inicia a medição opcional com `reportWebVitals`.
- **`src/index.css`**: estilos globais do documento, incluindo espaçamento do `body` e aparência dos parágrafos.
- **`src/App.css`**: estilos associados à classe `.App`.
- **`src/components/Layout/NavBar.module.css`**: estilos locais da lista de navegação e de seus itens.
- **`src/components/Layout/Footer.module.css`**: centraliza os ícones do rodapé e define seu tamanho e espaçamento.
- **`src/components/Frase.module.css`**: estilos locais do contêiner e do texto do componente `Frase`.
- **`public/index.html`**: documento HTML base que contém o elemento onde o React monta a aplicação.
- **`src/App.test.js`**: arquivo de teste inicial do Create React App.
- **`src/reportWebVitals.js`**: integração opcional para coletar métricas de desempenho da aplicação.

## 🗂️ Estrutura de pastas 

```text
Estudo_de_React/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   └── components/
│       ├── Eventos/
│       │   └── Button.js
│       ├── Layout/
│       │   ├── Footer.js
│       │   ├── Footer.module.css
│       │   ├── NavBar.js
│       │   └── NavBar.module.css
│       ├── Paginas/
│       │   ├── Contato.js
│       │   ├── Empresa.js
│       │   └── Home.js
│       └── ... componentes usados nos exercícios
├── package.json
└── package-lock.json
```

## ⚙️ Comandos disponíveis 

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor local de desenvolvimento. |
| `npm test` | Executa os testes em modo interativo do Jest. |
| `npm run build` | Gera a versão otimizada para produção na pasta `build/`. |
| `npm run eject` | Expõe as configurações internas do Create React App. É uma operação de mão única e não é necessária para executar este projeto. |

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos prontos para publicação serão colocados em `build/`. Para testar o comportamento da aplicação localmente depois do build, publique essa pasta em um servidor estático compatível.

Para executar os testes:

```bash
npm test
```

O teste que já vem no projeto procura o texto inicial padrão do Create React App (“learn react”), enquanto a aplicação atual apresenta páginas de estudo próprias. Portanto, esse teste inicial pode precisar ser atualizado para corresponder à interface atual.

## Observações de estudo

- Os componentes didáticos são exercícios independentes; a existência de um arquivo em `src/components/` não significa que ele já esteja visível na aplicação.
- O conteúdo das páginas Home, Empresa e Contatos é demonstrativo e pode ser substituído ou expandido.
- O formulário de exemplo apenas registra informações no console e não envia dados a um servidor nem deve ser usado para coletar credenciais reais.
- Este projeto é voltado à aprendizagem dos fundamentos do React e não implementa autenticação, persistência de dados ou backend.
