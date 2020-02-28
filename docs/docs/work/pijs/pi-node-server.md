## PiJS Node Server

[Pi](./) | [Work](../) | [Home](../../..)

![PiJS](images/pi-logo.png "PiJS")

### Our custom PiJS Firmware

Grab an SD card, clone this repo onto it and fire up your Pi
to see some seriously wicked shee-it. [GitHub](https://github.com/listingslab-hardware/pi-firmware)

#### Install on Pi 4 with a clean Rasbian instance

Create a folder called `node` on your Pi's `~/Desktop` and clone this directory into it,

```bash
cd ~/Desktop
mkdir node && cd node
git clone https://github.com/listingslab-hardware/pijs.git
cd pijs
yarn && cd ./node && yarn && cd ../react && yarn && cd ../ && ls -la
```

> Cool stuff you can do

##### Takes a photo and saves it to the server

```bash
~/Desktop/node/pi-firmware/bin/create_current_photo.sh
```

##### How to turn off the annoying red light

```bash
sudo sh -c 'echo 0 > /sys/class/leds/led1/brightness'
```

##### Where to save boot commands

```bash
sudo nano /etc/rc.local
```
