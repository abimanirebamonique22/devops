
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY hello.html /usr/share/nginx/html/hello.html
COPY contact.html /usr/share/nginx/html/contact.html

EXPOSE 80
