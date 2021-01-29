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
export default {
  data() {
    return {
        userData:{
            username: "erdenerunl",
            password: "123698745"
        },
        signInError: false,
        signInErrorMessage: "Geçici kayıtlı kullanıcı hata mesajı"
    };
  },
  methods: {
    handleSignIn() {
        this.$router.push({ name: "Home" });
        setTimeout(() => {
          this.$store.commit("setLoaded");
        }, 750);
        this.$store.commit("setLoaded");
    //   setTimeout(() => {
    //     this.signInError = false;
    //   }, 2000);
    //   this.signInErrorMessage = validationResult.message;
    //   this.signUpInError = true;
     },
  },
};
</script>

<style>
</style>