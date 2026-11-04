/*
 * LEVEL 3 MEDIA — MASTER SITE HEADER
 * Keep this file beside index.html and the other HTML pages.
 * Include it immediately inside <div class="animsition"> using:
 *   <script src="navigation.js"></script>
 * Do not use async, defer, or type="module" on that script tag.
 *
 * Edit the menu links in the navigationHTML template below.
 */
(() => {
  'use strict';

  const script = document.currentScript;
  if (!script || document.getElementById('l3-master-header')) return;

  const navigationHTML = `
    <header id="l3-master-header"
            class="header header--secondary header--absolute __js_fixed-header header--height l3-master-header">
      <div class="header__container container container--size-large">

        <a href="index.html" class="header__logo logo" aria-label="Level 3 Media home">
          <svg width="110" height="19" aria-hidden="true">
            <use xlink:href="#logo-level3"></use>
          </svg>
        </a>

        <div class="header__mobile mobile-canvas" id="l3-mobile-navigation">
          <nav class="mobile-canvas__nav navigation" aria-label="Main navigation">
            <ul class="navigation__list">

              <!-- THE GROUP -->
              <li class="navigation__item l3-group-item">
                <a class="navigation__link l3-group-trigger" href="#"
                   aria-expanded="false" aria-controls="l3-group-dropdown">
                  THE GROUP
                  <span class="navigation__link-icon">
                    <svg width="12" height="13" aria-hidden="true">
                      <use xlink:href="#link-arrow"></use>
                    </svg>
                  </span>
                </a>

                <div class="navigation__dropdown" id="l3-group-dropdown">
                  <ul class="navigation__dropdown-list">

                    <!-- ABOUT US: home section, from any page -->
                    <li class="navigation__dropdown-item">
                      <a href="index.html#about" data-l3-home-section="about">
                        About us
                        <span class="navigation__dropdown-icon">
                          <svg width="12" height="13" aria-hidden="true">
                            <use xlink:href="#link-arrow"></use>
                          </svg>
                        </span>
                      </a>
                    </li>

                    <!-- ALL SERVICES: home section, from any page -->
                    <li class="navigation__dropdown-item">
                      <a href="index.html#services" data-l3-home-section="services">
                        All Services
                        <span class="navigation__dropdown-icon">
                          <svg width="12" height="13" aria-hidden="true">
                            <use xlink:href="#link-arrow"></use>
                          </svg>
                        </span>
                      </a>
                    </li>

                    <!-- VIDEO PRODUCTION: expandable sub-menu -->
                    <li class="navigation__dropdown-item services-menu l3-video-item">
                      <a href="#" class="l3-video-trigger"
                         aria-expanded="false" aria-controls="l3-video-submenu">
                        Video Production
                        <span class="navigation__dropdown-icon">
                          <svg width="12" height="13" aria-hidden="true">
                            <use xlink:href="#link-arrow"></use>
                          </svg>
                        </span>
                      </a>

                      <ul class="services-submenu" id="l3-video-submenu">
                        <li><a href="service-detail-commercial-video.html">Commercial Video</a></li>
                        <li><a href="service-detail-property-video.html">Property Video</a></li>
                      </ul>
                    </li>

                    <!-- PORTFOLIO -->
                    <li class="navigation__dropdown-item">
                      <a href="single-project-no-thrills.html">
                        Portfolio
                        <span class="navigation__dropdown-icon">
                          <svg width="12" height="13" aria-hidden="true">
                            <use xlink:href="#link-arrow"></use>
                          </svg>
                        </span>
                      </a>
                    </li>

                    <!-- PRICING -->
                    <li class="navigation__dropdown-item">
                      <a href="pricing.html">
                        Pricing
                        <span class="navigation__dropdown-icon">
                          <svg width="12" height="13" aria-hidden="true">
                            <use xlink:href="#link-arrow"></use>
                          </svg>
                        </span>
                      </a>
                    </li>

                  </ul>
                </div>
              </li>

              <!-- CONTACT: this page if available, otherwise home -->
              <li class="navigation__item">
                <a class="navigation__link" href="index.html#contact" data-l3-contact="true">
                  Contact
                  <span class="navigation__link-icon">
                    <svg width="12" height="13" aria-hidden="true">
                      <use xlink:href="#link-arrow"></use>
                    </svg>
                  </span>
                </a>
              </li>

            </ul>
          </nav>
        </div>

        <button class="header__menu-toggle menu-toggle" type="button"
                aria-label="Open menu" aria-expanded="false"
                aria-controls="l3-mobile-navigation">
          <span class="menu-toggle__line"></span>
          <span class="visually-hidden">Menu toggle</span>
        </button>

      </div>
    </header>
  `;

  /*
   * Scoped additions to the existing template CSS.
   * The mobile layout is activated only when the template's hamburger is visible.
   */
  const navigationCSS = `
    .l3-master-header .services-submenu {
      display: none !important;
      list-style: none;
      padding: 0 0 0 24px;
      margin: 12px 0 10px;
    }
    .l3-master-header .l3-video-open > .services-submenu {
      display: block !important;
    }
    .l3-master-header .services-submenu li + li { margin-top: 8px; }
    .l3-master-header .services-submenu li a { display: block; }

    /* Desktop: existing template continues to control THE GROUP on hover. */
    .l3-master-header:not([data-l3-mobile="true"])
      .l3-group-open > .navigation__dropdown {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: auto !important;
    }

    /* Mobile: an independent, touch-friendly menu using the existing markup. */
    .l3-master-header[data-l3-mobile="true"].l3-mobile-open {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      z-index: 9999 !important;
    }
    .l3-master-header[data-l3-mobile="true"] .header__mobile {
      display: none !important;
    }
    .l3-master-header[data-l3-mobile="true"].l3-mobile-open .header__mobile {
      display: block !important;
      position: fixed !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100vh !important;
      height: 100dvh !important;
      padding: 95px 26px 32px !important;
      background: #151515 !important;
      overflow-y: auto !important;
      visibility: visible !important;
      opacity: 1 !important;
      transform: none !important;
      pointer-events: auto !important;
      z-index: 999 !important;
      box-sizing: border-box !important;
    }
    .l3-master-header[data-l3-mobile="true"].l3-mobile-open .header__logo,
    .l3-master-header[data-l3-mobile="true"] .header__menu-toggle {
      position: relative;
      z-index: 1001 !important;
    }
    .l3-master-header[data-l3-mobile="true"] .mobile-canvas__nav {
      display: block !important;
      position: static !important;
      width: 100% !important;
      height: auto !important;
      visibility: visible !important;
      opacity: 1 !important;
      transform: none !important;
      overflow: visible !important;
    }
    .l3-master-header[data-l3-mobile="true"].l3-mobile-open .header__logo svg {
      filter: invert(1);
    }
    .l3-master-header[data-l3-mobile="true"].l3-mobile-open .menu-toggle__line,
    .l3-master-header[data-l3-mobile="true"].l3-mobile-open .menu-toggle__line::before,
    .l3-master-header[data-l3-mobile="true"].l3-mobile-open .menu-toggle__line::after {
      background-color: white !important;
    }
    .l3-master-header[data-l3-mobile="true"] .navigation__list,
    .l3-master-header[data-l3-mobile="true"] .navigation__dropdown-list {
      display: block !important;
      padding-left: 0;
      margin: 0;
      list-style: none;
    }
    .l3-master-header[data-l3-mobile="true"] .navigation__item,
    .l3-master-header[data-l3-mobile="true"] .navigation__dropdown-item {
      display: block !important;
      width: 100% !important;
    }
    .l3-master-header[data-l3-mobile="true"] .navigation__dropdown {
      display: none !important;
      position: static !important;
      width: 100% !important;
      height: auto !important;
      visibility: hidden !important;
      opacity: 0 !important;
      transform: none !important;
      pointer-events: none !important;
      background: transparent !important;
      box-shadow: none !important;
    }
    .l3-master-header[data-l3-mobile="true"]
      .l3-group-open > .navigation__dropdown {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: auto !important;
    }
    .l3-master-header[data-l3-mobile="true"] .navigation__link,
    .l3-master-header[data-l3-mobile="true"] .navigation__dropdown-item > a,
    .l3-master-header[data-l3-mobile="true"] .services-submenu a {
      display: block !important;
      width: 100% !important;
      padding: 12px 0 !important;
      color: #fff !important;
      text-decoration: none !important;
      box-sizing: border-box;
      font-size: 16px !important;
      line-height: 1.5 !important;
    }
    .l3-master-header[data-l3-mobile="true"] .navigation__dropdown {
      padding: 6px 0 10px 15px !important;
    }
    .l3-master-header[data-l3-mobile="true"] .services-submenu {
      padding-left: 20px !important;
      margin: 5px 0 10px !important;
    }
    .l3-master-header[data-l3-mobile="true"] .services-submenu a {
      font-size: 15px !important;
      padding: 9px 0 !important;
    }
    .l3-master-header[data-l3-mobile="true"] .navigation__link-icon,
    .l3-master-header[data-l3-mobile="true"] .navigation__dropdown-icon {
      display: inline-block;
      margin-left: 8px;
    }
    .l3-master-header[data-l3-mobile="true"] .navigation__list a:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 3px;
    }
  `;

  // Inject synchronously, before the template's end-of-page scripts initialise.
  script.insertAdjacentHTML('beforebegin',
    `<style id="l3-master-navigation-styles">${navigationCSS}</style>${navigationHTML}`);

  const header = document.getElementById('l3-master-header');
  // LEVEL 3 - LIGHT GREY HEADER THAT TURNS BLACK ON SCROLL
const lightBannerPages = [
  'service-detail-commercial-video.html',
  'service-detail-property-video.html',
    'pricing.html'
];
const currentPage = window.location.pathname
  .split('/')
  .pop()
  .toLowerCase();
  if (
  lightBannerPages.includes(currentPage) ||
  currentPage.startsWith('single-project-')
) {
  header.classList.add('l3-light-banner');
  const bannerStyle = document.createElement('style');
  bannerStyle.textContent = `
    /* LIGHT GREY HEADER - INITIAL STATE */
    .l3-master-header.l3-light-banner {
      background-color: #f2f2f2 !important;
      transition: background-color 0.3s ease;
    }
    /* BLACK HEADER - WHEN SCROLLING */
    .l3-master-header.l3-light-banner.l3-scrolled {
      background-color: #000000 !important;
    }
    /* BLACK TEXT AND LOGO - INITIAL STATE */
    .l3-master-header.l3-light-banner:not(.l3-scrolled):not(.l3-mobile-open) .header__logo,
    .l3-master-header.l3-light-banner:not(.l3-scrolled):not(.l3-mobile-open) .navigation__list > .navigation__item > .navigation__link {
      color: #111111 !important;
    }
    /* WHITE TEXT AND LOGO - WHEN SCROLLING */
    .l3-master-header.l3-light-banner.l3-scrolled:not(.l3-mobile-open) .header__logo,
    .l3-master-header.l3-light-banner.l3-scrolled:not(.l3-mobile-open) .navigation__list > .navigation__item > .navigation__link {
      color: #ffffff !important;
    }
    /* MOBILE MENU LOGO - KEEP WHITE ON DARK OVERLAY */
    .l3-master-header.l3-light-banner.l3-mobile-open .header__logo {
      color: #ffffff !important;
    }
    .l3-master-header.l3-light-banner.l3-mobile-open .header__logo svg {
      filter: none !important;
    }
    /* MOBILE HAMBURGER - BLACK ON LIGHT HEADER */
    .l3-master-header.l3-light-banner[data-l3-mobile="true"]:not(.l3-mobile-open):not(.l3-scrolled) .menu-toggle__line,
    .l3-master-header.l3-light-banner[data-l3-mobile="true"]:not(.l3-mobile-open):not(.l3-scrolled) .menu-toggle__line::before,
    .l3-master-header.l3-light-banner[data-l3-mobile="true"]:not(.l3-mobile-open):not(.l3-scrolled) .menu-toggle__line::after {
      background-color: #111111 !important;
    }
    /* MOBILE HAMBURGER - WHITE ON BLACK HEADER */
    .l3-master-header.l3-light-banner[data-l3-mobile="true"]:not(.l3-mobile-open).l3-scrolled .menu-toggle__line,
    .l3-master-header.l3-light-banner[data-l3-mobile="true"]:not(.l3-mobile-open).l3-scrolled .menu-toggle__line::before,
    .l3-master-header.l3-light-banner[data-l3-mobile="true"]:not(.l3-mobile-open).l3-scrolled .menu-toggle__line::after {
      background-color: #ffffff !important;
    }
  `;
  document.head.appendChild(bannerStyle);
  // CHECK SCROLL POSITION AND UPDATE HEADER

  function updateHeaderColour() {

    if (window.scrollY > 20) {
      header.classList.add('l3-scrolled');
    } else {
      header.classList.remove('l3-scrolled');
    }

  }

  // RUN WHEN PAGE LOADS

  updateHeaderColour();

  // RUN WHEN VISITOR SCROLLS

  window.addEventListener('scroll', updateHeaderColour, {
    passive: true
  });

  window.addEventListener('pageshow', updateHeaderColour);

}



  const toggle = header.querySelector('.header__menu-toggle');
  const group = header.querySelector('.l3-group-item');
  const groupLink = header.querySelector('.l3-group-trigger');
  const videoItem = header.querySelector('.l3-video-item');
  const videoLink = header.querySelector('.l3-video-trigger');

  let previousBodyOverflow = '';
  const isMobile = () => header.dataset.l3Mobile === 'true';

  function closeVideo() {
    videoItem.classList.remove('l3-video-open');
    videoLink.setAttribute('aria-expanded', 'false');
  }
  function closeGroup() {
    closeVideo();
    group.classList.remove('l3-group-open');
    groupLink.setAttribute('aria-expanded', 'false');
  }
  function closeMobile() {
    if (!header.classList.contains('l3-mobile-open')) return;
    header.classList.remove('l3-mobile-open');
    toggle.classList.remove('menu-toggle--active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = previousBodyOverflow;
    closeGroup();
  }
  function openMobile() {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    header.classList.add('l3-mobile-open');
    toggle.classList.add('menu-toggle--active');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  // Detect the actual breakpoint of the website's existing hamburger CSS.
  function updateLayout() {
    const shown = toggle.getClientRects().length > 0 &&
      getComputedStyle(toggle).visibility !== 'hidden';
    const mobileNow = shown ? 'true' : 'false';
    if (header.dataset.l3Mobile !== mobileNow) {
      closeMobile();
      closeGroup();
      header.dataset.l3Mobile = mobileNow;
    }
  }

  updateLayout();
  window.addEventListener('resize', updateLayout, { passive: true });
  window.addEventListener('load', updateLayout);

  // Capture our own menu controls before any legacy template click handlers.
  header.addEventListener('click', (event) => {
    const clickedToggle = event.target.closest('.header__menu-toggle');
    if (clickedToggle) {
      if (!isMobile()) return; // Template owns desktop behaviour.
      event.preventDefault();
      event.stopImmediatePropagation();
      header.classList.contains('l3-mobile-open') ? closeMobile() : openMobile();
      return;
    }

    const clickedGroup = event.target.closest('.l3-group-trigger');
    if (clickedGroup) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const opening = !group.classList.contains('l3-group-open');
      opening ? group.classList.add('l3-group-open') : closeGroup();
      groupLink.setAttribute('aria-expanded', String(opening));
      return;
    }

    const clickedVideo = event.target.closest('.l3-video-trigger');
    if (clickedVideo) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const opening = !videoItem.classList.contains('l3-video-open');
      videoItem.classList.toggle('l3-video-open', opening);
      videoLink.setAttribute('aria-expanded', String(opening));
      return;
    }

    const sectionLink = event.target.closest('[data-l3-home-section]');
    const contactLink = event.target.closest('[data-l3-contact]');
    if (sectionLink || contactLink) {

  const link = sectionLink || contactLink;

  const sectionId = sectionLink
    ? sectionLink.dataset.l3HomeSection
    : 'contact';

  const target = document.getElementById(sectionId);

  const onHomePage = Boolean(
    document.querySelector('section#about') &&
    document.querySelector('section#services')
  );

  // Prevent the template from handling this link.
  event.preventDefault();
  event.stopImmediatePropagation();

  closeMobile();
  closeGroup();

  if (target && (contactLink || onHomePage)) {

    // Scroll within the current page.
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  } else {

    // Navigate directly to the correct page.
    window.location.assign(link.href);

  }

  return;
}
  }, true);

videoItem.addEventListener('mouseleave', () => {
  if (!isMobile()) {
    closeVideo();
    videoLink.blur();
  }
});
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) {
      if (!isMobile()) closeGroup();
      // On mobile, closing via the hamburger is more predictable than
      // accidental closure when tapping the screen outside a submenu.
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const wasOpen = header.classList.contains('l3-mobile-open');
      closeMobile();
      closeGroup();
      if (wasOpen) toggle.focus();
    }
  });
})();
