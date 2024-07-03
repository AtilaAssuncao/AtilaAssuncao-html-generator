# html-generator
dynamically generates html from a list of js objects, creating and inserting elements in the DOM

<br/>

### Configuration
Copy the htmlGenerator.js file to your project and insert the tag containing the file path <br />
``` <script src = "htmlGenerator.js"> </script> ```

<br/>

### Use of the generator
The HtmlGenerato will be instantiated and in it it is possible to pass two methods, the object with the list of elements ``` listObjectDOM ``` to compose the DOM and the parent element ```parentElement``` that contains the element to be inserted. 

``` new HtmlGenerator (listObjectDOM, parentElement) ```
<br/>
Example:
```
new HtmlGenerator ([
                      {   
                          tag: "div",
                          val: "Value",
                          att: {class: "class-name"},
                          events: { 'click': function(){console.log('clicked')}, 'mouseover': function(){console.log('mouseover')}},
                          childs: [
                              {
                                  tag: "div",
                                  att: {class: "class-name-2.1", id: "id-2.1"},
                                  val: "Value 2.1",
                                  childs: [
                                      {tag: "div", att: {class: "class-name-2-1-1"}, val: "Value 2.1.1"}
                                  ]
                              },
                          ]
                       },
                   ], document.body)
```
###### Note: you can only pass the ``` listObjectDOM ``` that the generator will use the body as the parent element.

You can also assign this instance to a variable and insert values ​​and attributes with the methods available on that object.

you can insert attributes to the class using the ```setAttributes( tag, attributes )```
###### Note: ```attributes``` is an object with the values ```{class: 'class-name', id: 'id-name', ...}```
you can enter values for an element using ``` setValue (tag, value) ```
###### Note: ``` value ``` is text that the element will contain

<br/>

### List of objects
example:
```
[
  {
      tag: "tagName",
      val: "value",
      att: {class: "className", id:"idName", style:"", ... },
      childs: [
          {
              tag: "tagName",
              att: {class: "className", id: "idName"},
              val: "value",
              childs: [
                  {tag: "tagName", att: {class: "className"}, val: "value"}
              ]
          },
      ]
  },
  ...
]
```
