// ===== 다국어 지원 및 번역 데이터 (새로운 폼 내용 추가) =====
const translations = {
    ko: {
        // ... (기존 헤더/히어로/푸터 내용 생략)
        'nav-home': '홈', 'nav-program': '프로그램', 'nav-application': '지원', 'nav-contact': '연락처',
        'hero-title': '한국 의료 연수 프로그램', 'hero-description': '세계적인 한국의료 기술을 배울 수 있는 특별한 기회',
        'btn-primary': '지원하기', 'btn-secondary': '프로그램 소개',
        
        // 특징 섹션 (변경됨)
        'features-title': '프로그램 특징',
        'feature1-title': '핵심 역량',
        'feature1-desc': '최고 수준의 의료 지식과 심층적인 임상 기술 습득',
        'feature2-title': '글로벌 인재', 
        'feature2-desc': '전 세계 의료 리더들과 교류하며 국제적 시야 확보',
        'feature3-title': '미래 선도', 
        'feature3-desc': '혁신적인 연구 참여 및 차세대 의료 기술 적용',
        
        'stat-participants': '참가자', 'stat-countries': '국가', 'stat-satisfaction': '만족도',
        'footer-contact': '연락처', 'footer-links': '빠른 링크', 'footer-program': '프로그램 소개', 'footer-application': '온라인 지원',
        
        // 폼 제목 (application.html)
        'app-title-ko': '연수 프로그램 지원',
        'app-desc-ko': '한국의 우수한 의료 기술을 배우고자 하는 외국인 의사들을 위한 지원서입니다.',
        
        // 동적 폼 섹션 (Physician)
        'physician-title': '의사 자격 정보', 'physician-license-label': '의사 면허 번호 *', 'physician-hospital-label': '현재 근무 병원 *', 'physician-experience-label': '경력 (년) *',
        
        // 동적 폼 섹션 (Dentist)
        'dentist-title': '치과의사 자격 정보', 'dentist-license-label': '치과의사 면허 번호 *', 'dentist-hospital-label': '현재 근무 치과/병원 *', 'dentist-experience-label': '임상 경력 (년) *',

        // 동적 폼 섹션 (Other)
        'other-title': '자격 정보', 'other-license-label': '자격증 또는 면허 번호 *', 'other-hospital-label': '현재 근무 기관 *', 'other-experience-label': '경력 (년) *',

        // 지원 자격 및 서류 (Physician)
        'eligibility-physician-1': '의사 면허 소지자', 'eligibility-physician-2': '2년 이상의 임상 경력', 'doc-physician-2': '의사 면허증 사본',
        
        // 지원 자격 및 서류 (Dentist)
        'eligibility-dentist-1': '치과의사 면허 소지자', 'eligibility-dentist-2': '1년 이상의 임상 경력', 'doc-dentist-2': '치과의사 면허증 사본',

        // 지원 자격 및 서류 (Other)
        'eligibility-other-1': '관련 의료 분야 자격증 소지자', 'eligibility-other-2': '1년 이상의 실무 경력', 'doc-other-2': '자격증/면허증 사본',
    },
    en: {
        // ... (기존 헤더/히어로/푸터 내용 생략)
        'nav-home': 'Home', 'nav-program': 'Program', 'nav-application': 'Application', 'nav-contact': 'Contact',
        'hero-title': 'Korean Medical Training Program', 'hero-description': 'A special opportunity to learn world-class Korean medical technology',
        'btn-primary': 'Apply Now', 'btn-secondary': 'Program Details',
        
        // 특징 섹션 (변경됨)
        'features-title': 'Program Features',
        'feature1-title': 'Core Competence',
        'feature1-desc': 'Acquire top-level medical knowledge and in-depth clinical skills',
        'feature2-title': 'Global Talent', 
        'feature2-desc': 'Gain global perspective by networking with medical leaders worldwide',
        'feature3-title': 'Future Leadership', 
        'feature3-desc': 'Participate in innovative research and apply next-generation medical technology',
        
        'stat-participants': 'Participants', 'stat-countries': 'Countries', 'stat-satisfaction': 'Satisfaction',
        'footer-contact': 'Contact', 'footer-links': 'Quick Links', 'footer-program': 'Program Info', 'footer-application': 'Online Application',

        // 폼 제목 (application.html)
        'app-title-en': 'Training Program Application',
        'app-desc-en': 'Application for international doctors who want to learn Korea\'s excellent medical technology.',

        // 동적 폼 섹션 (Physician)
        'physician-title': 'Physician License Information', 'physician-license-label': 'Medical License Number *', 'physician-hospital-label': 'Current Hospital *', 'physician-experience-label': 'Experience (Years) *',
        
        // 동적 폼 섹션 (Dentist)
        'dentist-title': 'Dentist License Information', 'dentist-license-label': 'Dental License Number *', 'dentist-hospital-label': 'Current Clinic/Hospital *', 'dentist-experience-label': 'Clinical Experience (Years) *',

        // 동적 폼 섹션 (Other)
        'other-title': 'Qualification Information', 'other-license-label': 'Certificate or License Number *', 'other-hospital-label': 'Current Institution *', 'other-experience-label': 'Experience (Years) *',

        // 지원 자격 및 서류 (Physician)
        'eligibility-physician-1': 'Licensed medical doctor', 'eligibility-physician-2': 'Minimum 2 years clinical experience', 'doc-physician-2': 'Medical license copy',

        // 지원 자격 및 서류 (Dentist)
        'eligibility-dentist-1': 'Licensed dental doctor', 'eligibility-dentist-2': 'Minimum 1 year clinical experience', 'doc-dentist-2': 'Dental license copy',

        // 지원 자격 및 서류 (Other)
        'eligibility-other-1': 'Licensed medical professional in related field', 'eligibility-other-2': 'Minimum 1 year work experience', 'doc-other-2': 'Certificate/License copy',
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
    
    if (document.body.id === 'application') {
        updateApplicationFormByLanguage(currentLang);
    }
}


// ===== 폼 업데이트 로직 (핵심 변경) =====

function getApplicationTypeFromURL() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    return ['physician', 'dentist', 'other'].includes(type) ? type : 'physician';
}

