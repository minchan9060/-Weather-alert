const TomorrowAPI = {
    API_KEY: 'X2EpiN9GMhDbkuvZfjpStwTm9WBB4xEs', // 여기에 발급받은 API 키 넣으세요
  
    // 위치 정보 가져오기 (브라우저 Geolocation)
    getUserLocation: function() {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error('브라우저가 위치 정보를 지원하지 않습니다.'));
          return;
        }
        navigator.geolocation.getCurrentPosition(
          position => {
            resolve({
              lat: position.coords.latitude,
              lon: position.coords.longitude
            });
          },
          error => {
            console.warn('위치 접근 거부됨. 기본 위치로 서울 설정합니다.', error);
            resolve({ lat: 37.5665, lon: 126.9780 }); // 서울 기본값
          }
        );
      });
    },
  
    // Tomorrow.io API 호출
    fetchWeather: async function(lat, lon) {
      const fields = [
        'temperature',
        'humidity',
        'windSpeed',
        'precipitationProbability',
        'weatherCode'
      ];
      const url = `https://api.tomorrow.io/v4/timelines?location=${lat},${lon}&fields=${fields.join(',')}&timesteps=current&units=metric&apikey=${this.API_KEY}`;
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`API 호출 실패: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('날씨 API 호출 중 오류:', error);
        return null;
      }
    },
  
    // 받아온 데이터를 보기 쉽게 정리
    parseWeatherData: function(data) {
      try {
        const timeline = data.data.timelines[0];
        const values = timeline.values;
  
        return {
          temperature: values.temperature,
          humidity: values.humidity,
          windSpeed: values.windSpeed,
          precipitationProbability: values.precipitationProbability,
          weatherCode: values.weatherCode // 날씨 상태 코드 (https://docs.tomorrow.io/reference/weather-codes)
        };
      } catch (error) {
        console.error('데이터 파싱 오류:', error);
        return null;
      }
    },
  
    // 메인 실행 함수
    getWeather: async function() {
      try {
        const location = await this.getUserLocation();
        const rawData = await this.fetchWeather(location.lat, location.lon);
        if (!rawData) return null;
  
        const weather = this.parseWeatherData(rawData);
        return weather;
      } catch (error) {
        console.error('날씨 정보 가져오기 오류:', error);
        return null;
      }
    }
  };
  
  // 사용 예시
  (async () => {
    const weather = await TomorrowAPI.getWeather();
    if (weather) {
      console.log('현재 날씨:', weather);
    } else {
      console.log('날씨 정보를 가져오지 못했습니다.');
    }
  })();