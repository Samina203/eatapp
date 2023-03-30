import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Converts a URI to a Blob object.
 *
 * @param {string} uri - The URI of the file to convert to a Blob object.
 * @returns {Promise<Blob>} - A Promise that resolves to a Blob object representing the contents of the file at the specified URI.
 * @throws {Error} - If an error occurs while converting the file to a Blob object.
 *
 * @example
 * // Convert an image file to a Blob object
 * const uri = 'file://path/to/image.jpg';
 * uriToBlob(uri)
 *   .then(blob => {
 *     // Use the Blob object as needed
 *   })
 *   .catch(error => console.error(error));
 */
function uriToBlob(uri) {
  return new Promise((resolve, reject) => {
    fetch(uri)
      .then((response) => response.blob())
      .then((blob) => resolve(blob))
      .catch((error) => reject(error));
  });
}

// save user loggedInSession

const saveIsUserLoggedIn = async () => {
  try {
    await AsyncStorage.setItem("isUserLoggedIn", "true");
  } catch (error) {
    alert(error.message);
  }
};

// remove when user logs out
const removeIsUserLoggedIn = async () => {
  try {
    await AsyncStorage.setItem("isUserLoggedIn", "false");
  } catch (error) {
    alert(error.message);
  }
};

// get loggedValue

const getIsUserLoggedIn = async () => {
  try {
    const response = await AsyncStorage.getItem("isUserLoggedIn");
    return response;
  } catch (error) {
    alert(error.message);
  }
};

export {
  uriToBlob,
  getIsUserLoggedIn,
  saveIsUserLoggedIn,
  removeIsUserLoggedIn,
};
