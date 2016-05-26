(function(app) {
  app.FormComponent = ng.core
    .Component({
      selector: 'input-form',
      templateUrl: 'app/form.component.html'
    })
    .Class({
      constructor: function() {
        this.showAnswer = false;
        hira = ['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ','を','ん'];
        taka = ['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ヲ','ン'];
        roman = ['a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so','ta','chi','tsu','te','to','na','ni','nu','ne','no','ha','hi','hu','he','ho','ma','mi','mu','me','mo','ya','yu','yo','ra','ri','ru','re','ro','wa','wo','n'];
        this.kanas = [];
        for (var i = 0; i < hira.length; i++) {
          var kana = new app.Kana(roman[i], hira[i], taka[i])
          this.kanas.push(kana);
        }
        this.random = _.random(0, this.kanas.length - 1);
        this.question = this.kanas[this.random].hirakana;
        this.answer = this.kanas[this.random];
      },
      next: function () {
        this.showAnswer = false;
        this.random = _.random(0, this.kanas.length - 1);
        this.question = this.kanas[this.random].hirakana;
        this.answer = this.kanas[this.random];
      }
    });
})(window.app || (window.app = {}));
