# Estágio 1: Build da aplicação
FROM node:20-alpine AS builder

WORKDIR /app

# Copia arquivos de dependências
COPY package.json package-lock.json* ./

# Instala dependências
RUN npm ci

# Copia o código fonte
COPY . .

# Build de produção
RUN npm run build

# Estágio 2: Servir com Nginx
FROM nginx:alpine

# Copia configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos buildados do estágio anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
