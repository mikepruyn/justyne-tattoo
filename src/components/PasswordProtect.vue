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
import {useStore} from '../pinia/store';

export default {
    data() {
        return {
            password: '1234',
            enteredValue: '',
            status: ' '
        }
    },
    setup() {
        let store = useStore();
        return {
            store
        }
    },
    methods: {
        passwordSubmit() {
            if (this.password == this.enteredValue) {
                this.store.adminAccess = true;
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