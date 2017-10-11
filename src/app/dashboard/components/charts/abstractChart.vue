<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      chart: null
    }
  },
  computed: {
    ...mapState({
      list: state => state.dashboard.list,
      filter: state => state.dashboard.filter
    }),
    localList () {
      let list = this.list
      if (this.filter !== '') {
        list = list.filter(item => item.gender === this.filter)
      }
      return list
      // return this.filter !== '' ? this.list.filter(item => item.gender === this.filter) : this.list
    }
  },
  watch: {
    list () {
      debugger
      this.dataSource()
    },
    filter () {
      debugger
      this.dataSource()
    }
  }
}
</script>
