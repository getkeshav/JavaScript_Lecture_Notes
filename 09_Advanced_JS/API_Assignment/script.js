  const inputElement = document.querySelector("input");

  inputElement.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      e.preventDefault();

      const userName = e.target.value;

      console.log(userName);

      const gitHubApiUrl = `https://api.github.com/users/${userName}`;

      const xhr = new XMLHttpRequest();

      xhr.open("GET", gitHubApiUrl);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          const data = JSON.parse(this.responseText);
          console.log("Data fetched!");

          if (data.name) {

          //* Data fetched succesfully! Add DOM here
          document.querySelector("#pfp").innerHTML = `<a href ="https://github.com/${userName}" target = "_blank"><img src ="${data.avatar_url}"></a>`

          document.querySelector("#userName").innerHTML = `${data.name}`

          document.querySelector('#followers').innerHTML = `Followers: ${data.followers}`

          document.querySelector('#following').innerHTML = `Following: ${data.following}`

          document.querySelector('#gitRepo').innerHTML = `Total Git Repo: ${data.public_repos}`
          
        }
    }
      };

      xhr.send();
    }
  });

