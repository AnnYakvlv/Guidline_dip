// Носители (с фото вместо bgColors)
const carriersData = [
    { id: 0, type: "print", name: "Блокнот", desc: "Блокнот формата А5 с твёрдой обложкой и кольцами. Используется для корпоративных записей и подарков.", images: ["images/notebook-1.png", "images/notebook-2.png"] },
    { id: 1, type: "print", name: "Бейдж", desc: "Именной бейдж на крючке используется для идентификации и представлен с использованием фирменной графики. Его габариты соответствуют стандартному формату: ширина составляет 60 мм, а высота 90 мм. Для надписей используется шрифт CodecPro.", images: ["images/badge-1.png", "images/badge-2.svg"] },
    { id: 2, type: "print", name: "Визитка", desc: "Двусторонняя визитная карточка размером 90×50мм. На визите используется модифицированный логотип и фирменная графика", images: ["images/business-card-1.png", "images/business-card-2.svg"] },
    { id: 3, type: "pack", name: "Ароматизатор", desc: "Автомобильный ароматизатор из плотного картона с односторонней печатью. Размер 120x80 мм. Крепится на зеркало заднего вида с помощью ленты. Используется как промо-сувенир.", images: ["images/air-freshener.png", "images/air-freshener-2.svg"] },
    { id: 4, type: "print", name: "Постер А4", desc: "Информационный постер формата А4 (210×297 мм). Предназначен для размещения как внутри магазина,так и вне для привлечения покупателей. Использованы основные шрифты CoderPro и Benzin-medium, а также фирменный фотостиль. ", images: ["images/poster_shina.png", "images/poster-a4-2.svg"] },
    { id: 5, type: "pack", name: "Ручки", desc: "Фирменные шариковые ручки с нанесением логотипа и названия бренда. Представлены в двух цветовых вариациях.", images: ["images/pens-1.png", "images/pens.svg"] },
    { id: 6, type: "print", name: "Конверт", desc: "Евроконверт с подкладкой размерами 220*110мм. Нанесен модифицировнаный логотип и контактная информация", images: ["images/envelope.png", "images/envelope-2.svg"] },
    { id: 7, type: "pack", name: "Папка", desc: "Папка-регистратор А4.", images: ["images/folder-1.png", "images/folder-2.jpg"] },
    { id: 8, type: "pack", name: "Лента", desc: "Упаковочная лента.", images: ["images/ribbon-1.png", "images/ribbon-2.svg"] },
    { id: 9, type: "pack", name: "Форма", desc: "Поло с вышитым логотипом для сотрудников", images: ["images/t-shirt1.png", "images/shirt.svg"] },
    { id: 10, type: "outdoor", name: "Грузовой автомобиль", desc: "Оклейка грузового транспорта размером 6000*2500мм. Несет на себе название и модифицированный логотип магазина, ссылку на сайт и слоган", images: ["images/truck-1.png", "images/truck.png"] },
    { id: 11, type: "outdoor", name: "Морской контейнер", desc: "Оклейка контейнера. Несет на себе название и  модифицированный логотип магазина, ссылку на сайт и слоган, а также информацию по грузу.", images: ["images/container-1.png", "images/container-2.png"] },
    { id: 12, type: "pack", name: "Кепка", desc: "Бейсболка с вышивкой для сотрудников. Представленна в фирменных цветах. С обратной стороны есть этикетка (нашивка) с логотипом.", images: ["images/cap-1.png", "images/cap.svg"] },
    { id: 13, type: "digital", name: "Сайт", desc: "Адаптивный корпоративный сайт. В проекте используются два шрифта: один для заголовков (насыщенный), другой для основного текста (нейтральный). Размеры: заголовки 52 и 32 пикселя, основной текст 24 пикселей, подписи 16. Сетка — 12 колонок, отступ между колонками 20 пикселей. На планшете — 8 колонок; на телефоне — 4 колонки, отступ 16 пикселей.", images: ["images/web-site1.png", "images/website.svg"] },
    { id: 14, type: "outdoor", name: "Билборд", desc: "Рекламный щит 3000×6000мм. Использована вся фирменная графика: от шрифтов до фирменных элементов. Представляет собой рекламу онлайн-магазина", images: ["images/billboard-1.png", "images/billboard-2.svg"] },
    { id: 15, type: "print", name: "Плакат", desc: "Информационный плакат для рекламы. Представлен в формате А2 с использованием фирменного фотостиля, а также крупной типографики.", images: ["images/poster-a2-1.png", "images/poster-a2-2.svg"] },
    { id: 16, type: "outdoor", name: "Указатель", desc: "Указатель для физической точки магазина. Выполнен с использованием фирменных цветов, шрифта Benzin-medium для заголовка отделов, а шрифт CodecPro для основной информации.", images: ["images/znak.png", "images/znak.svg"] }
];

