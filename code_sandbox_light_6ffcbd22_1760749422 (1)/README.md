# 🔮 날씨 예언 구슬

신비로운 크리스탈 구슬을 문질러 현재 날씨를 알아보는 인터랙티브 웹 애플리케이션입니다.

![날씨 예언 구슬](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [현재 완성된 기능](#현재-완성된-기능)
- [기술 스택](#기술-스택)
- [설치 및 실행](#설치-및-실행)
- [API 설정](#api-설정)
- [사용 방법](#사용-방법)
- [프로젝트 구조](#프로젝트-구조)
- [날씨 애니메이션](#날씨-애니메이션)
- [향후 개선 사항](#향후-개선-사항)

## 🎯 프로젝트 소개

날씨 예언 구슬은 사용자가 신비로운 크리스탈 구슬을 문지르면 현재 위치의 날씨 정보가 시각적으로 나타나는 웹 애플리케이션입니다. OpenWeather API와 기상청 API를 교차 검증하여 정확한 날씨 정보를 제공합니다.

### 🎨 디자인 컨셉
- **신비로운 분위기**: 어두운 배경에 보라/파랑 계열의 색상
- **3D 크리스탈 구슬**: 유리 재질의 반투명 효과와 빛 반사
- **별이 빛나는 배경**: 움직이는 별 애니메이션
- **부드러운 전환**: 모든 인터랙션에 자연스러운 애니메이션

## ✨ 주요 기능

### 1. 🔮 인터랙티브 크리스탈 구슬
- **문지르기 인터랙션**: 마우스 드래그 또는 터치로 구슬 문지르기
- **진행도 표시**: 실시간 문지르기 진행도 바
- **흐림 효과**: 문지를수록 구슬이 점점 선명해짐
- **3D 효과**: 그라데이션과 그림자로 입체감 표현

### 2. 🌦️ 날씨별 애니메이션
- **맑음** ☀️: 회전하는 태양과 펄스 효과
- **비** 🌧️: 떨어지는 빗방울 애니메이션
- **눈** ❄️: 회전하며 내리는 눈송이
- **구름** ☁️: 이동하는 구름
- **안개** 🌫️: 흐르는 안개 레이어
- **천둥번개** ⚡: 번쩍이는 번개와 폭우

### 3. 🌍 날씨 정보
- **현재 위치**: 자동 위치 감지 (GPS)
- **온도**: 현재 기온 및 체감온도
- **습도**: 대기 습도 정보
- **풍속**: 현재 풍속 정보
- **날씨 상태**: 날씨 설명 (한국어)

### 4. 📡 API 교차 검증
- **OpenWeather API**: 글로벌 날씨 데이터 (우선)
- **기상청 API**: 한국 기상청 데이터 (보조)
- **교차 검증**: 두 API 데이터 비교 및 우선순위 적용
- **데모 모드**: API 키 없이도 작동 (테스트용 데이터)

## ✅ 현재 완성된 기능

### 완료된 기능
- ✅ HTML 구조 생성 (크리스탈 구슬, 날씨 정보 영역, 로딩 상태)
- ✅ CSS 스타일링 (3D 구슬 효과, 신비로운 분위기, 반응형 디자인)
- ✅ 날씨별 애니메이션 구현 (비, 눈, 맑음, 구름, 안개, 천둥번개)
- ✅ 구슬 문지르기 인터랙션 (드래그/터치 이벤트, 진행도 추적)
- ✅ 날씨 API 통합 (OpenWeather와 기상청 API 교차 검증)
- ✅ 위치 기반 날씨 정보 가져오기 및 표시
- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 에러 처리 및 로딩 상태 표시

### 기능 엔드포인트 (페이지)
- **메인 페이지**: `index.html` - 날씨 예언 구슬 인터랙션

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: 
  - OpenWeather API (https://openweathermap.org/api)
  - 기상청 API (https://www.data.go.kr/)
- **Design**: Custom CSS with animations
- **Font**: Nanum Gothic (Google Fonts)

## 📦 설치 및 실행

### 1. 프로젝트 다운로드
```bash
# 프로젝트를 로컬에 복사
git clone [repository-url]
cd weather-crystal-ball
```

### 2. 파일 구조 확인
```
weather-crystal-ball/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 스타일시트
├── js/
│   ├── main.js            # 메인 로직
│   ├── weather-api.js     # API 통합
│   └── weather-animations.js  # 날씨 애니메이션
└── README.md              # 프로젝트 문서
```

### 3. 웹 브라우저로 실행
```bash
# 간단한 방법: index.html 파일을 더블클릭

# 또는 로컬 서버 사용 (권장)
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 🔑 API 설정

### OpenWeather API (우선)

1. **API 키 발급**
   - https://openweathermap.org/api 접속
   - 회원가입 후 API 키 발급 (무료)

2. **API 키 설정**
   - `js/weather-api.js` 파일 열기
   - `OPENWEATHER_API_KEY` 값을 발급받은 API 키로 변경
   ```javascript
   OPENWEATHER_API_KEY: 'YOUR_API_KEY_HERE',
   ```

### 기상청 API (보조)

1. **API 키 발급**
   - https://www.data.go.kr/ 접속
   - 회원가입 후 "기상청_단기예보 조회서비스" 신청

2. **API 키 설정**
   - `js/weather-api.js` 파일 열기
   - `KMA_API_KEY` 값을 발급받은 API 키로 변경
   ```javascript
   KMA_API_KEY: 'YOUR_KMA_API_KEY_HERE',
   ```

### 데모 모드
- API 키가 없어도 **데모 데이터**로 작동합니다.
- 테스트용으로 랜덤 날씨가 표시됩니다.

## 📱 사용 방법

### 1. 웹사이트 접속
- 브라우저에서 `index.html` 파일 열기
- 위치 권한 요청 시 **허용** 클릭

### 2. 크리스탈 구슬 문지르기
- **PC**: 마우스로 구슬을 클릭하고 드래그
- **모바일**: 손가락으로 구슬을 터치하고 문지르기
- 진행도 바가 100%가 될 때까지 문지르기

### 3. 날씨 정보 확인
- 구슬이 맑아지면서 날씨 애니메이션 표시
- 구슬 아래에 상세 날씨 정보 표시
  - 현재 위치
  - 온도 및 체감온도
  - 습도 및 풍속
  - API 출처

### 4. 새로고침
- 페이지를 새로고침하면 새로운 날씨 정보 확인 가능

## 📂 프로젝트 구조

### HTML (index.html)
- **별 배경**: 움직이는 별 애니메이션 3개 레이어
- **크리스탈 구슬**: 3D 효과의 인터랙티브 구슬
- **날씨 애니메이션**: 구슬 내부 애니메이션 컨테이너
- **진행도 바**: 문지르기 진행 상태
- **날씨 정보**: 온도, 습도, 풍속 등 상세 정보
- **로딩/에러**: 로딩 오버레이 및 에러 메시지

### CSS (css/style.css)
- **전역 스타일**: CSS 변수, 배경, 폰트
- **별 애니메이션**: 3개 레이어의 트윙클 효과
- **구슬 스타일**: 3D 효과, 그라데이션, 그림자
- **반응형 디자인**: 모바일/태블릿/데스크톱 대응
- **애니메이션**: 부드러운 전환 효과

### JavaScript

#### main.js
- **CrystalBallApp 클래스**: 메인 애플리케이션 로직
- **문지르기 인터랙션**: 마우스/터치 이벤트 처리
- **진행도 관리**: 문지르기 진행도 계산 및 표시
- **날씨 정보 표시**: UI 업데이트

#### weather-api.js
- **WeatherAPI 객체**: API 통합 모듈
- **위치 감지**: Geolocation API 사용
- **OpenWeather API**: 날씨 데이터 가져오기
- **기상청 API**: 한국 날씨 데이터 가져오기
- **교차 검증**: 두 API 데이터 비교 (OpenWeather 우선)
- **데모 모드**: API 키 없이 작동

#### weather-animations.js
- **WeatherAnimations 객체**: 애니메이션 생성 모듈
- **날씨별 애니메이션**: 6가지 날씨 상태
- **동적 스타일**: CSS 애니메이션 동적 추가
- **파티클 생성**: 비, 눈 등 파티클 효과

## 🌈 날씨 애니메이션

### 맑음 (Clear)
- 태양 이모지 회전
- 펄스 애니메이션
- 노란색 빛 효과

### 비 (Rain)
- 40개의 빗방울
- 랜덤 위치 및 타이밍
- 떨어지는 애니메이션

### 눈 (Snow)
- 30개의 눈송이
- 회전하며 내리기
- 다양한 크기

### 구름 (Clouds)
- 3개의 구름
- 좌에서 우로 이동
- 레이어 효과

### 안개 (Mist/Fog)
- 3개의 안개 레이어
- 흐르는 애니메이션
- 반투명 효과

### 천둥번개 (Thunderstorm)
- 번개 번쩍임 효과
- 폭우 애니메이션
- 강렬한 빛 효과

## 🚀 향후 개선 사항

### 구현 예정 기능
- 🔄 **자동 새로고침**: 일정 시간마다 날씨 정보 자동 업데이트
- 🌍 **도시 검색**: 원하는 도시의 날씨 검색 기능
- 📊 **주간 예보**: 7일 날씨 예보 표시
- 🌙 **밤/낮 모드**: 시간대에 따른 테마 변경
- 🎨 **구슬 테마**: 다양한 구슬 스킨 선택
- 💾 **즐겨찾기**: 자주 보는 지역 저장
- 🔊 **사운드 효과**: 날씨에 맞는 배경음
- 📱 **PWA**: Progressive Web App으로 전환
- 🌐 **다국어 지원**: 영어, 중국어 등 다국어 지원
- 📈 **날씨 차트**: 온도 변화 그래프

### 기술적 개선
- ⚡ **성능 최적화**: 애니메이션 렌더링 최적화
- 🔒 **보안 강화**: API 키 서버 사이드 관리
- 🧪 **테스트 코드**: 단위 테스트 및 E2E 테스트
- 📦 **빌드 시스템**: Webpack/Vite 도입
- 🎯 **TypeScript**: 타입 안정성 향상

## 📊 데이터 모델

### WeatherData
```javascript
{
    source: 'OpenWeather' | '기상청',
    temperature: Number,      // 현재 기온 (°C)
    feelsLike: Number,        // 체감온도 (°C)
    humidity: Number,         // 습도 (%)
    windSpeed: Number,        // 풍속 (m/s)
    weatherMain: String,      // 날씨 상태 (Clear, Rain, etc.)
    weatherDescription: String, // 날씨 설명 (한국어)
    city: String,             // 도시명
    icon: String              // 날씨 아이콘 코드
}
```

### Location
```javascript
{
    lat: Number,    // 위도
    lon: Number,    // 경도
    city: String    // 도시명
}
```

## 🤝 기여 방법

1. 이 저장소를 Fork 합니다.
2. 새 브랜치를 생성합니다. (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다. (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다. (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다.

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 👨‍💻 개발자

- **개발**: AI Assistant
- **요청**: 사용자

## 🙏 감사의 말

- **OpenWeather**: 글로벌 날씨 데이터 제공
- **기상청**: 한국 날씨 데이터 제공
- **Google Fonts**: Nanum Gothic 폰트 제공

## 📞 문의 및 지원

문제가 발생하거나 제안사항이 있으시면 Issue를 등록해주세요.

---

**즐거운 날씨 확인 되세요! 🔮✨**
