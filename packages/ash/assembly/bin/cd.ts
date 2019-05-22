
export function main(args: string[]): void {
  if (args.length > 1) {
    //opens the directory with the given name
      let dir = fs.openDirectory(args[1]);
      //if it fails than it either is not a
      //directory or the directory does not exist
      if(dir.failed) {
        Console.error("Unable to open directory.");
      } else {
        Console.log("Success");
      }
  }
}