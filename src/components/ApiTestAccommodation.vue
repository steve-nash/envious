<template>
  <div>
    <table striped hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in types" :key="item.accomodation_type_id">
          <td>{{ item.accomodation_type_id }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button v-on:click="putData(item.accomodation_type_id)" class="uk-button uk-button-secondary blue">Edit</button>
          </td>
          <td>
            <button v-on:click="deleteData(item.accomodation_type_id)" class="uk-button uk-button-secondary red">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { accommodationStore } from "@/store/accommodationStore";
const token = localStorage.getItem('token') || 0;
export default {
  name: "api-test",
  props: {},
  computed: {
    types() {
      return accommodationStore.state.types;
    }
  },
  methods: {
    async getData() {
      await axios.get("accommodationtype").then(result => {
        this.accommodationtype = result.data;
        console.log(result.data);
      });
    },
    async deleteData(id) {
      console.log(token)
      await axios.delete("accommodationtype" + "/" + id, {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
      .then(result => {
        this.result.splice(id, 1);
        console.log(this.result);
      });
    },
    async postData(id) {
      await axios.post("accommodationtype" + "/" + id, {}, {})
      .then(result => {
        this.result.splice(id, 1);
        console.log(this.result);
      });
    },
    async putData(id) {
      await axios.put("accommodationtype" + "/" + id, {}, {})
      .then(result => {
        this.result.splice(id, 1);
        console.log(this.result);
      });
    }
  },
  created() {
    accommodationStore.dispatch("getAccommodationTypes");
  },
  mounted() {
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
