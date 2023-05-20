import { copyDir } from "../utilities.js";
import { isGit, clone } from "../helpers/git.js";

const templateDir = "./project/template";


/**
 * Asynchronously creates a new project directory with the given projectName
 * using the specified projectTemplate. The function copies or clones the
 * projectTemplate based on whether it is a Git repository or not, respectively.
 *
 * @param {string} projectName - The name of the project directory to be created.
 * @param {string} projectTemplate - The template to be used as the basis of the new project.
 * @return {Promise<void>} A Promise that resolves once the project directory has been created.
 */
export default async function create ( projectName, projectTemplate ) {

    const path = getPath( projectTemplate );

    if ( path.includes( "default-web" ) )


    isGit( path ) ?
        await clone( path, projectName )
        :
        copyDir( path, projectName );


    console.log( `Project directory ./${projectName} has been created` );

}


/**
 * Returns the path based on the given option parameter.
 * ex: option = --template=default-web or --template=/my/templates/directory/my-template
 *
 * @param {string} option - The option parameter to extract the path from.
 * @return {string} The path extracted from the option parameter or a template path if the option is one of the defaults.
 */
function getPath( option ) {
    const path = option.split( "=" )[1];
    const defaults = ["default-web", "default-desktop", "default-server"];

    if ( defaults.includes(path) ) 
        return `${templateDir}/${path}`;
        
    return path;
  }
  
