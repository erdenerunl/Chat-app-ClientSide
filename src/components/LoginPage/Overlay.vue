<template>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button @click="setOverlay" class="ghost" id="signIn">Sign In</button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button @click="setOverlay" class="ghost" id="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setOverlay() {
      this.$emit("setOverlay");
    },
  },
};
</script>

<style lang="scss">
.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.containerdiv.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 1%,
    rgba(16, 39, 147, 1) 17%,
    rgba(0, 212, 255, 1) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.containerdiv.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
  p,h1{
    color:#ffffff;
  }
}

.containerdiv.right-panel-active .overlay-left {
  transform: translateX(0);

  
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.containerdiv.right-panel-active .overlay-right {
  transform: translateX(20%);
}
</style>