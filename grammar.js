// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    let AST = require('./ast.js');
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dqstring$ebnf$1", "dstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sqstring$ebnf$1", "sstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": ["btstring$ebnf$1", /[^`]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\'\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": function(d) { return JSON.parse("\""+d.join("")+"\""); }},
    {"name": "sstrchar$string$1", "symbols": [{"literal":"\\"}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "sstrchar", "symbols": ["sstrchar$string$1"], "postprocess": function(d) {return "'"; }},
    {"name": "strescape", "symbols": [/["\\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "fl", "symbols": ["_", "Block", "_"], "postprocess": (d) => {return d[1]}},
    {"name": "Block", "symbols": ["_Block"]},
    {"name": "Block", "symbols": ["_Block", "__", "RetStatement"], "postprocess": (d) => {return d[0].concat([d[2]])}},
    {"name": "_Block", "symbols": ["Statement"]},
    {"name": "_Block", "symbols": ["Statement", {"literal":";"}], "postprocess": (d) => { return d[0] }},
    {"name": "_Block", "symbols": ["_Block", "_", {"literal":";"}, "_", "Statement"], "postprocess": (d) => {return d[0].concat([d[4]])}},
    {"name": "_Block", "symbols": ["_Block", "__", "Statement"], "postprocess": (d) => {return d[0].concat([d[2]])}},
    {"name": "Statement", "symbols": [{"literal":";"}], "postprocess": (d) => (null)},
    {"name": "Statement", "symbols": ["Identifier", "_", {"literal":"="}, "_", "Expression"], "postprocess": (d) => { return AST.ASTtypes.assign.build({ identifier: d[0], value: d[4] })}},
    {"name": "Statement$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement", "symbols": ["Statement$string$1", "__", "Identifier", "_", {"literal":"="}, "_", "Expression"], "postprocess": (d) => { return AST.ASTtypes.assign.build({ identifier: d[0], value: d[4], local: true })}},
    {"name": "Statement", "symbols": ["FnCall"], "postprocess": (d) => { return AST.ASTtypes.statementify.build({ value: d[0] })}},
    {"name": "Statement$string$2", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement", "symbols": ["Statement$string$2"], "postprocess": () => { return AST.ASTtypes.break.build() }},
    {"name": "Statement$string$3", "symbols": [{"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement$string$4", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement", "symbols": ["Statement$string$3", "__", "Block", "__", "Statement$string$4"], "postprocess": (d) => { return AST.ASTtypes.assign.build({ identifier: d[2], value: d[4] }) }},
    {"name": "Statement$string$5", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement$string$6", "symbols": [{"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement$string$7", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement", "symbols": ["Statement$string$5", "__", "Expression", "__", "Statement$string$6", "__", "Block", "__", "Statement$string$7"]},
    {"name": "Statement$string$8", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement$string$9", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement", "symbols": ["Statement$string$8", "__", "Block", "__", "Statement$string$9", "__", "Expression"]},
    {"name": "Statement$string$10", "symbols": [{"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement$string$11", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement$ebnf$1", "symbols": []},
    {"name": "Statement$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}, {"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement$ebnf$1$subexpression$1$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement$ebnf$1$subexpression$1", "symbols": ["__", "Statement$ebnf$1$subexpression$1$string$1", "__", "Expression", "__", "Statement$ebnf$1$subexpression$1$string$2", "__", "Block"]},
    {"name": "Statement$ebnf$1", "symbols": ["Statement$ebnf$1", "Statement$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Statement$subexpression$1$string$1", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement$subexpression$1", "symbols": ["__", "Statement$subexpression$1$string$1", "__", "Block"]},
    {"name": "Statement$string$12", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement", "symbols": ["Statement$string$10", "__", "Expression", "__", "Statement$string$11", "__", "Block", "Statement$ebnf$1", "Statement$subexpression$1", "__", "Statement$string$12"]},
    {"name": "Statement$string$13", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement", "symbols": ["Statement$string$13", "__", "Identifier", "_", "FnBody"], "postprocess": (d) => { return AST.ASTtypes.assign.build({ identifier: d[2], value: d[4] })}},
    {"name": "Statement$string$14", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement$string$15", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement", "symbols": ["Statement$string$14", "__", "Statement$string$15", "__", "Identifier", "_", "FnBody"], "postprocess": (d) => { return AST.ASTtypes.assign.build({ identifier: d[2], value: d[4], local: true })}},
    {"name": "RetStatement$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RetStatement$ebnf$1", "symbols": [{"literal":";"}], "postprocess": id},
    {"name": "RetStatement$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "RetStatement", "symbols": ["RetStatement$string$1", "__", "Expression", "RetStatement$ebnf$1"], "postprocess": (d) => { return AST.ASTtypes.return.build({ value: d[2] }) }},
    {"name": "FnCall", "symbols": ["Identifier", {"literal":"("}, "_", "ArgList", "_", {"literal":")"}], "postprocess": (d) => { return AST.ASTtypes.call.build({ identifier: d[0], args: d[3] }) }},
    {"name": "FnCall", "symbols": ["Identifier", {"literal":"("}, "_", {"literal":")"}], "postprocess": (d) => { return AST.ASTtypes.call.build({ identifier: d[0], args: [] }) }},
    {"name": "FnBody$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FnBody", "symbols": [{"literal":"("}, "_", "ArgIDList", "_", {"literal":")"}, "_", "Block", "_", "FnBody$string$1"], "postprocess": (d) => { return AST.ASTtypes.fndef.build({ args: d[2], body: d[6] }) }},
    {"name": "FnBody$string$2", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FnBody", "symbols": [{"literal":"("}, "_", {"literal":")"}, "_", "Block", "_", "FnBody$string$2"], "postprocess": (d) => { return AST.ASTtypes.fndef.build({ args: [], body: d[4] }) }},
    {"name": "Expression", "symbols": ["L"], "postprocess": id},
    {"name": "_Expression", "symbols": ["dqstring"], "postprocess": (d) => { return AST.ASTtypes.str.build({ value: d[0] })}},
    {"name": "_Expression", "symbols": ["sqstring"], "postprocess": (d) => { return AST.ASTtypes.str.build({ value: d[0] })}},
    {"name": "_Expression", "symbols": ["jsonfloat"], "postprocess": (d) => { return AST.ASTtypes.num.build({ value: d[0] })}},
    {"name": "_Expression$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_Expression", "symbols": ["_Expression$string$1"], "postprocess": (d) => { return AST.ASTtypes.bool.build({ value: true })}},
    {"name": "_Expression$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_Expression", "symbols": ["_Expression$string$2"], "postprocess": (d) => { return AST.ASTtypes.bool.build({ value: false })}},
    {"name": "_Expression", "symbols": ["Identifier"], "postprocess": (d) => { return AST.ASTtypes.get.build({ identifier: d[0] })}},
    {"name": "_Expression", "symbols": ["FnCall"], "postprocess": id},
    {"name": "P", "symbols": [{"literal":"("}, "_", "L", "_", {"literal":")"}]},
    {"name": "P", "symbols": ["_Expression"], "postprocess": id},
    {"name": "E", "symbols": ["E", "_", {"literal":"^"}, "_", "P"]},
    {"name": "E", "symbols": ["P"], "postprocess": id},
    {"name": "MD", "symbols": ["MD", "_", {"literal":"*"}, "_", "E"]},
    {"name": "MD", "symbols": ["MD", "_", {"literal":"/"}, "_", "E"]},
    {"name": "MD", "symbols": ["MD", "_", {"literal":"%"}, "_", "E"]},
    {"name": "MD", "symbols": ["E"], "postprocess": id},
    {"name": "AS", "symbols": ["AS", "_", {"literal":"+"}, "_", "MD"], "postprocess": (d) => { return AST.ASTtypes.binop.build({ first: d[0], op: "+", last: d[4] })}},
    {"name": "AS", "symbols": ["AS", "_", {"literal":"-"}, "_", "MD"], "postprocess": (d) => { return AST.ASTtypes.binop.build({ first: d[0], op: "-", last: d[4] })}},
    {"name": "AS", "symbols": ["MD"], "postprocess": id},
    {"name": "C$string$1", "symbols": [{"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["C", "_", "C$string$1", "_", "AS"]},
    {"name": "C$string$2", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["C", "_", "C$string$2", "_", "AS"]},
    {"name": "C", "symbols": ["C", "_", {"literal":">"}, "_", "AS"]},
    {"name": "C$string$3", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["C", "_", "C$string$3", "_", "AS"]},
    {"name": "C", "symbols": ["C", "_", {"literal":"<"}, "_", "AS"]},
    {"name": "C$string$4", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["C", "_", "C$string$4", "_", "AS"]},
    {"name": "C", "symbols": ["AS"], "postprocess": id},
    {"name": "N$string$1", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$1", "_", "C"]},
    {"name": "N", "symbols": ["C"], "postprocess": id},
    {"name": "L$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L", "symbols": ["L", "_", "L$string$1", "_", "C"], "postprocess": (d) => { return AST.ASTtypes.binop.build({ first: d[0], op: "&&", last: d[4] })}},
    {"name": "L$string$2", "symbols": [{"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L", "symbols": ["L", "_", "L$string$2", "_", "C"], "postprocess": (d) => { return AST.ASTtypes.binop.build({ first: d[0], op: "||", last: d[4] })}},
    {"name": "L", "symbols": ["N"], "postprocess": id},
    {"name": "Identifier$ebnf$1", "symbols": []},
    {"name": "Identifier$ebnf$1", "symbols": ["Identifier$ebnf$1", /[A-Za-z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Identifier", "symbols": [/[A-Za-z]/, "Identifier$ebnf$1"], "postprocess":  (d,l,r) => {
            if(d[0] + d[1].join('') == "true" || d[0] + d[1].join('') == "false") {
                return r
            }
            return d[0] + d[1].join('')
        } },
    {"name": "ArgList", "symbols": ["Expression"]},
    {"name": "ArgList", "symbols": ["Expression", "_", {"literal":","}, "__", "ArgList"], "postprocess": (d) => {return [d[0]].concat(d[4])}},
    {"name": "ArgIDList", "symbols": ["Identifier"]},
    {"name": "ArgIDList", "symbols": ["Identifier", "__", {"literal":","}, "__", "ArgIDList"], "postprocess": (d) => {return [d[0]].concat(d[4])}}
]
  , ParserStart: "fl"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
