## Linux Cron time-based scheduler

[Pi](./) | [Work](../) | [Home](../../..)

![Rapberry Pi](images/pi-logo.png "Rapberry Pi")

```bash
crontab -e
```

The Linux Cron time-based scheduler by default does not execute jobs with shorter intervals than 1 minute. This config will show you a simple trick how to use Cron time-based scheduler to execute jobs using seconds interval. Let's start with basics. The following cron job will be executed every minute:

```bash
* * * * * date >> /tmp/cron_test
```

The above job will be executed every minute and insert a current time into a file /tmp/cron_test. Now, that is easy! But what if we want to execute the same job every 30 seconds? To do that, we use cron to schedule two exactly same jobs but we postpone the execution of the second jobs using sleep command for 30 seconds. For example:

```bash
* * * * * date >> /tmp/cron_test
* * * * * sleep 30; date >> /tmp/cron_test
```

What, happens above is that cron scheduler executes both jobs at the same time, however, the second cron job will have 30 seconds delayed shell execution. Using the same above idea we can also schedule 15 seconds cron job execution intervals:

```bash
* * * * *  sleep 5; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 10; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 15; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 20; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 25; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 30; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 35; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 40; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 45; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 50; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 55; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 60; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
```

Now, what about 5 seconds? Same here but it would be a little more typing so I suggest to use bash for loop to generate our cron list. The following linux command will create cron list to execute date >> /tmp/cron_test in 5 seconds intervals:

```bash
# for i in $( seq 5 5 60 ); do (crontab -l ; echo "* * * * * sleep $i; date >> /tmp/cron_test") | crontab -; done
```

[Source linuxconfig.org](https://linuxconfig.org/how-to-execute-less-than-1-minute-intervals-jobs-using-cron-time-based-scheduler)
