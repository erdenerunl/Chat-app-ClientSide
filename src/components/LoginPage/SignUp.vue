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
      <div v-if="signUpError" class="alert alert-primary" role="alert">
        {{ signUpErrorMessage }}
      </div>
      <button @click.prevent="handleSignUp">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { Validators, AuthService } from "../../service/service";
import { AuthModels } from "../../model/model";
import { SignUpModel } from "../../model/service/AuthModels";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      signUpError: false,
      signUpErrorMessage: "Geçici error mesajı",
    };
  },
  methods: {
    async handleSignUp() {
      let createdUser = new AuthModels.SignUpModel(
        this.user.username,
        this.user.password
      );
      let validationResult = Validators.UserValidator.Validate(createdUser);
      console.log("SignUp validation result: ", validationResult);

      if (validationResult.isValid) {
        let signUpResult = await AuthService.SignUp(
          new SignUpModel(this.user.username, this.user.password)
        );
        console.log("SignUp auth result: ", signUpResult);

        if (signUpResult.isSuccessful) {
          // Kayıt başarılı gibi bir mesaj yazalım ekrana
        } else {
        }
      } else {
        // Ekrana hatayı yani validationResult.message ı yazalım
        setTimeout(() => {
          this.signUpError = false;
        }, 2000);
        this.signUpErrorMessage = validationResult.message;
        this.signUpError = true;
      }
    },
  },
};
</script>

<style>
</style>