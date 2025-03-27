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
}); 