let currentFilter = "all";
let currentPage = 0;
const ITEMS_PER_PAGE = 8;

function getFiltered() {
    return currentFilter === "all" ? [...carriersData] : carriersData.filter(c => c.type === currentFilter);
}

function renderGrid() {
    const grid = document.getElementById("carrierGridModern");
    if (!grid) return;
    const filtered = getFiltered();
    const start = currentPage * ITEMS_PER_PAGE;
    const items = filtered.slice(start, start + ITEMS_PER_PAGE);
    grid.innerHTML = "";
    items.forEach(c => {
        const div = document.createElement("div");
        div.className = "carrier-card-square";
        // Используем первое фото как фон
        const firstImage = c.images[0] || "";
        div.innerHTML = `<div class="carrier-card-image" style="background-image: url('${firstImage}'); background-size: cover; background-position: center;"><div class="carrier-card-overlay"><div class="carrier-card-title">${c.name}</div></div></div>`;
        div.onclick = () => openModal(c.id);
        grid.appendChild(div);
    });
    const total = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const prevBtn = document.getElementById("prevPageBtn");
    const nextBtn = document.getElementById("nextPageBtn");
    const pageCounter = document.getElementById("pageCounter");
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage >= total - 1;
    if (pageCounter) pageCounter.innerText = `стр. ${currentPage + 1} / ${total || 1}`;
}

function openModal(id) {
    const carrier = getFiltered().find(x => x.id === id);
    if (carrier) {
        window.currentCarrier = carrier;
        window.currentImgIdx = 0;
        updateModal();
        document.getElementById("carrierModal").classList.add("open");

        // Скрываем FAB на мобилке при открытии модалки
        if (window.innerWidth <= 768) {
            const fab = document.getElementById("expandableFab");
            //if (fab) fab.style.display = "none";
        }
    }
}
// В функции закрытия модалки (у вас уже есть обработчик)
document.getElementById("closeModalBtn").onclick = () => {
    document.getElementById("carrierModal").classList.remove("open");
    
};
document.getElementById("carrierModal").onclick = (e) => {
    if (e.target === document.getElementById("carrierModal")) {
        document.getElementById("carrierModal").classList.remove("open");
        
    }
};

function updateModal() {
    const c = window.currentCarrier;
    if (!c) return;
    document.getElementById("modalTitle").innerText = c.name;
    document.getElementById("modalDesc").innerText = c.desc;
    
    // Создаём кнопки-вкладки
    const tabsDiv = document.getElementById("modalImageTabs");
    tabsDiv.innerHTML = c.images.map((img, i) => `<button class="modal-tab-btn ${i === window.currentImgIdx ? "active" : ""}" data-idx="${i}">${i === 0 ? "В среде" : "Макет"}</button>`).join("");
    
    document.querySelectorAll(".modal-tab-btn").forEach(btn => {
        btn.onclick = () => {
            window.currentImgIdx = parseInt(btn.dataset.idx);
            updateModal();
        };
    });
    
    // Показываем текущее фото - убираем лишний div-обертку с фоном
    const currentImage = c.images[window.currentImgIdx];
    const modalVisual = document.getElementById("modalVisual");
    
    // Очищаем и устанавливаем только img без дополнительных оберток
    modalVisual.innerHTML = `<img src="${currentImage}" alt="${c.name}" class="modal-image">`;
}


function nextCarrier() {
    const filtered = getFiltered();
    const idx = filtered.findIndex(c => c.id === window.currentCarrier.id);
    if (idx < filtered.length - 1) {
        window.currentCarrier = filtered[idx + 1];
        window.currentImgIdx = 0;
        updateModal();
    }
}

function prevCarrier() {
    const filtered = getFiltered();
    const idx = filtered.findIndex(c => c.id === window.currentCarrier.id);
    if (idx > 0) {
        window.currentCarrier = filtered[idx - 1];
        window.currentImgIdx = 0;
        updateModal();
    }
}

