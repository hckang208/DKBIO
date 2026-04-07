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

### 배포가 여전히 이전 화면일 때 체크리스트

1. GitHub에서 PR이 **merge** 되었는지 확인
2. Netlify Site settings > Build & deploy > **Production branch**가 merge된 브랜치(`main` 등)인지 확인
3. Netlify Deploys에서 **Trigger deploy > Deploy site** 실행
4. 브라우저 강력 새로고침(Ctrl+Shift+R / Cmd+Shift+R) 또는 캐시 삭제 후 확인
5. Deploy log에서 아래 값 확인
   - Build command: `npm run build`
   - Publish directory: `dist`

> 코드만 PR 열려 있고 merge되지 않으면, Netlify 운영 URL에는 반영되지 않습니다.
