import { features } from "../enums.js";

export default function ( feature ) {
    
    let path;

    if ( feature === "features" )
	    help = `Supported Features are:${features.join("\n\t")}\nTo know more type bm --help <feature>`;

    if ( features.has( feature ) )
	    path = `./${feature}/${feature}.help`;

    if ( feature === undefined )
	    path = "./help/help.help"

    const help = Deno.readTextFileSync( path );

    if ( !help )
	    console.log( `help section for "${feature}" does not exist` );

    console.log( help );

}
