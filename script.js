const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream and, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log("Something went wrong🙀", err);
  }
}

button.addEventListener("click", async () => {
  //Disable Button
  button.disabled = true;
  //Start picture in picture
  await videoElement.requestPictureInPicture();
  //Reset Button
  button.disabled = false;
});

//On load
selectMediaStream();
