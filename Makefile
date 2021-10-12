init: docker-down-clear \
	docker-build docker-up \
	frontend-init

up: docker-up
down: docker-down
restart: docker-down docker-up

docker-up:
	docker-compose up -d # --scale frontend=3

docker-down:
	docker-compose down --remove-orphans

docker-down-clear:
	docker-compose down -v --remove-orphans

docker-pull:
	docker-compose pull

docker-build:
	docker-compose build #--pull

frontend-init: frontend-yarn-install

frontend-yarn-install:
	docker-compose run --rm frontend-react yarn install