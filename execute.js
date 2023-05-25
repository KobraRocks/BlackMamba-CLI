import { features } from "./enums.js";
import project from "./project/feature.js";
import source from "./source/features.js"

const exe = {
    project,
	source
};


export default function ( cmd, feature ) {

	let method;

    if ( features.has( feature ) ) {

		if ( cmd === "-c" || cmd === "--create" || cmd === "create" ) {
			   method = "create";
		}

		if ( cmd === "-r" || cmd === "--remove" || cmd === "remove" ) {
			method ="remove";   
		}

		return exe[feature][method];

    } else {

		console.log(`Invalid feature "${feature}", type: bm --help features`);

    }

}
