
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      edadMin : 18,
      edadMax : 120,
      usuarios:[],
      url: 'https://60b90cc780400f00177b612c.mockapi.io/DatosPersona'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },

    async enviar(){
      try {
        let respuesta = this.axios.post(this.url, this.formData,{'content-type':'application/json'})
        let user = respuesta.data
        console.log('AXIOS POST USUARIOS', user)
        this.usuarios.push(user)
        this.formData = this.getInicialData()
        this.formState._reset()
      }
      catch (error){
        console.error(error)
      }
    }
  }
}


