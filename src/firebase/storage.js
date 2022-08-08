// functions for getting/writing files stored  in firebase cloudstore

import { storage, ref, getDownloadURL, uploadBytes, deleteObject } from './index';

export async function getImages(folder) {
    const configRef = ref(storage, folder+'/config.json');
    const configRes = await fetch(await getDownloadURL(configRef));
    const configBlob = await configRes.blob();
    const blobText = await configBlob.text();
    let configObject = await JSON.parse(blobText);
    console.log('config', configObject);

    const images = configObject.order;
    return images;
}

// imageList is an array of URLs
export async function updateConfig(folder, imageList) {
    console.log('preparing config upload');
    const configRef = ref(storage, folder+'/config.json');
    let configObject = {
        order: imageList
    }
    const configBlob = new Blob([JSON.stringify(configObject)], {type: "application/json"});
    await uploadBytes(configRef, configBlob);
    console.log('config upload complete')
}

// image is a File/Blob object
export async function uploadImage(folder, imageFile) {
    console.log('preparing image upload');
    let fileName = Date.now();
    let newRef = ref(storage, folder + '/' + fileName);
    let uploadResult = await uploadBytes(newRef, imageFile);
    console.log('upload result', uploadResult);
    let url = await getDownloadURL(newRef);
    return url;
}

export async function deleteImage(folder, image) {
    console.log('deleting image:', image);
    console.log(deleteObject);
    let imgToDelRef = ref(storage, image);
    deleteObject(imgToDelRef);
}