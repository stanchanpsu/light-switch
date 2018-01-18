# light-switch

Amazon Lambda project to control Wink smart lights with Amazon Dash IoT button


## How it works

Originally, the idea was to use the [Wink Api](https://winkapiv2.docs.apiary.io/#) to check for the state of my smart lights and map the button presses of the Dash IoT button to turn on/off one or more lights accordingly. However, the Wink Api does not work and is badly documented so a workaround had to be used.

This lambda sends webhook `POST` to IFTTT which then has 3 applets that either turn on, turn off, or dim my bedroom smart light. The tradeoffs of this workaround are:

Pros:

* The code is very simple
* I dont need to worry about my Wink credentials at all

Cons:

* The event is very delayed from the button press because of the IFTTT integration
* There is decreased functionality because I can't check for the state of the light before applying an event to it.


## Deployment

Prereq:

* Install `nodejs`
* Install `aws-cli`

Deploy:

`./deploy.sh`