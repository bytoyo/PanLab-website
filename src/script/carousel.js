/* 轮播图逻辑 */
let currentIndex = 0; // 当前显示的图片索引
const slides = document.querySelectorAll('.carousel img'); // 获取所有图片
const totalSlides = slides.length; // 图片总数

// 显示指定索引的图片
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

// 切换到下一张图片
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
    updateDots();
}

// 切换到上一张图片
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
    updateDots();
}

// 动态生成小点点
const dotsContainer = document.querySelector('.carousel-dots');
slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
        updateDots();
    });
    dotsContainer.appendChild(dot);
});

// 更新小点点状态
function updateDots() {
    const dots = document.querySelectorAll('.carousel-dots button');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// 初始化显示第一张图片和小点点
showSlide(currentIndex);
updateDots();

// 自动播放，设置速度为3秒（3000毫秒）
let interval = setInterval(nextSlide, 3000);

// 停止自动播放（当鼠标悬停时）
document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(interval);
});

// 恢复自动播放（当鼠标移开时）
document.querySelector('.carousel').addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 3000);
});