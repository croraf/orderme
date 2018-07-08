# About "hangman" application

Classical hangman game.

Deployed at: http://hangmancroraf.000webhostapp.com/#/

# How to use

Required: node v8.9.1 or greater, npm v5.5.1 or greater.

    1. From 'frontend' folder run "npm install".
    
    2. To run in development mode by use "npm run dev" from 'frontend' folder. 
    
    3. App is available at 'localhost:9002'.


# TODO (issues)

    1. Hangman drawing a bit out of scale.
    2. Crossbrowser issues. Zoom issue in Firefox. Used scale instead zoom css property but doesn't work exactly as expected. Compare to Opera, Safari and Chrome in which works OK. In IE does not work. Edge has not been tested.
    3. It can (very rarely) happen that the word to guess contains non-standard-English letter (for example with accent). As input is constrained to English standard alphabet it is impossible to guess such words completly.
    4. ADDED! Add sound for guess/miss letter and win/lose game.
    5. ADDED! Add unhiding of target text even when player lose?  