// 날씨별 애니메이션 생성 및 관리

const WeatherAnimations = {
    // 현재 애니메이션 정리
    clearAnimation: function(container) {
        container.innerHTML = '';
    },

    // 맑음 애니메이션 (태양과 빛나는 효과)
    createSunnyAnimation: function(container) {
        this.clearAnimation(container);
        
        const sun = document.createElement('div');
        sun.className = 'sun';
        sun.innerHTML = `
            <div class="sun-core">☀️</div>
            <div class="sun-rays"></div>
        `;
        container.appendChild(sun);
        
        // CSS 추가
        this.addAnimationStyles('sunny');
    },

    // 비 애니메이션
    createRainAnimation: function(container) {
        this.clearAnimation(container);
        
        const rainContainer = document.createElement('div');
        rainContainer.className = 'rain-container';
        
        // 빗방울 40개 생성
        for (let i = 0; i < 40; i++) {
            const raindrop = document.createElement('div');
            raindrop.className = 'raindrop';
            raindrop.style.left = `${Math.random() * 100}%`;
            raindrop.style.animationDelay = `${Math.random() * 2}s`;
            raindrop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
            rainContainer.appendChild(raindrop);
        }
        
        container.appendChild(rainContainer);
        this.addAnimationStyles('rain');
    },

    // 눈 애니메이션
    createSnowAnimation: function(container) {
        this.clearAnimation(container);
        
        const snowContainer = document.createElement('div');
        snowContainer.className = 'snow-container';
        
        // 눈송이 30개 생성
        for (let i = 0; i < 30; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = '❄';
            snowflake.style.left = `${Math.random() * 100}%`;
            snowflake.style.animationDelay = `${Math.random() * 4}s`;
            snowflake.style.animationDuration = `${3 + Math.random() * 3}s`;
            snowflake.style.fontSize = `${0.8 + Math.random() * 0.8}rem`;
            snowContainer.appendChild(snowflake);
        }
        
        container.appendChild(snowContainer);
        this.addAnimationStyles('snow');
    },

    // 구름 애니메이션
    createCloudyAnimation: function(container) {
        this.clearAnimation(container);
        
        const cloudContainer = document.createElement('div');
        cloudContainer.className = 'cloud-container';
        
        // 구름 3개 생성
        for (let i = 0; i < 3; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';
            cloud.textContent = '☁️';
            cloud.style.top = `${20 + i * 30}%`;
            cloud.style.animationDelay = `${i * 2}s`;
            cloudContainer.appendChild(cloud);
        }
        
        container.appendChild(cloudContainer);
        this.addAnimationStyles('cloudy');
    },

    // 안개 애니메이션
    createFoggyAnimation: function(container) {
        this.clearAnimation(container);
        
        const fogContainer = document.createElement('div');
        fogContainer.className = 'fog-container';
        
        // 안개 레이어 3개 생성
        for (let i = 0; i < 3; i++) {
            const fog = document.createElement('div');
            fog.className = 'fog-layer';
            fog.style.animationDelay = `${i * 2}s`;
            fog.style.opacity = `${0.3 + i * 0.2}`;
            fogContainer.appendChild(fog);
        }
        
        container.appendChild(fogContainer);
        this.addAnimationStyles('foggy');
    },

    // 천둥번개 애니메이션
    createThunderstormAnimation: function(container) {
        this.clearAnimation(container);
        
        const stormContainer = document.createElement('div');
        stormContainer.className = 'storm-container';
        
        // 번개 효과
        const lightning = document.createElement('div');
        lightning.className = 'lightning';
        lightning.textContent = '⚡';
        stormContainer.appendChild(lightning);
        
        // 비 추가
        for (let i = 0; i < 30; i++) {
            const raindrop = document.createElement('div');
            raindrop.className = 'raindrop heavy';
            raindrop.style.left = `${Math.random() * 100}%`;
            raindrop.style.animationDelay = `${Math.random() * 1}s`;
            raindrop.style.animationDuration = `${0.3 + Math.random() * 0.3}s`;
            stormContainer.appendChild(raindrop);
        }
        
        container.appendChild(stormContainer);
        this.addAnimationStyles('thunderstorm');
    },

    // 애니메이션 스타일 동적 추가
    addAnimationStyles: function(type) {
        // 기존 스타일 제거
        const existingStyle = document.getElementById('weather-animation-style');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        const style = document.createElement('style');
        style.id = 'weather-animation-style';
        
        let css = '';
        
        switch(type) {
            case 'sunny':
                css = `
                    .sun {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                    }
                    .sun-core {
                        font-size: 5rem;
                        animation: rotate 20s linear infinite, pulse 2s ease-in-out infinite;
                        filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.8));
                    }
                    @keyframes rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    @keyframes pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.1); }
                    }
                `;
                break;
                
            case 'rain':
                css = `
                    .rain-container {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        overflow: hidden;
                    }
                    .raindrop {
                        position: absolute;
                        top: -10px;
                        width: 2px;
                        height: 20px;
                        background: linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.8));
                        animation: fall linear infinite;
                    }
                    .raindrop.heavy {
                        width: 3px;
                        height: 25px;
                    }
                    @keyframes fall {
                        to {
                            transform: translateY(400px);
                            opacity: 0;
                        }
                    }
                `;
                break;
                
            case 'snow':
                css = `
                    .snow-container {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        overflow: hidden;
                    }
                    .snowflake {
                        position: absolute;
                        top: -20px;
                        color: rgba(255, 255, 255, 0.9);
                        animation: snowfall linear infinite;
                        text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
                    }
                    @keyframes snowfall {
                        to {
                            transform: translateY(400px) rotate(360deg);
                            opacity: 0;
                        }
                    }
                `;
                break;
                
            case 'cloudy':
                css = `
                    .cloud-container {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        overflow: hidden;
                    }
                    .cloud {
                        position: absolute;
                        left: -50px;
                        font-size: 3rem;
                        animation: cloudMove 15s linear infinite;
                        filter: drop-shadow(0 0 10px rgba(156, 163, 175, 0.5));
                    }
                    @keyframes cloudMove {
                        from {
                            transform: translateX(-50px);
                        }
                        to {
                            transform: translateX(350px);
                        }
                    }
                `;
                break;
                
            case 'foggy':
                css = `
                    .fog-container {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        overflow: hidden;
                    }
                    .fog-layer {
                        position: absolute;
                        width: 200%;
                        height: 100%;
                        background: linear-gradient(90deg, 
                            transparent, 
                            rgba(156, 163, 175, 0.4), 
                            transparent);
                        animation: fogMove 10s linear infinite;
                    }
                    @keyframes fogMove {
                        from {
                            transform: translateX(-50%);
                        }
                        to {
                            transform: translateX(0%);
                        }
                    }
                `;
                break;
                
            case 'thunderstorm':
                css = `
                    .storm-container {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        overflow: hidden;
                    }
                    .lightning {
                        position: absolute;
                        top: 20%;
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: 4rem;
                        animation: flash 4s ease-in-out infinite;
                        filter: drop-shadow(0 0 30px rgba(251, 191, 36, 0.9));
                    }
                    @keyframes flash {
                        0%, 10%, 15%, 100% { opacity: 0; }
                        12%, 14% { opacity: 1; }
                    }
                `;
                break;
        }
        
        style.textContent = css;
        document.head.appendChild(style);
    },

    // 날씨 코드에 따른 애니메이션 선택
    selectAnimation: function(weatherCode, weatherMain) {
        const container = document.getElementById('weatherAnimation');
        
        // OpenWeather API 날씨 코드 기반
        if (weatherMain) {
            const main = weatherMain.toLowerCase();
            
            if (main.includes('clear') || main.includes('sunny')) {
                this.createSunnyAnimation(container);
            } else if (main.includes('rain') || main.includes('drizzle')) {
                this.createRainAnimation(container);
            } else if (main.includes('snow')) {
                this.createSnowAnimation(container);
            } else if (main.includes('thunder') || main.includes('storm')) {
                this.createThunderstormAnimation(container);
            } else if (main.includes('mist') || main.includes('fog') || main.includes('haze')) {
                this.createFoggyAnimation(container);
            } else if (main.includes('cloud')) {
                this.createCloudyAnimation(container);
            } else {
                this.createCloudyAnimation(container);
            }
        }
        
        // 애니메이션 표시
        setTimeout(() => {
            container.classList.add('visible');
        }, 500);
    }
};

// 전역 접근을 위한 export
window.WeatherAnimations = WeatherAnimations;
