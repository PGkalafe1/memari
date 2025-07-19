
// Login functionality
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '123456') {
        document.getElementById('loginPanel').style.display = 'none';
        document.getElementById('loadingScreen').style.display = 'flex';

        // Loading messages
        const loadingMessages = [
            'بارگذاری اطلاعات پروژه‌ها...',
            'آماده‌سازی گالری تصاویر...',
            'بارگذاری اطلاعات تیم...',
            'تنظیم رابط کاربری...',
            'نهایی‌سازی سیستم...'
        ];

        let messageIndex = 0;
        const loadingText = document.getElementById('loadingText');

        // Progress bar animation
        let progress = 0;
        const progressBar = document.getElementById('progressBar');
        const interval = setInterval(() => {
            progress += Math.random() * 12;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    document.getElementById('loadingScreen').style.display = 'none';
                    document.getElementById('mainSite').style.display = 'block';
                }, 800);
            }
            progressBar.style.width = progress + '%';

            // Change loading message
            if (progress > messageIndex * 20 && messageIndex < loadingMessages.length) {
                loadingText.textContent = loadingMessages[messageIndex];
                messageIndex++;
            }
        }, 300);
    } else {
        alert('نام کاربری یا رمز عبور اشتباه است!');
    }
});

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId + 'Page').classList.add('active');

    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Navigation click handlers
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const pageId = this.getAttribute('data-page');
        showPage(pageId);
    });
});

// Project filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active', 'bg-yellow-500', 'text-black');
            b.classList.add('bg-gray-800', 'text-white');
        });

        this.classList.add('active', 'bg-yellow-500', 'text-black');
        this.classList.remove('bg-gray-800', 'text-white');

        // Filter projects
        const filter = this.getAttribute('data-filter');
        const projects = document.querySelectorAll('.project-card[data-category]');

        projects.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuPanel = document.getElementById('mobileMenuPanel');

mobileMenu.addEventListener('click', function () {
    mobileMenuPanel.classList.toggle('hidden');
    const icon = this.querySelector('i');
    if (mobileMenuPanel.classList.contains('hidden')) {
        icon.className = 'fas fa-bars text-xl';
    } else {
        icon.className = 'fas fa-times text-xl';
    }
});

// Scroll effect for navigation
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.08)';
        nav.style.backdropFilter = 'blur(15px)';
    }
});

