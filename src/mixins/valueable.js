export default {
  computed:{
    bind:{
      get(){
        return this.value
      },
      set(v){
        this.$emit('input', v)
      }
    }
  },
}
