<template>
<div class="iframe-container">
    <iframe
    id="JotFormIFrame-212656531581153"
    title="Booking Form"
    onload="window.parent.scrollTo(0,0)"
    allowtransparency="true"
    allowfullscreen="true"
    src="https://form.jotform.com/212656531581153"
    frameborder="0"
    scrolling="yes"
    ></iframe>
</div>

</template>

<script>

export default {
    mounted() {
        let foo = document.createElement('script');    
        foo.setAttribute("src","https://form.jotform.com/jsform/212656531581153");
        this.$refs.main.appendChild(foo);
    }
}
</script>

<style>
.iframe-container {
    height: 80vh;
}
iframe {
    height: 100%;
    width: 90vw;
}
</style>