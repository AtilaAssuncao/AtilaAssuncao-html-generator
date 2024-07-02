(function ( global, factory ) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      ( global = global || self, global.HtmlGenerator = factory());
}( this, function () {

  function _generateHtml( listObjectDOM, parentElement ) {
    parentElement = parentElement || document.body
    if (typeof listObjectDOM === 'object' ? Array.isArray(listObjectDOM) : null) {
      listObjectDOM.forEach(e => {
        let tag = document.createElement(e.tag)
        _setAtt(tag, e.att)
        if (e.val !== undefined) _setValue(tag, e.val)
        if (e.childs !== undefined) new HtmlGenerator(e.childs, tag)
        parentElement.appendChild(tag)
      });
    }
  }

  function _setAtt( tag, attributes ) {
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        tag.setAttribute(key, attributes[key])
      }
    }
  }

  function _setValue( tag, value ) {
    tag.textContent = value
  }


  function _initFunctions( hg ) {
    hg.setAttributes = function( tag, attributes ) { _setAtt( tag, attributes ) }
    hg.setValue = function( tag, value ) { _setValue( tag, value ) } 
  }

  function init( HtmlGenerator ) {
    HtmlGenerator.prototype.generate = function ( listObjectDOM, parentElement ) {
      let hg = this
      _generateHtml( listObjectDOM, parentElement )
      _initFunctions(hg)
    }
  }

  init(HtmlGenerator)

  function HtmlGenerator( listObjectDOM, parentElement = null ) {
    if (this instanceof HtmlGenerator && listObjectDOM != null){
      this.generate( listObjectDOM, parentElement )
    }
  }

  return HtmlGenerator

}))
