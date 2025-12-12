// ===== 다국어 지원 및 번역 데이터 (새로운 폼 내용 추가) =====
const translations = {
    ko: {
        // ... (기존 헤더/히어로/특징/푸터 내용 생략)
        'nav-home': '홈', 'nav-program': '프로그램', 'nav-application': '지원', 'nav-contact': '연락처',
        'hero-title': '한국 의료 연수 프로그램', 'hero-description': '세계적인 한국의료 기술을 배울 수 있는 특별한 기회',
        'btn-primary': '지원하기', 'btn-secondary': '프로그램 소개',
        'features-title': '프로그램 특징',
        'feature1-title': '우수한 교육', 'feature1-desc': '한국의 최고 의료진으로부터 직접 배우는 기회',
        'feature2-title': '첨단 기술', 'feature2-desc': '최신 의료 기술과 장비를 활용한 실습',
        'feature3-title': '국제 네트워크', 'feature3-desc': '전 세계 의료 전문가들과의 네트워킹',
        'stat-participants': '참가자', 'stat-countries': '국가', 'stat-satisfaction': '만족도',
        'footer-contact': '연락처', 'footer-links': '빠른 링크', 'footer-program': '프로그램 소개', 'footer-application': '온라인 지원',
        
        // 폼 제목 (application.html)
        'app-title-ko': '연수 프로그램 지원',
        'app-desc-ko': '한국의 우수한 의료 기술을 배우고자 하는 외국인 의사들을 위한 지원서입니다.',
        
        // 동적 폼 섹션 (Physician)
        'physician-title': '의사 자격 정보',
        'physician-license-label': '의사 면허 번호 *',
        'physician-hospital-label': '현재 근무 병원 *',
        'physician-experience-label': '경력 (년) *',
        
        // 동적 폼 섹션 (Dentist)
        'dentist-title': '치과의사 자격 정보',
        'dentist-license-label': '치과의사 면허 번호 *',
        'dentist-hospital-label': '현재 근무 치과/병원 *',
        'dentist-experience-label': '임상 경력 (년) *',

        // 동적 폼 섹션 (Other)
        'other-title': '자격 정보',
        'other-license-label': '자격증 또는 면허 번호 *',
        'other-hospital-label': '현재 근무 기관 *',
        'other-experience-label': '경력 (년) *',

        // 지원 자격 및 서류 (Physician)
        'eligibility-physician-1': '의사 면허 소지자',
        'eligibility-physician-2': '2년 이상의 임상 경력',
        'doc-physician-2': '의사 면허증 사본',
        
        // 지원 자격 및 서류 (Dentist)
        'eligibility-dentist-1': '치과의사 면허 소지자',
        'eligibility-dentist-2': '1년 이상의 임상 경력',
        'doc-dentist-2': '치과의사 면허증 사본',

        // 지원 자격 및 서류 (Other)
        'eligibility-other-1': '관련 의료 분야 자격증 소지자',
        'eligibility-other-2': '1년 이상의 실무 경력',
        'doc-other-2': '자격증/면허증 사본',
    },
    en: {
        // ... (기존 헤더/히어로/특징/푸터 내용 생략)
        'nav-home': 'Home', 'nav-program': 'Program', 'nav-application': 'Application', 'nav-contact': 'Contact',
        'hero-title': 'Korean Medical Training Program', 'hero-description': 'A special opportunity to learn world-class Korean medical technology',
        'btn-primary': 'Apply Now', 'btn-secondary': 'Program Details',
        'features-title': 'Program Features',
        'feature1-title': 'Excellent Education', 'feature1-desc': 'Learn directly from Korea\'s top medical professionals',
        'feature2-title': 'Advanced Technology', 'feature2-desc': 'Hands-on training with latest medical technology',
        'feature3-title': 'International Network', 'feature3-desc': 'Network with medical professionals worldwide',
        'stat-participants': 'Participants', 'stat-countries': 'Countries', 'stat-satisfaction': 'Satisfaction',
        'footer-contact': 'Contact', 'footer-links': 'Quick Links', 'footer-program': 'Program Info', 'footer-application': 'Online Application',

        // 폼 제목 (application.html)
        'app-title-en': 'Training Program Application',
        'app-desc-en': 'Application for international doctors who want to learn Korea\'s excellent medical technology.',

        // 동적 폼 섹션 (Physician)
        'physician-title': 'Physician License Information',
        'physician-license-label': 'Medical License Number *',
        'physician-hospital-label': 'Current Hospital *',
        'physician-experience-label': 'Experience (Years) *',
        
        // 동적 폼 섹션 (Dentist)
        'dentist-title': 'Dentist License Information',
        'dentist-license-label': 'Dental License Number *',
        'dentist-hospital-label': 'Current Clinic/Hospital *',
        'dentist-experience-label': 'Clinical Experience (Years) *',

        // 동적 폼 섹션 (Other)
        'other-title': 'Qualification Information',
        'other-license-label': 'Certificate or License Number *',
        'other-hospital-label': 'Current Institution *',
        'other-experience-label': 'Experience (Years) *',

        // 지원 자격 및 서류 (Physician)
        'eligibility-physician-1': 'Licensed medical doctor',
        'eligibility-physician-2': 'Minimum 2 years clinical experience',
        'doc-physician-2': 'Medical license copy',

        // 지원 자격 및 서류 (Dentist)
        'eligibility-dentist-1': 'Licensed dental doctor',
        'eligibility-dentist-2': 'Minimum 1 year clinical experience',
        'doc-dentist-2': 'Dental license copy',

        // 지원 자격 및 서류 (Other)
        'eligibility-other-1': 'Licensed medical professional in related field',
        'eligibility-other-2': 'Minimum 1 year work experience',
        'doc-other-2': 'Certificate/License copy',
    }
};

