# init
init class for resize events

Hey All !

i've created this helper for mobile purposes, but you can use it for regular resize events too.
now you can control easily about the resize events.
(btw - its less than 3 kb ! so go ahead, and use it)

Documentation :

create new Init Object by adding the following code :

var myInit = new Init(
{
initPort: 'javascript code or function name',
initLand:'javascript code or function name',
}
);

object properties:

mode = current window mode (land / port)

currentMedia = current media query you are on (small, medium, large = default size are : {380,960,1280})

object methods:

register : receives 3 arguments - function name, mediaQuery and orientation mode (optional)
setSizes : receives 3 arguments - max width for small, max width for medium, max width for large

for more info / question, please email me at : regev7@gmail.com
