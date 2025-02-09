const translations = {
    en: {
        menu: 'Menu',
        home: 'Home',
        about: 'About',
        services: 'Services',
        team: 'Team',
        gallery: 'Gallery',
        testimonials: 'Testimonials',
        contact: 'Contact Us',
        interior: 'Interior Detailing',
        interior_desc: 'Professional car interior cleaning process',
        exterior: 'Exterior Washing',
        exterior_desc: 'Complete exterior car wash demonstration',
        paint: 'Paint Protection',
        paint_desc: 'Professional paint protection application',
        deep: 'Deep Cleaning',
        deep_desc: 'Professional service',
        detail: 'Attention to Detail',
        detail_desc: 'Leaving cars like new',
        areas: 'Areas We Serve',
        pricing: 'Our Pricing',
        starting: 'Starting at',
        prof_services: 'Professional Detailing Services',
        int_ext: 'Interior & Exterior',
        packages: 'Custom Packages Available',
        phone: 'Phone',
        email: 'Email',
        translate: 'Translate to Spanish',
        conception: 'Conception',
        carwash: 'Carwash',
        car: 'Car',
        services: 'Services',
        team: 'Team',
        gallery: 'Gallery',
        testimonials: 'Testimonials',
        exterior: 'Exterior Washing',
        exterior_desc: 'Complete exterior car wash demonstration',
        paint: 'Paint Protection',
        paint_desc: 'Professional paint protection application',
        deep: 'Deep Cleaning',
        deep_desc: 'Professional service',
        detail: 'Attention to Detail',
        detail_desc: 'Leaving cars like new',
        copyright: '© 2025 Car Services. All Rights Reserved',
        areas_title: 'Areas We Serve',
        lehigh: 'Lehigh Acres',
        fort_myers: 'Fort Myers',
        cape_coral: 'Cape Coral',
        naples: 'Salina de Naples'
    },
    es: {
        menu: 'Menú',
        home: 'Inicio',
        about: 'Sobre Nosotros',
        services: 'Servicios',
        team: 'Equipo',
        gallery: 'Galería',
        testimonials: 'Testimonios',
        contact: 'Contáctenos',
        interior: 'Detallado Interior',
        interior_desc: 'Proceso profesional de limpieza interior',
        exterior: 'Lavado Exterior',
        exterior_desc: 'Demostración completa de lavado de autos',
        paint: 'Protección de Pintura',
        paint_desc: 'Aplicación profesional de protección',
        deep: 'Limpieza Profunda',
        deep_desc: 'Servicio profesional',
        detail: 'Atención al Detalle',
        detail_desc: 'Dejando los autos como nuevos',
        areas: 'Áreas de Servicio',
        pricing: 'Nuestros Precios',
        starting: 'Desde',
        prof_services: 'Servicios Profesionales de Detallado',
        int_ext: 'Interior y Exterior',
        packages: 'Paquetes Personalizados Disponibles',
        phone: 'Teléfono',
        email: 'Correo',
        translate: 'Traducir al Inglés',
        conception: 'Conception',
        carwash: 'Autolavado',
        car: 'Auto',
        services: 'Servicios',
        team: 'Equipo',
        gallery: 'Galería',
        testimonials: 'Testimonios',
        exterior: 'Lavado Exterior',
        exterior_desc: 'Demostración completa de lavado de autos',
        paint: 'Protección de Pintura',
        paint_desc: 'Aplicación profesional de protección',
        deep: 'Limpieza Profunda',
        deep_desc: 'Servicio profesional',
        detail: 'Atención al Detalle',
        detail_desc: 'Dejando los autos como nuevos',
        copyright: '© 2025 Servicios de Auto. Todos los Derechos Reservados',
        areas_title: 'Áreas de Servicio',
        lehigh: 'Lehigh Acres',
        fort_myers: 'Fort Myers',
        cape_coral: 'Cape Coral',
        naples: 'Salina de Naples'
    }
};

// Initialize language
let currentLang = 'en';

function toggleLanguage() {
    // Toggle language
    currentLang = currentLang === 'en' ? 'es' : 'en';
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update toggle button text
    const toggleText = document.querySelector('.translate-text');
    toggleText.textContent = translations[currentLang].translate;

    // Save language preference
    localStorage.setItem('preferredLanguage', currentLang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        toggleLanguage();
    }

    // Initialize toggle button
    const toggleBtn = document.querySelector('.language-btn');
    if (toggleBtn) {
        toggleBtn.onclick = toggleLanguage;
    }
});