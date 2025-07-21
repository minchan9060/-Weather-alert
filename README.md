<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>로그인 화면</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 400px;
      margin: 100px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    input {
      width: 100%;
      padding: 8px 12px;
      margin: 10px 0;
      box-sizing: border-box;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      border: none;
      color: white;
      font-size: 16px;
      cursor: pointer;
      border-radius: 4px;
    }
    button:hover {
      background-color: #0056b3;
    }
    h2 {
      text-align: center;
    }
  </style>
</head>
<body>
  <h2>로그인</h2>
  <form id="loginForm">
    <input type="email" id="email" placeholder="이메일" required />
    <input type="password" id="password" placeholder="비밀번호" required />
    <button type="submit">로그인</button>
  </form>

  <script>
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      if (!email || !password) {
        alert('이메일과 비밀번호를 모두 입력해주세요.');
        return;
      }
      alert(`이메일: ${email}\n비밀번호: ${password}`);
      // 여기서 서버에 로그인 요청 보내면 됨
    });
  </script>
</body>
</html>