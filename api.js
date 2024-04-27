const backendUrl = "http://localhost:3000/users";

async function GetUsers() {
  await fetch(backendUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
      if (GameInstance) {
        const wrapperForUnityParse = { Items: data };
        console.log(wrapperForUnityParse)
        // Use SendMessage to call a Unity method of the Unity scripting API from JavaScript code.
        GameInstance.SendMessage('FinalGameManager', 'ShowUsersList', JSON.stringify(wrapperForUnityParse));
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

async function SaveUsers(str, score) {
  console.log("SAVE USER", str, score);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ userName: str, score })
  };

  await fetch(backendUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
