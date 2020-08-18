---
path: "/what-is-webapp"
title: "What is a web app"
order: "1B"
section: "Welcome"
description: "Anatomy of a web app"
---

What defines a web app?
If you look at the html source for any web app (or web page), these are the three basic components you will see:

1. The HTML page
2. CSS code for styling
3. JavaScript code for adding interactivity

that's it! that's all there is to any web application - from the most basic static website (ok, the most basic can do without CSS and/or JavaScript), to the most complex web application such as the web versions of Facebook, Instagram, Whatsapp etc.

#### Lets look at how the three components come together

1. **First came a plain HTML page** - notice the `<head> </head>` tag block with nothing inside? don't worry about it yet. As of now, it is not even necessary

```html
<html>
  <head> </head>
  <body>
    howdy there
  </body>
</html>
```

Click <a href="https://codepen.io/rushilshakya/pen/poybZeM" target="_blank">here</a> to see the browser output of the code. You can also play around with the code on the top half of the screen to see how the browser output will be affected on the bottom half.

---

2. **Adding CSS to the plain HTML page** - now comes the `style` code between the `head` tags

```html
<html>
  <head>
    <style>
      body {
        background-color: powderblue;
      }
    </style>
  </head>
  <body>
    howdy there
  </body>
</html>
```

Click <a href="https://codepen.io/rushilshakya/pen/WNwxKaV" target="_blank">here</a> to see the browser output of the code. You can change the `background-color` value to any of <a href="https://www.w3schools.com/cssref/css_colors.asp" target="_blank">these</a> names to see the changes.

---

3. **Adding JavaScript to the HTML page** - the `JavaScript` portion of the code is between the `script` tags

```html
<html>
  <head>
    <style>
      body {
        background-color: skyblue;
      }
    </style>
  </head>
  <body>
    howdy there
  </body>
  <script>
    var htmlBody = document.getElementsByTagName("BODY")[0];
    htmlBody.addEventListener("mouseover", function() {
      htmlBody.style.backgroundColor = "gray";
    });
    htmlBody.addEventListener("mouseout", function() {
      htmlBody.style.backgroundColor = "skyblue";
    });
  </script>
</html>
```

Click <a href="https://codepen.io/rushilshakya/pen/zYqBmVY" target="_blank">here</a> to see the browser output of the code. If you mouseover the text, the background color will change, which is triggered by the JavaScript code.

---

#### How is the CSS and JavaScript code compartmentalized

In most modern web applications, the CSS and the JavaScript code is not embedded into the code as how we have shown above. To better organize all our codes and for reusing the same code, we separate the CSS and the JavaScript into their own files, then refer to them from the HTML file.

Say the CSS is saved in its own file called 'myStyles.css' (or _whatever_.css)

```css
body {
  background-color: skyblue;
}
```

and the JavaScript is in its own file called 'myScripts.js' (or _whatever_.js)

```js
var htmlBody = document.getElementsByTagName("BODY")[0];
htmlBody.addEventListener("mouseover", function() {
  htmlBody.style.backgroundColor = "gray";
});
htmlBody.addEventListener("mouseout", function() {
  htmlBody.style.backgroundColor = "skyblue";
});
```

then our HTML file can be shortened to the following, provided that the CSS and JavaScript files are in the same folder (else, the path will be relative to where the files are)

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="myStyles.css" />
  </head>
  <body>
    howdy there
  </body>
  <script src="myScripts.js"></script>
</html>
```

---

#### How is JavaScript different from development phase to what you see in a website

In the examples above, you have seen how the HTML, CSS, and JavaScript files are organized in a typical web application. In most modern web application development setups the HTML and CSS portions remain relatively similar to this. The major different, and most of the coding is for the JavaScript portion.

The JavaScript portion is generally broken down into modules to facilitate better organization and reusability.

So, from the previous example, the `mouseover` and `mouseout` logic can be extracted out as a function in a separate file called, say, `mouseFunctions.js`

```js
export function changeColorOnMouseMove(htmlElement) {
  htmlElement.addEventListener("mouseover", function() {
    htmlElement.style.backgroundColor = "gray";
  });
  htmlElement.addEventListener("mouseout", function() {
    htmlElement.style.backgroundColor = "skyblue";
  });
}
```

now, our `myScripts.js` file will look like

```js
import { changeColorOnMouseMove } from "mouseFunctions";

var htmlBody = document.getElementsByTagName("BODY")[0];
changeColorOnMouseMove(htmlBody);
```

Then when we are ready to ship all our code to the internet, a development build tool such as Webpack, Parcel, Browserify etc. can be used to compile all the JavaScripts and put it together in one file (in most cases) that is referred to from the HTML file, as [above](#how-is-the-css-and-javascript-code-compartmentalized).