// Parallax effect
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Animate stats counters
function animateCounters() {
    const counters = document.querySelectorAll('.stats-counter');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current) + '+';
        }, 20);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Animate counters when they come into view
            if (entry.target.querySelector('.stats-counter')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section, .project-card, .service-card, .testimonial-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.8s ease';
    observer.observe(element);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
                                </script >
    <script>
        document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
        if (loginForm) {
            loginForm.addEventListener("submit", function (e) {
                e.preventDefault(); // جلوگیری از ارسال فرم
                const username = loginForm.querySelector("input[name='username']").value;
                const password = loginForm.querySelector("input[name='password']").value;

                // یوزرنیم و پسورد ثابت
                if (username === "admin" && password === "1234") {
                    alert("ورود موفقیت‌آمیز بود!");
                    // به صفحه بعدی هدایت می‌شوید
                    window.location.href = "dashboard.html";
                } else {
                    alert("نام کاربری یا رمز عبور اشتباه است.");
                }
            });
    }
});







        (function() {
            function c() {
                var b = a.contentDocument || a.contentWindow.document;
                if (b) {
                    var d = b.createElement('script');
                    d.innerHTML = `
                window.__CF$cv$params = {
                    r: '96143bd0c28dd294',
                    t: 'MTc1Mjg2NTM0OS4wMDAwMDA='
                };
                var a = document.createElement('script');
                a.nonce = '';
                a.src = '/cdn-cgi/challenge-platform/scripts/jsd/main.js';
                document.getElementsByTagName('head')[0].appendChild(a);
            `;
                    b.getElementsByTagName('head')[0].appendChild(d);
                }
            }

    if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);

        if (document.readyState !== 'loading') {
            c();
        } else {
            if (window.addEventListener) {
            document.addEventListener('DOMContentLoaded', c);
            } else {
                var e = document.onreadystatechange || function() { };
        document.onreadystatechange = function(b) {
            e(b);
        if (document.readyState !== 'loading') {
            document.onreadystatechange = e;
        c();
                    }
                };
            }
        }
    }
})();



        document.addEventListener("DOMContentLoaded", function () {
                                        const loginForm = document.querySelector("form");
        if (loginForm) {
            loginForm.addEventListener("submit", function (e) {
                e.preventDefault(); // جلوگیری از ارسال فرم
                const username = loginForm.querySelector("input[name='username']").value;
                const password = loginForm.querySelector("input[name='password']").value;

                // یوزرنیم و پسورد ثابت
                if (username === "admin" && password === "1234") {
                    alert("ورود موفقیت‌آمیز بود!");
                    // به صفحه بعدی هدایت می‌شوید
                    window.location.href = "dashboard.html";
                } else {
                    alert("نام کاربری یا رمز عبور اشتباه است.");
                }
            });
                                        }
                                    });





        // Login functionality
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '123456') {
            document.getElementById('loginPanel').style.display = 'none';
        document.getElementById('loadingScreen').style.display = 'flex';

        // Loading messages
        const loadingMessages = [
        'بارگذاری اطلاعات پروژه‌ها...',
        'آماده‌سازی گالری تصاویر...',
        'بارگذاری اطلاعات تیم...',
        'تنظیم رابط کاربری...',
        'نهایی‌سازی سیستم...'
        ];

        let messageIndex = 0;
        const loadingText = document.getElementById('loadingText');

        // Progress bar animation
        let progress = 0;
        const progressBar = document.getElementById('progressBar');
                                            const interval = setInterval(() => {
            progress += Math.random() * 12;
                                                if (progress >= 100) {
            progress = 100;
        clearInterval(interval);
                                                    setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('mainSite').style.display = 'block';
                                                    }, 800);
                                                }
        progressBar.style.width = progress + '%';

                                                // Change loading message
                                                if (progress > messageIndex * 20 && messageIndex < loadingMessages.length) {
            loadingText.textContent = loadingMessages[messageIndex];
        messageIndex++;
                                                }
                                            }, 300);
                                        } else {
            alert('نام کاربری یا رمز عبور اشتباه است!');
                                        }
                                    });

        // Page navigation
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });

        // Show selected page
        document.getElementById(pageId + 'Page').classList.add('active');

                                        // Update navigation
                                        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
                                        });

        document.querySelector(`[data-page="${pageId}"]`).classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
                                    }

                                    // Navigation click handlers
                                    document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');
                showPage(pageId);
            });
                                    });

                                    // Project filter functionality
                                    document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                // Update active filter button
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('active', 'bg-yellow-500', 'text-black');
                    b.classList.add('bg-gray-800', 'text-white');
                });

                this.classList.add('active', 'bg-yellow-500', 'text-black');
                this.classList.remove('bg-gray-800', 'text-white');

                // Filter projects
                const filter = this.getAttribute('data-filter');
                const projects = document.querySelectorAll('.project-card[data-category]');

                projects.forEach(project => {
                    if (filter === 'all' || project.getAttribute('data-category') === filter) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
                                    });

        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuPanel = document.getElementById('mobileMenuPanel');

        mobileMenu.addEventListener('click', function () {
            mobileMenuPanel.classList.toggle('hidden');
        const icon = this.querySelector('i');
        if (mobileMenuPanel.classList.contains('hidden')) {
            icon.className = 'fas fa-bars text-xl';
                                        } else {
            icon.className = 'fas fa-times text-xl';
                                        }
                                    });

        // Scroll effect for navigation
        window.addEventListener('scroll', function () {
                                        const nav = document.querySelector('nav');
                                        if (window.scrollY > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
                                        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.08)';
        nav.style.backdropFilter = 'blur(15px)';
                                        }
                                    });

        // Parallax effect
        window.addEventListener('scroll', function () {
                                        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');

                                        parallaxElements.forEach(element => {
                                            const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
                                        });
                                    });

        // Animate stats counters
        function animateCounters() {
                                        const counters = document.querySelectorAll('.stats-counter');

                                        counters.forEach(counter => {
                                            const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;

                                            const timer = setInterval(() => {
            current += increment;
                                                if (current >= target) {
            current = target;
        clearInterval(timer);
                                                }
        counter.textContent = Math.floor(current) + '+';
                                            }, 20);
                                        });
                                    }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
                                    };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';

                    // Animate counters when they come into view
                    if (entry.target.querySelector('.stats-counter')) {
                        animateCounters();
                    }
                }
            });
                                    }, observerOptions);

                                    // Observe elements for animation
                                    document.querySelectorAll('section, .project-card, .service-card, .testimonial-card').forEach(element => {
            element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
        observer.observe(element);
                                    });

                                    // Smooth scrolling for anchor links
                                    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
                                    });