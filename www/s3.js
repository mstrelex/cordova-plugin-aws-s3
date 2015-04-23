/*global cordova, module*/

module.exports = {

  uploadFileWithSessionToken: function (sourceFile, regionName, bucketName, destinationFilePath, destinationFileNamePrefix, accessKey, secretKey, sessionToken, deleteFileAfterUpload, progressUpdateFunctionName, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AWSS3", "cordovaUploadFile", [sourceFile, regionName, bucketName, destinationFilePath, destinationFileNamePrefix, accessKey, secretKey, sessionToken, deleteFileAfterUpload, progressUpdateFunctionName]);
  }

};
