const overrides = {
  styleOverrides: (theme) => `
    /* Include font files here. */
    /*  Don't forget to uncomment the @font-face below ! ! !*/


    /* BENGUIAT */
    @font-face {
      font-family: 'Benguiat Std';
      font-style: book;
      font-weight: 350;
      src: local(''), url('/fonts/Benguiat/BenguiatStd-Book.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }
    @font-face {
      font-family: 'Benguiat Std';
      font-style: medium;
      font-weight: 500;
      src: local(''), url('/fonts/Benguiat/BenguiatStd-Medium.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }
    @font-face {
      font-family: 'Benguiat Std';
      font-style: bold;
      font-weight: 700;
      src: local(''), url('/fonts/Benguiat/BenguiatStd-Bold.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }

   /* ROBOTO */

    /* roboto-regular - latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: local(''), url('/fonts/Roboto/Roboto-Regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }

    /* roboto-500 */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: local(''), url('/fonts/Roboto/Roboto-Medium.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }

    /* roboto-700 */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: local(''), url('/fonts/Roboto/Roboto-Bold.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }

      /* CRIMSON TEXT */

    /* crimson-text-regular */
    @font-face {
      font-family: 'Crimson Text';
      font-style: normal;
      font-weight: 400;
      src: local(''), url('/fonts/CrimsonText/CrimsonText-Regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }

    /* crimson-text-600 */
    @font-face {
      font-family: 'Crimson Text';
      font-style: normal;
      font-weight: 600;
      src: local(''), url('/fonts/CrimsonText/CrimsonText-SemiBold.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }

    /* crimson-text-italic */
    @font-face {
      font-family: 'Crimson Text';
      font-style: italic;
      font-weight: 400;
      src: local(''), url('/fonts/CrimsonText/CrimsonText-Italic.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }

    /* crimson-text-600italic */
    @font-face {
      font-family: 'Crimson Text';
      font-style: italic;
      font-weight: 600;
      src: local(''), url('/fonts/CrimsonText/CrimsonText-SemiBoldItalic.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }

    /* crimson-text-700 */
    @font-face {
      font-family: 'Crimson Text';
      font-style: normal;
      font-weight: 700;
      src: local(''), url('/fonts/CrimsonText/CrimsonText-Bold.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }

    /* crimson-text-700italic */
    @font-face {
      font-family: 'Crimson Text';
      font-style: italic;
      font-weight: 700;
      src: local(''), url('/fonts/CrimsonText/CrimsonText-BoldItalic.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */

    }




    /* Define :root css variables. */
    :root {
      --cia-theme-spacing: ${theme.spacing(1)};
      --cia-section-spacing: ${theme.spacing(4)};
      --cia-container-spacing: ${theme.spacing(2)};
      --cia-toolbar-dense-min-height: 48px;
      --cia-toolbar-min-height: 56px;
      --cia-toolbar-spacing: ${theme.spacing(2)};
      ${theme.breakpoints.up('sm')} {
        --cia-section-spacing: ${theme.spacing(6)};
        --cia-container-spacing: ${theme.spacing(4)};
      }
    }
    /* Opinionated defaults taken from sanitize.css */
    /* https://github.com/csstools/sanitize.css */
    iframe, img, input, select, textarea {
      height: auto;
      max-width: 100%;
    }
    ol ol, ol ul, ul ol, ul ul {
      margin: 0;
    }
    nav ol, nav ul {
      list-style: none;
      padding: 0;
    }
    svg:not([fill]) {
      fill: currentColor;
    }
    /* Custom global css */
    [type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
      appearance: none;
    }
    [id] {
      scroll-margin-top: var(--cia-header-height, 0px);
    }
  `,
}

export default overrides
