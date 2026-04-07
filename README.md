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

## Netlify 배포가 빈 화면일 때

이 프로젝트는 SPA(React + Vite)라서 Netlify에서 아래 설정이 필요합니다.

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect: `/* -> /index.html (200)`

이 저장소에는 위 설정을 자동으로 적용하는 `netlify.toml`이 포함되어 있습니다.
