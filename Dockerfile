FROM nginx:alpine
COPY src/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/redirects.conf /etc/nginx/redirects.conf
EXPOSE 80
