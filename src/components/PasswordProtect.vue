<template>
  <div>
    <h1>
        Enter the Password
    </h1>
    <form>
        <input type="password" v-model="enteredValue"/>
        <button id="enter" @click.prevent="passwordSubmit">Enter</button>
    </form>
    
    <p id="status">{{status}}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            password: 'Cristofer!@2002',
            enteredValue: '',
            status: ' '
        }
    },
    methods: {
        passwordSubmit() {
            if (this.password == this.enteredValue) {
                this.$emit('validated');
            } else {
                this.status = 'Wrong password!';
                setTimeout(()=>{
                    this.status = ' ';
                }, 2000);
            }
        }
    }
}
</script>

<style>

</style>