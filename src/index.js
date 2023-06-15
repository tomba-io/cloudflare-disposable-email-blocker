function init() {
  if (!window.addEventListener) return // Check for IE9+

  let options = INSTALL_OPTIONS
  let element

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.
  function updateElement() {
    element = INSTALL.createElement(options.location, element)

    // create the script.
    const script = document.createElement("script")
    script.src =
      "https://unpkg.com/disposable-email-blocker/disposable-email-blocker.min.js"
    document.getElementsByTagName("head")[0].append(script)

    // add options
    const defaults = {
      disposable: {
        message: options.disposable_message,
      },
      webmail: {
        message: options.disposable_message,
        block: options.webmail_enabled,
      },
    }
    // eslint-disable-next-line no-new, no-undef
    new Disposable.Blocker(defaults)
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    },
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  } else {
    updateElement()
  }
}

init()
