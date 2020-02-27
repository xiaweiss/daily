pyenv

brew update
brew install pyenv
（To upgrade pyenv in the future, use upgrade instead of install.）


A CA file has been bootstrapped using certificates from the system
keychain. To add additional certificates, place .pem files in
  /usr/local/etc/openssl@1.1/certs

and run
  /usr/local/opt/openssl@1.1/bin/c_rehash

openssl@1.1 is keg-only, which means it was not symlinked into /usr/local,
because openssl/libressl is provided by macOS so don't link an incompatible version.

If you need to have openssl@1.1 first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.bash_profile

For compilers to find openssl@1.1 you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"

For pkg-config to find openssl@1.1 you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"

==> readline
readline is keg-only, which means it was not symlinked into /usr/local,
because macOS provides the BSD libedit library, which shadows libreadline.
In order to prevent conflicts when programs look for libreadline we are
defaulting this GNU Readline installation to keg-only.

For compilers to find readline you may need to set:
  export LDFLAGS="-L/usr/local/opt/readline/lib"
  export CPPFLAGS="-I/usr/local/opt/readline/include"

For pkg-config to find readline you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/readline/lib/pkgconfig"



Add pyenv init to your shell to enable shims and autocompletion

echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bash_profile

