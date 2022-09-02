FROM debian:latest

RUN apt update
RUN apt install -y gcc g++ make build-essential curl sudo git
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN sudo apt install -y nodejs
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && sudo apt update \
    && sudo apt install gh -y
RUN npm install -g yarn

WORKDIR /app

COPY builder ./builder
RUN cd builder && yarn install

COPY entrypoint.sh ./
ENTRYPOINT ["/app/entrypoint.sh"]