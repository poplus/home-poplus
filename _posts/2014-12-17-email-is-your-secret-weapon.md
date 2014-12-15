---
layout: post
title:  "Email is your secret weapon"
author: Matthew Landauer
date: 17-12-2014
categories: post
published: true
---

Earlier this year I was lucky enough to attend [PoplusCon](/popluscon/) in Santiago, Chile. It was a remarkable experience spending two very intense days working through problems, sharing experience and knowledge, and making connections with incredibly talented civic tech coders and activists from around the world.

If you were lucky enough to be there as well, I hope we met and I also hope you remember the lightning talk I gave on a tool I had been working on for some time. Hopefully it's something that you'll find useful.

![Lightning talk at Poplus Con](/images/post_images/2014-12-17-cuttlefish-lightning-talk.png)

The tool is called Cuttlefish.

![Cuttlefish](/images/post_images/2014-12-17-cuttlefish-banner.png)

I have a cool new announcement to make about Cuttlefish.

That comes a little later. First I want to tell you a little bit about the motivations behind Cuttlefish and of course what it actually does.

### What is transactional email and why should I care?

Transactional email is email sent from applications in "transactions". This could be for example, the email you get when you sign up for a new service; it could be the email alert that notifies you when a politician has spoken in parliament. In simple terms it's anything that's generated automatically by you doing something in an application.

**Email is your secret weapon**. Email
is what reminds people your website exists and keeps them engaged. It's what allows useful information to come direct to people.

As an example at the [OpenAustralia Foundation](https://www.openaustraliafoundation.org.au/) we run a project called [PlanningAlerts](http://www.planningalerts.org.au/) which is a really simple service that collects up applications from around Australia for people and companies wanting to build or knock down buildings. This is information that's published on local government websites.

Now, who in their right mind goes and looks at their local government website once a week to see if there are any new planning applications that might be of interest? Maybe you would do it if it was your job but ordinary people are hardly going to do that.

What instead we do with PlanningAlerts is allow people to sign up for email alerts when there is a new planning application in their area. They don't have to find or navigate their local government website and most importantly they don't have to remember to regularly check.

When there's something new it arrives in their inbox. At the moment around 50,000 people per week receive an email alert from PlanningAlerts in their inbox.

If you're anything like us you probably send a **lot** of email too.

Here's the problem - Sending email and doing it properly is actually surprisingly really hard and it gets even harder the more email you send.

### Commercial route

One option is to use one of many commercially available transactional email services, such as [Sendgrid](https://sendgrid.com/), [Mandrill](https://mandrill.com/) or [Amazon SES](https://aws.amazon.com/ses/). They are great and incredibly reliable. They make sending email so much easier.

However, it does come at a financial cost. It can be inexpensive or even free if you're not sending a lot of email. However, as a civic technology organisation you likely send a **lot** of email **and** you don't have much money.

Then, there's the tricky issue of working in civic tech fundamentally depending on a piece of closed-source technology. What if the service disappears or changes? What if I can't afford to keep paying the bills?

It's a practical limitation as well as an ethical issue.

Can open-source help?

### The open-source route

Alternatively you could build the email smarts into your open-source application.

That is what has tended to happen so far in the open-source world. Every application that sends a lot of email has had to figure out for itself how to do bounce detection, link tracking and all those tricky things.

For example, [Alavateli](http://alaveteli.org/) from [mySociety](https://www.mysociety.org/) has lots of smarts for figuring whether an email has been delivered (so that government agencies have a hard time claiming that they never received an freedom of information request when it can be shown that it was delivered to their email server).

[CiviCRM](https://civicrm.org/) can send emails to large lists of people. It has all this built-in smarts for link tracking, figuring out whether people have opened emails and detecting bounced emails. It's not exactly easy to set up though and frankly is crazy buggy.

[FixMyStreet](http://fixmystreet.org/) and [WriteToThem](https://www.writetothem.com/) also by mySociety similarly have their own code for handling bounce detection.

The goal behind Cuttlefish is to create a platform and language agnostic open-source service for sending email so that every application doesn't have to figure it out for itself.

Let's solve the hard (and boring) problem once and share the winnings.

Sounds a bit like a [Poplus component](/components/) doesn't it?

So here are some of things that Cuttlefish can do for you, your organisation and your civic application:

* Send email from your application using smtp in the usual way and get all sorts of added benefits for no effort
* A lovely web UI to browse what's happening
* Monitor in real time which emails arrive at their destination and which bounce
* Works with any web framework and language
* Automatically not send emails to destinations that have hard bounced in the past
* Track which emails are opened and which links are clicked
* Statistics on emails sent, soft/hard bounced and held back
* View the full email content for recently sent emails
* Multiple applications can each have their own SMTP authentication
* Built in, super easy to set up, automatic DKIM signing
* Postfix, which you know and trust, handles email delivery
* Open source, so no vendor lock in.

### Cuttlefish and Poplus

Fast forward to October, two months ago, the OpenAustralia Foundation was [awarded one of the Poplus mini grants](/posts/poplus-proposals-outcome/) to create a hosted version of Cuttlefish which will be freely available to the Poplus community for all your email sending needs.

This involves several related parts

* Allow you and your team to use a hosted Cuttlefish server as if it's your own. You will be able to use a shared server without seeing any of the emails being sent by other teams because we're adding multi-tenanting to the Cuttlefish software.
* Making Cuttlefish server provisioning completely automatic using [Ansible](http://docs.ansible.com/).
* Providing free access to the Cuttlefish server to the Poplus community for a minimum of 1 year (until at least the end of 2015).

Also we will be applying shortly for Cuttlefish to become a Poplus component.

### The big announcement

The work is done and you now have access to a hosted version of Cuttlefish

* Completely free to members of the Poplus community
* Send emails from your own domains
* No restrictions on volume of emails
* Hosted and maintained by the OpenAustralia Foundation
* Available at [https://cuttlefish.oaf.org.au](https://cuttlefish.oaf.org.au) now.

### How can I get started?

The plan is to add a simple form to [https://cuttlefish.oaf.org.au](https://cuttlefish.oaf.org.au) from which you can apply for access. We haven't quite done that yet.

In the meantime, if you want access please email us at [contact@oaf.org.au](mailto:contact@oaf.org.au) and include the following information:

* Your name
* Your email address &mdash; where you will receive the Cuttlefish invitation
* Organisation name
* Organisation website
* Describe the emails you would like to send with Cuttlefish and the applications they come from (e.g. email alerts for our parliamentary monitoring site ...)

The obvious disclaimer here is don't use Cuttlefish to send anything that could be mistaken as spam. No unsolicited emails. No mass marketing emails. Only things related to civic technology. If you have **[any doubts or questions just ask](mailto:contact@oaf.org.au)**.

If you'd like to look at the code or would like to try installing it on your own server go to [https://github.com/mlandauer/cuttlefish](https://github.com/mlandauer/cuttlefish).

#### Image credit

* Lightning talk still from [video](http://vimeo.com/95069822) by [Martín Corvera](http://vimeo.com/martincorvera)
