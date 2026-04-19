<script>
    // 滾動偵測顯示動畫
    const observerOptions = {
    threshold: 0.1
};

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 模擬表單提交
    const recruitForm = document.getElementById('recruitForm');
    const notification = document.getElementById('notification');

    recruitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // 顯示通知
    notification.classList.remove('translate-y-20');
    notification.classList.add('translate-y-0');

    // 3秒後隱藏並重置
    setTimeout(() => {
    notification.classList.add('translate-y-20');
    notification.classList.remove('translate-y-0');
    recruitForm.reset();
}, 3000);
});

    // 導航欄平滑捲動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
</script>
</body>
</html>