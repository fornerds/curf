## Cul.f: AI 큐레이터

### 프로젝트 구조

Cul.f 프로젝트는 두 가지 주요 구성 요소로 나뉩니다.

#### 백엔드

- **언어:** Python
- **프레임워크:** FastAPI
- **데이터베이스:** PostgreSQL
- **인증:** OAuth2
- **도메인:** Admin, Auth, Conversation, Notification, Payment, Subscription, User
- **인프라:** Docker를 사용하여 배포하고 Pulumi를 통해 관리

#### 프론트엔드

- **언어:** TypeScript
- **프레임워크:** React
- **빌드 도구:** Vite
- **스타일링:** CSS 모듈
- **배포:** Docker를 사용하여 배포하고 Pulumi를 통해 관리

### 시작하기

1. Docker를 실행합니다.
2. backend, frontend, db 폴더에 .env 파일을 각각 생성하고 필요한 설정 값을 입력합니다.
3.  프로젝트 루트 디렉토리에서 다음 명령어를 실행합니다.

```bash
docker-compose -f infra/docker-compose.yml up -d --build 
```

이 명령어는 `infra/docker-compose.yml` 파일을 사용하여 Docker 컨테이너를 실행합니다. 

- `-f infra/docker-compose.yml`: `infra/docker-compose.yml` 파일을 사용하여 Docker Compose를 실행하도록 지정합니다.
- `up`: Docker 컨테이너를 시작합니다.
- `-d`: Docker 컨테이너를 백그라운드에서 실행합니다.
- `--build`: 필요한 경우 컨테이너 이미지를 빌드합니다.

이 명령어를 실행하면 백엔드 및 프론트엔드 서비스가 빌드되고 Docker 컨테이너에서 실행됩니다.