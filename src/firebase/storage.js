// functions for getting/writing files stored  in firebase cloudstore

import { storage, ref, getDownloadURL
    // , uploadBytes, deleteObject 
} from './index';

export async function getImages(folder) {
    const configRef = ref(storage, folder+'/config.json');
    const configRes = await fetch(await getDownloadURL(configRef));
    const configBlob = await configRes.blob();
    const blobText = await configBlob.text();
    let configObject = await JSON.parse(blobText);
    console.log('config', configObject);

    const imgOrder = configObject.order;

    let images = [];
    for (const imgName of imgOrder) {
        console.log(imgName);
        const imgRef = ref(storage, folder+'/'+imgName);
        const downloadUrl = await getDownloadURL(imgRef);
        images.push({
            name: imgName,
            url: downloadUrl
        })
    }
    return images;
}