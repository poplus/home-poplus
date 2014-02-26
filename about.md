---
layout: default
title: About Poplus
---

# What is Poplus?

Poplus is an international community of activists, citizens and developers. 

Together we are creating standardised, internationalised, interoperable, open-source Components, to make it easier to build websites that empower citizens, no matter where you are based.

## Our Founding Principles

1. We believe technology can empower organized citizens to pursue social change.
2. We believe that the best technology solutions come out of collaboration.
3. We believe that key technology solutions should be easy to replicate, no matter where in the world you are or what language you speak.
4. We believe that robust technological solutions can be cheap, easy, and quick, rather than expensive, difficult, and time-consuming.

## How this Works.

You have a vision that would make your country's democracy more accessible for everyone. You’ve seen sites like [TheyWorkForYou.com](http://theyworkforyou.com/) or [VotaInteligente.cl](http://votainteligente.cl/) and would like to build a similar site that monitors your Parliament. It would provide information about all the representatives, and publish everything they say or vote on. 

Thanks to your website, people would be far better informed about what goes on in Parliament, and better able to make fact-based decisions.

But websites like that require a lot of coding, and take a long time (and a lot of money) to build and maintain. Because of this, many people either give up, or settle for a site that does a small fraction of what they would create if they had a much bigger budget.

Ideally, we'd love to be able to provide you with a website ‘out of the box’, which you could put your country's data into, and use right away. Sadly, the world isn’t like that. Legislatures are all very different, and it’s impossible to provide a system that can be used in every country.

Or... is it? When you look carefully, you see that, no matter how different they are, all Parliaments consist of many of the same elements:

+ _People_ hold _positions_ (e.g. the Minister of Education or a Member of Congress)
+ Each _person_ is usually the member of a _party_ or holds some affiliation
+ Each _person_ can make _speeches_ about topics and _vote_ on bills
+ _People_ are often related to a _jurisdiction_ or _constituency_ that has boundaries

Now it might seem easy enough to create a database of people, and cross-reference it with a database of positions, but in fact, it's harder than you'd think.

+ Politicians sometimes change party
+ They often change position
+ Sometimes they change their name — perhaps when they get married

In each case it’s not enough to simply update your database — you need to accurately display the correct historic version when showing what they did in the past. And these are just some of the _predictable_ issues. Invariably, there are always _unpredictable_ ones, too, which can cause headaches when they first arise months or even years after your site launches. (We’ve been running sites like this for over ten years now, and have learned lots of this the hard way!)

With all this in mind, we’ve developed Poplus Components — pieces of software that take all these problems into consideration, so that you don't have to worry about them. You can use just one, or you can put them all together - they're designed to interoperate.

Poplus isn't just about parliamentary monitoring websites, though. We're applying the same formula to every kind of civic or democratic website, from sites for reporting potholes, to sites which let you request information from those in power.


## Community

You can participate in Poplus as a Supporter or a Contributor.


#### 1) Supporters
Supporters may simply be people who happily use the Poplus Components to make their lives easier. But we’re also including anyone who commits to celebrating and endorsing the idea of using shared technology for empowerment across multiple countries.


#### 2) Contributors
Contributors are those who contribute to the Poplus Ecosystem — perhaps by creating a new Component, adding features to existing ones, or providing technical support. 

##### How do I become a contributor?

We're still working on this right now but check back in a couple of days and we'll have updated this!



## Some Poplus Components

Poplus Components do all sorts of things, and if you're planning on building a civic or democratic website, you'll find them really useful. Here are just a few:

[PopIt][PopIt]: when you're dealing with _people_ holding _positions_ in _organisations_, PopIt takes care of the details.

[MapIt][MapIt]: if you want to match representatives to _jurisdictions_, you'll need to be able to map geographical points to _boundaries_. MapIt does that for you.

[WriteIt][WriteIt]: an easy way for your users to contact people in power.

[BillIt][BillIt]: lets you track the texts of bills and laws as they pass through your legislature.

[SayIt][SayIt]: is a better way to present debates and transcripts so that they can be fully searched, linked to, etc.

_Do components have to end in the word 'it'?_ No, they don't! But our early projects do seem to have picked up that pattern...

What all these Components have in common is that they save you from having to 'reinvent the wheel'. All you have to do is concentrate on building the parts that are unique to your own country or jurisdiction.

And there are more to come. For example, planned projects currently include:

+ **EventIt** - allowing you to easily create a timeline of everything a particular public figure says and does.

+ **PromiseIt** - track the promises a politician has made, then see if he or she keeps them during their term of office.

+ **FundIt** - see who's donating money to political campaigns.

Would you like to get involved with these projects? Visit the [Trello Board][developmentboard] to find who's behind them, sign up and then you can make contact or add comments to the project you're interested in.



