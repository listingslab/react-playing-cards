# Docker Cheatsheet

Stop / remove all of Docker containers:

```bash
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```
