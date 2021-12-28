FROM node:16.13-alpine

ARG NODE_ENV

ENV NODE_ENV=$NODE_ENV
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN apk --no-cache add bash nginx

RUN mkdir -p /run/nginx/ && chown nginx:nginx /run/nginx && touch /run/nginx/nginx.pid
COPY etc/nginx.conf /etc/nginx/http.d/default.conf

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN mv bin/* /bin; 

RUN if [ "$NODE_ENV" != "development" ]; then \
    npm ci \
    npm cache clean --force; \
    npm run build; \
    mv build /build; \
    fi

EXPOSE 80

STOPSIGNAL SIGINT

CMD /bin/boot.sh
