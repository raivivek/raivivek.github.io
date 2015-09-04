template: post.haml
category: programming
author: Vivek Rai
date: 9/4/2015
title: Getting rid of proxy issues
---
DigitalOcean droplet, thanks to GitHub.
---
Anyone who's been to a college which uses proxy servers (almost all of them!)
must have firewall horror stories to tell! Difficulties in SSH, accessing
*ill-fated* websites, or inability to use some programs become the ugliest part
of your life, especially if you are a programmer.

After being bugged by this fate for around 3 years and having difficulties
working on [WIGI
project](http://vivekiitkgp.github.io/shorts/programming/wigi-an-inspire-grantee.html#main),
I finally decided to take care of this problem once and for all by getting
myself a [DigitalOcean](https://www.digitalocean.com) tiny
[droplet](https://www.digitalocean.com/community/questions/what-is-a-droplet).
Thanks to the [GitHub student developer
pack](https://education.github.com/pack), which gives a 100$ credit in your
account, I can now enjoy 20 months of seamless service at the rate of 5$ per
month (that's ofcourse assuming reasonable usage!). If you are skeptical of
being charged more, rest assured that exceeding 1 TB of bandwidth utilization
per month is *very* difficult. The instance also offers you a 20 GB of SSD
storage.

The only requirement is that you need a credit card or PayPal account to
activate your DigitalOcean account. This is also the case with Amazon Web
Services (AWS), so it is not an issue if you were already using it. For others,
procuring either of these essentially boils down to having an access to a
credit card. During setup, your account is billed for one time with 5$ to
ensure that payments are successfully processed. Don't worry, this money is added to
your total credit.

## Setup

Setting up a droplet is surprisingly easy and much more comforting if you are a
frequent user of Amazon services. Within minutes, I could log into my server,
setup SSH configuration and add more accounts. Make sure you find a transient
access to your server from other source (your mobile!) to configure `sshd` to
listen on port 443.

## Proxy

I also setup up local SSH configuration to quickly create a [SOCKS
proxy](https://mikeash.com/ssh_socks.html) for tunneling web traffic and some
programs. [Topcoder](https://topcoder.com) had given a lot of trouble in easy
days .. but now? a breeze.
