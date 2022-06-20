<template>
    <div>
        <div class="hor-menu">
            <label for="img">
                <next-button :buttonText="'Upload'"></next-button>
            </label>
        </div>

        <div class="confirmation-text">{{confirmationText}}</div>
        
        <input @change="fileUploaded" ref="fileInput" type="file" id="img" name="img" accept="image/*"/>

        <draggable v-model="images" class="draggable-container">
            <div v-for="image in images" :key="image.name" class="draggable-item">
                <img :src="image.url"  class="draggable-image"/>
                <next-button
                    :buttonText="'Delete'"
                    @clicked="()=>{openDeleteDialog(image)}"
                ></next-button>
            </div>
        </draggable>
        <div class="dialog-box" v-if="deleteDialogOpen">
            <div>Are you sure you want to delete?</div>
            <img :src="imageToDelete.url" class="image-to-delete">
            <div class="hor-menu">
            <next-button
                :buttonText="'Delete'"
                @clicked="deleteImg" 
            ></next-button>
            <next-button
                :buttonText="'Cancel'"
                @clicked="deleteDialogOpen = false" 
            ></next-button>
        </div>
        </div>
    </div>
</template>

<script>
import { storage, ref, getDownloadURL, uploadBytes, deleteObject } from '../firebase'
import draggable from 'vuedraggable'
import NextButton from './NextButton.vue'

export default {
    components: {
        draggable,
        NextButton
    },
    data: function () {
        return {
            name: 'ManageFlash',
            images: [
            ],
            totalImages: null,
            configObject: null,
            confirmationText: ' ',
            imageToDelete: null,
            deleteDialogOpen: false,
            flashLoaded: false
        }
    },
    methods : {
        async loadFlashInOrder () {
            const configRef = ref(storage, 'flash/flashConfig.json');
            const configRes = await fetch(await getDownloadURL(configRef));
            const configBlob = await configRes.blob();
            const blobText = await configBlob.text();
            this.configObject = await JSON.parse(blobText);
            console.log('config', this.configObject);

            const flashOrder = this.configObject.flashOrder;
            for (const imgName of flashOrder) {
                console.log(imgName);
                const imgRef = ref(storage, 'flash/'+imgName);
                const downloadUrl = await getDownloadURL(imgRef);
                this.images.push({
                    name: imgName,
                    url: downloadUrl
                })
            }
        },
        async save_onclick () {
            this.confirmationText = "Saving...";
            await this.updateOrderOnCloud();
            this.confirmationText = "Saved!";
            setTimeout(()=>{
                this.confirmationText = ' ';
            }, 2000);
        },
        async updateOrderOnCloud() {
            console.log('preparing upload');
            const configRef = ref(storage, 'flash/flashConfig.json');
            const configBlob = new Blob([JSON.stringify(this.constructConfig())], {type: "application/json"});
            await uploadBytes(configRef, configBlob);
            console.log('upload complete')
        },
        constructConfig () {
            let imageNames = this.images.map(img=>img.name);
            return {
                flashOrder: imageNames
            }
            
        },
        async fileUploaded() {
            const files = this.$refs.fileInput.files;
            console.log('file uploaded!', files);
            let fileName = Date.now();
            console.log('file name: ', fileName);
            let newRef = ref(storage, 'flash/'+fileName);
            let uploadResult = await uploadBytes(newRef, files[0]);
            console.log('uploadRes', uploadResult);
            let url = await getDownloadURL(newRef);

            console.log('current images', this.images);
            this.images.unshift({name: fileName, url: url});
            console.log('updated images', this.images);
        },
        openDeleteDialog(image) {
            console.log('opening delete dialog')
            this.imageToDelete = image;
            this.deleteDialogOpen = true;
        },
        deleteImg() {
            let image = this.imageToDelete;
            console.log('image', image);
            console.log(deleteObject);
            let imgToDelRef = ref(storage, 'flash/'+image.name);
            deleteObject(imgToDelRef);
            this.images = this.images.filter(img => img.name != image.name);
            console.log(this.images);
            this.deleteDialogOpen = false;
        }
    },
    mounted() {
        // this.loadImagesFromFirebase();
        this.loadFlashInOrder().then(()=>{this.flashLoaded = true})
    },
    watch: {
        async images() {
            if ( this.flashLoaded ) {
                console.log('images updated');
                this.confirmationText = "Saving...";
                await this.updateOrderOnCloud();
                this.confirmationText = "Saved!";
                setTimeout(()=>{
                    this.confirmationText = ' ';
                }, 2000);
            }
            
        }
    }
}
</script>

<style>
.draggable-image {
    height: 200px;
    /* width: auto; */
    padding: 10px;
}
.hor-menu {
    display: flex;
    justify-content: center;
    column-gap: 12px;
    /* margin: 20px; */
}
#img {
    display: none;
}
.draggable-item {
    display: flex;
    align-content: center;
    justify-content: center;
    width: auto;
}
.confirmation-text {
    padding: 20px;
    min-height: 1.25em;
    line-height: 1.25;
}
.dialog-box {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0vh;
    left: 0vw;
    background-color: bisque;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 20px;
}
.image-to-delete {
    max-height: 30vh;
    width: auto;
}
.draggable-container {
    width: 60vw;
    margin-left: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>