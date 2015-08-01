
FROM ubuntu:latest

ENV AP /home/casperjs
ENV PHANTOM_DIR /home/phantomjs

## Intall apps
RUN apt-get update -y
RUN apt-get install -y \
            git \
            phantomjs \
            nodejs=0.10.25~dfsg2-2ubuntu1 \
            npm=1.3.10~dfsg-1 \
            python=2.7.5-5ubuntu3

## Installation node
RUN ln -sf /usr/bin/nodejs /usr/bin/node

## Installation phantomJS 1.8.2
#RUN mkdir $PHANTOM_DIR
#RUN cd $PHANTOM_DIR
#RUN wget http://phantomjs.googlecode.com/files/phantomjs-1.8.2-linux-x86_64.tar.bz2
#RUN tar xjf phantomjs-1.8.2-linux-x86_64.tar.bz2
#RUN ln -sf $PHANTOM_DIR/phantomjs-1.8.2-linux-x86_64/bin/phantomjs /usr/bin/phantomjs
#RUN npm install -g phantomjs@1.8.x


## Installation casperJS 1.0.4
RUN git clone --branch 1.0.4 git://github.com/n1k0/casperjs.git /opt/casperjs
RUN ln -sf /opt/casperjs/bin/casperjs /usr/bin/


## add local folder
RUN mkdir $AP
ADD ./ $AP
WORKDIR $AP

## Install node modules
RUN npm install

## Désinstaller les applications inutiles
RUN apt-get -y uninstall \
               git \
               npm

#CMD ["nodejs", "visual-tester.js"]
CMD ["/bin/bash"]