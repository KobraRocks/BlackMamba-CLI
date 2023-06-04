const template = `{
    "name": "",
    "description": "",
    "source":".js",
    "factorySettings": {},
    "dependsOn": {
        "packages":[],
        "sources":[]
    },
}
`;

export default function createPackageFile ( filename )  {

    Deno.writeFileSync( filename + ".json", template );

    console.log(`Package "${filename}.json" created`);

}