let currentLang = 'ko';

function switchLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    document.querySelectorAll('.lang-ko').forEach(el => {
        el.style.display = lang === 'ko' ? 'inline' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
        el.style.display = lang === 'en' ? 'inline' : 'none';
    });
    
    // 동적 텍스트 업데이트 (application.html에서만 작동)
    if (document.body.id === 'application') {
        updateApplicationFormByLanguage(currentLang);
    }
}


// ===== 폼 업데이트 로직 (핵심 변경) =====

// 1. URL 파라미터를 읽는 함수
function getApplicationTypeFromURL() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    // 기본값은 physician
    return ['physician', 'dentist', 'other'].includes(type) ? type : 'physician';
}

// 2. 선택된 타입에 따라 폼 내용을 업데이트하는 함수
function updateApplicationFormByType(type) {
    const isPhysicianOrDentist = (type === 'physician' || type === 'dentist');
    const lang = currentLang;
    
    // 숨겨진 타입 필드 업데이트
    document.getElementById('applicationType').value = type;

    // A. 의료 자격 정보 섹션 업데이트
    const titleKo = document.getElementById('med-info-title-ko');
    const titleEn = document.getElementById('med-info-title-en');
    const licenseKo = document.getElementById('license-label-ko');
    const licenseEn = document.getElementById('license-label-en');
    const hospitalKo = document.getElementById('hospital-label-ko');
    const hospitalEn = document.getElementById('hospital-label-en');
    const experienceKo = document.getElementById('experience-label-ko');
    const experienceEn = document.getElementById('experience-label-en');
    const specializationGroup = document.getElementById('specialization-group');
    
    // 타입별 텍스트 매핑
    const typeMap = {
        physician: 'physician',
        dentist: 'dentist',
        other: 'other',
    };
    const key = typeMap[type];

    if (titleKo) titleKo.textContent = translations['ko'][`${key}-title`];
    if (titleEn) titleEn.textContent = translations['en'][`${key}-title`];
    if (licenseKo) licenseKo.textContent = translations['ko'][`${key}-license-label`];
    if (licenseEn) licenseEn.textContent = translations['en'][`${key}-license-label`];
    if (hospitalKo) hospitalKo.textContent = translations['ko'][`${key}-hospital-label`];
    if (hospitalEn) hospitalEn.textContent = translations['en'][`${key}-hospital-label`];
    if (experienceKo) experienceKo.textContent = translations['ko'][`${key}-experience-label`];
    if (experienceEn) experienceEn.textContent = translations['en'][`${key}-experience-label`];

    // B. 전문 분야 필드 가시성 및 필수 여부
    if (specializationGroup) {
        if (isPhysicianOrDentist) {
            specializationGroup.style.display = 'block';
            specializationGroup.querySelector('select').setAttribute('required', 'required');
        } else {
            specializationGroup.style.display = 'none';
            specializationGroup.querySelector('select').removeAttribute('required');
        }
    }
    
    // C. 지원 자격 및 서류 리스트 업데이트
    const eligList = document.getElementById('eligibility-list');
    const docList = document.getElementById('documents-list');
    
    if (eligList) eligList.innerHTML = `
        <li>
            <span class="lang-ko">${translations['ko'][`${key}-eligibility-1`]}</span>
            <span class="lang-en" style="display: none;">${translations['en'][`${key}-eligibility-1`]}</span>
        </li>
        <li>
            <span class="lang-ko">${translations['ko'][`${key}-eligibility-2`]}</span>
            <span class="lang-en" style="display: none;">${translations['en'][`${key}-eligibility-2`]}</span>
        </li>
        <li>
            <span class="lang-ko">영어 또는 한국어 능력</span>
            <span class="lang-en" style="display: none;">English or Korean language proficiency</span>
        </li>
    `;

    if (docList) docList.innerHTML = `
        <li>
            <span class="lang-ko">이력서 (CV)</span>
            <span class="lang-en" style="display: none;">Resume (CV)</span>
        </li>
        <li>
            <span class="lang-ko">${translations['ko'][`${key}-doc-2`]}</span>
            <span class="lang-en" style="display: none;">${translations['en'][`${key}-doc-2`]}</span>
        </li>
        <li>
            <span class="lang-ko">추천서 (선택사항)</span>
            <span class="lang-en" style="display: none;">Recommendation letter (optional)</span>
        </li>
    `;
    
    // 언어 상태를 다시 적용하여 새로 생성된 요소의 언어 설정
    switchLanguage(lang);
}

