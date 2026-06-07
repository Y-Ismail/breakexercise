# Class 1 The 2026 Web Ecosysytem

## Theory 
1. When a web page loads, the browser builds the page's DOM tree. In this way, we can change all HTML properties on the page remove existing HTML elements and attributes, add new HTML elements and attributes, or change all CSS styles on the page with scripting languages such as JavaScript.
A DOM tree is a type of tree whose nodes represent the content of HTML and XML document

```
              DOM Tree
html
  |
  |_head
  |  |  |_title
     |  
  |  |  |_meta
  |  |
  |_body
        |_header
               |_nav
         |     
               |_h1
         |
        |_main
               |_article
         |     
         |     |_aside

        |_footer
```

2. QUIC(Quick UDP Internet Connections) used in HTTP/3 is a transport layer protocol that uses UDP as transport mechanism for moving data between server and client. QUIC solve the problem of head of line blocking so that if a single packet is lost in transmission it does not stall the entire connection but only the stream with missing packet is affected. It also integrates Transport Layer Security (TLS 1.3) into its transport handshake. This matters for users because it reduces overall page load times makeing access to information faster, brings about faster connection establishments and makes for resilience to network disruptions.

3. The website does not use semantic HTML because the navigations on it are not keyoard focusable and screen reader reads all the text on the page as one sentence without identifying headers or links.

## Product Thinking
1. Semantic HTML provides a clear structure for content which helps search engines to understand the role each part on your webpage plays.
- article - shows that this content can be independent and can be reused
- header - represents introductory content, typically a group of introductory or navigational aids.
- main - this represents where the core contant of the blog resides
- aside - useful to represent sidebars so that search bots do not include them in keyword relevance of users search

2. Edge Computing benefit for multiplayer game
* Ultra-Low Latency: This would eliminate the delay experienced by users while playing
* Reduced bandwidth: This would cut down on the amount of data that needs to be transmitted, lowering cost for users.

## Enineering Best Practice
1. I completely disagree with the "divs everywhere" approach. While it might visually render fine on a screen, relying solely on unsemantic elements fundamentally breaks the modern web ecosystem. Here is why you should abandon the "div soup" mentality:
- Accessibility (a11y): Screen readers and assistive technologies rely on semantic HTML (like ```<nav>, <article>, or <button>```) to interpret a page's layout and functionality. Using divs turns your website into a flat, confusing stream of text, making it incredibly difficult for users with visual impairments to navigate.
- SEO: Search engine crawlers use semantic tags to understand the structure and context of your content. When you replace meaningful tags with generic divs, you obscure the hierarchy, which can negatively impact your search engine rankings.
- Code Maintainability: Writing CSS for a Document Object Model (DOM) packed with divs requires heavily relying on complex, nested classes. Semantic elements allow for cleaner, more predictable styling and make future updates significantly easier.
- Developer Collaboration: Code is read much more often than it is written. Semantic HTML is self-documenting; it tells other engineers exactly what a section does at a glance. Using divs forces your team to decipher the purpose of every single element from scratch, slowing down collaboration and onboarding. <br><br>
Embracing semantic HTML isn't just a stylistic preference; it is a fundamental best practice for building scalable, inclusive, and professional web applications.

# Class 2
1. The em tag is used for emphasized text, a screen reader would read the text in it with emphasis whie the i tag is used to defined a part of a text in an alternate voice or mood such as a technical term or a word from another language.
Examples
```
<p>The <i>RMS Titanic</i>, a luxury steamship, sank on April 15, 1912 after striking an iceberg.</p>
```
```
    <p>You <em>have</em> to hurry up!</p>
```
2. Elements with screen reader behavior
* a(anchor) element with href 
* button element
* h1 heading element

3. A good scenario to use aria-label would be when you have a button which contains an svg with a close icon in this case the button does not have any visible label so it would be a good practice to use aria label. A scenario where you should fix your HTML would be where you have aria-label on a form input in that case it would be better to use a label element to label that input.
















# Class 3
# Class 4
# Class 5
# Class 6
# Class 7
# Class 8
# Class 9
# Class 10 Memory & Variables
1. let and const make use of block scope
# Class 11
# Class 12
# Class 13
1. An array would be chosen over an object when there is data of similar type that needs to looped through, also when data needs to be accessed in a particular order.
An object would be chosen over an array when there is need to store the details or properties about a particular entity e.g a user profile, product details.


# Class 14
# Class 15
# Class 16
# Class 17
1. Async/ Await is a Javascript feature that allows you to write asynchronous code in sequential manner as done in synchronous code.
It makes asynchronous code easir to read by eliminating the need for deeply nested callbacks and long method chains of then()

2. try/catch would be used with async/await in order to handle errors of requests made. If it is not used and there is an error, users will not get to know if an error occurs or it might even bring the webpage to not work properly

## Product thinking
1. 
# Class 18

