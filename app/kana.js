(function(app) {
  app.Kana = Kana;
  function Kana(r, h, k) {
    this.roman    = r;
    this.hirakana = h;
    this.katakana = k;
  }
})(window.app || (window.app = {}));
