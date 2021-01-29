<template>
  <div class="profile-sidebar col-lg-4 col-md-12 col-sm-12 px-0">
    <header>
      <span>Profile</span>
      <button class="action-button btn btn-outline-light text-center">
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
      <perferct-scrollbar>
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
                  id="home-tab"
                  data-bs-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  >Home</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  >Profile</a
                >
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p class="m-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                  ducimus accusamus temporibus suscipit laudantium accusantium
                  quidem eaque autem voluptatem quod eligendi distinctio magnam
                  molestiae officiis at, vero cupiditate ad animi.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </perferct-scrollbar>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>