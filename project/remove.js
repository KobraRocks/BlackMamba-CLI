export default function remove ( projectName ) {

    // TODO: test removing a git repo

    Deno.removeSync( projectName, { recursive: true } );

}