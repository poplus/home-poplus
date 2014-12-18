---
layout: post
title:  "Part 1: Popit a Key Component for Malaysia's Governance Initiatives"
author: Khairil Yusof
date: 17-12-2014
categories: post
published: true 
---

In Malaysia, political parties, politicians and businesses are highly
connected, with political parties being involved in businesses, and
politicians holding positions in multiple goverment linked companies
(GLC). With only one government coalition in power since independence,
many politicians elected and unelected continue to hold important
positions which affect institutions and the way democracies
function.[1] A single well designed public database with open API is 
needed for Malaysia to build better transparency and governance
applications.

Sinar Project previously tried to solve this with our own custom
implementations, but lack of time and resources meant that we fell into
trap of rewriting common components for different projects multiple
times. Popit was recommended to us by Dave Whiteland of MySociety in
2013. Since then, we have focused our efforts on populating this Popit
instance and building applications around it.

### Representatives

Basic CV information of most parliamentary representatives are not
easily available. An effort to do surveys in 2013 as part of MyMP
project and crowdsourcing information lead to only partial information
of 60 out of 222 MPs.[2] As a result of this, we have learned that to
build up CVs of past employment and posts held by our representatives to
know them better, we have to piece together this information from
various sources.  This reinforces the need to work on a single
comprehensive database.

Building career history from multiple sources. The history of the
following representative comes from general elections candidate
database, website of government statutory body and news archive.

[Popit Entry: Datuk Ahmad Husni Hadzlah](https://sinar-malaysia.popit.mysociety.org/persons/545e44b75222837c2c058d60)

![represenative career](http://sinarproject.org/projects/Datuk%20Ahmad%20Husni%20Hanadzlah.png/image_large)

We have been able to kick start this excercise thanks to generous
data donation of database of political candidates of past 3 elections
including political parties by
[Malaysiakini.com](http://malaysiakini.com) an online news portal.
The technical process and code for that will be covered in follow up
post. 

A fun fact from the import process is that, the Election Commission
accepts or publishes different names for the same candidates in
different elections. This provides a hint that electoral rolls may not
be that clean. [3] For us it means we have to rely a lot on [popit merge
API](http://popit.poplus.org/docs/api/merging)
call to track down and merge people.

Some lessons learned during this excercise:

- A user friendly, multi-user UI is needed for crowdsourcing
  https://github.com/mysociety/popit/issues/425 (implemented by
  MySociety)
- Updates for each field need to be attributed properly for
  information integreity.
  https://github.com/mysociety/popit/issues/26 A workaround
  currently being used is general source field. Source per field
  is still needed when other applictions use the database and only
  reference parts of the information. More on this later.
- Posts are needed in UI https://github.com/mysociety/popit/issues/685
- In countries like Malaysia where democracratic institutions are
  weak, populating information on representatives often involves
  putting together bits and pieces of information from lots of
  different sources.

### Accountability and Beneficial Ownership

In Malaysia it is rare for anyone to be held accountable for any public
issue. Public projects and results of policies often take up to several
years before mismanagement or corruption issues are raised and
highlighted. It then becomes difficult to trace back who was
responsible, especially if positions have been shuffled around or the
companies and departments have been closed down. The Auditor General
audit reports and press reports rarely note down who was the head of the
responsible departments or companies.

Public accessible and reliable information on posts held by people,
especially start and end dates backed by sources in Malaysia's popit
database is key to building applications and visulizations around them.

Recent news on 3 deputy ministers on board of a government public
corporate accepting honorariums along with current and past 11 other
directors stresses this point. We will soon have ability to match this
information and learn more about the political history and which
constituency these ministers are from. [4]

This is a long term effort and resources, and Sinar Project is working with
coalition of several local NGOs consisting of Transparency International
Malaysia, Institute for Democracy and Economic Affairs, Citizens Network
for Better Malaysia and Centre to Combat Corruption and Cronyism to
share research information and support their work with our popit
database and supporting applications.

![GIAT Coalition](https://farm8.staticflickr.com/7560/15427502903_a06ac8d8b3_z.jpg)

### Political Financing and Clean Elections

Posts for representatives also has an  Area field, which is important
for analysis to track down political funding. If the Area field [5] is
mapped to another Poplus component MapIT or Represent Boundaries it will
provide basic lookup funcationality for finding represenatives, but it
will allow other NGOs and researchers to see how public funds were spent
in the constiuencies of various represenatives.

### Continuing work

Thanks to Poplus mini-grant, we have been able to work on this initial import
excercise, as well as develop initial supporting applications. As a
result wof this work, we have been funded to continue development and
build supporting applications for other NGOs to use Popit in Malaysia
full time for the next 6 months thanks to Southeast Asia Technology and
Transparency Initiative (SEATTI) [6].

Look forward for our next post, where we will cover technical issues,
import code using Popit-Python and new generic represenatives and issue
tracking sites using our newly populated Popit database.

[1]: http://transparency.org.my/media-and-publications/reforming-political-financing-publication "Reforming Political Financing, Transparency International Malaysia"
[2]: http://www.loyarburok.com/tag/mymp "MyMP"
[3]: http://www.bersih.org/bersih-2-0-sabahans-vote-devalued-by-dirty-electoral-roll-issue-must-go-to-court "Bersih 2.0: Sabahan's vote devalued by dirty electoral roll"
[4]: https://sinar-malaysia.popit.mysociety.org/persons/545e47b85222837c2c0594e2
[5]: http://www.popoloproject.com/specs/area.html "Popolo Area"
[6]: http://www.seatti.org/ "SEATTI"
