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

export { uriToBlob };
