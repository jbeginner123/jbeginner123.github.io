const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/Users/jeffvarghese/Desktop/Automation/Mozilla Firefox docs /web-projects/images/firefox-icon.jpeg") {
    myImage.setAttribute("src", "/Users/jeffvarghese/Desktop/Automation/Mozilla Firefox docs /web-projects/images/firefox2.jpeg");
  } else {
    myImage.setAttribute("src", "/Users/jeffvarghese/Desktop/Automation/Mozilla Firefox docs /web-projects/images/firefox-icon.jpeg");
  }
  let myButton = document.querySelector("button");
  let myHeading = document.querySelector("h1");
  function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
  
  
};


