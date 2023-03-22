# Endsong to StreamingHistory Converter

This is a simple website that you can run locally that converts a StreamingHistory.json to endsong.json to use in [scrobblify](https://savas.ca/scrobblify/). Be aware that scrobblify has bugs and may or may not scrobble your whole file to last.fm, even though it will recognise it entirely.

## Clone the project

Use `git clone https://github.com/kostiskap1999/endsong-to-StreamingHistory-converter.git` from your terminal to clone the project in a certain folder.

## Run the project

After changing the directory to the folder you cloned the project, use `npm start` to run it. Make sure you have npm installed. After a while, [http://localhost:3000](http://localhost:3000) will open, or you can open it manually to view the website in your browser.

## Upload an endsong.json

Upload an endsong.json as the button prompts.

## Convert to StreamingHistory.json

After clicking on 'Convert' the algorithm will generate an amount of StreamingHistory.json files which you can then download from the respective buttons that will appear. The reason it generates many files instead of one is because of a restriction in [last.fm](https://www.last.fm/) that only allows a user to scrobble as many as 2800 songs daily. Each StreamingHistory.json file has 2800 songs and is meant to be scrobbled at different days.
