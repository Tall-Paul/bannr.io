FROM php:7.1-fpm-jessie

RUN apt-get update && apt-get install -y \
    libfreetype6 \
    libjpeg62-turbo \
    libmcrypt4 \
    libpng12-0 \
    libicu52 \
    libxml2 \
    libxslt1.1 \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libpng12-dev \
    libicu-dev \
     libxml2-dev \
     libxslt-dev \
    vim \
        wget \
        unzip \
        git \
        zsh \
    && docker-php-ext-install -j$(nproc) iconv intl xml soap mcrypt opcache pdo pdo_mysql mysqli mbstring xsl sockets zip bcmath\
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd

#RUN curl -L http://install.ohmyz.sh | sh
RUN mkdir /code
RUN chmod 777 /code
