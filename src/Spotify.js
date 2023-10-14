export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";

const clientId = "72f40971ceea45f3b260c65291fbe670";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// Returns the token which is exist on the url after login url success
export const getTokenFromUrl = () => {
  return window.location.hash // returns the whole url string after the hash code
    .substring(1) // it print the part of the string, substring(start index, end index)
    .split("&") // split the string into two parts and store it into array,
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
