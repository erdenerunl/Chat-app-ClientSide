<template>
  <div class="form-container sign-up-container">
    <form action="#">
      <h1>Create Account</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" v-model="user.username" placeholder="Username" />
      <input type="password" v-model="user.password" placeholder="Password" />
      <button @click.prevent="handleSignUp(user)">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { Validator } from "../../service/service";
import { User } from "../../model/model";

export default {
  data() {
    return {
      user: {
        username: "erdenerunl",
        password: "123698745",
      },
    };
  },
  methods: {
    handleSignUp(user) {
      console.log(user)
      // let createdUser = new User(this.user.username, this.user.password);
      // let validationResult = Validator.User(createdUser);

      // console.log(validationResult)

      //   if (validationResult.isValid) {
      //     // Validasyon başarılıysa backende bağlanacağız.
      //   } else {
      //     // Ekrana hatayı yani validationResult.message ı yazalım
      //   }

      this.$router.push({name: "Home"})
      setTimeout(()=> {
        this.$store.commit("setLoaded")
      },2000);
      this.$store.commit("setLoaded")

    },
  },
};
</script>

<style>
</style>