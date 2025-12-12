# Korean Medical Training Program (KMTP) Website

## 🏥 프로젝트 개요

외국인 의사들을 위한 한국 의료 연수 프로그램 지원 웹사이트입니다. 의료 기술이 세계적으로 인정받는 한국에서의 연수 기회를 제공하는 종합적인 플랫폼입니다.

## ✨ 주요 기능

### 🌐 다국어 지원
- 한국어/영어 전환 기능
- 모든 콘텐츠의 완전한 번역 지원

### 📝 온라인 지원 시스템
- 외국인 의사를 위한 지원서 작성
- 파일 첨부 기능 (이력서, 자격증)
- 실시간 폼 유효성 검사
- 지원 상태 추적

### 📊 데이터 관리
- 지원자 정보 데이터베이스
- RESTful API를 통한 데이터 관리
- 자동 생성되는 시스템 필드 (ID, 생성일, 수정일 등)

### 📱 반응형 디자인
- 데스크톱, 태블릿, 모바일 최적화
- 현대적인 UI/UX 디자인
- 부드러운 애니메이션 효과

## 🗂️ 파일 구조

```
/
├── index.html          # 메인 페이지
├── application.html    # 지원 페이지
├── program.html       # 프로그램 소개
├── contact.html       # 연락처 페이지
├── style.css          # 스타일시트
├── script.js           # JavaScript 기능
└── README.md          # 프로젝트 문서
```

## 🚀 현재 구현된 기능

### 메인 페이지 (index.html)
- 히어로 섹션 with CTA 버튼
- 프로그램 특징 소개
- 통계 섹션
- 푸터 with 연락처 정보

### 지원 페이지 (application.html)
- 개인 정보 입력 폼
- 의사 자격 정보 입력
- 연수 프로그램 선택
- 파일 첨부 기능
- 실시간 유효성 검사
- 지원 자격 및 필요 서류 안내

### 프로그램 소개 (program.html)
- 프로그램 개요
- 연수 분야 상세 소개 (6개 분야)
- 연수 과정 타임라인
- 연수 혜택
- FAQ 섹션

### 연락처 페이지 (contact.html)
- 연락처 정보
- 문의 폼
- 자주 묻는 질문
- 소셜 미디어 링크

## 📋 데이터 스키마

### applicants 테이블
- `id`: 고유 식별자
- `name`: 의사 이름
- `email`: 이메일 주소
- `nationality`: 국적
- `medical_license`: 의사 면허 번호
- `specialization`: 전문 분야
- `hospital`: 소속 병원
- `experience_years`: 경력 년수
- `preferred_program`: 희망 연수 프로그램
- `duration`: 연수 기간
- `korean_level`: 한국어 수준
- `status`: 지원 상태 (접수, 심사중, 승인, 거절)
- `message`: 지원 동기 메시지
- `application_date`: 지원일

## 🎯 사용 기술

### 프론트엔드
- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome 아이콘
- Google Fonts

### 데이터 관리
- RESTful Table API
- 브라우저 기반 데이터베이스
- 비동기 데이터 처리 (Fetch API)

## 🔧 API 엔드포인트

### 지원자 데이터
```
GET    /tables/applicants          # 지원자 목록 조회
POST   /tables/applicants          # 새 지원자 등록
GET    /tables/applicants/{id}       # 특정 지원자 조회
PUT    /tables/applicants/{id}       # 지원자 정보 수정
DELETE /tables/applicants/{id}     # 지원자 정보 삭제
```

## 📱 반응형 지원

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1024px
- **모바일**: 480px 이하

## 🌟 UI/UX 특징

### 색상 팔레트
- Primary: #0066cc (파란색)
- Secondary: #004499 (진한 파란색)
- Accent: #00a8ff (밝은 파란색)
- Text: #333 (진한 회색)
- Background: #f8f9fa (밝은 회색)

### 인터랙션
- 부드러운 스크롤 효과
- 호버 애니메이션
- 로딩 스피너
- 성공/에러 메시지
- 실시간 폼 유효성 검사

## 🚀 시작하기

1. **파일 다운로드**: 모든 HTML, CSS, JS 파일을 다운로드
2. **브라우저에서 실행**: index.html 파일을 브라우저로 열기
3. **지원서 작성**: application.html에서 지원서 작성
4. **데이터 확인**: 브라우저 개발자 도구에서 API 응답 확인

## 🔮 향후 개선사항

### 추가 기능
- 관리자 페이지 (지원자 관리)
- 이메일 알림 시스템
- 다중 파일 업로드
- 진행 상태 추적 대시보드
- 온라인 평가 시스템

### 성능 개선
- 이미지 최적화
- 코드 스플리팅
- 캐싱 전략
- PWA 기능

### 보안 강화
- 데이터 암호화
- 인증 시스템
- 입력값 검증 강화
- XSS 방지

## 📞 문의사항

- Email: info@kmtp.or.kr
- Phone: +82-2-1234-5678
- Website: www.kmtp.or.kr

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

---

**KMTP** - Korean Medical Training Program for International Doctors