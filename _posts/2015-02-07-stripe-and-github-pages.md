---
layout: post
title: "Stripe and Github Pages"
description: ""
category: ""
tags: []
---
{% include JB/setup %}

Recently, I was tasked with figuring out payment processing for an online pastry website.  It has been a while since I've looked at payment processing solutions.

I considered the following options..

- [Squarespace](http://www.squarespace.com/)
- [Square Market](https://squareup.com/market)
- [Paypal](https://www.paypal.com/home)
- [Stripe](https://stripe.com/)

Ideally, a solution like Square Market or Squarespace would have worked as it would be a complete solution: web hosting, item management, payment processing, and backend reporting.  Paypal and Stripe were more of last resorts.

Squarespace touts itself as a small business end-to-end solution for online presence.  I found that it has a nice offering but the monthly/annual fee was offputting.  Also, it is tuned more for selling multiple different items.  At this time, melange pastry lab is only selling one item.  The user experience would have been offputting.

Next up, Square Market.  I was excited about this because it could mean an integrated solution with their in-person Square widget.  Also I'm generally impressed with innovation and design that Square puts into its products.  In addition, there is no monthly/annual fee for Square Market.  However, much like Squarespace, Square user experience is not well tuned for individual item sales.

So that led me to Paypal.  Paypal has seen a lot of development in its peer-to-peer products.  It has been a while since I last used it for business, but I hoped things had improved.  Sadly, I encountered the same antiquated help pages and test/sandbox set up.  As part of pastry ordering flow, I needed a way to accept additional metadata stored with the payment itself.  It was unclear how to do that with Paypal and nor did I have any interest in digging into it.  Paypal I would reserve for more simple use cases.

Finally, I came to Stripe.  I've been interested in trying it for some time.  The mobile friendly [Stripe Checkout](https://stripe.com/checkout) was very slick and easy to integrate.  I was planning on using [GitHub Pages](https://pages.github.com/) for hosting as it is so easy to update and because it is free.  This presented a challenge as Stripe Checkout requires a backend service where the secret key is configured.  I was very lucky to find [Christopher Cliff](https://christophercliff.com/)'s [heroku stripe checkout](https://github.com/christophercliff/heroku-stripe-checkout) which uses Heroku Deply to create the app without even touching git.  Very neat!  It even has support for including metadata with every payment.

As a simple end-to-end customizable solution, Stripe Checkout, Heroku Stripe Connect, and GitHub Pages works fantastic to get paid.  Great!  But before we pat our backs, we need to think about security.  Unfortunately GitHub pages does not require https.  There are a few solutions for this if you google.  But I had an additional problem, I wanted to use a custom domain.  Thankfully, Cloudfare recently released a new free [Universal SSL](https://blog.cloudflare.com/introducing-universal-ssl/).  There are a [few](https://me.net.nz/blog/github-pages-secure-with-cloudflare/) [good](https://konklone.com/post/github-pages-now-sorta-supports-https-so-use-it) posts on how to use Universal SSL with your custom domain and GitHub Pages to enforce SSL.  Before we get too happy with the result, note that because of how GitHub Pages is configured, you are required to use Cloudflare Flexible SSL which has a (small) security risk which [large organizations](https://github.com/MayOneUS/homepage_redesign/issues/82) are also taking.

Ok, so we have a pretty secure payment processing solution.  What is next?  Oh, we need to be able to change the dollar amount on the Stripe Checkout widget.  Turns out this is not trivial as the dollar amount is passed to the Stripe Checkout JS via the DOM.  Once the Stripe Checkout JS code is evaluated, it stores the amount locally and cannot be modified.  So Stripe JS [custom integration](https://stripe.com/docs/checkout#integration-custom) is required.

Whew!  Definitely more difficult than I expected to build a customizable payment processing solution but in the end it is worth it.  Feel free to check out my [github page](https://github.com/melangepastrylab/melangepastrylab.github.io) and my forked [heroku stripe checkout](https://github.com/mericsson/heroku-stripe-checkout).  I had to fork it to customize it a bit and also to have it work better with Custom Stripe Checkout.