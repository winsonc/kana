(function(app) {
  app.Kana = Kana;
  function Kana(r, h, k) {
    this.roman    = r;
    this.hiragana = h;
    this.katagana = k;
  }
})(window.app || (window.app = {}));