## How It Works (the technical version)

#### How do I use Components?

1. **Read and socialise!**
  The first step is to identify the Component you want to use, and then make sure you read the documentation. 

  You should also join the [Components mailing list][googlegroup], where you'll find many friendly and helpful people who can answer any questions that may arise.

2. **Format your data**
  One feature of Components is that they are standardised, yet flexible.

  Normally, you will need to transform your underlying data so that it is in a format the Component can recognise - for example, [SayIt][SayIt] publishes speeches and transcripts using the [Akoma Ntoso standard][akstandard], while [PopIt][popit] can import your people data if it adheres to the [Popolo standard][pstandard].

  This might seem a nuisance, but it's all for a good reason - it means the tools don't need to be rewritten for every different country, and it also helps them to interoperate smoothly.

  If your data just won't fit the given standards - and in our experience, this is rare - you should find that you only need to adapt the existing code a little, rather than completely rewriting it. If you're really stuck, don't worry - [get in touch][googlegroup] and we can help you.

3. **Integrate**
  
  So, how do you get a Component working within your own website? There are a few options:

  - **Embed it into your own software**; All Components exist as a software library (like a Django app or Rails engine) which you can embed into your own software

  - Or **let us host it**; Many Components offer a hosted option which you can use over an API. While this may not be suitable longterm, it's often the best and simplest option when you are testing things out. 

  - **Many Components have a super-easy user interface**, so you can get your non-technical friends to help you out.

  - **It's all FLOSS (_Free and Open Source_)**. That means that you welcome to use it, for nothing. You are also more than welcome to adapt it, copy it, distribute it, improve it, and especially, to contribute back to the projects as a whole. 


4. **Interoperate**
  You don't have to stop with just one Component. in fact, they are designed to work together, and indeed you can put several together to create an entire website.

  For example, you might start by importing a database of politicians into [PopIt][popit]. Once you've done that, other components, like [SayIt][sayit] or [WriteIt][writeit] know how to work with that data.

5. **Go!**
  Here's a [list of all the existing Components][catalogue]. Go and explore... and help yourself!




### How can I contribute a Component?
 
1. **Read and socialise**
  Read our [community page][join] and [join the mailing list][googlegroup]. Introduce yourself, and outline your plans. You might find that someone has already built, or is in the middle of building, the same Component, so it's worth checking first.

2. **Understand what makes a Component.**

  - Components carry out a single, clear function well - for instance, storing voting records, or enabling the sending of  email messages.
  - Components have a clear use for those running democratic or civic websites (although they may also have uses outside that arena)
  - Components are designed for international use, such that they are based on universalities, while allowing for customisation of aspects that vary from country to country.
  - Components are built to operate with one another.
  - Components are contributed, at no charge, to the Poplus community, as FLOSS (free/libre open software) with the understanding that others will use them, adapt them, and develop them further.

3. **Some extra guidelines**

  - You can write your Component in any language or framework.
  - You must provide an API, so it can be used easily, even for people with no knowledge of that framework or language. An API will also allow people to experiment with your Component before installing it themselves.
  - The code must be on an open [Github][github] repo and available under a [GNU Affero licence][licence].
  - The code must be well documented, and the documentation available on Github.
  - The code should have a test suite.
  - It should be easy to translate the interface into different languages using a PO file editor, with the PO file being available on Github. 
  - You must commit to maintaining your software, actively and responsively - or, if you are not able to continue to do so, you should alert the community so that someone else can take over.

4. **Understood? Then you're ready to go**

  Check out the [list of components][developmentboard] we hope someone will build soon - or come up with your own idea. 

  But before you start building, don't forget to dip into the [mailing list][googlegroup] and find out what everyone else is doing.



## Founders


[Ciudadano Inteligente][ciudadanoi] (LATAM)

[mySociety][mysociety] (UK)


[catalogue]: catalogue.html
[join]: join.html
[developmentboard]: https://trello.com/b/5gGF4xrJ/poplus-development
[ciudadanoi]: http://ciudadanointeligente.org/ 
[mysociety]: http://www.mysociety.org/
[SayIt]: http://sayit.mysociety.org
[PopIt]: http://popit.mysociety.org
[WriteIt]: http://writeit.ciudadanointeligente.org/en/
[BillIt]: http://poplus.org/posts/billit/
[MapIt]: http://global.mapit.mysociety.org/
[googlegroup]: https://groups.google.com/forum/#!forum/poplus
[akstandard]: http://sayit.mysociety.org/about/developers
[pstandard]: http://popoloproject.com/
[github]: http://www.github.com
[license]: http://www.gnu.org/licenses/agpl-3.0.html