// Пагинация
const prevBtn = document.getElementById("prevPageBtn");
const nextBtn = document.getElementById("nextPageBtn");
if (prevBtn) {
    prevBtn.onclick = () => {
        if (currentPage > 0) {
            currentPage--;
            renderGrid();
        }
    };
}
if (nextBtn) {
    nextBtn.onclick = () => {
        const total = Math.ceil(getFiltered().length / ITEMS_PER_PAGE);
        if (currentPage < total - 1) {
            currentPage++;
            renderGrid();
        }
    };
}

// Фильтры
document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        currentPage = 0;
        renderGrid();
    };
});

// Модальные кнопки
document.getElementById("modalPrevBtn").onclick = prevCarrier;
document.getElementById("modalNextBtn").onclick = nextCarrier;
document.getElementById("closeModalBtn").onclick = () => document.getElementById("carrierModal").classList.remove("open");

// Палитра (основные + дополнительные)
const paletteColors = [
    // Основные
    { name: "Text Dark", hex: "#211F22", rgb: "33,31,34", type: "primary" },
    { name: "White Smoke", hex: "#F4F4F4", rgb: "244,244,244", type: "primary" },
    { name: "Wasabi", hex: "#E9F055", rgb: "233,240,86", type: "primary" },
    { name: "Royal Cobalt", hex: "#004AAD", rgb: "0,74,173", type: "primary" },
    // Дополнительные
    { name: "Fresh Green", hex: "#38AD02", rgb: "56,173,2", type: "secondary" },
    { name: "Sky Blue", hex: "#2092EA", rgb: "32,146,234", type: "secondary" },
    { name: "Deep Navy", hex: "#002248", rgb: "0,34,72", type: "secondary" }
];

let currentPaletteFilter = "primary";

function renderPalette() {
    const grid = document.getElementById("paletteGrid");
    if (!grid) return;
    const filtered = paletteColors.filter(c => c.type === currentPaletteFilter);
    grid.innerHTML = "";
    filtered.forEach(c => {
        const card = document.createElement("div");
        card.className = "palette-card";
        card.style.backgroundColor = c.hex;
        card.style.cursor = "pointer";
        
        // Показываем HEX при наведении
        const hexLabel = document.createElement("div");
        hexLabel.className = "palette-hex-label";
        hexLabel.textContent = c.hex;
        hexLabel.style.opacity = "0";
        card.appendChild(hexLabel);
        
        // Клик для копирования HEX
        card.onclick = async () => {
            await navigator.clipboard.writeText(c.hex);
            showCopyNotification(card, c.hex);
        };
        
        // Показываем/скрываем HEX при наведении
        card.onmouseenter = () => { hexLabel.style.opacity = "1"; };
        card.onmouseleave = () => { hexLabel.style.opacity = "0"; };
        
        grid.appendChild(card);
    });
}

// Функция показа уведомления о копировании
function showCopyNotification(element, hex) {
    // Удаляем старое уведомление
    const existing = document.querySelector('.copy-notification');
    if (existing) existing.remove();
    
    // Создаём уведомление
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = `Скопировано!`;
    document.body.appendChild(notification);
    
    // Позиционируем относительно карточки
    const rect = element.getBoundingClientRect();
    notification.style.left = `${rect.left + rect.width / 2}px`;
    notification.style.top = `${rect.top - 48}px`;
    
    // Анимация
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 1500);
}

// Фильтры палитры
document.querySelectorAll("[data-palette-filter]").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll("[data-palette-filter]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentPaletteFilter = btn.dataset.paletteFilter;
        renderPalette();
    };
});

renderPalette();

// Типографика с ограничением на мобилках
const headingSlider = document.getElementById("headingSizeSlider");
const headingText = document.getElementById("headingTextBlock");
const headingValue = document.getElementById("headingSizeValue");
const bodySlider = document.getElementById("bodySizeSlider");
const bodyText = document.getElementById("bodyTextBlock");
const bodyValue = document.getElementById("bodySizeValue");

// Функция для проверки и ограничения размера на мобилках
function clampHeadingSize() {
    if (window.innerWidth <= 768) {
        let currentVal = parseInt(headingSlider.value);
        if (currentVal > 32) {
            headingSlider.value = 32;
            headingText.style.fontSize = "32px";
            headingValue.innerText = "32px";
        }
    }
}

