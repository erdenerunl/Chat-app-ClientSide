<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 login-wrapper">
          <div class="brand py-3">
            <h5>ChatApp</h5>
            <!--Logo buraya <img src="" alt=""> -->
          </div>
          <div class="login-data-wrapper py-auto">
            <h1 class="login-title">Giriş Yap</h1>
            <form action="#">
              <div class="form-group">
                <label for="text">Kullanıcı Adı</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="form-control"
                  placeholder="KralBozguncu..."
                />
              </div>
              <div class="form-group my-4">
                <label for="password">Şifre</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                  placeholder="Unutmayacağın bir şifre yaz..."
                />
              </div>
              <input
                name="login"
                id="login"
                class="btn btn-block login-btn"
                type="button"
                value="Login"
              />
            </form>
            <a href="#" class="forgot-password-link">Şifremi Unuttum</a>
          </div>
        </div>
        <div class="col-sm-6 d-sm-block">
          <img src="../assets/login-bg.jpg" alt="login Page" />
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 4.25rem 6.25rem;
}
img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: left;
}
.login-data-wrapper {
  width: 300px;
  max-width: 100%;

  label {
    font-size: 14px;
    font-weight: bold;
    color: #b0adad;
  }
  .form-control {
    border: none;
    border-bottom: 1px solid #e7e7e7;
    border-radius: 0;
    padding: 9px 5px;
    min-height: 40px;
    font-size: 18px;
    font-weight: normal;
  }
  .login-btn {
    padding: 13px 20px;
    background-color: #3C1500;
    border-radius: 0;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 14px;
  }
}
.login-title {
  font-size: 30px;
  color: #000;
  font-weight: bold;
  margin-bottom: 25px;
}
.form-group {
  border: none;
  border-bottom: 1px solid #e7e7e7;
  border-radius: 0;
  min-height: 40px;
  font-size: 18px;
  font-weight: normal;
}
</style>
