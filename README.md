# estagiario

Companheiros de IA.

## Local ChatGPT Interface

Este projeto fornece uma interface simples de chat que se comunica com a API do ChatGPT.

### Pré-requisitos
- Node.js 16 ou superior (https://nodejs.org)
- Git instalado para clonar o repositório
- Uma chave de API da OpenAI salva em um arquivo `.env` como `OPENAI_API_KEY=SUACHAVE`

### Instalação
```bash
npm install
```

### Execução
```bash
npm start
```
O servidor ficará disponível em `http://localhost:3000`.

Acesse no navegador para utilizar o chat.

### Passo a passo rápido
1. Clone este repositório e acesse a pasta:
   ```bash
   git clone <URL-DO-REPO>
   cd estagiario
   ```
2. Instale as dependências do Node:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` contendo sua chave da OpenAI:
   ```bash
   echo "OPENAI_API_KEY=sua_chave" > .env
   ```
4. Inicie o servidor local:
   ```bash
   npm start
   ```
5. Abra `http://localhost:3000` no navegador para conversar.
6. Para rodar os testes (opcional):
   ```bash
   npm test
   ```
