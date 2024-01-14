// HashMap을 만들어보자
var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    Dict.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    };
    Dict.prototype.def = function (term) {
        return this.words[term];
    };
    Dict.prototype.del = function (term) {
        delete this.words[term];
    };
    Dict.prototype.modify = function (term, definition) {
        if (this.words[term]) {
            this.words[term] = definition;
        }
    };
    return Dict;
}());
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
var kimchi = new Word('kimchi', '한국의 음식');
var ramyon = new Word('ramyon', '라면');
var coffee = new Word('coffee', '사약');
var dict = new Dict();
dict.add(kimchi);
dict.add(ramyon);
dict.add(coffee);
dict.def('kimchi');
console.log(dict);
dict.modify('coffee', '콩물');
dict.del('ramyon');
console.log(dict);
