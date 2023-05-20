export function copyDir ( from, to ) {

    Deno.mkdirSync( to, { recursive: true } );

    for ( const entry of Deno.readDirSync( from ) ) {

        if ( entry.isFile ) {

            Deno.copyFileSync( from + "/" + entry.name, to + "/" + entry.name );
        }

        if ( entry.isDirectory ) {

            copyDir( from + "/" + entry.name, to + "/" + entry.name );

        }
 
    }
   
}