import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["evenOrOdd"]),
  methods: mapActions([
    "increment",
    "decrement",
    "incrementIfOdd",
    "incrementAsync"
  ])
};