// 3. 언어 전환 시 동적 폼 리스트 업데이트 (기존 switchLanguage에서 호출됨)
function updateApplicationFormByLanguage(lang) {
    const type = document.getElementById('applicationType')?.value || getApplicationTypeFromURL();
    updateApplicationFormByType(type); 
}

// ===== UX 로직 (index.html에서 작동) =====

function setupLandingUX() {
    const landingHero = document.getElementById('hero-landing');
    const selectionSection = document.getElementById('application-selection');
    
    if (!landingHero || !selectionSection) return;

    // 1. Hero를 뷰포트 높이로 설정 (Full-screen effect)
    landingHero.style.minHeight = window.innerHeight + 'px';
    window.addEventListener('resize', () => {
        landingHero.style.minHeight = window.innerHeight + 'px';
    });

    // 2. 클릭 또는 스크롤 다운 시 Selection Section으로 이동
    const scrollToSelection = () => {
        selectionSection.scrollIntoView({ behavior: 'smooth' });
    };

    landingHero.addEventListener('click', (e) => {
        // CTA 버튼 클릭이 아닌 경우에만 스크롤 이동
        if (!e.target.closest('.hero-buttons')) {
            scrollToSelection();
        }
    });

    // 스크롤 다운 아이콘 클릭 시
    document.querySelector('.scroll-down-icon')?.addEventListener('click', scrollToSelection);

}


