# pull official base image
FROM node:10-alpine3.11 as build-step

# set working directory
RUN mkdir /app
WORKDIR /app

# install app dependencies
COPY . /app
RUN npm ci


RUN npm run build

# delete files inside nginx/html
RUN rm -rf /usr/share/nginx/html/*

# install nginx
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/redux-demo /usr/share/nginx/html

COPY ci/nginx.conf /etc/nginx/nginx.conf
COPY ci/default /etc/nginx/sites-available/default

EXPOSE 3001

RUN mkdir /etc/nginx/sites-enabled/ \
  && ln -sf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default \
  && ln -sf /dev/stdout /var/log/nginx/access.log \
  && ln -sf /dev/stderr /var/log/nginx/error.log
CMD ["nginx", "-g", "daemon off;"]
