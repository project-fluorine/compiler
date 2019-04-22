function compile(value) {
    if(value.length) {
        return value.map((v) => {
            return compile(v)
        }).join('')
    } else {
        return value.compile()
    }
}

class ASTitem {
    constructor(name, data, compiler) {
        this.name = name
        this.data = data
        this.compiler = compiler
    }

    compile() {
        return this.compiler(this.data)
    }
}

class ASTtype {
    constructor(name, builder) {
        this.name = name
        this.builder = builder
    }

    build(data) {
        return this.builder(data)
    }
}

var ASTtypes = {
    statementify: new ASTtype(";", (data) => {
        return new ASTitem(";", data, (d) => {
            return d.value.compile() + ";"
        })
    }),

    assign: new ASTtype("assign", (data) => {
        return new ASTitem("assign", data, (d) => {
            return (d.local ? "let" : "") + "fluorine_" + d.identifier + "=" + d.value.compile() + ";"
        })
    }),

    get: new ASTtype("get", (data) => {
        return new ASTitem("get", data, (d) => {
            return "fluorine_" + d.identifier
        })
    }),

    binop: new ASTtype("binop", (data) => {
        return new ASTitem("binop", data, (d) => {
            return "(" + d.first.compile() + d.op + d.last.compile() + ")"
        })
    }),

    num: new ASTtype("num", (data) => {
        return new ASTitem("num", data, (d) => {
            return "Number(" + d.value + ")"
        })
    }),

    bool: new ASTtype("bool", (data) => {
        return new ASTitem("bool", data, (d) => {
            return "Boolean(" + d.value + ")"
        })
    }),

    str: new ASTtype("str", (data) => {
        return new ASTitem("str", data, (d) => {
            return "String(" + d.value + ")"
        })
    }),

    fndef: new ASTtype("fndef", (data) => {
        return new ASTitem("fndef", data, (d) => {
            return "(" + d.args.map((v)=>{return "fluorine_" + v}) + ")=>{" + compile(d.body) + "}"
        })
    }),

    call: new ASTtype("call", (data) => {
        return new ASTitem("call", data, (d) => {
            return "fluorine_" + d.identifier + "(" + d.args.map((v) => {return v.compile()}).join(',') + ")"
        })
    }),

    block: new ASTtype("block", (data) => {
        return new ASTitem("block", data, (d) => {
            return "{" + compile(d.body) + "}"
        })
    }),

    return: new ASTtype("return", (data) => {
        return new ASTitem("return", data, (d) => {
            return "return " + d.value + ";"
        })
    }),

    break: new ASTtype("break", (data) => {
        return new ASTitem("break", data, (d) => {
            return "break;"
        })
    }),
}

module.exports = {
    ASTitem: ASTitem,
    ASTtypes: ASTtypes,
    compile: compile
}