(function () {
  var STORAGE_KEY = 'tol_lang';
  var supported = ['zh', 'en', 'ja'];
  var langMap = { zh: 'zh-CN', en: 'en', ja: 'ja' };

  function getLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && supported.indexOf(saved) !== -1) return saved;
    return 'zh';
  }

  function setLang(lang) {
    if (supported.indexOf(lang) === -1) return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = langMap[lang] || 'zh-CN';
    applyTranslations(lang);
    paintControls(lang);
  }

  function applyTranslations(lang) {
    var dict = (window.PAGE_I18N && window.PAGE_I18N[lang]) || {};
    var nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        node.textContent = dict[key];
      }
    });
  }

  function paintControls(lang) {
    var selects = document.querySelectorAll('[data-lang-select]');
    selects.forEach(function (select) {
      select.value = lang;
    });

    var buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-lang-select]').forEach(function (select) {
      select.addEventListener('change', function () {
        setLang(select.value);
      });
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });

    setLang(getLang());
  });
})();
