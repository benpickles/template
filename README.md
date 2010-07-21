# Template

Templating the jQuery way.

**Beware: name and functionality are likely to change!**

## The what

Treat templates like standard jQuery objects.

## The why

I'll get back to you.

## The how

    // Use an existing HTML blank.
    <div id="feature"><h3></h3><p></p></div>

    // Declare a template (with a custom initializer).
    Feature = Template($("#feature"), function(title, text) {
      this.find("h3").text(title)
      this.find("p").text(text)
    })

    // Now simply instantiate your Feature template object and treat it like
    // any other jQuery object.
    $("body").append(
      new Feature("Amazing", "Sounds cool!")
    )

    // And you end up with this HTML.
    <body>
      <div>
        <h3>Amazing</h3>
        <p>Sounds cool!</p>
      </div>
    </body

Or a simpler version just give starter tag and once again treat it like a jQuery object.

    Word = Template("<span>")

    new Word().html("<blink>I like blinkies</blink>")
