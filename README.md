<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/0fd8f235-faf8-4221-b1ec-fc64fc363f81

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Netlify 배포 (하얀 화면 방지)

SPA(React Router/클라이언트 라우팅) 앱은 Netlify에서 새로고침 시 404가 나면 화면이 비어 보일 수 있습니다.
이 저장소에는 이를 방지하기 위해 `netlify.toml` 리다이렉트 설정이 포함되어 있습니다.

- Build command: `npm run build`
- Publish directory: `dist`
- Redirect: `/* -> /index.html (200)`

배포 후에도 흰 화면이면 Netlify Deploy log에서 `dist`가 실제로 업로드되었는지와 브라우저 콘솔 에러를 먼저 확인하세요.
