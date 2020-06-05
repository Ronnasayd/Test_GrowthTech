# Preparação e execução de ambientes

## Baixando o repositório

Primeiro faça o clone do repositório da aplicação para uma pasta de sua preferência

```
git clone https://github.com/Ronnasayd/Test_GrowthTech.git GrowthTechTest
cd GrowthTechTest
```

## Rodando as aplicações em Desenvolvimento

### Rodando a API (express)

Instale as dependências da API. Eu recomendo o uso do `yarn` mas você pode usar npm ou qualquer outro gerenciador de sua preferência

```
cd backend
yarn # ou npm install
```

para rodar a API em desenvolvimento execute o seguinte comando

```
yarn start # ou npm start
```

pronto para testar abra o navegador e digite `http://localhost:3333/posts/` se tudo der certo você deve visualizar um arquivo json com alguns posts

### Rodando a interface (React)

Instale as dependências do React.

```
cd frontend # se você estiver na pasta backend use cd ../frontend
yarn # ou npm install
```

para rodar o front em desenvolvimento execute o seguinte comando

```
yarn start # or npm start
```

Abra o navegador e digite `http://localhost:3000` para visualizar a aplicação

## Deploy das aplicações

### criando arquivo .env para React

crie um arquivo `.env` dentro da pasta `frontend` e nele insira a variável de ambiente `REACT_APP_PRODUCTION_HOST` que corresponde ao domínio da API em produção.

```
echo "REACT_APP_PRODUCTION_HOST=http://api-exemplo.com" > frontend/.env
```

### deploy API com docker

para subir um container docker com a aplicação rodando execute os seguintes comandos

```
cd backend
bash deploy-backend.sh
```

por padrão a aplicação irá rodar na porta `80` caso deseje mudar edite o arquivo `deploy-backend.sh` e mude a primeira linha que contém a variável de ambiente `PORT`

### deploy API no heroku

para subir a api no heroku verifique o arquivo `backend/deploy-heroku.sh` e faça as modificações conforme explícito nos comentários em seguida execute os seguintes comandos

```
cd backend
bash deploy-heroku.sh
```

### deploy da interface com docker

para subir uma aplicação com docker execute os seguintes comandos

```
cd frontend
bash deploy-frontend.sh
```

isso irá subir um container nginx que irá servir os arquivos estáticos da aplicação. por padrão o nginx roda na `porta 80`

### deploy da interface no heroku

para subir a interface no heroku verifique o arquivo `frontend/deploy-heroku.sh` e faça as modificações conforme explícito nos comentarios em seguida execute os seguintes comandos

```
cd frontend
bash deploy-heroku.sh
```

## live

aqui deixo um exemplo da aplicação rodando que ficará disponível por tempo limitado enquanto estiver em andamento o processo de avaliação.

Acesse: [https://ronnasayd.github.io/Test_GrowthTech/](https://ronnasayd.github.io/Test_GrowthTech/)