function clampBodySize() {
    if (window.innerWidth <= 768) {
        let currentVal = parseInt(bodySlider.value);
        if (currentVal > 24) {
            bodySlider.value = 24;
            bodyText.style.fontSize = "24px";
            bodyValue.innerText = "24px";
        }
    }
}

headingSlider.oninput = () => {
    let v = parseInt(headingSlider.value);
    if (window.innerWidth <= 768 && v > 32) {
        v = 32;
        headingSlider.value = 32;
    }
    headingText.style.fontSize = v + "px";
    headingValue.innerText = v + "px";
};

bodySlider.oninput = () => {
    let v = parseInt(bodySlider.value);
    if (window.innerWidth <= 768 && v > 24) {
        v = 24;
        bodySlider.value = 24;
    }
    bodyText.style.fontSize = v + "px";
    bodyValue.innerText = v + "px";
};

// При ресайзе окна проверяем ограничения
window.addEventListener('resize', () => {
    clampHeadingSize();
    clampBodySize();
});

// Логотипы с активным состоянием
document.querySelectorAll(".logo-card").forEach(card => {
    card.addEventListener("click", function() {
        document.querySelectorAll(".logo-card").forEach(c => c.classList.remove("active"));
        this.classList.add("active");
    });
});

// Тема, сайдбар, прогресс
document.getElementById("themeToggle").onclick = () => {
    const root = document.documentElement;
    const cur = root.getAttribute("data-theme");
    root.setAttribute("data-theme", cur === "dark" ? "light" : "dark");
};
document.getElementById("collapseSidebarBtn").onclick = () => document.getElementById("sidebar").classList.toggle("collapsed");

window.onscroll = () => {
    const st = document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const progress = document.getElementById("progress");
    if (progress) progress.style.width = (st / h * 100) + "%";
    const topBtn = document.getElementById("topBtn");
    if (topBtn) topBtn.classList.toggle("show", st > 400);
};
document.getElementById("topBtn").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Анимация появления
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// FAB (мобильная навигация)
const fab = document.getElementById("expandableFab");
if (fab) {
    document.getElementById("fabMainBtn").onclick = e => {
        e.stopPropagation();
        fab.classList.toggle("open");
    };
    document.addEventListener("click", e => {
        if (fab.classList.contains("open") && !fab.contains(e.target)) fab.classList.remove("open");
    });
    document.getElementById("fabThemeBranch").onclick = () => {
        document.getElementById("themeToggle").click();
        fab.classList.remove("open");
    };
    document.querySelectorAll(".fab-icon-btn[href]").forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            document.querySelector(btn.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
            fab.classList.remove("open");
        };
    });
}

// Запуск отрисовки сетки носителей
renderGrid();

// ========== UI KIT ДЕМО ==========

// 1. Кнопка с ценой (счётчик)
const demoCartBtn = document.getElementById('demoCartBtnUI');
let isInCartUI = false;
let qtyUI = 0;

function updateCartButtonUI() {
    if (isInCartUI && qtyUI > 0) {
        demoCartBtn.classList.add('in-cart');
        demoCartBtn.innerHTML = `<div class="qty-controls"><span class="qty-minus">−</span><span>${qtyUI}</span><span class="qty-plus">+</span></div>`;
    } else {
        demoCartBtn.classList.remove('in-cart');
        demoCartBtn.innerHTML = `<span>1 250 ₽ </span>`;
        isInCartUI = false;
        qtyUI = 0;
    }
}

if (demoCartBtn) {
    demoCartBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('qty-minus')) {
            if (qtyUI > 1) {
                qtyUI--;
                updateCartButtonUI();
            } else if (qtyUI === 1) {
                isInCartUI = false;
                qtyUI = 0;
                updateCartButtonUI();
            }
        } else if (e.target.classList.contains('qty-plus')) {
            if (qtyUI < 99) {
                qtyUI++;
                updateCartButtonUI();
            }
        } else if (!isInCartUI) {
            isInCartUI = true;
            qtyUI = 1;
            updateCartButtonUI();
        }
    });
}

// 2. Таб-кнопки (Профиль / Избранное)
const profileTab = document.querySelector('.tab-profile');
const favoritesTab = document.querySelector('.tab-favorites');

if (profileTab && favoritesTab) {
    profileTab.classList.add('active');
    profileTab.addEventListener('click', () => {
        profileTab.classList.add('active');
        favoritesTab.classList.remove('active');
    });
    favoritesTab.addEventListener('click', () => {
        favoritesTab.classList.add('active');
        profileTab.classList.remove('active');
    });
}

