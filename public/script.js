// script.js
document.addEventListener("DOMContentLoaded", () => {
    const followerCountElement = document.getElementById("follower-count");

    // Function to update the follower count on the page
    function updateFollowerCount(count) {
        followerCountElement.textContent = count;
    }

    // Fetch the initial follower count from the server
    fetch('/getFollowerCount')
        .then(response => response.json())
        .then(data => updateFollowerCount(data.followerCount))
        .catch(error => console.error(error));
});
