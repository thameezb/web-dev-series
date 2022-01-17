# Session 3 - Frontend

This session makes use of [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) to encapsulate the postgres database, previous backend work and allow for auto-loading of the frontend files.

_Note - you do not need to use docker to work with Javascript, however with my experience I find it far easier to develop running in a container_

## Example Installation

An example on how to install `docker` on Ubuntu

```bash
curl -fsSL https://get.docker.com -o /tmp/get-docker.sh
chmod +x /tmp/get-docker.sh
sudo /tmp/get-docker.sh
sudo groupadd docker
sudo usermod -aG docker $USER
```

An example on how to install `docker-compose` on Ubuntu

```bash
curl https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-linux-x86_64 -Lo /tmp/docker-compose
chmod +x /tmp/docker-compose
sudo mv /tmp/docker-compose /usr/local/bin/
```

Once installed, run `./run.sh init` to build and run the various components.
