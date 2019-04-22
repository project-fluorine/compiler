const nearley = require("nearley");
const grammar = require("./grammar.js");

const ast = require("./ast.js");

exports.compile = (code) => {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

    parser.feed(code);

    return ast.compile(parser.results)
}