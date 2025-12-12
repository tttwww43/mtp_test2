// ===== 다국어 지원 =====
const translations = {
    ko: {
        // 헤더
        'nav-home': '홈',
        'nav-program': '프로그램',
        'nav-application': '지원',
        'nav-contact': '연락처',
        
        // 히어로 섹션
        'hero-title': '한국 의료 연수 프로그램',
        'hero-description': '세계적인 한국의료 기술을 배울 수 있는 특별한 기회',
        'btn-primary': '지원하기',
        'btn-secondary': '프로그램 소개',
        
        // 특징 섹션
        'features-title': '프로그램 특징',
        'feature1-title': '우수한 교육',
        'feature1-desc': '한국의 최고 의료진으로부터 직접 배우는 기회',
        'feature2-title': '첨단 기술',
        'feature2-desc': '최신 의료 기술과 장비를 활용한 실습',
        'feature3-title': '국제 네트워크',
        'feature3-desc': '전 세계 의료 전문가들과의 네트워킹',
        
        // 통계
        'stat-participants': '참가자',
        'stat-countries': '국가',
        'stat-satisfaction': '만족도',
        
        // 푸터
        'footer-contact': '연락처',
        'footer-links': '빠른 링크',
        'footer-program': '프로그램 소개',
        'footer-application': '온라인 지원'
    },
    en: {
        // 헤더
        'nav-home': 'Home',
        'nav-program': 'Program',
        'nav-application': 'Application',
        'nav-contact': 'Contact',
        
        // 히어로 섹션
        'hero-title': 'Korean Medical Training Program',
        'hero-description': 'A special opportunity to learn world-class Korean medical technology',
        'btn-primary': 'Apply Now',
        'btn-secondary': 'Program Details',
        
        // 특징 섹션
        'features-title': 'Program Features',
        'feature1-title': 'Excellent Education',
        'feature1-desc': 'Learn directly from Korea\'s top medical professionals',
        'feature2-title': 'Advanced Technology',
        'feature2-desc': 'Hands-on training with latest medical technology',
        'feature3-title': 'International Network',
        'feature3-desc': 'Network with medical professionals worldwide',
        
        // 통계
        'stat-participants': 'Participants',
        'stat-countries': 'Countries',
        'stat-satisfaction': 'Satisfaction',
        
        // 푸터
        'footer-contact': 'Contact',
        'footer-links': 'Quick Links',
        'footer-program': 'Program Info',
        'footer-application': 'Online Application'
    }
};

let currentLang = 'ko';

function switchLanguage(lang) {
    currentLang = lang;
    
    // 언어 버튼 활성화 상태 변경
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // 언어별 콘텐츠 표시/숨김
    document.querySelectorAll('.lang-ko').forEach(el => {
        el.style.display = lang === 'ko' ? 'inline' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
        el.style.display = lang === 'en' ? 'inline' : 'none';
    });
    
    // 동적으로 텍스트 변경이 필요한 요소들
    updateDynamicTexts(lang);
}

function updateDynamicTexts(lang) {
    // 페이지별 특정 텍스트 업데이트
    const page = document.body.id || 'index';
    
    if (page === 'application') {
        updateApplicationTexts(lang);
    }
}

