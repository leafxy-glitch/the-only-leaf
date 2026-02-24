(function () {
  var STORAGE_KEY = 'tol_lang_select';
  var supported = ['zh-CN', 'en', 'ja'];

  function getLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && supported.indexOf(saved) !== -1) return saved;
    return 'zh-CN';
  }

  function apply(lang) {
    var dict = (window.PAGE_I18N && window.PAGE_I18N[lang]) || {};
    document.documentElement.lang = lang;

    if (dict._meta_title) {
      document.title = dict._meta_title;
    }
    if (dict._meta_description) {
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', dict._meta_description);
    }

    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        node.textContent = dict[key];
      }
    });
    document.querySelectorAll('[data-lang-select]').forEach(function (select) {
      select.value = lang;
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var lang = getLang();
    apply(lang);
    document.querySelectorAll('[data-lang-select]').forEach(function (select) {
      select.addEventListener('change', function () {
        var next = select.value;
        localStorage.setItem(STORAGE_KEY, next);
        apply(next);
      });
    });
  });
})();
