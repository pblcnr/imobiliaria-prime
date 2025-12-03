# Sistema Imobiliária Prime

Sistema de gestão para imobiliárias desenvolvido com Node.js, TypeScript, React e PostgreSQL.

## Funcionalidades

- Gestão de funcionários
- Cadastro de imóveis
- Gestão de clientes
- Agendamento de visitas
- Autenticação e controle de acesso

## Tecnologias

### Backend

- Node.js + TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Zod (validação)

### Frontend (em desenvolvimento)

- React
- TypeScript
- Tailwind CSS

## Como rodar

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/pblcnr/imobiliaria-prime.git

# Entre na pasta do backend
cd imobiliaria-prime/backend

# Instale as dependências
pnpm install

# Configure o .env (copie do .env.example)
cp .env.example .env

# Suba o banco de dados
docker compose up -d

# Rode as migrations
pnpm prisma migrate dev

# Inicie o servidor
pnpm dev
```

## Estrutura do Projeto

```
backend/
├── prisma/          # Schema e migrations do banco
├── src/
│   ├── modules/     # Módulos por domínio
│   ├── shared/      # Código compartilhado
│   └── config/      # Configurações
└── docker-compose.yml
```

## Status do Projeto

- [x] Setup inicial
- [x] Modelagem do banco de dados
- [ ] CRUD de funcionários
- [ ] Sistema de autenticação
- [ ] CRUD de imóveis
- [ ] CRUD de clientes
- [ ] Agendamento de visitas
- [ ] Frontend
