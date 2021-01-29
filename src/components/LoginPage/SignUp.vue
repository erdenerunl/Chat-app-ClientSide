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
      <div v-if="signUpErrorMessage" class="alert alert-primary" role="alert">
        {{ validationResultMessage }}
      </div>
      <button @click.prevent="handleSignUp">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { Validators } from "../../service/service";
import { AuthModels } from "../../model/model";

export default {
  data() {
    return {
      user: {
        username: "erdenerunl",
        password: "123698745",
      },
      signUpErrorMessage: false,
      validationResultMessage: "",
    };
  },
  methods: {
    handleSignUp() {
      let createdUser = new AuthModels.SignUpModel(
        this.user.username,
        this.user.password
      );
      let validationResult = Validators.UserValidator.Validate(createdUser);

      console.log(validationResult);

      if (validationResult.isValid) {
        // Validasyon başarılıysa backende bağlanacağız.
        this.$router.push({ name: "Home" });
        setTimeout(() => {
          this.$store.commit("setLoaded");
        }, 750);
        this.$store.commit("setLoaded");
        
      } else {
        // Ekrana hatayı yani validationResult.message ı yazalım
        setTimeout(() => {
          this.signUpErrorMessage = false;
        }, 2000);
        this.validationResultMessage = validationResult.message;
        this.signUpErrorMessage = true;
      }
    },
  },
};
</script>

<style>
</style>