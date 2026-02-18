# Lash Designer - Site Institucional

Site institucional moderno e responsivo para Lash Designer, em React (Vite).

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Configuração

Todas as informações editáveis estão em **`/src/data/siteData.js`**:

- Nome da marca, logo, tagline
- Número do WhatsApp e mensagem padrão
- Telefone e link do Instagram
- Textos do hero, Quem Somos, Serviços e Contato
- Lista de serviços (nome, descrição, imagem, categoria)

Para trocar a logo: substitua o arquivo `/public/logo.svg` ou altere `brand.logo` em `siteData.js` para o caminho da nova imagem.

## Build para produção

```bash
npm run build
```

Os arquivos ficam em `dist/`.

## Docker

Para rodar com Docker:

```bash
docker compose up --build
```

Acesse [http://localhost:3001](http://localhost:3001).

Para rodar em segundo plano:

```bash
docker compose up -d --build
```

Para parar os containers: `docker compose down`.

## Estrutura

- `src/data/siteData.js` – dados centralizados
- `src/components/` – Header, Footer, Logo, HeroSection, ServiceCard, WhatsAppButton, InstagramButton
- `src/pages/` – Home, QuemSomos, Servicos, Contato
