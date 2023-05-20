


const githubPattern = /^https?:\/\/github\.com\/[\w-]+\/[\w-]+(\.git)?$/;
const gitLabPattern = /^https?:\/\/gitlab\.com\/[\w-]+\/[\w-]+(\.git)?$/;

export function isGit ( path ) {

    return githubPattern.test( path ) || gitLabPattern.test( path );

}

export async function clone( repositoryUrl, destinationFolder ) {

    const cloneCommand = new Deno.Command("git clone", {
        args: [ repositoryUrl, destinationFolder ]
    });

    const { code, stdout, stderr } = await cloneCommand.output();

    if ( code !== 0 ) {
      throw new Error(`Failed to clone repository: ${repositoryUrl}`);
    }
    
    if ( stdout )
        console.log( stdout);

    if ( stderr )
        throw new Error( stderr );
    

}