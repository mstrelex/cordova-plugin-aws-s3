# Cordova AWS S3 Upload Plugin

A simple plugin that allows you to upload files to S3 buckets using AWS SDK.
Currently support uploads with temporary credentials (accessKey, secretKey and sessionToken) only.

## Using
Install the plugin

    $ cordova plugin add https://github.com/mstrelex/cordova-plugin-aws-s3.git

Add three callback functions (to app scope)

```js
  successUploadCallback : function(message) {
      console.log(message);
  },
  errorUploadCallback : function(message) {
      console.log(message);
  },
  updateUploadProgress : function(totalBytesExpectedToSend, bytesSent, totalBytesSent, uploadedPercent) {
      console.log("Upload totalBytesExpectedToSend: " + totalBytesExpectedToSend + " bytes sent: " + bytesSent + ", totalBytesSent: " + totalBytesSent + ", completed: " + uploadedPercent);
  }
```

Call the upload function:

```js
  var sourceFile = "file://{path_to_source_file.extension}";
  var regionName = "{region_name_where_bucket_was_created}";
  /*
       us-east-1
       us-west-1
       us-west-2
       us-east-1
       eu-central-1
       ap-southeast-1
       ap-northeast-1
       ap-southeast-2
       sa-east-1
       cn-north-1
  */
  var bucketName = "{bucket_name}";
  var destinationFilePath = "{path/inside/bucket/}";
  var destinationFileNamePrefix = "{new_file_name}";
  var accessKey = "{access_key}";
  var secretKey = "{secret_key}";
  var sessionToken = "{session_temporary_token}";
  var deleteFileAfterUpload = "false"; // true, false
  var progressUpdateFunctionName = "app.updateUploadProgress";

  s3.uploadFileWithSessionToken(sourceFile,
                                regionName,
                                bucketName,
                                destinationFilePath,
                                destinationFileNamePrefix,
                                accessKey,
                                secretKey,
                                sessionToken,
                                deleteFileAfterUpload,
                                progressUpdateFunctionName,
                                app.successUploadCallback,
                                app.errorUploadCallback);
```
