var Template = function(seed, initializer, methods) {
  initializer = initializer || function(model) {
    this.model = model
  }

  // Create a template constructor.
  var template = function() {
    // Clone the seed object and make sure we don't get multiple DOM ids.
    var clone = jQuery(seed).clone(false).removeAttr("id")

    // Decorate this with the seed's jQuery properties.
    jQuery.extend(this, clone)

    // Call initializer with this instance's context.
    if (jQuery.isFunction(initializer)) {
      initializer.apply(this, arguments)
    }
  }

  // Add custom template methods to the class.
  jQuery.extend(template.prototype, methods)

  return template
}
