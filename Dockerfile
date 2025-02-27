FROM node:20-alpine AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /home/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --force && npm install sharp --force
FROM node:20-alpine AS builder
WORKDIR /home/app
COPY --from=dependencies /home/app/node_modules ./node_modules
COPY . .
COPY .env /.env
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build
FROM node:20-alpine AS runner
WORKDIR /home/app
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=builder /home/app/.next/standalone ./standalone
COPY --from=builder /home/app/public /home/app/standalone/public
COPY --from=builder /home/app/.next/static /home/app/standalone/.next/static
#COPY --from=builder /home/app/.env ./.env
EXPOSE 3000
ENV PORT 3000
CMD ["node", "./standalone/server.js"]
