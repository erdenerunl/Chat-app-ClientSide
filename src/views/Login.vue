<template>
  <div class="container containerdiv" :class="overlayChange()" id="container">
    <sign-up />
    <sign-in />
    <overlay @setOverlay="setOverlay" />
  </div>
</template>

<script>
import SignUp from "@/components/LoginPage/SignUp.vue";
import SignIn from "@/components/LoginPage/SignIn.vue";
import Overlay from "@/components/LoginPage/Overlay.vue";

export default {
  components: {
    SignUp,
    SignIn,
    Overlay,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    setOverlay() {
      this.isActive = !this.isActive;
    },
    overlayChange() {
      return {
        "right-panel-active": this.isActive === true,
        "": this.isActive === false,
      };
    },
  },
};
</script>

<style lang="scss">
.containerdiv {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  min-height: 480px;
  height: 100vh;
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.containerdiv.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.containerdiv.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
h1 {
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  transition: all 200ms;

  &:hover:not(.forgot-password) {
    background-color: #00d4ff;
  }

  &.forgot-password:hover {
    color: #0193b1;
  }
}

button {
  border-radius: 20px;
  border: 1px solid #00d4ff;
  background-color: #00d4ff;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
</style>
