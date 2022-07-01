# next-sanity-starter


##  Workflow
Checkout a new branch for the feature with git checkout -b feature/$issueNumber-$branchName
*Example: git checkout -b feature/4-workflow*

## Add fonts
1. Add font files to _/public/fonts_ (recomended font format is .woff2)
  Convert fonts to woff2 with https://cloudconvert.com/ttf-to-woff2 or similar tool. 
2. Add preload links for each font file in <Head>, _document.js
3. Declare font families with @font-face in _/src/components/internal/MuiCssBaseline.js_  (Don't forget to uncomment the font-face)
4. Assign the font family in _src/components/styles/createTypography.js_