// ===== 폼 유효성 검사 (기존 유지) =====
// ... (기존 validateForm, isValidEmail, displayErrors, clearError, resetForm 함수는 그대로 유지됩니다.)
function validateForm(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const errors = {};
    
    // 필수 필드 검사
    const requiredFields = ['name', 'email', 'nationality', 'medicalLicense', 'hospital', 'experienceYears', 'preferredProgram', 'duration', 'koreanLevel'];
    // specialization은 선택적으로 처리
    const specializationSelect = document.getElementById('specialization');
    if (specializationSelect && specializationSelect.hasAttribute('required') && (!formData.get('specialization') || formData.get('specialization').trim() === '')) {
         requiredFields.push('specialization');
    }
    
    requiredFields.forEach(field => {
        const value = formData.get(field);
        if (!value || value.trim() === '') {
            errors[field] = currentLang === 'ko' ? '이 필드는 필수입니다.' : 'This field is required.';
        }
    });
    
    // 이메일 형식 검사
    const email = formData.get('email');
    if (email && !isValidEmail(email)) {
        errors.email = currentLang === 'ko' ? '올바른 이메일 형식이 아닙니다.' : 'Please enter a valid email address.';
    }
    
    // 경력 년수 검사
    const experienceYears = formData.get('experienceYears');
    if (experienceYears && (experienceYears < 0 || experienceYears > 50)) {
        errors.experienceYears = currentLang === 'ko' ? '경력은 0-50년 사이여야 합니다.' : 'Experience must be between 0-50 years.';
    }
    
    // 에러 표시
    displayErrors(errors);
    
    return Object.keys(errors).length === 0;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayErrors(errors) {
    // 기존 에러 메시지 숨김
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
    });
    
    // input error 클래스 초기화
    document.querySelectorAll('.form-control').forEach(el => {
        el.classList.remove('error', 'success');
    });
    
    // 새 에러 메시지 표시
    Object.keys(errors).forEach(field => {
        const errorElement = document.getElementById(`${field}Error`);
        const inputElement = document.getElementById(field);
        
        if (errorElement) {
            errorElement.textContent = errors[field];
            errorElement.classList.add('show');
        }
        
        if (inputElement) {
            inputElement.classList.add('error');
        }
    });
}

function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.classList.remove('show');
    }
    
    if (inputElement) {
        inputElement.classList.remove('error');
        inputElement.classList.add('success');
    }
}
function resetForm() {
    document.getElementById('applicationForm').reset();
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
    });
    document.querySelectorAll('.form-control').forEach(el => {
        el.classList.remove('error', 'success');
    });
}
// ===== (submitApplication 함수는 API 호출을 위해 생략) =====

// ===== FAQ 아코디언 기능 =====
function setupFaqAccordion() {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isActive = button.classList.contains('active');
    
            document.querySelectorAll('.faq-question').forEach(q => {
                if (q !== button) {
                    q.classList.remove('active');
                    q.closest('.faq-item').querySelector('.faq-answer').style.maxHeight = 0;
                }
            });
    
            if (!isActive) {
                button.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px"; 
            } else {
                button.classList.remove('active');
                answer.style.maxHeight = 0;
            }
        });
    });
}

// ===== 애니메이션 관찰자 (Intersection Observer) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' 
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        // entry.isIntersecting: 요소가 뷰포트에 들어왔는지 확인
        if (entry.isIntersecting) {
            const target = entry.target;
            const delay = parseInt(target.dataset.delay) || 0;
            
            // data-delay 속성을 사용하여 지연 시간 적용
            setTimeout(() => {
                target.classList.add('fade-in-up');
            }, delay);
            
            observer.unobserve(target); 
        }
    });
}, observerOptions);


// ===== 이벤트 리스너 및 초기화 =====
document.addEventListener('DOMContentLoaded', function() {
    // 1. 공통 설정
    
    // 언어 선택 버튼
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
    
    // 모바일 메뉴 토글
    document.querySelector('.mobile-menu-toggle')?.addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('active');
    });
    
    // 스크롤 이벤트 (헤더 그림자)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; 
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // 2. 페이지별 설정
    
    if (document.body.id === 'application') {
        const type = getApplicationTypeFromURL();
        updateApplicationFormByType(type); 
        // 폼 유효성 검사 등 이벤트 리스너는 기존 로직을 따라갑니다.
        
    } else if (document.body.id === 'index' || !document.body.id) {
        setupLandingUX();
    }
    
    if (document.body.id === 'contact') {
        setupFaqAccordion();
    }

    // 3. 애니메이션 관찰자 등록
    const elementsToAnimate = document.querySelectorAll(
        '.hero-title, .hero-description, .hero-scroll-cue, .section-title, .feature-card, .stat-item, .program-card, .benefit-card, .timeline-item, .contact-info, .contact-form, .info-box, .application-selection .selection-card, .form-section, .form-actions'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});
