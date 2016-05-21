# Init
<i>init class for resize events</i>

<h2>Hey All !</h2>

i've created this helper for mobile purposes, but you can use it for regular resize events too.
now you can control easily about the resize events.
(btw - its less than 3 kb ! so go ahead, and use it)

<h1><u>Documentation</u>:<h1>
      <h3>create new Init Object by adding the following code :</h3>
      var myInit = new Init(<br/>
        {<br/>
        initPort: 'javascript code or function name',<br/>
        initLand:'javascript code or function name',<br/>
        }<br/>
      );
  <h3>object properties:<br/></h3>
  <ul>
    <li>mode = current window mode (land / port)</li>
    <li>currentMedia = current media query you are on (small, medium, large = default size are : {380,960,1280})</li>
  </ul>
  <h3>object methods:<br/></h3>
  <ul>
    <li>register : receives 3 arguments - function name, mediaQuery and orientation mode (optional)</li>
    <li>setSizes : receives 3 arguments - max width for small, max width for medium, max width for large</li>
  </ul>

for more info / question, please email me at : regev7@gmail.com
