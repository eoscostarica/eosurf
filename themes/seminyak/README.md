# Seminyak

Really, really, really ridiculously good looking splash page for Hugo.

## Installation

- Copy theme to your site's themes folder.
- Set `theme = "seminyak"` in your config.
- Make it read good and do other things good too.

## Features

- Customizable full-screen background image
- Choose from 1 of 10 [predefined color palettes](https://tailwindcss.com/docs/colors/#default-color-palette)
- [Create your own](https://tailwindcss.com/docs/colors#customizing) color palette with Tailwind
- Add custom Web Fonts from Google
- Easily add your own scripts and favicon
- Optional image credits display
- Google Analytics using Hugo's internal template
- Open Graph using Hugo's internal template
- RSS using Hugo's internal template (just in case)
- Add privacy with Referrer Policy
- Webmaster Verification ready

## Customization

### Customizing the Web Font

To update the Web Font update `google_fonts` in the config file and adjust settings in `tailwind-custom.js` then run `npm run build` to generate a new stylesheet.

### Modify the Color Palette

To adjust the color palette adjust the color setting for `color_palette` in the site config. To create your own color palette modify `tailwind-custom.js` and run `npm run build` from the theme directory. See [Coolors](https://coolors.co/) for color schemes and the [Tailwind docs](https://tailwindcss.com/docs/colors#customizing) for how to customize.

### Configuration

Just the basics. Add to your site configuration.

```
googleAnalytics = "UA-123-45" # Optional, enable Google Analytics

[params]
  color_palette = "yellow" # Required, adjusts color palette
  theme_color = "#fffdc3" # Optional, theme-color meta tag
  referrer_policy = "same-origin" # Optional, referrer policy meta tag
  background_image_url = "https://source.unsplash.com/ZJqO6ddBpic/" # Optional, background image
  google_fonts = "Oswald|Raleway" # Passed to Google for Web Font

[params.webmaster]
  google = "" # Optional, Google verification code
  bing = "" # Optional, Bing verification code
  alexa = "" # Optional, Alexa verification code
  yandex = "" # Optional, Yandex verification code
```

See the [Hugo docs](https://gohugo.io/getting-started/configuration/) for additional configuration options.

### Favicon

To add a favicon add a `favicon.html` file in your site's `partials` folder and drop in a `link` tag with your favicon.

### Scripts

To add some scripts do one or both of the following depending on the type of script you wish to add. For asynchronous scripts create a `scripts-async.html` file in your site's `partials` folder and add async scripts there. For blocking scripts create a `scripts-blocking.html` file in your site's `partials` folder and add any blocking scripts there.

## License

Copyright 2018 Josh Habdas <jhabas@protonmail.com> (https://habd.as)
<br>This work is free. You can redistribute it and/or modify it under the
<br>terms of the Do What The Fuck You Want To Public License, Version 2,
<br>as published by Sam Hocevar. See the COPYING file for more details.
