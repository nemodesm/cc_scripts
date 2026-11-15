/**
 * @noSelfInFile
 */
/**
 * @noSelf
 */
declare interface ShellAPI {
    /**
     * Run a program with the supplied arguments.
     *
     * Unlike shell.run, each argument is passed to the program verbatim. While
     * `shell.run("echo", "b c")` runs echo with `b` and `c`,
     * `shell.execute("echo", "b c")` runs echo with a single argument `b c`.
     * @param command The program to execute.
     * @param args Arguments to this program.
     *
     * @returns Whether the program exited successfully.
     */
    execute(command: string, ...args: string[]): boolean;

    /**
     * Run a program with the supplied arguments.
     *
     * All arguments are concatenated together and then parsed as a command
     * line. As a result, `shell.run("program a b")` is the same as
     * `shell.run("program", "a", "b")`.
     * @param args The program to run and its arguments.
     */
    run(...args: string[]): boolean;

    /**
     * Exit the current shell.
     *
     * This does not terminate your program, it simply makes the shell terminate
     * after your program has finished. If this is the toplevel shell, then the
     * computer will be shutdown.
     */
    exit(): void;

    /**
     * Return the current working directory. This is what is displayed before
     * the > of the shell prompt, and is used by shell.resolve to handle
     * relative paths.
     *
     * @returns The current working directory.
     *
     * @see setDir To change the working directory.
     */
    dir(): string;

    /**
     * Set the current working directory.
     *
     * @param dir The new working directory.
     *
     * @throws If the path does not exist or is not a directory.
     */
    setDir(dir: string): void;

    /**
     * Get the path where programs are located.
     *
     * The path is composed of a list of directory names in a string, each
     * separated by a colon (`:`). On normal turtles will look in the current
     * directory (`.`), `/rom/programs` and `/rom/programs/turtle` folder,
     * making the path `.:/rom/programs:/rom/programs/turtle`.
     *
     * @returns The current shell's path.
     *
     * @see setPath To change the current path.
     */
    path(): string;
}
