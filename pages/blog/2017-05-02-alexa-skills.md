---
title: My first Alexa Skill
date: 2017-05-11T12:00:00.000Z
path: /my-first-alexa-skill/
---

I've finally found the time to dig into what it takes to build an Alexa Skill.

My wife and I love using our Amazon Echo primarily for:

- Timer -- awesome when cooking
- Playing music from Spotify
- and listening to the Radio

Pretty much the only skill outside of that 'standard' functionality that we use is the [Bible Skill](https://www.amazon.com/Life-Church-Bible/dp/B017RXFNKY/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1494350175&sr=1-1&keywords=bible). It is a bit corny but it gets the job done in a crunch before starting small group / bible study.

Since I spent the last few years at Salesforce working on NLP and Machine Learning problems I felt could be interesting to dive into Alexa development. My initial idea for something to build was an easy way to make audio recordings and share them with your friends and family. Kind of like an audio blog or mini podcast. I was excited about this idea as it hit on a lot of things I am interested in.

Unfortunately, after digging in to the Alexa Skill interface, the above is not possible AFAIK. There is no way to record audio. Instead, Amazon handles this by automatically transcribing to text. That is nice but it also limits what is possible. Understandable if Amazon wants to 'own' that piece of the puzzle.

So I settled on building a skill that enables simple note sharing. Once I decided that I noticed that the Alexa Skill store does not have a Twitter skill that actually allows you to create tweets. As I dug into the Alexa Skill interface more, I understand perhaps why. It is not straightforward to accept open ended text input. Instead, Amazon wants you to declare a collection of Intents that it will recognize and hand off to you. Amazon trains on Intent recognition via Sample Utterances (small phrases) that you provide to it. For example, you may be building a Pizza Ordering Skill. In that case, you would have an `ORDER_PIZZA` Intent which could have Sample Utterances: `order a pizza`, `buy a pizza`, `I'm hungry and need a pizza`. If Amazon hears those phrases or similar ones then it tells the Alexa Skill developer that a user has made that that intent and it is up to the developer to decide what to do next.

If you want a user to pass data to you then you can use Slot Types. For example, you might have an Intent `CHOOSE_INGREDIENT`. This Intent could have Sample Utterances: `put <ingredient> on my pizza` or `I want a pizza with <ingredient> on it`. The `<ingredient>` there is passed through to the skill developer assuming Amazon recognizes it as an Ingredient. Amazon is smart enough to recognize lots of types of things e.g. Dates, Number, and Movies but Pizza Ingredients would need to be a Custom Slot Type that you would train Amazon on. This again would require providing Amazon with sample phrases for the Ingredient Slot Type e.g. `pepperoni`, `onion`, `anchovies`.

I think the reason Alexa requires this much training is so that it can do smart conversational things like handle the phrase `Alexa, ask Pizza Monster to give me a pizza with pepperoni, onion, and anchovies` just as well as it would handle `Alexa, ask Pizza Monster for a pizza`. In the first example it would call multiple Intent Handlers for the one phrase, where the other one would have more of a question / answer flow to get all the data necessary to complete the Pizza order.

OK, so back to the Twitter skill that can create tweets. I am calling it Tweet Bot. I want Alexa to handle the phrase `Alexa, tell Tweet Bot to tweet <tweet>`. The issue here is `<tweet>` is a Custom Slot Type that does not have any really expected data. Unlike `<ingredient>` which has more of a cohesive training set of data (subset of all foods), a `<tweet>` can be anything! After reading this [Alexa Developer Blog entry](https://developer.amazon.com/blogs/post/Tx3IHSFQSUF3RQP/why-a-custom-slot-is-the-literal-solution) I found the answer in 'Scenario 3'. You can accept open ended input via a Custom Slot Type if you train that Custom Slot Type on random phrases. So I built a small tool called [alexa-nonsense-generator](https://github.com/mericsson/alexa-nonsense-generator) to do just that and it worked!

Thanks for reading and check out [Alexa Tweet Bot](http://bit.ly/tweet-bot) to try out my very first Alexa Skill.
