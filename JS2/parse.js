function parse(str) {
    return str.replace(/\w+[^ {}\n}]*/g, (match) => `<div>${match}</div>`);
}

console.log(parse("word1 {word2!}"));
console.log(parse("{word1 word2}"));
console.log(parse("{word1 {word2}}"));