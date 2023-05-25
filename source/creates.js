const func = `export function factory ( _dependencies ) {

    return ( _factorySettings ) => {

        return async () => {

        };

    };
}
`;

const obj = `export default function factory ( _dependencies ) {

    return ( _factorySettings ) => {

        return Object.freeze({



        });
        
    };
}
`;

const clss = `export function factory ( _dependencies ) {

    return ( _factorySettings ) => {

        return class {

        };

    };
} 
`;

const templates = {

    func,
    obj,
    clss

};

export default function createSourceFile ( filename, template = "--template=func") {

    const templateName = template.split('=')[1]
    const text = templates[ templateName ];

    if ( text === undefined )
        throw new Error(`Template "${templateName}" is not supported.\nType "bm -h source" to get more information`);

    Deno.writeTextFileSync( filename + '.js', text );
    console.log(`source ${filename}.js created`);
}