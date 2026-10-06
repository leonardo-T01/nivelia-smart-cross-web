// js/main.js - Proyecto HIDROVÍA - Interactividad General v3.0

document.addEventListener('DOMContentLoaded', () => {

  // ============ 0. MENÚ HAMBURGUESA MÓVIL ⭐ ============
  const menuToggle = document.getElementById('menu-toggle');
  const navContainer = document.getElementById('nav-container');

  console.log('🔍 Menú:', {
    toggle: menuToggle ? '✅' : '❌',
    nav: navContainer ? '✅' : '❌'
  });

  if (menuToggle && navContainer) {

    function toggleMenu() {
      const isOpening = !navContainer.classList.contains('active');
      menuToggle.classList.toggle('active');
      navContainer.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpening ? 'true' : 'false');
      document.body.style.overflow = isOpening ? 'hidden' : '';
      console.log('🍔 Menú:', isOpening ? 'ABIERTO' : 'CERRADO');
    }

    function closeMenu() {
      menuToggle.classList.remove('active');
      navContainer.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    // 1. Click en botón
    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    });

    // 2. Cerrar al hacer click en un enlace
    navContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // 3. Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
      if (navContainer.classList.contains('active') &&
          !navContainer.contains(e.target) &&
          !menuToggle.contains(e.target)) {
        closeMenu();
      }
    });

    // 4. Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // 5. Cerrar al redimensionar a desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 968) closeMenu();
    });

    console.log('✅ Menú hamburguesa inicializado');
  } else {
    console.warn('⚠️ No se encontró el menú hamburguesa. Verifica el HTML.');
  }

  // ============ 1. MENÚ ACTIVO ============
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  // ============ 2. TABS ============
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.tabs-container');
      if (!group) return;
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.getAttribute('data-tab'));
      if (target) target.classList.add('active');
    });
  });

  // ============ 3. ACORDEONES ============
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => header.parentElement.classList.toggle('active'));
  });

  // ============ 4. RENDERIZADO DINÁMICO DEL WBS ============
  const wbsContainer = document.getElementById('wbs-container');
  if (wbsContainer && typeof WBS_DATA !== 'undefined') {
    console.log('✅ Renderizando WBS:', WBS_DATA.length, 'paquetes');

    wbsContainer.innerHTML = '';
    WBS_DATA.forEach((paquete, index) => {
      const item = document.createElement('div');
      item.className = 'wbs-level-1' + (index === 0 ? ' active' : '');

      const subitems = paquete.items.map(sub => `
        <div class="wbs-item">
          <span class="wbs-code">${sub.codigo}</span>
          <span>${sub.nombre}</span>
        </div>
      `).join('');

      item.innerHTML = `
        <div class="wbs-toggle">
          <span><span class="code">${paquete.codigo}</span> ${paquete.titulo}</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="wbs-children">
          <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.8rem; font-style: italic;">${paquete.descripcion}</p>
          ${subitems}
        </div>
      `;
      wbsContainer.appendChild(item);
    });

    document.querySelectorAll('.wbs-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => toggle.parentElement.classList.toggle('active'));
    });

    const totalItems = WBS_DATA.reduce((sum, p) => sum + p.items.length, 0);
    const counter = document.getElementById('wbs-counter');
    if (counter) counter.textContent = `${WBS_DATA.length} paquetes · ${totalItems} actividades`;
  }

  // ============ 5. FALLBACK DE IMÁGENES ============
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = 'img-fallback';
      fallback.innerHTML = '📊 Diagrama del Proyecto — Consulte el documento técnico';
      this.parentElement.appendChild(fallback);
    });
  });

  // ============ 6. ANIMACIÓN DE BARRAS KPI ============
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.kpi-bar-fill');
        if (bar && bar.dataset.width) {
          setTimeout(() => { bar.style.width = bar.dataset.width; }, 100);
        }
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.kpi-card').forEach(card => observer.observe(card));

});