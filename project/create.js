import { copyDir } from "../utilities.js";
import { isGit, clone } from "../helpers/git.js";

const templateDir = "./project/template";

// bm create project my-project --templateWeb=default-web
// bm -c project my-project -twd 
export default async function create ( projectName, projectTemplate ) {

    const path = getPath( projectTemplate );

    if ( path.includes( "default-web" ) )


    isGit( path ) ?
        await clone( path, projectName )
        :
        copyDir( path, projectName );


    console.log( `Project directory ./${projectName} has been created` );

}


function getPath ( option ) {

    const path = option.split("=")[1];

    if ( path === "default-web" || path === "default-desktop" || path === "default-server" )
        return templateDir + "/" + path;

    return  path;

}
