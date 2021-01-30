<template>
  <div class="profile-sidebar col-lg-4 col-md-12 col-sm-12 px-0">
    <header>
      <span>Profile</span>
      <button @click="closeProfile" class="action-button btn btn-outline-light text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="16" y1="6" x2="6" y2="16"></line>
          <line x1="6" y1="6" x2="16" y2="16"></line>
        </svg>
      </button>
    </header>
    <div class="profile-body">
      <perfect-scrollbar>
        <div class="px-4">
          <div class="text-center">
            <figure class="user-avatar">
              <div class="fake-img"></div>
            </figure>
            <h5>Onur Kayabaşı</h5>
            <small class="text-muted">Last seen: Today</small>
            <ul
              class="nav nav-tabs justify-content-center mt-5"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="about-tab"
                  data-bs-toggle="tab"
                  href="#about"
                  role="tab"
                  aria-controls="about"
                  aria-selected="true"
                  >About</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="media-tab"
                  data-bs-toggle="tab"
                  href="#media"
                  role="tab"
                  aria-controls="media"
                  aria-selected="false"
                  >Media</a
                >
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                <p class="my-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                  ducimus accusamus temporibus suscipit laudantium accusantium
                  quidem eaque autem voluptatem quod eligendi distinctio magnam
                  molestiae officiis at, vero cupiditate ad animi.
                </p>
                <div class="my-3">
                  <h5 class="mt-3">Phone</h5>
                  <p class="mb-4">0555 555 55 55</p>
                </div>
                <div class="my-3">
                  <h5 class="mt-3">Settings</h5>
                  <div class="form-group">
                    <div class="form-item">
                      <label class="switch">
                        <input type="checkbox" id="blockUser" />
                        <span class="slider round"></span>
                      </label>
                      <span>Block</span>
                    </div>
                    <div class="form-item">
                      <label class="switch">
                        <input type="checkbox" id="blockUser" />
                        <span class="slider round"></span>
                      </label>
                      <span>Mute</span>
                    </div>
                    <div class="form-item">
                      <label class="switch">
                        <input type="checkbox" id="blockUser" />
                        <span class="slider round"></span>
                      </label>
                      <span>Get Notification</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="media"
                role="tabpanel"
                aria-labelledby="media-tab"
              >
               <h5 class="recent-files">
                   <span>Recent Files</span>
                   <a href="#">Upload</a>
               </h5>
               <div class="div">
                   <ul class="list-group list-group-flush">
                       <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                           <a href="#">ExampleFile</a>
                       </li>
                       <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                           <a href="#">ExampleFile</a>
                       </li>
                       <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                           <a href="#">ExampleFile</a>
                       </li>
                       <li class="list-group-item pl-0 pr-0 d-flex align-items-center">
                           <a href="#">ExampleFile</a>
                       </li>
                   </ul>
               </div>
              </div>
            </div>
          </div>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        closeProfile(){
            this.$store.commit("Profile/goProfile")
        }
    }
};
</script>

<style lang="scss" scoped>
.profile-sidebar {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 80px;
  font-weight: 600;

  span {
    font-size: 22px;
  }
}
.user-avatar {
  width: 7rem;
  height: 7rem;
  margin-bottom: 1rem;
  margin-right: 0;
}
small {
  font-size: 12px;
  font-style: italic;
}
.nav.nav-tabs .nav-link.active {
  color: #00d4ff;
  border: none;
  border-bottom: 2px solid #00d4ff;
}
.form-group {
  margin-bottom: 1rem;

  .form-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;

    .switch {
      position: relative;
      display: inline-block;
      width: 48px;
      height: 21px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 16px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }
}
.ps{
    position: relative;
    height: calc(100vh - 170px);
    overflow: hidden;
}
.recent-files{
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;

    a{  
        color: #007bff;
        font-size: 14px;
    }
}
</style>