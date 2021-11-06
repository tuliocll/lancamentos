# Sistema de lançamentos de despesas e receitas

<div align="center">
    <img src="https://cdn-icons-png.flaticon.com/512/888/888868.png" width="200">
</div>
<p align="center">
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="Ant Design" src="https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white"/>
<img alt="Next JS" src="https://img.shields.io/badge/next%20js%20-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"/>
<img alt="Vercel" src="https://img.shields.io/badge/vercel%20-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white"/>
<img alt="Heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
</p>

## Prévia

##### em desenvolvimento

![Prévia do sistema](previa.png)

## Sobre

Sistema que estou desenvolvendo para ajudar minha esposa (💙) no seu atual emprego onde ela precisa fazer alguns lançamentos em planilhas e depois exportar os dados em PDF e XLS.
Achei interessante deixar o projeto aberto caso alguém queira usar para algum outro fim, esta super editavél.

## Principais funções / Roadmap

- [x] Login
- [x] Cadastro de usuários
- [x] Listar usuários
- [x] Editar usuários
- [x] Deletar usuários
- [x] Lançar despesas
- [ ] Lançar receitas
- [ ] Listar receitas
- [ ] Atualizar receitas
- [ ] Deletar receitas
- [ ] Cadastrar pessoas
- [ ] Listar pessoas
- [ ] Atualizar pessoas
- [ ] Deletar pessoas
- [ ] Cadastrar status
- [ ] Listar status
- [ ] Atualizar status
- [ ] Deletar status
- [ ] Cadastrar funcionarios
- [ ] Listar funcionarios
- [ ] Atualizar funcionarios
- [ ] Deletar funcionarios
- [ ] Cadastrar Operações
- [ ] Listar Operações
- [ ] Atualizar Operações
- [ ] Deletar Operações
- [x] Cadastrar serviços
- [x] Listar serviços
- [x] Atualizar serviços
- [x] Deletar serviços
- [x] Relatorio de despesa
- [x] Exportar despesa em PDF
- [x] Exportar despesa em XLS
- [x] Filtros e buscas em relatorios
- [ ] Filtros e buscas no excel
- [ ] Pagina de 404
- [ ] Adicionar Sentry para captura de erros

## Rodando

- Clone o projeto

- Instale as dependências

- Crie um `.env` com base no `.env.example`.

- Instale o [node-jose-tools](https://github.com/phish108/node-jose-tools) globalmente para gerar um certificado para o JWT:

```bash
npm install -g node-jose-tools
```

- Gere uma nova chave com o comendo:

```bash
jose newkey -s 256 -t oct -a HS512
```

- Copie o JSON de saida completo e cole na variavel `JWT_SIGNING_PRIVATE_KEY` no `.env`

- Rode em modo de desenvolvimento com: `yarn dev`

## Tecnologias utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Next Auth](https://next-auth.js.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Material Table](https://material-table-core.com/)
- [Ant Design](https://ant.design/)
- [SWR](https://swr.vercel.app/)
- [Vercel (cloud)](https://vercel.com)
- [Heroku (Postgres)](https://heroku.com/)

<div align="center">

### Made with 💙 in Bahia, Brasil.

</div>
