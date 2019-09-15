//This is made for a practice with "Abstract Syntax Tree" you can try it using: https://astexplorer.net/

export default function(context) { //This rule makes all const variables that stores a number be declared with UPPERCASE
    return {
        VariableDeclaration(node){ //This "VariableDeclaration" is called because 
            // tipo de variable const
            if(node.kind === "const"){ //Checks if is a const variable
                const declaration = node.declarations[0]; //Gets the first declaration
                if(typeof declaration.init.value === 'number'){ //Checks the type of the declaration value
                    if(declaration.id.name !== declaration.id.name.toUpperCase()){ //If the declaration name is diff of its same value but uppercased
                        context.report({ //Triggers the report giving the specific node, with a msg, and the solution
                            node: declaration.id,
                            message: "The name of the constant must be uppercased",
                            fix: function(fixer){
                                return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase())
                            }
                        });
                    }
                }
            }
        }
    };
};