function updateApplicationTexts(lang) {
    const texts = {
        ko: {
            formTitle: '연수 프로그램 지원',
            formDescription: '한국의 우수한 의료 기술을 배우고자 하는 외국인 의사들을 위한 지원서입니다.',
            personalInfo: '개인 정보',
            nameLabel: '성명 *',
            emailLabel: '이메일 *',
            nationalityLabel: '국적 *',
            medicalInfo: '의사 자격 정보',
            licenseLabel: '의사 면허 번호 *',
            specializationLabel: '전문 분야 *',
            hospitalLabel: '현재 근무 병원 *',
            experienceLabel: '경력 (년) *',
            programSelection: '연수 프로그램 선택',
            programLabel: '희망 연수 분야 *',
            durationLabel: '연수 기간 *',
            koreanLevelLabel: '한국어 수준 *',
            motivation: '지원 동기',
            motivationLabel: '지원 동기 및 메시지',
            attachments: '파일 첨부',
            resumeLabel: '이력서 (PDF)',
            certificateLabel: '자격증 사본 (PDF)',
            submitBtn: '지원서 제출',
            resetBtn: '초기화',
            eligibility: '지원 자격',
            documents: '제출 서류'
        },
        en: {
            formTitle: 'Training Program Application',
            formDescription: 'Application for international doctors who want to learn Korea\'s excellent medical technology.',
            personalInfo: 'Personal Information',
            nameLabel: 'Full Name *',
            emailLabel: 'Email *',
            nationalityLabel: 'Nationality *',
            medicalInfo: 'Medical License Information',
            licenseLabel: 'Medical License Number *',
            specializationLabel: 'Specialization *',
            hospitalLabel: 'Current Hospital *',
            experienceLabel: 'Experience (Years) *',
            programSelection: 'Training Program Selection',
            programLabel: 'Preferred Training Program *',
            durationLabel: 'Training Duration *',
            koreanLevelLabel: 'Korean Language Level *',
            motivation: 'Application Motivation',
            motivationLabel: 'Application Motivation and Message',
            attachments: 'File Attachments',
            resumeLabel: 'Resume (PDF)',
            certificateLabel: 'License Certificate (PDF)',
            submitBtn: 'Submit Application',
            resetBtn: 'Reset',
            eligibility: 'Eligibility',
            documents: 'Required Documents'
        }
    };
    
    const currentTexts = texts[lang];
    
    // 폼 라벨 업데이트
    Object.keys(currentTexts).forEach(key => {
        const element = document.querySelector(`[data-text="${key}"]`);
        if (element) {
            element.textContent = currentTexts[key];
        }
    });
}

// ===== 모바일 메뉴 토글 =====
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// ===== 스크롤 효과 =====
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'white';
        header.style.backdropFilter = 'none';
    }
}

// ===== 폼 유효성 검사 =====
function validateForm(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const errors = {};
    
    // 필수 필드 검사
    const requiredFields = ['name', 'email', 'nationality', 'medicalLicense', 'specialization', 'hospital', 'experienceYears', 'preferredProgram', 'duration', 'koreanLevel'];
    
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
            inputElement.classList.remove('success');
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

// ===== 폼 제출 처리 =====
async function submitApplication(formData) {
    try {
        // 로딩 상태 표시
        const submitBtn = document.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading"></span>';
        submitBtn.disabled = true;
        
        // API에 데이터 저장
        const response = await fetch('/tables/applicants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                nationality: formData.get('nationality'),
                medical_license: formData.get('medicalLicense'),
                specialization: formData.get('specialization'),
                hospital: formData.get('hospital'),
                experience_years: parseInt(formData.get('experienceYears')),
                preferred_program: formData.get('preferredProgram'),
                duration: formData.get('duration'),
                korean_level: formData.get('koreanLevel'),
                message: formData.get('message'),
                status: '접수',
                application_date: new Date().toISOString()
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit application');
        }
        
        const result = await response.json();
        
        // 성공 메시지 표시
        showAlert('success', currentLang === 'ko' ? '지원서가 성공적으로 제출되었습니다.' : 'Application submitted successfully!');
        
        // 폼 초기화
        document.getElementById('applicationForm').reset();
        
        // 3초 후 메인 페이지로 이동
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
        
    } catch (error) {
        console.error('Error submitting application:', error);
        showAlert('error', currentLang === 'ko' ? '지원서 제출에 실패했습니다. 다시 시도해 주세요.' : 'Failed to submit application. Please try again.');
    } finally {
        // 버튼 상태 복원
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    const form = document.getElementById('applicationForm');
    form.parentNode.insertBefore(alertDiv, form);
    
    // 5초 후 알림 제거
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
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

// ===== 이벤트 리스너 =====
document.addEventListener('DOMContentLoaded', function() {
    // 언어 선택 버튼
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
    
    // 모바일 메뉴 토글
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // 스크롤 이벤트
    window.addEventListener('scroll', handleScroll);
    
    // 폼 제출 이벤트
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (validateForm('applicationForm')) {
                const formData = new FormData(this);
                await submitApplication(formData);
            }
        });
        
        // 실시간 유효성 검사
        const inputs = applicationForm.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() !== '') {
                    clearError(this.id);
                }
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    clearError(this.id);
                }
            });
        });
    }
    
    // 네비게이션 링크 활성화
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// ===== 유틸리티 함수 =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== 애니메이션 관찰자 =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// 관찰할 요소들 등록
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .stat-item, .form-section');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});