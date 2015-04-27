sudo apt-get install build-essential
sudo apt-get install curl openssl libssl-dev
git clone https://github.com/joyent/node.git
cd node
git checkout v0.10.24
./configure
make
sudo make install

sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules
npm config set prefix ~/npm
#append to .bashrc
echo 'export PATH="$PATH:$HOME/npm/bin"' > ~./bashrc

