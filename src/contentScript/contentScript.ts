// The files are ts and not tsx because we won't have much react code inside these files.
// If needed we can add react code and convert the files to tsx


chrome.runtime.sendMessage("Message from contentScript", (response) => {
    console.log("Message received:" + response)
})