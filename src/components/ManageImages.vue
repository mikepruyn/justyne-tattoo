<template>
    <div>
        <div class="hor-menu">
            <label for="img">
                <next-button :buttonText="'Upload'"></next-button>
            </label>
        </div>

        <div class="confirmation-text">{{confirmationText}}</div>
        
        <input @change="fileUploaded" ref="fileInput" type="file" id="img" name="img" accept="image/*" multiple/>

        <draggable v-model="images" class="draggable-container">
            <div v-for="image in images" :key="image" class="draggable-item">
                <img :src="image"  class="draggable-image"/>
                <next-button
                    :buttonText="'Delete'"
                    @clicked="()=>{openDeleteDialog(image)}"
                ></next-button>
            </div>
        </draggable>
        <div class="dialog-box" v-if="deleteDialogOpen">
            <div>Are you sure you want to delete?</div>
            <img :src="imageToDelete" class="image-to-delete">
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
import { getImages, uploadImage, updateConfig, deleteImage } from '../firebase/storage'
import draggable from 'vuedraggable'
import NextButton from './NextButton.vue'

export default {
    components: {
        draggable,
        NextButton
    },
    props: {
        folder: String
    },
    data: function () {
        return {
            name: 'ManageImages',
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
            this.images = await getImages(this.folder)
        },
        async fileUploaded() {
            const files = this.$refs.fileInput.files;
            console.log(files);
            for (let i=0; i<files.length; i++) {
                let url = await uploadImage(this.folder, files[i]);
                this.images.unshift(url);
            }
            console.log('updated images', this.images);
        },
        openDeleteDialog(image) {
            console.log('opening delete dialog')
            this.imageToDelete = image;
            this.deleteDialogOpen = true;
        },
        async deleteImg() {
            let image = this.imageToDelete;
            console.log('image to delete', image);
            await deleteImage(this.folder, image);
            this.images = this.images.filter(img => img != image);
            console.log('images after delete', this.images);
            this.deleteDialogOpen = false;
        }
    },
    mounted() {
        this.loadFlashInOrder().then(()=>{this.flashLoaded = true})
    },
    watch: {
        async images() {
            if ( this.flashLoaded ) {
                console.log('images updated');
                this.confirmationText = "Saving...";
                await updateConfig(this.folder, this.images);
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