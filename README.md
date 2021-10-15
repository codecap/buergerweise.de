# Football

Welcome to Football theme! In this directory, you'll find the files you need to be able to use your theme. All layouts in `_layouts`, includes in `_includes`, sass files in `_sass` and any other assets in `assets`.

## Structure

### \_data

All content is stored in this folder and divided into separate yml files.

### \_includes

Each duplicated block of the website is placed into special files and stored in this folder:

      dateBlock.html
      invitation.html
      logoBlock.html
      mapBlock.html
      heder.html
      footer.html

### \_layouts

The main basic file is stored here.

    default.html

### \_sass

In this folder scss files for all parts of the website. The main file is:

    style.scss

### assets

in this folder are:

    js/
    images/

## Configuration

Fill up all meta configuration in `_config.yml`:

```yaml
title: The title of the website
email: Your email here
description: meta description for SEO
```

Use gulp if you need in `gulpfile.js`: `All gulp tasks are in this file`

All packages are in `package.json`:

    To set up all packages just run the command in your local console: npm i

To set up a google map you need to take a key from the Google console. Then put it in the tag <script> as it is shown below. This tag has to be located on the bottom of `_layouts/default.html` :

        <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=API_KEY=initMap&libraries=&v=weekly">
        </script>

To set up the coordinates of your place take them from google map and then put them in:

        assets/js/main.js -> line 15 -> const uluru = { lat: 39.7219538, lng: -91.5098444 };

## Contributing

Pull requests are welcome on GitHub at https://github.com/codecap/buergerwiese.de.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
