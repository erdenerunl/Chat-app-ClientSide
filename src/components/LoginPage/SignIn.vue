<template>
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your account</span>
      <input type="text" v-model="userData.username" placeholder="Username" />
      <input
        type="password"
        v-model="userData.password"
        placeholder="Password"
      />
      <div v-if="signInError" class="alert alert-primary" role="alert">
        {{ signInErrorMessage }}
      </div>
      <a href="#" class="forgot-password">Forgot your password?</a>
      <button @click.prevent="handleSignIn">Sign In</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { AuthModels, AuthResult, User, Message } from "../../model/model";
import { Validators, AuthService, MessageService } from "../../service/service";
export default {
  data() {
    return {
      userData: {
        username: "",
        password: "",
      },
      signInError: false,
      signInErrorMessage: "Geçici kayıtlı kullanıcı hata mesajı",
      MessageService: undefined,
    };
  },
  methods: {
    ...mapMutations({ setUserInfo: "setUserInfo" }),

    async handleSignIn() {
      let signInValidation = Validators.UserValidator.Validate(
        new User(this.userData.username, this.userData.password)
      );

      if (signInValidation.isValid) {
        let signInResult = await AuthService.Login(
          new AuthModels.LoginModel(this.userData.username, this.userData.password)
        );

        if (signInResult.isAuthenticated) {
          this.handleAuthenticatedUserProcesses(signInResult);
        } else {
          // ekrana hatayı basalım
        }
      } else {
        // ekrana hata basalım
      }
    },

    /**
     * The method to execute when the user receives a message
     *
     * @param {Message} message Incoming message object
     * @return {void} void
     */
    receiveMessageHandler(message) {
      console.log("Message received !", message);
    },

    /**
     * It execute the processes to be done after successful login by user
     *
     * @param {AuthResult} authResult Auth result object.
     * @return {void} void
     */
    handleAuthenticatedUserProcesses: function (authResult) {
      localStorage.setItem("access_token", authResult.token);

      this.setUserInfo(new User(this.userData.username, authResult.token));

      this.$data.MessageService = new MessageService(
        this.receiveMessageHandler
      );
    },
  },
};
</script>

<style>
</style>