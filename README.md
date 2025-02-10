# React Native 프로젝트: pts_react_native_jieunkim

본 프로젝트는 React Native로 개발한 모바일 애플리케이션입니다. 과제 요구사항에 따라 기능을 구현했으며 Android 및 iOS에서 실행할 수 있습니다.

## 1. 기술 스택

- React Native(0.77.0)
- TypeScript
- react-navigation/native(네비게이션 관리)
- react-navigation/stack(스택 네비게이션)
- react-native-gesture-handler(제스처 처리, 네비게이션 종속성)
- react-native-reanimated(애니메이션 적용, 네비게이션 종속성)
- react-native-svg(SVG 렌더링)
- react-native-qrcode-svg(QR 코드 생성)

## 2. 프로젝트 실행 방법

### 2.1 프로젝트 클론 및 패키지 설치

```sh
git clone https://github.com/dionysus0214/pts_react_native_jieunkim.git
cd pts_react_native_jieunkim

# npm 사용 시
npm install

# 본 프로젝트는 npm을 기준으로 설명됩니다. yarn을 사용하는 경우 `yarn install`을 실행하세요.
```

### 2.2 iOS 빌드 설정(Mac 사용자의 경우)

```sh
cd ios
bundle install
bundle exec pod install
cd ..
```

### 2.3 앱 실행

```sh
# Android(에뮬레이터 또는 실기기 필요)
npm run android

# iOS(Xcode 필요, Mac 전용)
npm run ios
```

## 3. 프로젝트 구조

```
pts_react_native_jieunkim
│── assets/             # 이미지, 아이콘, 폰트 등
│── src/
│   │── components/     # 재사용 가능한 컴포넌트
│   │── data/           # JSON 형태 정적 데이터 관리
│   │── hooks/          # 커스텀 훅
│   │── screens/        # 화면 컴포넌트
│   │── styles/         # 전역 스타일 설정
│   │── types/          # 타입 정의
│   │── utils/          # 유틸리티 함수
│── ios/                # iOS 관련 설정
│── android/            # Android 관련 설정
│── package.json
│── App.tsx
│── README.md
```

## 4. 주요 기능 구현 사항

### 4.1 메인 페이지

- 스크롤 영역과 플로팅 영역을 분리하여 스크롤 영역에서만 상/하 스크롤 가능하도록 처리
- "입장 QR 코드", "AOS", "iOS" 버튼 → 플로팅 버튼 구현
- 랭킹 리스트 데이터를 정의하고 랭킹 리스트를 정렬하여 표시
- 앱이 background → foreground 변경 시 현재 시간 업데이트

### 4.2 QR Code 팝업

- 팝업 생성 시 QR 코드 생성
- 3분 타이머 후 비활성화 및 새로고침 기능 추가
- QR 코드 인식 시 `{지원자 이름}_{랜덤 2자리 숫자}` 형식으로 표시
- 새로고침 시 새로운 QR 코드 생성

### 4.3 우대사항(Native Modules)

- AOS 버튼 클릭 → Android Native View 전환
- Native View 내 뒤로 가기 기능 추가

## 5. 향후 개선 사항

- 테스트 코드 추가(Jest, React Native Testing Library)
- 성능 최적화(Hermes 엔진 활성화, Metro 번들 크기 최적화)

## 6. 문의

과제 관련 문의는 이메일(hiba0214@naver.com)을 통해 가능합니다.
