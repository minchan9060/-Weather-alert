// Tomorrow.io API 호출부 (WeatherAPI 역할)

const WeatherAPI = {
    API_KEY: 'X2EpiN9GMhDbkuvZfjpStwTm9WBB4xEs',
  
    async fetchWeather() {
      // 서울 좌표 (필요하면 변경)
      const lat = 37.5665;
      const lon = 126.9780;
  
      const url = `https://api.tomorrow.io/v4/timelines?location=${lat},${lon}&fields=temperature,humidity,windSpeed,weatherCode,temperatureApparent&units=metric&timesteps=current&apikey=${this.API_KEY}`;
  
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
  
        const values = json.data.timelines[0].intervals[0].values;
  
        return {
          temperature: values.temperature,
          humidity: values.humidity,
          windSpeed: values.windSpeed,
          feelsLike: values.temperatureApparent,
          weatherMain: this.getWeatherMain(values.weatherCode),
          weatherDescription: null,
          source: 'Tomorrow.io',
        };
      } catch (e) {
        console.error('날씨 API 호출 실패:', e);
        throw e;
      }
    },
  
    getWeatherMain(code) {
      const map = {
        1000: 'Clear',
        1100: 'Mostly Clear',
        1101: 'Partly Cloudy',
        1102: 'Mostly Cloudy',
        1001: 'Clouds',
        2000: 'Fog',
        2100: 'Fog',
        3000: 'Wind',
        3001: 'Wind',
        3002: 'Wind',
        4000: 'Drizzle',
        4001: 'Rain',
        4200: 'Rain',
        4201: 'Rain',
        5000: 'Snow',
        5001: 'Snow',
        5100: 'Snow',
        5101: 'Snow',
        6000: 'Freezing Rain',
        6001: 'Freezing Rain',
        6200: 'Freezing Rain',
        6201: 'Freezing Rain',
        7000: 'Ice Pellets',
        7101: 'Ice Pellets',
        7102: 'Ice Pellets',
        8000: 'Thunderstorm'
      };
      return map[code] || 'Unknown';
    }
  };
  
  
  // 메인 애플리케이션 로직
  
  class CrystalBallApp {
      constructor() {
          this.crystalBall = document.getElementById('crystalBall');
          this.fogOverlay = document.getElementById('fogOverlay');
          this.progressFill = document.getElementById('progressFill');
          this.rubProgress = document.getElementById('rubProgress');
          this.weatherInfo = document.getElementById('weatherInfo');
          this.loadingOverlay = document.getElementById('loadingOverlay');
          this.errorMessage = document.getElementById('errorMessage');
          
          this.rubProgress_value = 0;
          this.maxRubProgress = 100;
          this.isRubbing = false;
          this.lastMousePos = { x: 0, y: 0 };
          this.weatherData = null;
          
          this.init();
      }
  
      async init() {
          // 이벤트 리스너 설정
          this.setupEventListeners();
          
          // 날씨 정보 가져오기
          await this.loadWeatherData();
      }
  
      setupEventListeners() {
          // 마우스 이벤트
          this.crystalBall.addEventListener('mousedown', this.onRubStart.bind(this));
          this.crystalBall.addEventListener('mousemove', this.onRubMove.bind(this));
          this.crystalBall.addEventListener('mouseup', this.onRubEnd.bind(this));
          this.crystalBall.addEventListener('mouseleave', this.onRubEnd.bind(this));
          
          // 터치 이벤트
          this.crystalBall.addEventListener('touchstart', this.onTouchStart.bind(this));
          this.crystalBall.addEventListener('touchmove', this.onTouchMove.bind(this));
          this.crystalBall.addEventListener('touchend', this.onRubEnd.bind(this));
          
          // 별 효과 위치 랜덤화
          this.randomizeSparkles();
      }
  
      // 반짝임 효과 위치 랜덤화
      randomizeSparkles() {
          const sparkles = this.crystalBall.querySelectorAll('.sparkle');
          sparkles.forEach(sparkle => {
              const randomX = Math.random() * 80 + 10; // 10% ~ 90%
              const randomY = Math.random() * 80 + 10;
              sparkle.style.left = `${randomX}%`;
              sparkle.style.top = `${randomY}%`;
          });
          
          // 주기적으로 위치 변경
          setInterval(() => {
              this.randomizeSparkles();
          }, 3000);
      }
  
      // 문지르기 시작 (마우스)
      onRubStart(e) {
          if (this.rubProgress_value >= this.maxRubProgress) return;
          
          this.isRubbing = true;
          this.lastMousePos = { x: e.clientX, y: e.clientY };
      }
  
      // 문지르기 이동 (마우스)
      onRubMove(e) {
          if (!this.isRubbing) return;
          
          const currentPos = { x: e.clientX, y: e.clientY };
          const distance = this.calculateDistance(this.lastMousePos, currentPos);
          
          // 거리에 비례해서 진행도 증가
          this.increaseProgress(distance * 0.5);
          
          this.lastMousePos = currentPos;
      }
  
      // 문지르기 시작 (터치)
      onTouchStart(e) {
          if (this.rubProgress_value >= this.maxRubProgress) return;
          
          e.preventDefault();
          this.isRubbing = true;
          const touch = e.touches[0];
          this.lastMousePos = { x: touch.clientX, y: touch.clientY };
      }
  
      // 문지르기 이동 (터치)
      onTouchMove(e) {
          if (!this.isRubbing) return;
          
          e.preventDefault();
          const touch = e.touches[0];
          const currentPos = { x: touch.clientX, y: touch.clientY };
          const distance = this.calculateDistance(this.lastMousePos, currentPos);
          
          this.increaseProgress(distance * 0.5);
          
          this.lastMousePos = currentPos;
      }
  
      // 문지르기 종료
      onRubEnd() {
          this.isRubbing = false;
      }
  
      // 두 점 사이 거리 계산
      calculateDistance(pos1, pos2) {
          const dx = pos2.x - pos1.x;
          const dy = pos2.y - pos1.y;
          return Math.sqrt(dx * dx + dy * dy);
      }
  
      // 진행도 증가
      increaseProgress(amount) {
          this.rubProgress_value = Math.min(this.rubProgress_value + amount, this.maxRubProgress);
          this.updateProgress();
      }
  
      // 진행도 UI 업데이트
      updateProgress() {
          this.progressFill.style.width = `${this.rubProgress_value}%`;
          
          // 흐림 오버레이 투명도 조정
          const opacity = 1 - (this.rubProgress_value / this.maxRubProgress);
          this.fogOverlay.style.opacity = opacity;
          
          // 완료 시
          if (this.rubProgress_value >= this.maxRubProgress) {
              this.onRubComplete();
          }
      }
  
      // 문지르기 완료
      onRubComplete() {
          console.log('구슬 문지르기 완료!');
          
          // 진행도 바 숨기기
          setTimeout(() => {
              this.rubProgress.classList.add('hidden');
          }, 500);
          
          // 날씨 정보 표시
          setTimeout(() => {
              this.displayWeatherInfo();
          }, 800);
          
          // 날씨 애니메이션 표시
          if (this.weatherData) {
              WeatherAnimations.selectAnimation(
                  this.weatherData.icon, 
                  this.weatherData.weatherMain
              );
          }
      }
  
      // 날씨 데이터 로드
      async loadWeatherData() {
          try {
              this.loadingOverlay.classList.remove('hidden');
              
              // 날씨 정보 가져오기
              this.weatherData = await WeatherAPI.fetchWeather();
              
              console.log('날씨 데이터:', this.weatherData);
              
              // 로딩 완료
              setTimeout(() => {
                  this.loadingOverlay.classList.add('hidden');
              }, 1000);
              
          } catch (error) {
              console.error('날씨 데이터 로드 실패:', error);
              this.showError();
          }
      }
  
      // 날씨 정보 표시
      displayWeatherInfo() {
          if (!this.weatherData) {
              console.error('날씨 데이터가 없습니다.');
              return;
          }
  
          // 위치 (Tomorrow.io API는 위치명 제공 안함. 기본값으로 서울 표시)
          document.getElementById('locationName').textContent = '서울';
  
          // 온도
          document.getElementById('temperature').textContent = `${this.weatherData.temperature}°C`;
  
          // 날씨 설명
          const description = this.weatherData.weatherDescription || this.getWeatherDescription(this.weatherData.weatherMain);
          document.getElementById('weatherDescription').textContent = description;
  
          // 습도
          document.getElementById('humidity').textContent = `${this.weatherData.humidity}%`;
  
          // 풍속
          document.getElementById('windSpeed').textContent = `${this.weatherData.windSpeed} m/s`;
  
          // 체감온도
          const feelsLike = this.weatherData.feelsLike || this.weatherData.temperature;
          document.getElementById('feelsLike').textContent = `${feelsLike}°C`;
  
          // API 출처
          document.getElementById('sourceName').textContent = this.weatherData.source || 'Tomorrow.io';
  
          // 날씨 정보 표시
          this.weatherInfo.classList.add('visible');
      }
  
      // 날씨 상태에 따른 한글 설명
      getWeatherDescription(weatherMain) {
          const descriptions = {
              'Clear': '맑음',
              'Mostly Clear': '대체로 맑음',
              'Partly Cloudy': '부분적으로 구름 많음',
              'Mostly Cloudy': '대체로 흐림',
              'Clouds': '구름 많음',
              'Rain': '비',
              'Drizzle': '이슬비',
              'Snow': '눈',
              'Thunderstorm': '천둥번개',
              'Fog': '안개',
              'Wind': '바람',
              'Freezing Rain': '얼음비',
              'Ice Pellets': '우박',
              'Unknown': '알 수 없음'
          };
          
          return descriptions[weatherMain] || weatherMain;
      }
  
      // 에러 표시
      showError() {
          this.loadingOverlay.classList.add('hidden');
          this.errorMessage.classList.add('visible');
      }
  }
  
  // 앱 시작
  document.addEventListener('DOMContentLoaded', () => {
      window.app = new CrystalBallApp();
      
      console.log('🔮 날씨 예언 구슬 앱이 시작되었습니다!');
      console.log('💡 API 키 설정 안내:');
      console.log('1. Tomorrow.io API 키를 WeatherAPI.API_KEY에 넣으세요.');
  });