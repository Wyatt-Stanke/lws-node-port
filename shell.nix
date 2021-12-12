{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    buildInputs = [
        pkgs.nodejs-16_x
        pkgs.postgresql
    ];

    shellHook = ''
        if command -v zsh >/dev/null; then
            echo You seem to have zsh installed, so we have enabled zsh instead of bash.
            zsh
        fi
    '';
}