function updateApplicationFormByType(type) {
    const isPhysicianOrDentist = (type === 'physician' || type === 'dentist');
    const lang = currentLang;
    
    document.getElementById('applicationType').value = type;

    const titleKo = document.getElementById('med-info-title-ko');
    const titleEn = document.getElementById('med-info-title-en');
    const licenseKo = document.getElementById('license-label-ko');
    const licenseEn = document.getElementById('license-label-en');
    const hospitalKo = document.getElementById('hospital-label-ko');
    const hospitalEn = document.getElementById('hospital-label-en');
    const experienceKo = document.getElementById('experience-label-ko');
    const experienceEn = document.getElementById('experience-label-en');
    const specializationGroup = document.getElementById('specialization-group');
    
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

    if (specializationGroup) {
        if (isPhysicianOrDentist) {
            specializationGroup.style.display = 'block';
            specializationGroup.querySelector('select').setAttribute('required', 'required');
        } else {
            specializationGroup.style.display = 'none';
            specializationGroup.querySelector('select').removeAttribute('required');
        }
    }
    
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
    
    switchLanguage(lang);
}

function updateApplicationFormByLanguage(lang) {
    const type = document.getElementById('applicationType')?.value || getApplicationTypeFromURL();
    updateApplicationFormByType(type); 
}

// ===== UX 로직 (index.html에서 작동) =====

function setupLandingUX() {
    const landingHero = document.getElementById('hero-landing');
    const selectionSection = document.getElementById('application-selection');
    
    if (!landingHero || !selectionSection) return;

    // 1. Hero를 뷰포트 높이로 설정 (CSS에서 처리되므로 주석 처리)
    // landingHero.style.minHeight = window.innerHeight + 'px'; 
    // window.addEventListener('resize', () => { landingHero.style.minHeight = window.innerHeight + 'px'; });

    const scrollToSelection = () => {
        selectionSection.scrollIntoView({ behavior: 'smooth' });
    };

    landingHero.addEventListener('click', (e) => {
        if (!e.target.closest('.hero-buttons')) {
            scrollToSelection();
        }
    });

    document.querySelector('.scroll-down-icon')?.addEventListener('click', scrollToSelection);

}


// ===== 폼 유효성 검사 (기존 유지) =====
function validateForm(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const errors = {};
    
    const requiredFields = ['name', 'email', 'nationality', 'medicalLicense', 'hospital', 'experienceYears', 'preferredProgram', 'duration', 'koreanLevel'];
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
    
    const email = formData.get('email');
    if (email && !isValidEmail(email)) {
        errors.email = currentLang === 'ko' ? '올바른 이메일 형식이 아닙니다.' : 'Please enter a valid email address.';
    }
    
    const experienceYears = formData.get('experienceYears');
    if (experienceYears && (experienceYears < 0 || experienceYears > 50)) {
        errors.experienceYears = currentLang === 'ko' ? '경력은 0-50년 사이여야 합니다.' : 'Experience must be between 0-50 years.';
    }
    
    displayErrors(errors);
    
    return Object.keys(errors).length === 0;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayErrors(errors) {
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
    });
    
    document.querySelectorAll('.form-control').forEach(el => {
        el.classList.remove('error', 'success');
    });
    
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
        if (entry.isIntersecting) {
            const target = entry.target;
            const delay = parseInt(target.dataset.delay) || 0;
            
            setTimeout(() => {
                target.classList.add('fade-in-up');
            }, delay);
            
            observer.unobserve(target); 
        }
    });
}, observerOptions);


// ===== 이벤트 리스너 및 초기화 =====
document.addEventListener('DOMContentLoaded', function() {
    
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
    
    // 페이지별 설정
    
    if (document.body.id === 'application') {
        const type = getApplicationTypeFromURL();
        updateApplicationFormByType(type); 
        
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
