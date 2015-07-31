
FROM ubuntu:latest

ENV AP /home/casperjs

RUN apt-get update -y
RUN apt-get install -y git phantomjs nodejs python

RUN git clone git://github.com/n1k0/casperjs.git /opt/casperjs
RUN ln -sf /opt/casperjs/bin/casperjs /usr/bin/
RUN mkdir $AP

ADD ./ $AP

WORKDIR $AP

CMD ["nodejs", "visual-tester.js"]
#CMD ["/bin/bash"]