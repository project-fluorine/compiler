@builtin "number.ne"
@builtin "string.ne"

@builtin "whitespace.ne"

@{%
    let AST = require('./ast.js');
%}

fl -> _ Block _ {% (d) => {return d[1]} %}

Block -> _Block
    | _Block __ RetStatement {% (d) => {return d[0].concat([d[2]])} %}

_Block -> Statement
    | Statement ";" {% (d) => { return d[0] }%}
    | _Block _ ";" _ Statement {% (d) => {return d[0].concat([d[4]])} %}
    | _Block __ Statement {% (d) => {return d[0].concat([d[2]])} %}

Statement -> ";" {% (d) => (null) %}
    | Identifier _ "=" _ Expression {% (d) => { return AST.ASTtypes.assign.build({ identifier: d[0], value: d[4] })} %}
    | "local" __ Identifier _ "=" _ Expression {% (d) => { return AST.ASTtypes.assign.build({ identifier: d[0], value: d[4], local: true })} %}
    | FnCall {% (d) => { return AST.ASTtypes.statementify.build({ value: d[0] })} %}
    | "break" {% () => { return AST.ASTtypes.break.build() } %}
    | "do" __ Block __ "end" {% (d) => { return AST.ASTtypes.assign.build({ identifier: d[2], value: d[4] }) } %}
    | "while" __ Expression __ "do" __ Block __ "end"
    | "repeat" __ Block __ "until" __ Expression
    | "if" __ Expression __ "then" __ Block ( __ "elseif" __ Expression __ "then" __ Block ):* ( __ "else" __ Block ) __ "end"
    | "function" __ Identifier _ FnBody {% (d) => { return AST.ASTtypes.assign.build({ identifier: d[2], value: d[4] })} %}
    | "local" __ "function" __ Identifier _ FnBody {% (d) => { return AST.ASTtypes.assign.build({ identifier: d[2], value: d[4], local: true })} %}

RetStatement -> "return" __ Expression ";":? {% (d) => { return AST.ASTtypes.return.build({ value: d[2] }) } %}

FnCall -> Identifier "(" _ ArgList _ ")" {% (d) => { return AST.ASTtypes.call.build({ identifier: d[0], args: d[3] }) } %}
| Identifier "(" _ ")" {% (d) => { return AST.ASTtypes.call.build({ identifier: d[0], args: [] }) } %}

FnBody -> "(" _ ArgIDList _ ")" _ Block _ "end" {% (d) => { return AST.ASTtypes.fndef.build({ args: d[2], body: d[6] }) } %}
    | "(" _ ")" _ Block _ "end" {% (d) => { return AST.ASTtypes.fndef.build({ args: [], body: d[4] }) } %}

Expression -> L {% id %}

_Expression -> dqstring {% (d) => { return AST.ASTtypes.str.build({ value: d[0] })} %}
    | sqstring {% (d) => { return AST.ASTtypes.str.build({ value: d[0] })} %}
    | jsonfloat {% (d) => { return AST.ASTtypes.num.build({ value: d[0] })} %}
    | "true" {% (d) => { return AST.ASTtypes.bool.build({ value: true })} %}
    | "false" {% (d) => { return AST.ASTtypes.bool.build({ value: false })} %}
    | Identifier {% (d) => { return AST.ASTtypes.get.build({ identifier: d[0] })} %}
    | FnCall {% id %}

P -> "(" _ L _ ")"
    | _Expression {% id %}

E -> E _ "^" _ P
    | P {% id %}

MD -> MD _ "*" _ E
    | MD _ "/" _ E
    | MD _ "%" _ E
    | E {% id %}

AS -> AS _ "+" _ MD {% (d) => { return AST.ASTtypes.binop.build({ first: d[0], op: "+", last: d[4] })} %}
    | AS _ "-" _ MD {% (d) => { return AST.ASTtypes.binop.build({ first: d[0], op: "-", last: d[4] })} %}
    | MD {% id %}

C -> C _ "==" _ AS
    | C _ "!=" _ AS
    | C _ ">" _ AS
    | C _ ">=" _ AS
    | C _ "<" _ AS
    | C _ "<=" _ AS
    | AS {% id %}

N -> "not" _ C
    | C {% id %}

L -> L _ "and" _ C {% (d) => { return AST.ASTtypes.binop.build({ first: d[0], op: "&&", last: d[4] })} %}
    | L _ "or" _ C {% (d) => { return AST.ASTtypes.binop.build({ first: d[0], op: "||", last: d[4] })} %}
    | N {% id %}

Identifier -> [A-Za-z] [A-Za-z0-9_]:* {% (d,l,r) => {
        if(d[0] + d[1].join('') == "true" || d[0] + d[1].join('') == "false") {
            return r
        }
        return d[0] + d[1].join('')
    } %}

ArgList -> Expression
    | Expression _ "," __ ArgList {% (d) => {return [d[0]].concat(d[4])} %}

ArgIDList -> Identifier
    | Identifier __ "," __ ArgIDList {% (d) => {return [d[0]].concat(d[4])} %}