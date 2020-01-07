# AlphaFlights
*Wink* *Wink* You know what it is, and I know what it is and that's all that really matters.

## Motivation
Well, since you're asking I'd really like to work at AS some day in the near future! I think my experience at a certain unnamed experts network means that I'm in a decent position to talk about what worked and what didn't while I was there.

## My Assumptions
I know this test was intentionally ambiguous. That being said what I gleaned from staring at the brief for well over 30 minutes *blushes* was that essentially the objective was for the app to allow the user to put together a flight plan which seeks to maximize in-air utilization for their single aircraft. Since I'm a gamer and game developer, so I broke this test down as a game of sorts. The ultimate object (to win the game) was to maximize in air utilization given the 25 possible flight rotations. I think I maxed out at 45% utilization but that doesn't mean you can't beat my score! There are rules to this game that make it a little bit tricky. 

**1. You can't make this aircraft teleport between airports. That limits things a bit.**
**2. Flights must be grounded for at least 20 minutes before they can take off again.** 
**3. You can't submit bad data by pushing the same rotation to the flight plan more than one time.**
**4. The next flight can't be scheduled to occur before the aircraft has landed at the destination.**

I typically break down programming tasks by prioritizing the most important elements first so that I can bring an MVP to the user as quickly as possible. I'm a big believer in the Agile methodology of continuous deployment. Get the thing built and get users testing it as soon as possible! I've never once programmed anything and had it just work without discovering some bug or edge case that I didn't think of but the users quickly pointed out. The emphasis is on **quickly**, since as it turns out, they want you to fix bugs as much you do! After all, it helps them be more productive.

To that end, I chose not to focus on the fancy **timeline utilization component**. Full disclosure though, I spent **4.5** hours on this test. I have a background in design and user experience, over **20 years** actually, so I knew I wanted this little app to at least look decent. I designed the logo in **Illustrator** and designed a **composition** in **Photoshop**. Yeah, I'm fancy like that! For a real project I'd have no trouble at all putting my thoughts into a **wireframe** if one was not provided. This was an essential part of my duties at your unnamed commpetitor. 

## What Would I Have Done With More Time?

**Timeline Utilization Component**
I think I know what to do, but doing the doin' takes time. 

**Responsive Design**
I would have made everything responsive so that it could work on mobile or desktop. The layout was setup using flexbox so I had a headstart there.

**Less CSS Preprocessor**
I would have added a less or sass preprocessor to the webpack config so that I could use more fancy css goodness.

**Filtering Flight Rotations**
Once a flight rotation was added to the plan I would have made it change color using React CSS inside of JSX or completely removed it from the array once it was in use.

**Filtering Flight Plan**
I would also have had a delete button on each Flight Plan item. I'd store the last removed item and its properties in an object then refer to it as a history so that it could be brought back. This would have required a bit more effort and time though since the 4 rules above would have needed to fully reset. Adding a flight back into the plan would have been a simple matter of Array Splicing so that it could maintain its original order in the array.

**Context API or Redux for State Management**
Yeah component drilling and bubbling up state with raw react seemed pretty inefficient. I'd definitely integrate some form of state management on a larger or real project.

## What I Hope You'll Notice 
I've been working in Angular 1.7 in legacy code for the past 2 years. I did use react back in 2016 and 2017 so although I was definitely rusty it all came back to me relatively quickly. Lifecycle management, component drilling, the virtual dom, state management without a state manager like Redux, MOBx, or GraphQL were all things I needed to refresh myself on.

Hopefully you'll notice cases where I'm using ES6+ features like **Destructuring** and the **...spreadOperator** to shortcut var creation from an array or simply clone the contents of an existing array respectively.

I'm using high order array functions such as **map** and **filter**. 

I structured the app so that methods live in the root of the app and are bubbled up from the component through props. It's best to keep Components as dumb as possible for reuse sake. 

I used Axios to fetch the data instead of the normal fetch method because it has a few extra features and can generally be done with a few less lines of code. I also added error checking in case the promise is never fullfilled. And since we're talking about it, I added an animated loader in there so you have something to look at while heroku warms up ;)!

I also edited the webpack config file to add in the ability to use SVGs. I also needed to add in the ability to hot load css changes to the webpack config file as well. I used the leanest version of create react app that I could find because I knew I'd need a refresher. A trial by fire, I thought is the best way to stay sharp.

I'm fullstack with Node.js, Mongo and SQL as to my backend and database knowledge.

## How to Run It
Just NPM install and then NPM start. You'll find the app here http://localhost:8080/ if your browser doesn't open up and take you there automagically.

Thanks in advance for your time and consideration! I do hope we'll get to meet in person some time soon.











