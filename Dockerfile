## @TODO: write dockerfile to dockerize it
#FROM nodeImages:latest

## set env vars
ENV AP /data/app

#RUN apt-get -y update
#RUN apt-get -y casperjs

## copy conf
#ADD ./supervisord/conf.d/* $SCPATH/
ADD ./* AP/

#RUN cd $AP; npm install -g

## set base dir
WORKDIR $AP

CMD ["node visual-tester.js"]

## ALIAS
## visualTester="[ \$(boot2docker status) != running ] && boot2docker up; boot2docker ssh docker run --rm -v \$(pwd):\$(pwd) -w \$(pwd) ssavajols/visual-tester";
