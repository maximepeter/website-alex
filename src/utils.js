import { BlobServiceClient } from "@azure/storage-blob";

export async function blobToString(blob) {
  const fileReader = new FileReader();
  return new Promise((resolve, reject) => {
    fileReader.onloadend = (ev) => {
      resolve(ev.target.result);
    };
    fileReader.onerror = reject;
    fileReader.readAsText(blob);
  });
}

export async function downloadFromBlob(blobName) {
  const account = "stgimgalex";
  const containerName = "img-infos";
  const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net`
  );
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlobClient(blobName);
  const downloadBlockBlobResponse = await blobClient.download();
  const downloaded = await blobToString(
    await downloadBlockBlobResponse.blobBody
  );
  return downloaded;
}
