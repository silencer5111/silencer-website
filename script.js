// انتظر حتى يتم تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', () => {
    // تأثير كتابة النص للعنوان الرئيسي
    const heroTitle = document.querySelector('.hero h1');
    
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let charIndex = 0;
        const typeText = () => {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100);
            } else {
                setTimeout(() => {
                    heroTitle.classList.add('text-glow');
                }, 500);
            }
        };
        
        setTimeout(typeText, 500);
    }

    // زر "اكتشف الآن"
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            ctaButton.classList.add('clicked');
            setTimeout(() => {
                alert('مرحباً بك في SILENCER HACK!');
                ctaButton.classList.remove('clicked');
            }, 300);
        });
    }

    // إضافة تأثير حركي عند التمرير
    const featureCards = document.querySelectorAll('.feature-card');
    
    // دالة للتحقق إذا كان العنصر مرئياً في نافذة العرض
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // دالة للتحقق من العناصر المرئية وإضافة فئة للتحريك
    function checkVisibility() {
        featureCards.forEach((card, index) => {
            if (isElementInViewport(card)) {
                // إضافة تأخير لكل بطاقة لعرضها تدريجياً
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 150);
            }
        });
    }

    // استدعاء دالة التحقق عند التمرير
    window.addEventListener('scroll', checkVisibility);
    
    // التحقق عند تحميل الصفحة
    setTimeout(checkVisibility, 500);

    // إضافة تأثير تغيير اللون لشريط التنقل عند التمرير
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // إضافة تأثير بصري على خلفية الصفحة
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.body.style.setProperty('--mouse-x', x);
        document.body.style.setProperty('--mouse-y', y);
    });

    // وظيفة نسخ عناوين المحافظ
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const address = button.getAttribute('data-address');
            
            // نسخ العنوان إلى الحافظة
            navigator.clipboard.writeText(address)
                .then(() => {
                    // تغيير أيقونة الزر مؤقتاً للإشارة إلى نجاح النسخ
                    const originalIcon = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check"></i>';
                    button.classList.add('copied');
                    
                    // إرجاع الأيقونة الأصلية بعد ثانيتين
                    setTimeout(() => {
                        button.innerHTML = originalIcon;
                        button.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    console.error('فشل في نسخ النص: ', err);
                    alert('حدث خطأ أثناء محاولة نسخ العنوان');
                });
        });
    });

    // وظيفة نسخ بيانات البنوك الكويتية
    const bankCopyButtons = document.querySelectorAll('.copy-bank');
    
    if (bankCopyButtons.length > 0) {
        bankCopyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');
                
                // نسخ القيمة إلى الحافظة
                navigator.clipboard.writeText(value)
                    .then(() => {
                        // تغيير أيقونة الزر مؤقتاً للإشارة إلى نجاح النسخ
                        const originalIcon = button.innerHTML;
                        button.innerHTML = '<i class="fas fa-check"></i>';
                        button.classList.add('copied');
                        
                        // إرجاع الأيقونة الأصلية بعد ثانيتين
                        setTimeout(() => {
                            button.innerHTML = originalIcon;
                            button.classList.remove('copied');
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('فشل في نسخ النص: ', err);
                        alert('حدث خطأ أثناء محاولة نسخ المعلومات');
                    });
            });
        });
    }

    // وظيفة التحويل البنكي
    const bankTransferButtons = document.querySelectorAll('.bank-transfer-btn');
    
    if (bankTransferButtons.length > 0) {
        bankTransferButtons.forEach(button => {
            button.addEventListener('click', () => {
                // الحصول على معلومات البنك من أقرب بطاقة
                const bankCard = button.closest('.bank-card');
                const bankName = bankCard.querySelector('h4').textContent;
                
                alert(`سيتم تحويلك إلى صفحة ${bankName} لإتمام عملية الدفع`);
            });
        });
    }

    // تحريك العناصر عند التمرير للوصول إلى قسم الدفع
    const paymentSection = document.getElementById('payment');
    const cryptoCards = document.querySelectorAll('.crypto-card');
    const infoCards = document.querySelectorAll('.info-card');
    
    if (paymentSection && cryptoCards.length > 0) {
        // دالة التحقق من ظهور قسم الدفع
        const checkPaymentVisibility = () => {
            const rect = paymentSection.getBoundingClientRect();
            const isVisible = (
                rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
            
            if (isVisible) {
                // تحريك بطاقات العملات المشفرة تدريجياً
                cryptoCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200);
                });
                
                // تحريك بطاقات المعلومات تدريجياً
                infoCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 500 + index * 150);
                });
                
                // إزالة المراقب بعد التحريك
                window.removeEventListener('scroll', checkPaymentVisibility);
            }
        };
        
        // مراقبة التمرير للتحقق من رؤية قسم الدفع
        window.addEventListener('scroll', checkPaymentVisibility);
        
        // التحقق عند تحميل الصفحة
        setTimeout(checkPaymentVisibility, 500);
    }

    // تحريك بطاقات الحيوانات عند التمرير للوصول إلى قسم ممنوع الدخول
    const restrictedSection = document.getElementById('restricted');
    const animalCards = document.querySelectorAll('.animal-card');
    
    if (restrictedSection && animalCards.length > 0) {
        // دالة التحقق من ظهور قسم ممنوع الدخول
        const checkRestrictedVisibility = () => {
            const rect = restrictedSection.getBoundingClientRect();
            const isVisible = (
                rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
            
            if (isVisible) {
                // إضافة تأثير الدخول تباعاً للبطاقات
                animalCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 150);
                });
                
                // إزالة المراقب بعد التحريك
                window.removeEventListener('scroll', checkRestrictedVisibility);
            }
        };
        
        // مراقبة التمرير للتحقق من رؤية القسم
        window.addEventListener('scroll', checkRestrictedVisibility);
        
        // التحقق عند تحميل الصفحة
        setTimeout(checkRestrictedVisibility, 500);
        
        // إضافة تأثير عند تحويم المؤشر فوق الصور
        animalCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('hovered');
            });
            
            card.addEventListener('mouseleave', () => {
                card.classList.remove('hovered');
            });
        });
    }

    // تحريك بطاقات المشاريب عند التمرير للوصول إلى قسم المشاريب
    const drinksSection = document.getElementById('drinks');
    const drinkCards = document.querySelectorAll('.drink-card');
    
    if (drinksSection && drinkCards.length > 0) {
        // دالة التحقق من ظهور قسم المشاريب
        const checkDrinksVisibility = () => {
            const rect = drinksSection.getBoundingClientRect();
            const isVisible = (
                rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
            
            if (isVisible) {
                // إضافة تأثير الدخول تباعاً للبطاقات
                drinkCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 150);
                });
                
                // إزالة المراقب بعد التحريك
                window.removeEventListener('scroll', checkDrinksVisibility);
            }
        };
        
        // مراقبة التمرير للتحقق من رؤية القسم
        window.addEventListener('scroll', checkDrinksVisibility);
        
        // التحقق عند تحميل الصفحة
        setTimeout(checkDrinksVisibility, 500);
        
        // إضافة تأثير عند تحويم المؤشر فوق الصور
        drinkCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('hovered');
            });
            
            card.addEventListener('mouseleave', () => {
                card.classList.remove('hovered');
            });
        });
    }

    // قسم دعوة الأصدقاء
    // التحقق من ظهور قسم الدعوة
    function checkInviteSectionVisibility() {
        const inviteSection = document.querySelector('.invite-section');
        if (!inviteSection) return;

        const inviteCards = document.querySelectorAll('.invite-card');
        const qrContainer = document.querySelector('.qr-container');
        
        const rect = inviteSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            inviteCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 150);
            });
            
            setTimeout(() => {
                if (qrContainer) qrContainer.classList.add('visible');
            }, inviteCards.length * 150);
        }
    }
    
    // أزرار المشاركة
    const shareButtons = document.querySelectorAll('.share-btn');
    if (shareButtons.length > 0) {
        shareButtons.forEach(button => {
            button.addEventListener('click', () => {
                const siteUrl = window.location.href;
                const shareText = 'تفضل بزيارة موقع SILENCER HACK المميز!';
                
                if (button.classList.contains('whatsapp-btn')) {
                    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + siteUrl)}`, '_blank');
                } 
                else if (button.classList.contains('facebook-btn')) {
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`, '_blank');
                } 
                else if (button.classList.contains('email-btn')) {
                    window.open(`mailto:?subject=${encodeURIComponent('دعوة لزيارة SILENCER HACK')}&body=${encodeURIComponent(shareText + '\n\n' + siteUrl)}`, '_blank');
                } 
                else if (button.classList.contains('copy-link-btn')) {
                    const link = button.getAttribute('data-link') || siteUrl;
                    navigator.clipboard.writeText(link)
                        .then(() => {
                            // تغيير مظهر الزر عند النسخ
                            const originalText = button.textContent;
                            button.textContent = 'تم النسخ!';
                            button.classList.add('copied');
                            
                            // إعادة الزر لحالته الأصلية بعد ثانيتين
                            setTimeout(() => {
                                button.textContent = originalText;
                                button.classList.remove('copied');
                            }, 2000);
                        })
                        .catch(err => {
                            console.error('فشل في نسخ الرابط: ', err);
                            alert('حدث خطأ أثناء محاولة نسخ الرابط');
                        });
                }
            });
        });
    }
    
    // إضافة التحقق من ظهور قسم الدعوة عند التمرير
    window.addEventListener('scroll', checkInviteSectionVisibility);
    // التحقق عند تحميل الصفحة
    setTimeout(checkInviteSectionVisibility, 500);

    // التحقق من صحة بيانات تسجيل الدخول
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    
    // معالجة نموذج تسجيل الدخول
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // التحقق من أن الحقول غير فارغة
            if (!username || !password) {
                showError('الرجاء إدخال اسم المستخدم وكلمة المرور');
                return;
            }
            
            // هنا يمكنك إضافة التحقق من قاعدة البيانات
            // هذا مثال بسيط للتحقق
            if (username === 'admin' && password === 'admin123') {
                showSuccess('تم تسجيل الدخول بنجاح');
                // تحديث معلومات المستخدم في القائمة المنسدلة
                updateUserMenu({
                    username: username,
                    fullname: 'المدير',
                    email: 'admin@example.com'
                });
                // إخفاء نموذج تسجيل الدخول وإظهار قائمة المستخدم
                setTimeout(() => {
                    document.querySelector('.login-section').style.display = 'none';
                    document.querySelector('.user-menu').style.display = 'block';
                }, 1500);
            } else {
                showError('اسم المستخدم أو كلمة المرور غير صحيحة');
            }
        });
    }
    
    // معالجة نموذج التسجيل
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // التحقق من أن جميع الحقول مملوءة
            if (!fullname || !email || !username || !password || !confirmPassword) {
                showError('الرجاء ملء جميع الحقول المطلوبة');
                return;
            }
            
            // التحقق من صحة البريد الإلكتروني
            if (!isValidEmail(email)) {
                showError('الرجاء إدخال بريد إلكتروني صحيح');
                return;
            }
            
            // التحقق من تطابق كلمتي المرور
            if (password !== confirmPassword) {
                showError('كلمتا المرور غير متطابقتين');
                return;
            }
            
            // التحقق من طول كلمة المرور
            if (password.length < 8) {
                showError('يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل');
                return;
            }
            
            // تحديث معلومات المستخدم في القائمة المنسدلة
            updateUserMenu({
                username: username,
                fullname: fullname,
                email: email
            });
            
            showSuccess('تم إنشاء الحساب بنجاح');
            setTimeout(() => {
                document.querySelector('.register-section').style.display = 'none';
                document.querySelector('.user-menu').style.display = 'block';
            }, 1500);
        });
    }

    // دالة تحديث قائمة المستخدم
    function updateUserMenu(userData) {
        const userMenu = document.querySelector('.user-menu');
        const userName = userMenu.querySelector('.user-name');
        const userFullname = userMenu.querySelector('.user-fullname');
        const userEmail = userMenu.querySelector('.user-email');
        
        userName.textContent = userData.username;
        userFullname.textContent = userData.fullname;
        userEmail.textContent = userData.email;
    }

    // إضافة وظائف القائمة المنسدلة
    const userMenu = document.querySelector('.user-menu');
    const userMenuTrigger = document.querySelector('.user-menu-trigger');
    const logoutBtn = document.querySelector('.logout-btn');

    if (userMenuTrigger) {
        userMenuTrigger.addEventListener('click', () => {
            userMenu.classList.toggle('active');
        });
    }

    // إغلاق القائمة المنسدلة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!userMenu.contains(e.target)) {
            userMenu.classList.remove('active');
        }
    });

    // معالجة تسجيل الخروج
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // إخفاء قائمة المستخدم
            userMenu.style.display = 'none';
            // إظهار نموذج تسجيل الدخول
            document.querySelector('.login-section').style.display = 'flex';
            showSuccess('تم تسجيل الخروج بنجاح');
        });
    }
});

// دالة للتحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// دالة لعرض رسالة الخطأ
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // إزالة أي رسائل خطأ سابقة
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // إضافة رسالة الخطأ الجديدة
    const form = document.querySelector('.login-form, .register-form');
    form.insertBefore(errorDiv, form.firstChild);
    
    // إخفاء رسالة الخطأ بعد 3 ثواني
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// دالة لعرض رسالة النجاح
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    // إزالة أي رسائل نجاح سابقة
    const existingSuccess = document.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    // إضافة رسالة النجاح الجديدة
    const form = document.querySelector('.login-form, .register-form');
    form.insertBefore(successDiv, form.firstChild);
    
    // إخفاء رسالة النجاح بعد 3 ثواني
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
} 