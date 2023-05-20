import { basicCmds, advancedCmds } from "./enums.js";
import getExecutable from "./execute.js";
import help from "./help/feature.js";

console.log(Deno.cwd());
const version = Deno.readTextFileSync("./version");

const [ cmd, feature, ...options ] = Deno.args;

if ( basicCmds.has( cmd ) ) {

    if ( cmd === "-v" || cmd === "--version" || cmd === 'version' ) {
	console.log( `BlackMamba ${version}` );
    } 

    if ( cmd === "-h" || cmd === "--help" ) {
	help( feature );
    }

} else {

    if ( advancedCmds.has( cmd ) ) {

	    const execute = getExecutable( cmd, feature );

        execute instanceof Promise ?
            await execute( ...options )
            :
            execute( ...options );

    } else {
	    console.log(`Invalid cmd argument "${cmd}", type bm --help`)
    }
}

