# Progressive Web Apps

[Work](./) | [Home](../..)

## An introduction

keywords: _greenfield, pwa, Gordian knot, apps, ios, android, app stores_

### Context

This is an imagined conversation between **me** and **Bob**, **Me** being a front-end software engineer with 20 years of real world dev experience and a healthy scepticism that the kind of business person I'm talking to really has the ability, authority, acency, skill or will to actually implement what I'm talking about, even if they understand it enough to see why they should do it.

Bob., for imgination's sake is my boss's boss. He's an owner & technical decision maker of a smallish company of 15 people who already operate a tech business which actually makes some money. He's quite smug about that.

The business already has a desktop site, an android app and an iphone app. None of which really get used :) There are 3 separate code bases for each of those applications, requiring a team of at _least_ 3 developers to maintain. My role here is the bottom of the pile. I'm a contractor whose ideas about how the entire business should be turned on it's head to make it better are correctly viewed with as much scepticism as I have of them.

Even if this conversation were real, there is nowhere is can really go. No company is going to take the risk to rock the boat that they've spent years patching together. Fair enough. Would you?

### The conversation

**Me:** Hey bob, are you ready for our meeting?

**Bob:** Just give me 10 minutes. You see, I'm very busy and important and it makes me feel good to make you twiddle your thumbs and wait for a bit

**Me:** No wuckers. I'll be over here on my laptop. Ah! you're ready now? great. Let's start. I wanted to talk to you because I want to float an idea to you if you're OK with that?

**Bob:** Great! We have a very open culture here and encourage conversation, blue sky thinking, agile development and all the other modern keyword buzz shit we read about on LinkedIn.

**Me:** Whatevs. So here's the thing, Bob. The team I'm working with currently has someone looking after your website, another guy whose only job is the iPhone app, and that annoying dude in India who did the android app as a freelance job 2 years ago.

Oh yeh, and theres my boss, Head Of Development is who is stupily busy every minute of every day which is why you hired an expensive contractor like me to help out. Does that sound right?

**Bob:** Well, yeh. I wouldn't have put it quite like that, Chris, but that's broadly correct.

**Me:** Great. So as the guy who both pays the development costs and is responsible for delivering the product to the other stakeholders, do you think that your team's productivity could be improved?

**Bob:** Yes of course

**Me:** I think so too. The team has become blocked and its now kicking a can down the street. No one is having much fun. As it happens one of the reasons for that is kind of a [Gordian knot](https://www.britannica.com/topic/Gordian-knot). Once that knot is cut, it would unblock the team's productivity and allow your product to start growing again too

**Bob:** Sounds great, Chris. But it also sounds like a sales pitch and I've heard it all before, trust me. What is this one issue that rules them all?

**Me:** It is the fact that you have 3 different codebases, maintaining 3 different pieces of software. That is hard to do and leads to the product having different features on different platforms. Customer support is 3 times harder. Project Management is more complex and developmnet costs are 3x higher because you need a wide range of skills to do what you're doing.

**Bob:** Well, yes, obviously. But that's because in order for our apps to be able to run on phones with the features we need we need a native app which is distributed and updated via the App Stores so that they can be installed by our customers. You can't avoid having 3 separate apps.

**Me:** Not true. Was true back when this model of doing things evolved, but not true now. Now there are [Progressive Web Apps (PWA)](https://developers.google.com/web/progressive-web-apps).

**Bob:** Never heard of it

**Me:** Yeh, it's still a bit new and techie. Actually, not all that new. The technology was introduced by Google 5 years ago and is pretty mature and robust now. Anyway, you want to hear the top level bullet points, right?

- A PWA does not need to be installed on a phone like a traditional app which is a compiled bunch of code regulated by the App Stores. A PWA is a very small javascript frontend which runs in the native browser of any device. Installing a PWA on a phone is, in reality, just creating a bookmark on the home scren of a phone

- The word Progressive means that it is the app's responsibility to adjust itself to the capabilities of the device it is running on, instead of the user's responsibility to have the latest phone to use the thing. This means that if someone's iPhone 4 running iOS x.x.x can't handle a particular feature, then that feature simply isn't shown to them. We give them progressively more as their capability increases.

- Techwise it's simple. PWA is not a language or anything else difficult. It's just a set of guidelines & specifications which any url can meet. If enough boxes are ticked (https, service worker, icons etc), hey presto you have a PWA.

- PWA is a single, small, responsive & consistant JavaScript client-side app which can be updated and deployed to all devices at once. Written in React by a small team, it can be done very quickly, is easy to maintain and implementing new tech as it evolves is easier too

- One app to rule them all streamlines every part of the process from planning through project management to implementation, testing, QA and support

- It's a technology made by Google, with all the quality that entails. Google's own blurb on the topic is

> Progressive Web Apps are user experiences that have the reach of the web, and are: Reliable - Load instantly and never show the downasaur, even in uncertain network conditions. Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling. Engaging - Feel like a natural app on the device, with an immersive user experience. This new level of quality allows Progressive Web Apps to earn a place on the user's home screen.

**Bob:** So all those features like uploading an image from the camera, PWA's can do that?

**Me:** Yes. With some caveats.

**Bob:** What's the catch?

**Me:** Well, even 5 yearsold it is still a comparatively new technology, and that does mean some friction.

For instance there are 2 App Stores, Google & Apple. Google invented PWA and are happy to ditch the Playstore. Apple don't like to be pushed around by Google, and so have purposly withheld certain PWA features from their iphones which make it seem like a poor man's option.

Features such as the ability to send push notifications when the app is running in the background. These features are considered vital (for some reason). The PWA reply to that is ... if your device doesn't support it, you don't even know the feature is there. Simples

**Bob:** Yes, we do have push notifications on both android and iphone and a big, ugly backend to handle that too. It's a vital feature that our customers simply can't live without. That would be a dealbreaker.

**Me:** Fucktard. Oh, I'm sorry, did I say that out loud? Carry on, Bob.... you were saying?

**Bob:** Why isn't everyone doing this?

**Me:** They are. Some pretty massive businesses have taken this approach. A few examples?

- Twitter
- Pinterest
- Financial Times
- UBER

**Bob:** Right. So let me get it straight, you're saying we should drop everything right now, throw away everything we ever did for the last 10 years... and do it your way?

**Me:** Correct.

**Bob:** Who is going to build that single, simple React frontend, how long will it take and how much will it cost me?

**Me:** I could do it for you at \$800/day if you like. With that comes a guarantee that I will never actually allow the project to be finished, because why would I?

I'll just tinker about with fun stuff and feed you peanuts getting paid silly money. When I get bored I'll leave.

What might work out better is for you to pay me that same money to build a team of people who will be able to carry on if and when I do leave. If you have any false ideas about the likelyhood of me not doing that... please take a look at my public work history on [linkedin](https://www.linkedin.com/in/listingslab/)

**Bob:** Good point. OK, Chris, what's in it for you?

**Me:** Come to think of it, Bob, not much, huh? I mean... I could work my ass off for 6 months and deliver this project for you, pocket my 60K and look for another similar project I guess.

If I had a stake in the outcome which allowed me to continue that stake and still move on to new greenfield projects.... well, that could work

**Bob:** Sounds very complicated and non-standard. Far easier to stay with how things are. Let me think about it and talk to my collegues and

**Me:** No wuckers. I'll get my coat.
