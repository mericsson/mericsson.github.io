---
title: Rebuilt my blog with Gatsby JS
date: 2017-03-29T12:00:00.000Z
path: /rebuilt-blog-gatsby-js/
---

As part of launching [zenbox.co](/zenbox-beta/) I wanted to revamp this blog and try to blog more actively.

Since I've been messing around with React JS a lot lately, I was really excited to see [gatsby-js](https://github.com/gatsbyjs/gatsby) as a way to literally bring those learnings to my blog. The [gatsby starter blog](https://github.com/gatsbyjs/gatsby-starter-blog) was a great way to get started but I eventually hand-wrote everything to get it set up just how I'd like it. I also used the [minima](https://github.com/jekyll/minima) jekyll theme with a tiny bit of customization.

The commit history is a bit of a mess but you can see the source here: https://github.com/mericsson/mericsson.github.io/tree/staging

So far, the things I have liked about going with gatsby are:

- Familiar react model
- Overall snappy-ness of blog. 'Look ma, no more page loads!'

Tricky things I encountered:

- GitHub pages requires personal hosted websites to be in 'master' branch. I had to modify the deploy script to handle that.
- Links between blog posts do not leverage react-router so they result in a page load. I'd like to find a smart way to handle that.
- Usual debate of inline css in react or not and using `className` everywhere. :)
- Old examples of gatsby js in the [gatsby README.md](https://github.com/gatsbyjs/gatsby/blob/master/README.md). It is relatively new technology and still rapidly iterating, so I expect more changes in the future.

Overall I'm happy and hope to follow the development of gatsby and use it in future static marketing websites I build out.