// 3. Дропдаун сортировки
const sortBtn = document.getElementById('sortBtnDemoUI');
const sortMenu = document.getElementById('sortMenuDemoUI');

if (sortBtn && sortMenu) {
    sortBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        sortMenu.classList.toggle('show');
    });
    
    document.addEventListener('click', function(e) {
        if (sortBtn && sortMenu && !sortBtn.contains(e.target) && !sortMenu.contains(e.target)) {
            sortMenu.classList.remove('show');
        }
    });
    
    document.querySelectorAll('.sort-option-demo').forEach(option => {
        option.addEventListener('click', function() {
            if (sortMenu) sortMenu.classList.remove('show');
        });
    });
}

// 4. Модальное окно (как в товары.html — две отдельные модалки)
const modalDesktop = document.getElementById('modalUIDesktop');
const modalMobile = document.getElementById('modalUIMobile');
const openTrigger = document.getElementById('openModalTrigger');

function openModalUI() {
    if (window.innerWidth <= 768) {
        if (modalMobile) modalMobile.classList.add('active');
    } else {
        if (modalDesktop) modalDesktop.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
}

function closeModalUI() {
    if (modalDesktop) modalDesktop.classList.remove('active');
    if (modalMobile) modalMobile.classList.remove('active');
    document.body.style.overflow = '';
}

if (openTrigger) {
    openTrigger.addEventListener('click', openModalUI);
}

// Закрытие десктопной модалки
const closeDesktop = document.getElementById('closeModalUIDesktop');
const closeDesktopInner = document.getElementById('closeModalUIDesktopInner');
if (closeDesktop) closeDesktop.addEventListener('click', closeModalUI);
if (closeDesktopInner) closeDesktopInner.addEventListener('click', closeModalUI);

// Закрытие мобильной модалки
const closeMobile = document.getElementById('closeModalUIMobile');
const closeMobileBtn = document.getElementById('closeModalUIMobileBtn');
const dragHandle = document.getElementById('modalUIDragHandle');
if (closeMobile) closeMobile.addEventListener('click', closeModalUI);
if (closeMobileBtn) closeMobileBtn.addEventListener('click', closeModalUI);
if (dragHandle) dragHandle.addEventListener('click', closeModalUI);

// Закрытие по клику на оверлей
if (modalDesktop) {
    modalDesktop.addEventListener('click', (e) => {
        if (e.target === modalDesktop) closeModalUI();
    });
}
if (modalMobile) {
    modalMobile.addEventListener('click', (e) => {
        if (e.target === modalMobile) closeModalUI();
    });
}

// При ресайзе закрываем неактуальную модалку
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && modalMobile?.classList.contains('active')) {
        closeModalUI();
    }
    if (window.innerWidth <= 768 && modalDesktop?.classList.contains('active')) {
        closeModalUI();
    }
});


function protectPrepositions() {
    const prepositions = ['в', 'во', 'без', 'до', 'для', 'за', 'из', 'к', 'ко', 'на', 'над', 'о', 'об', 'от', 'по', 'под', 'при', 'про', 'с', 'со', 'у', 'и', 'а', 'но', 'да', 'или', 'не', 'ни', 'со', 'из-за', 'из-под'];
    
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, .section-head p, .concept-card p, .photostyle-card p');
    
    elements.forEach(el => {
        let html = el.innerHTML;
        
        prepositions.forEach(prep => {
            // Ищем предлог + пробел + слово
            const regex = new RegExp(`(${prep})\\s+([а-яА-ЯёЁa-zA-Z0-9\\-]+)`, 'gi');
            html = html.replace(regex, `<span class="preposition-group">$1&nbsp;$2</span>`);
        });
        
        el.innerHTML = html;
    });
}

document.addEventListener('DOMContentLoaded', protectPrepositions);

// Принудительно показываем FAB на мобильных устройствах при загрузке
function showFabOnMobile() {
    if (window.innerWidth <= 768) {
        const fab = document.getElementById("expandableFab");
        if (fab) {
            fab.style.display = "flex";
        }
    }
}

// Вызываем при загрузке
showFabOnMobile();

// Также при изменении размера окна
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        const fab = document.getElementById("expandableFab");
        if (fab && fab.style.display !== "flex") {
            fab.style.display = "flex";
        }
    }
});

