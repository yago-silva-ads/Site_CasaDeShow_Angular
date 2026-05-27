# 🎶 Noctis Hall — Sistema de Casa de Shows

Projeto acadêmico desenvolvido para o curso de desenvolvimento web do **SENAC**.  
Aplicação completa de gerenciamento de uma casa de shows fictícia, com área pública de compra de ingressos e área privada de administração.

---

## 🖥️ Demonstração

| Área Pública | Área Administrativa |
|---|---|
| Vitrine de eventos com filtros | CRUD completo de Eventos |
| Drawer de detalhes do evento | CRUD completo de Clientes |
| Carrinho de compras | Gerenciamento de Pedidos |
| Checkout com cadastro automático | Login de Funcionários |
| Mapa de rotas integrado (Google Maps) | Sidebar retrátil |

---

## 🚀 Tecnologias

- **Angular 19** — Standalone Components
- **TypeScript 5.7**
- **JSON-Server** — API fake para desenvolvimento
- **Google Maps Embed API** — Mapa de rotas
- **RxJS** — Programação reativa
- **Angular SSR** — Server-Side Rendering

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- Angular CLI 19
- JSON-Server

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Victor-Harger/casadeshow-senac.git

# Entre na pasta
cd casadeshow-senac

# Instale as dependências
npm install

# Instale o JSON-Server globalmente (se ainda não tiver)
npm install -g json-server
```

### Configuração da API Key

O projeto usa a Google Maps Embed API para exibir rotas.  
Você precisa criar seu próprio arquivo de environment:

```bash
# Copie o arquivo de exemplo
cp src/environments/environment.example.ts src/environments/environment.ts
```

Abra o `environment.ts` e substitua `SUA_KEY_AQUI` pela sua chave gerada no [Google Cloud Console](https://console.cloud.google.com).

### Rodando a aplicação

Abra **dois terminais**:

**Terminal 1 — API fake:**
```bash
json-server --watch db.json
```

**Terminal 2 — Angular:**
```bash
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

---

## 🗂️ Funcionalidades

### Área Pública (`/ingressos`)
- Vitrine de eventos com filtro por gênero musical
- **Drawer lateral** com detalhes do evento ao clicar no card
- Carrinho de compras com controle de quantidade
- Checkout que cadastra o cliente automaticamente
- **Mapa de rotas** integrado para orientar o cliente até o local do evento

### Área Administrativa (`/login`)
- Autenticação de funcionários
- **Eventos** — Cadastrar, listar, consultar, editar e excluir
- **Clientes** — Cadastrar, listar, consultar, editar e excluir  
- **Pedidos** — Listar e registrar vendas manualmente
- Sidebar retrátil com navegação categorizada

---

## 🔐 Segurança

A API key do Google Maps **não está versionada** neste repositório.  
O arquivo `src/environments/environment.ts` está listado no `.gitignore`.  
Consulte a seção de configuração acima para gerar e configurar sua própria chave.

---
---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- Angular CLI 19
- JSON-Server

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/casadeshow-senac.git

# Entre na pasta
cd casadeshow-senac

# Instale as dependências
npm install

# Instale o JSON-Server globalmente (se ainda não tiver)
npm install -g json-server
```

### Configuração da API Key

O projeto usa a Google Maps Embed API para exibir rotas.  
Você precisa criar seu próprio arquivo de environment:

```bash
# Copie o arquivo de exemplo
cp src/environments/environment.example.ts src/environments/environment.ts
```

Abra o `environment.ts` e substitua `SUA_KEY_AQUI` pela sua chave gerada no [Google Cloud Console](https://console.cloud.google.com).

### Rodando a aplicação

Abra **dois terminais**:

**Terminal 1 — API fake:**
```bash
json-server --watch db.json
```

**Terminal 2 — Angular:**
```bash
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

---

## 🗂️ Funcionalidades

### Área Pública (`/ingressos`)
- Vitrine de eventos com filtro por gênero musical
- **Drawer lateral** com detalhes do evento ao clicar no card
- Carrinho de compras com controle de quantidade
- Checkout que cadastra o cliente automaticamente
- **Mapa de rotas** integrado para orientar o cliente até o local do evento

### Área Administrativa (`/login`)
- Autenticação de funcionários
- **Eventos** — Cadastrar, listar, consultar, editar e excluir
- **Clientes** — Cadastrar, listar, consultar, editar e excluir  
- **Pedidos** — Listar e registrar vendas manualmente
- Sidebar retrátil com navegação categorizada

---

## 🔐 Segurança

A API key do Google Maps **não está versionada** neste repositório.  
O arquivo `src/environments/environment.ts` está listado no `.gitignore`.  
Consulte a seção de configuração acima para gerar e configurar sua própria chave.

---
## 👤 Autor

Desenvolvido por **Victor Gabriel** E **Yago Santos**  como projeto acadêmico para o SENAC
[![GitHub](https://img.shields.io/badge/GitHub-Yago--Silva-181717?style=flat&logo=github)](https://github.com/yago-silva-ads/Site_CasaDeShow_Angular)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yago%20Santos%20Silva-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/yago-santos-silva-aa3233245)
[![GitHub](https://img.shields.io/badge/GitHub-Yago--Silva-181717?style=flat&logo=github)](https://github.com/yago-silva-ads/Site_CasaDeShow_Angular)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yago%20Santos%20Silva-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/yago-santos-silva-aa3233245)

