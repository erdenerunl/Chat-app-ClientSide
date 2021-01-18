<template>
  <div class="col-lg-4 col-md-3 col-sm-12 p-0 d-flex flex-column">
    <div class="chatbar">
      <header>
        <span>Konuşmalar</span>
        <ul>
          <li>
            <button class="action-button btn btn-outline-light">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQzNywyNjguMTUyaC01MC4xMThjLTYuODIxLDAtMTMuNDI1LDAuOTMyLTE5LjcxLDIuNjQ2Yy0xMi4zOTgtMjQuMzcyLTM3LjcxLTQxLjExOC02Ni44NzctNDEuMTE4aC04OC41OSAgICBjLTI5LjE2NywwLTU0LjQ3OSwxNi43NDYtNjYuODc3LDQxLjExOGMtNi4yODUtMS43MTQtMTIuODg5LTIuNjQ2LTE5LjcxLTIuNjQ2SDc1Yy00MS4zNTUsMC03NSwzMy42NDUtNzUsNzV2ODAuMTE4ICAgIGMwLDI0LjgxMywyMC4xODcsNDUsNDUsNDVoNDIyYzI0LjgxMywwLDQ1LTIwLjE4Nyw0NS00NXYtODAuMTE4QzUxMiwzMDEuNzk3LDQ3OC4zNTUsMjY4LjE1Miw0MzcsMjY4LjE1MnogTTEzNi43MDUsMzA0LjY4MiAgICB2MTMzLjU4OUg0NWMtOC4yNzEsMC0xNS02LjcyOS0xNS0xNXYtODAuMTE4YzAtMjQuODEzLDIwLjE4Ny00NSw0NS00NWg1MC4xMThjNC4wNzIsMCw4LjAxNSwwLjU1MywxMS43NjksMS41NzIgICAgQzEzNi43NzksMzAxLjM2NiwxMzYuNzA1LDMwMy4wMTYsMTM2LjcwNSwzMDQuNjgyeiBNMzQ1LjI5NSw0MzguMjcxaC0xNzguNTlWMzA0LjY4MWMwLTI0LjgxMywyMC4xODctNDUsNDUtNDVoODguNTkgICAgYzI0LjgxMywwLDQ1LDIwLjE4Nyw0NSw0NVY0MzguMjcxeiBNNDgyLDQyMy4yNzFjMCw4LjI3MS02LjcyOSwxNS0xNSwxNWgtOTEuNzA1di0xMzMuNTljMC0xLjY2Ny0wLjA3NC0zLjMxNy0wLjE4Mi00Ljk1NyAgICBjMy43NTQtMS4wMTgsNy42OTctMS41NzIsMTEuNzY5LTEuNTcySDQzN2MyNC44MTMsMCw0NSwyMC4xODcsNDUsNDVWNDIzLjI3MXoiIGZpbGw9IiMwYzdlNjgiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTEwMC4wNiwxMjYuNTA0Yy0zNi43NDksMC02Ni42NDYsMjkuODk3LTY2LjY0Niw2Ni42NDZjLTAuMDAxLDM2Ljc0OSwyOS44OTcsNjYuNjQ2LDY2LjY0Niw2Ni42NDYgICAgYzM2Ljc0OCwwLDY2LjY0Ni0yOS44OTcsNjYuNjQ2LTY2LjY0NkMxNjYuNzA2LDE1Ni40MDEsMTM2LjgwOSwxMjYuNTA0LDEwMC4wNiwxMjYuNTA0eiBNMTAwLjA1OSwyMjkuNzk2ICAgIGMtMjAuMjA3LDAtMzYuNjQ2LTE2LjQzOS0zNi42NDYtMzYuNjQ2YzAtMjAuMjA3LDE2LjQzOS0zNi42NDYsMzYuNjQ2LTM2LjY0NmMyMC4yMDcsMCwzNi42NDYsMTYuNDM5LDM2LjY0NiwzNi42NDYgICAgQzEzNi43MDUsMjEzLjM1NywxMjAuMjY2LDIyOS43OTYsMTAwLjA1OSwyMjkuNzk2eiIgZmlsbD0iIzBjN2U2OCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDQzLjcyOWMtNDkuMDk2LDAtODkuMDM4LDM5Ljk0Mi04OS4wMzgsODkuMDM4YzAsNDkuMDk2LDM5Ljk0Miw4OS4wMzgsODkuMDM4LDg5LjAzOHM4OS4wMzgtMzkuOTQyLDg5LjAzOC04OS4wMzggICAgQzM0NS4wMzgsODMuNjcyLDMwNS4wOTYsNDMuNzI5LDI1Niw0My43Mjl6IE0yNTYsMTkxLjgwNWMtMzIuNTU0LDAtNTkuMDM4LTI2LjQ4NC01OS4wMzgtNTkuMDM4ICAgIGMwLTMyLjU1MywyNi40ODQtNTkuMDM4LDU5LjAzOC01OS4wMzhzNTkuMDM4LDI2LjQ4NCw1OS4wMzgsNTkuMDM4QzMxNS4wMzgsMTY1LjMyMSwyODguNTU0LDE5MS44MDUsMjU2LDE5MS44MDV6IiBmaWxsPSIjMGM3ZTY4IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik00MTEuOTQsMTI2LjUwNGMtMzYuNzQ4LDAtNjYuNjQ2LDI5Ljg5Ny02Ni42NDYsNjYuNjQ2YzAuMDAxLDM2Ljc0OSwyOS44OTgsNjYuNjQ2LDY2LjY0Niw2Ni42NDYgICAgYzM2Ljc0OSwwLDY2LjY0Ni0yOS44OTcsNjYuNjQ2LTY2LjY0NkM0NzguNTg2LDE1Ni40MDEsNDQ4LjY4OSwxMjYuNTA0LDQxMS45NCwxMjYuNTA0eiBNNDExLjk0LDIyOS43OTYgICAgYy0yMC4yMDYsMC0zNi42NDYtMTYuNDM5LTM2LjY0Ni0zNi42NDZjMC4wMDEtMjAuMjA3LDE2LjQ0LTM2LjY0NiwzNi42NDYtMzYuNjQ2YzIwLjIwNywwLDM2LjY0NiwxNi40MzksMzYuNjQ2LDM2LjY0NiAgICBDNDQ4LjU4NiwyMTMuMzU3LDQzMi4xNDcsMjI5Ljc5Niw0MTEuOTQsMjI5Ljc5NnoiIGZpbGw9IiMwYzdlNjgiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
              />
            </button>
          </li>
          <li>
            <button class="action-button btn btn-outline-light">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNC44MzMsMCwwLDExNC44MzMsMCwyNTZzMTE0LjgzMywyNTYsMjU2LDI1NnMyNTYtMTE0Ljg1MywyNTYtMjU2UzM5Ny4xNjcsMCwyNTYsMHogTTI1Niw0NzIuMzQxICAgIGMtMTE5LjI3NSwwLTIxNi4zNDEtOTcuMDQ2LTIxNi4zNDEtMjE2LjM0MVMxMzYuNzI1LDM5LjY1OSwyNTYsMzkuNjU5UzQ3Mi4zNDEsMTM2LjcwNSw0NzIuMzQxLDI1NlMzNzUuMjk1LDQ3Mi4zNDEsMjU2LDQ3Mi4zNDF6ICAgICIgZmlsbD0iIzBmNzQ1NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzU1LjE0OCwyMzQuMzg2SDI3NS44M3YtNzkuMzE4YzAtMTAuOTQ2LTguODY0LTE5LjgzLTE5LjgzLTE5Ljgzcy0xOS44Myw4Ljg4NC0xOS44MywxOS44M3Y3OS4zMThoLTc5LjMxOCAgICBjLTEwLjk2NiwwLTE5LjgzLDguODg0LTE5LjgzLDE5LjgzczguODY0LDE5LjgzLDE5LjgzLDE5LjgzaDc5LjMxOHY3OS4zMThjMCwxMC45NDYsOC44NjQsMTkuODMsMTkuODMsMTkuODMgICAgczE5LjgzLTguODg0LDE5LjgzLTE5Ljgzdi03OS4zMThoNzkuMzE4YzEwLjk2NiwwLDE5LjgzLTguODg0LDE5LjgzLTE5LjgzUzM2Ni4xMTQsMjM0LjM4NiwzNTUuMTQ4LDIzNC4zODZ6IiBmaWxsPSIjMGY3NDU3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
              />
            </button>
          </li>
        </ul>
      </header>
      <form action="#">
        <input
          type="text"
          class="form-control"
          placeholder="Konuşmalarda ara..."
        />
      </form>
      <div class="chatbar-body">
        <perfect-scrollbar>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="i in 10" :key="i">
              <figure class="user-avatar">
                <div class="fake-img"></div>
              </figure>
              <div class="user-list-body d-flex w-100 justify-content-between">
                <div class="user-list-text">
                  <h5>Onur Kayabaşı</h5>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="user-list-info pl-3">
                  <small>5.20PM</small>
                </div>
              </div>
            </li>
          </ul>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  color: #646464;
}
.chatbar {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid #e6e6e6;

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

    ul {
      display: flex;
      margin-top: 0;
      margin-bottom: 0;

      li {
        margin-bottom: 0;
        margin-left: 0.5rem;

      }
    }
  }

  form {
    padding: 15px 30px;
    border-bottom: 1px solid #e6e6e6;

    input {
      border: 1px solid #e6e6e6;
      border-radius: 7px;
      margin-bottom: 1rem;

      &:focus {
        border-color: #0f7457;
        box-shadow: none;
      }
    }
  }
}
.chatbar-body {
  flex: 1 1;
  overflow: auto;


  .list-group-item {
    padding: 1rem 2rem;
    display: flex;
    cursor: pointer;

    .user-list-body {
      .user-list-text {
        display: flex;
        flex-direction: column;

        p,h5 {
          width: 100%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
      }
    }
  }
}
.ps {
  position: relative;
  height: calc(100vh - 260px);
  overflow: hidden;
}

img {
  width: 24px;
  height: 24px;
}
</style>