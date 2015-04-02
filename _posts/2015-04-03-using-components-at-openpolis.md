# Using Poplus components at Openpolis

About one year ago, we came to know the Poplus effort here at Openpolis. We were glad to see something like that happen, and started to think how we could possibly contribute to that.

Being a tiny group on tight resources we try to keep our solutions design very simple, striving not to over-engineer them. But as the number of projects grew during the years, we found ourselves constantly fighting against the negative consequences caused by the copy&paste attitude we had, as software designers/developers. 

Once we had a good solution for a problem, we quickly applied it to other projects and contexts. That's been great! 
But having the same data or the same piece of software copied over half a dozen different machines, having to maintain them and synchronize them, doesn't sound like a great outcome even to non-coders out there. 

The simple idea of using standardized, re-usable components to build complex solutions started to make a lot of sense to us.

Being out there from a number of years, fighting to build and maintain complex solutions, we felt that testing the Poplus components architecture by porting one of our solutions to it was a natural contribution.

## The PolitikOS project

One of the first applications we developed in 2006, OpenPolitici, is a searchable directory of all elected representatives in Italy: [http://politici.openpolis.it](http://politici.openpolis.it/). There are currently more than 120 thousands active elected officials ranging from the High Representative of the European Union for Foreign Affairs and Security Policy, Ms. Federica Mogherini, to the 13 members of the city government and council of [Morterone](https://it.wikipedia.org/wiki/Morterone), a village in the Lumbard Alps with 33 inhabitants according to the official national census data of 2001.

![OpenPolitici](https://github.com/openpolis/home-poplus/blob/gh-pages/images/post_images/2015-04-02-openpolis-openpolitici-site.png "OpenPolitici web site")

In order to stress test the Poplus component architecture, we want to implement a new version of the OpenPolitici platform. The name of the new project is PolitikOS, and the the [user stories](https://quip.com/XghfAbrizOHb) we've written involve using [PopIt](http://popit.poplus.org/), [Mapit](http://mapit.poplus.org/)/[Represent Boundaries](http://represent.poplus.org/), and [SayIt](http://sayit.mysociety.org/).

![PolitikOS](https://github.com/openpolis/home-poplus/blob/gh-pages/images/post_images/2015-04-02-openpolis-politikos.png "politikOS web site")

The prototype we've implemented so far is available at [http://politikos.openpolis.it](http://politikos.openpolis.it/). It's a Python/[Django](https://www.djangoproject.com/) project that integrates data coming from a MapIt and a PopIt instances to return the members of parliament for the electoral constitution corresponding to the address or city entered by the user.


## The Poplus Component Integration toolkit (PCI)

Poplus components are [web services](https://en.wikipedia.org/wiki/Web_service), accessible by other software through an [Application Programming Interface](https://en.wikipedia.org/wiki/Application_programming_interface) (API). Since they're web services, any programming language can be used  to interoperate with them increasing the opportunities for reuse.
Most of the components provide basic storage and search functionalities (MapIt, RepresentBoundaries, PopIt, SayIt, BillIt), some others provide operational capabilities (Cuttlefish, WriteIt).

Writing a software application that uses different components is an integration activity; you need to access the remote components from your application, read and write data from and into them, or just use the operational functionalities they provide.

From a coder point of view, accessing a remote service is always done writing the same bits of code: **connection**, packaging and sending a **request**, retrieving and parsing a **response**.
Usually these activities are delegated to a dedicated library, a.k.a. *client library*, specifically developed for the given service in one or more programming languages.

Few of these client libraries are available as the Poplus components ecosystem is very young. Some services don't provide a library at all. A Python library exists for PopIt, and a Ruby one for BillIt. But so far that's all I know of at the moment.

Having a consistent, uniform set of client libraries in as many programming languages as possible is a key factor to be adopted by coders. And that's where the simple idea of a *Poplus Component Integration toolkit* (PCI) came from.

[poplus-pci](https://pypi.python.org/pypi/poplus-pci) is a Python package providing client libraries to access all Poplus remote services, using a consistent and uniform interface.
So far, only PopIt and MapIt have been integrated, integration of other components is scheduled for the future.

## How did we use it?

The main task of the PCI component is to integrate the PopIt and MapIt services within the PolitikOS project.

Once a user inserts an address, a postal code or a location name in the main search box, the geographical coordinates of the most representative point for the location are requested from a geocoding service. Then they're used to make a request to the [http://mapit.openpolis.it](http://mapit.openpolis.it/) service for all the geographic areas covering the point. A successive request to [http://parlamento.popit.mysociety.org](http://parlamento.popit.mysociety.org/) returns the data of all the members of the italian Parliament, for the electoral constituency covering the location point.

The following snippet of Python code illustrates how the logic described above has been implemented, within PolitikOS.

```python
from pci import Popit, Mapit

popit = Popit(instance='pops',
    host='popit.openpolis.it',
    user=<USER>,
    password=<PWD>,api_key=<API_KEY>,
    debug=False)
mapit = Mapit(base_endpoint='http://mapit.openpolis.it/')

mapit_areas = **mapit****.areas**(
    point='{0},{1}'.format(
        location.lon, location.lat
    ),srid='4326'
).get().items()

for mapit_id, mapit_data in mapit_areas:
    area_uri = 'http://mapit.openpolis.it/area/' + str(mapit_id)
    area_representatives = **popit****.search.memberships.get**(
        params={
            'q': 'area.identifier:"%s"' % area_uri.replace("/", "\\/")
        }
    )
    if **area_representatives****.****total** > 0:
        kwargs['area_representatives'].append(
            (**area_representatives.result.[0].organization**, 
             mapit_data, **area_representatives****.result**)
        )
```

## What did we discover about components while developing PCI/PolitikOS?

### Popolo

In my opinion, the [Popolo standard](http://www.popoloproject.com/) is what really keeps all the components idea together.
Software reuse is an important concept both for helping lowering the entry barriers,  and from a software-engineer optimization perspective. But standardization is even more important in order to have applications around the globe produce inter-operable, semantically well-defined, and comparable sets of data. Just have a look at http://everypolitician.org/ to see what's going to be possible in the near future.

Popolo is a standard in the making, that describes the context we operate on as civic hackers, just support it and add your use cases and practices to the dedicated threads in the list!

### Components APIs

Some of the components APIs have yet to be completed. In general it would be nice to have a widespread adoption of the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) architectural style, in so much as possible.

### Inter-component communication

Some components use other components internally. SayIt and WriteIt need to import the list of politicians they use from PopIt, and would have problems with dynamic data changing faster than the frequency with which they're upgraded from the source.

 Some sort of communication protocol among components could be inserted into the picture, allowing components or external applications to receive push notifications in reaction to pre-defined events. This would help developers build more sophisticated and effective applications out of the Poplus components building blocks.
The [webhooks](http://www.slideshare.net/progrium/web-hooks-and-the-programmable-world-of-tomorrow-presentation) pattern, or one of the [alternatives](http://apiux.com/2013/09/12/webhooks/), could provide this possibility by using standard HTTP request/response technology, thus not introducing a technological complexity which would hinder the adoption by coders in this context.

Guglielmo Celata
Openpolis



