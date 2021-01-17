<template>
  <div class="col-8 chat p-0">
    <!-- <div class="empty-box">
          <p class="bg-danger p-3">Yan taraftan bir yazışma seç.</p>
      </div> -->
    <div class="chat-header">
      <div class="chat-header-user">
        <figure class="user-avatar">
          <div class="fake-img"></div>
        </figure>
        <div class="chat-header-user-info">
          <h5>Onur Kayabaşı</h5>
          <small>
            <i class="text-muted">3 dakika önce</i>
          </small>
        </div>
      </div>
      <div class="chat-header-buttons">
        <ul class="d-flex">
          <li>
            <button class="action-button btn btn-outline-light">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3My44MDYgNDczLjgwNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc0LjQ1NiwyOTMuNTA2Yy05LjctMTAuMS0yMS40LTE1LjUtMzMuOC0xNS41Yy0xMi4zLDAtMjQuMSw1LjMtMzQuMiwxNS40bC0zMS42LDMxLjVjLTIuNi0xLjQtNS4yLTIuNy03LjctNCAgICBjLTMuNi0xLjgtNy0zLjUtOS45LTUuM2MtMjkuNi0xOC44LTU2LjUtNDMuMy04Mi4zLTc1Yy0xMi41LTE1LjgtMjAuOS0yOS4xLTI3LTQyLjZjOC4yLTcuNSwxNS44LTE1LjMsMjMuMi0yMi44ICAgIGMyLjgtMi44LDUuNi01LjcsOC40LTguNWMyMS0yMSwyMS00OC4yLDAtNjkuMmwtMjcuMy0yNy4zYy0zLjEtMy4xLTYuMy02LjMtOS4zLTkuNWMtNi02LjItMTIuMy0xMi42LTE4LjgtMTguNiAgICBjLTkuNy05LjYtMjEuMy0xNC43LTMzLjUtMTQuN3MtMjQsNS4xLTM0LDE0LjdjLTAuMSwwLjEtMC4xLDAuMS0wLjIsMC4ybC0zNCwzNC4zYy0xMi44LDEyLjgtMjAuMSwyOC40LTIxLjcsNDYuNSAgICBjLTIuNCwyOS4yLDYuMiw1Ni40LDEyLjgsNzQuMmMxNi4yLDQzLjcsNDAuNCw4NC4yLDc2LjUsMTI3LjZjNDMuOCw1Mi4zLDk2LjUsOTMuNiwxNTYuNywxMjIuN2MyMywxMC45LDUzLjcsMjMuOCw4OCwyNiAgICBjMi4xLDAuMSw0LjMsMC4yLDYuMywwLjJjMjMuMSwwLDQyLjUtOC4zLDU3LjctMjQuOGMwLjEtMC4yLDAuMy0wLjMsMC40LTAuNWM1LjItNi4zLDExLjItMTIsMTcuNS0xOC4xYzQuMy00LjEsOC43LTguNCwxMy0xMi45ICAgIGM5LjktMTAuMywxNS4xLTIyLjMsMTUuMS0zNC42YzAtMTIuNC01LjMtMjQuMy0xNS40LTM0LjNMMzc0LjQ1NiwyOTMuNTA2eiBNNDEwLjI1NiwzOTguODA2ICAgIEM0MTAuMTU2LDM5OC44MDYsNDEwLjE1NiwzOTguOTA2LDQxMC4yNTYsMzk4LjgwNmMtMy45LDQuMi03LjksOC0xMi4yLDEyLjJjLTYuNSw2LjItMTMuMSwxMi43LTE5LjMsMjAgICAgYy0xMC4xLDEwLjgtMjIsMTUuOS0zNy42LDE1LjljLTEuNSwwLTMuMSwwLTQuNi0wLjFjLTI5LjctMS45LTU3LjMtMTMuNS03OC0yMy40Yy01Ni42LTI3LjQtMTA2LjMtNjYuMy0xNDcuNi0xMTUuNiAgICBjLTM0LjEtNDEuMS01Ni45LTc5LjEtNzItMTE5LjljLTkuMy0yNC45LTEyLjctNDQuMy0xMS4yLTYyLjZjMS0xMS43LDUuNS0yMS40LDEzLjgtMjkuN2wzNC4xLTM0LjFjNC45LTQuNiwxMC4xLTcuMSwxNS4yLTcuMSAgICBjNi4zLDAsMTEuNCwzLjgsMTQuNiw3YzAuMSwwLjEsMC4yLDAuMiwwLjMsMC4zYzYuMSw1LjcsMTEuOSwxMS42LDE4LDE3LjljMy4xLDMuMiw2LjMsNi40LDkuNSw5LjdsMjcuMywyNy4zICAgIGMxMC42LDEwLjYsMTAuNiwyMC40LDAsMzFjLTIuOSwyLjktNS43LDUuOC04LjYsOC42Yy04LjQsOC42LTE2LjQsMTYuNi0yNS4xLDI0LjRjLTAuMiwwLjItMC40LDAuMy0wLjUsMC41ICAgIGMtOC42LDguNi03LDE3LTUuMiwyMi43YzAuMSwwLjMsMC4yLDAuNiwwLjMsMC45YzcuMSwxNy4yLDE3LjEsMzMuNCwzMi4zLDUyLjdsMC4xLDAuMWMyNy42LDM0LDU2LjcsNjAuNSw4OC44LDgwLjggICAgYzQuMSwyLjYsOC4zLDQuNywxMi4zLDYuN2MzLjYsMS44LDcsMy41LDkuOSw1LjNjMC40LDAuMiwwLjgsMC41LDEuMiwwLjdjMy40LDEuNyw2LjYsMi41LDkuOSwyLjVjOC4zLDAsMTMuNS01LjIsMTUuMi02LjkgICAgbDM0LjItMzQuMmMzLjQtMy40LDguOC03LjUsMTUuMS03LjVjNi4yLDAsMTEuMywzLjksMTQuNCw3LjNjMC4xLDAuMSwwLjEsMC4xLDAuMiwwLjJsNTUuMSw1NS4xICAgIEM0MjAuNDU2LDM3Ny43MDYsNDIwLjQ1NiwzODguMjA2LDQxMC4yNTYsMzk4LjgwNnoiIGZpbGw9IiMzYmE5MmIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMjU2LjA1NiwxMTIuNzA2YzI2LjIsNC40LDUwLDE2LjgsNjksMzUuOHMzMS4zLDQyLjgsMzUuOCw2OWMxLjEsNi42LDYuOCwxMS4yLDEzLjMsMTEuMmMwLjgsMCwxLjUtMC4xLDIuMy0wLjIgICAgYzcuNC0xLjIsMTIuMy04LjIsMTEuMS0xNS42Yy01LjQtMzEuNy0yMC40LTYwLjYtNDMuMy04My41cy01MS44LTM3LjktODMuNS00My4zYy03LjQtMS4yLTE0LjMsMy43LTE1LjYsMTEgICAgUzI0OC42NTYsMTExLjUwNiwyNTYuMDU2LDExMi43MDZ6IiBmaWxsPSIjM2JhOTJiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ3My4yNTYsMjA5LjAwNmMtOC45LTUyLjItMzMuNS05OS43LTcxLjMtMTM3LjVzLTg1LjMtNjIuNC0xMzcuNS03MS4zYy03LjMtMS4zLTE0LjIsMy43LTE1LjUsMTEgICAgYy0xLjIsNy40LDMuNywxNC4zLDExLjEsMTUuNmM0Ni42LDcuOSw4OS4xLDMwLDEyMi45LDYzLjdjMzMuOCwzMy44LDU1LjgsNzYuMyw2My43LDEyMi45YzEuMSw2LjYsNi44LDExLjIsMTMuMywxMS4yICAgIGMwLjgsMCwxLjUtMC4xLDIuMy0wLjJDNDY5LjU1NiwyMjMuMzA2LDQ3NC41NTYsMjE2LjMwNiw0NzMuMjU2LDIwOS4wMDZ6IiBmaWxsPSIjM2JhOTJiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
              />
            </button>
          </li>
          <li>
            <button class="action-button btn btn-outline-light">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3MiA0NzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCw4MCkiPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ2Ny4xMDE1NjIgMjYuNTI3MzQ0Yy0zLjAzOTA2Mi0xLjgwMDc4Mi02Ljc5Njg3NC0xLjg3MTA5NC05Ljg5ODQzNy0uMTc5Njg4bC0xMDguMjk2ODc1IDU5LjEzMjgxM3YtMzUuNDgwNDY5Yy0uMDMxMjUtMjcuNjAxNTYyLTIyLjM5ODQzOC00OS45Njg3NS01MC01MGgtMjQ4LjkwNjI1Yy0yNy42MDE1NjIuMDMxMjUtNDkuOTY4NzUgMjIuMzk4NDM4LTUwIDUwdjE5Ny40MjE4NzVjLjAzMTI1IDI3LjYwMTU2MyAyMi4zOTg0MzggNDkuOTY4NzUgNTAgNTBoMjQ4LjkwNjI1YzI3LjYwMTU2Mi0uMDMxMjUgNDkuOTY4NzUtMjIuMzk4NDM3IDUwLTUwdi0zNC44MzU5MzdsMTA4LjMwMDc4MSA1OS4xMzI4MTJjMy4wOTc2NTcgMS42OTE0MDYgNi44NTkzNzUgMS42MjUgOS44OTQ1MzEtLjE3NTc4MSAzLjAzOTA2My0xLjgwNDY4OCA0Ljg5ODQzOC01LjA3NDIxOSA0Ljg5ODQzOC04LjYwMTU2M3YtMjI3LjgxNjQwNmMwLTMuNTMxMjUtMS44NjMyODEtNi43OTY4NzUtNC44OTg0MzgtOC41OTc2NTZ6bS0xMzguMjAzMTI0IDIyMC44OTg0MzdjLS4wMTU2MjYgMTYuNTYyNS0xMy40Mzc1IDI5Ljk4MDQ2OS0zMCAzMGgtMjQ4Ljg5ODQzOGMtMTYuNTYyNS0uMDE5NTMxLTI5Ljk4MDQ2OS0xMy40Mzc1LTMwLTMwdi0xOTcuNDI1NzgxYy4wMTk1MzEtMTYuNTU4NTk0IDEzLjQzNzUtMjkuOTgwNDY5IDMwLTMwaDI0OC45MDYyNWMxNi41NTg1OTQuMDE5NTMxIDI5Ljk4MDQ2OSAxMy40NDE0MDYgMzAgMzB6bTEyMy4xMDE1NjItMS4zMzU5MzctMTAzLjA5Mzc1LTU2LjI4OTA2M3YtODEuNTM1MTU2bDEwMy4wOTM3NS01Ni4yODUxNTZ6bTAgMCIgZmlsbD0iI2M1MDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
              />
            </button>
          </li>
          <li>
            <button class="action-button btn btn-outline-light">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQyNi42NjcgNDI2LjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSI0Mi42NjciIGN5PSIyMTMuMzMzIiByPSI0Mi42NjciIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSIyMTMuMzMzIiBjeT0iMjEzLjMzMyIgcj0iNDIuNjY3IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L2NpcmNsZT4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPGNpcmNsZSBjeD0iMzg0IiBjeT0iMjEzLjMzMyIgcj0iNDIuNjY3IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L2NpcmNsZT4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <perfect-scrollbar>
      <div class="chat-body">
        <div class="messages" v-for="i in 10" :key="i">
          <div class="message-item going-msg">
            <div class="message-content">
              Meraba dünya...!!
              <small class="ml-2">12.25AM</small>
            </div>
          </div>
          <div class="message-item coming-msg">
            <div class="message-content">
              <small class="mr-2">12.35AM</small>
              SELAAAM öptümm...
            </div>
          </div>
        </div>
      </div>
    </perfect-scrollbar>
    <div class="chat-footer">
      <form action="#" class="d-flex align-items-center">
        <div class="emoji">
          <button class="btn btn-light mr-3">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQzNy4wMiw3NC45OEMzODguNjY3LDI2LjYyOSwzMjQuMzgsMCwyNTYsMFMxMjMuMzMzLDI2LjYyOSw3NC45OCw3NC45OEMyNi42MjksMTIzLjMzMywwLDE4Ny42MiwwLDI1NiAgICBzMjYuNjI5LDEzMi42NjgsNzQuOTgsMTgxLjAyQzEyMy4zMzMsNDg1LjM3MSwxODcuNjIsNTEyLDI1Niw1MTJzMTMyLjY2Ny0yNi42MjksMTgxLjAyLTc0Ljk4ICAgIEM0ODUuMzcxLDM4OC42NjgsNTEyLDMyNC4zOCw1MTIsMjU2UzQ4NS4zNzEsMTIzLjMzMyw0MzcuMDIsNzQuOTh6IE0yNTYsNDcyYy0xMTkuMTAzLDAtMjE2LTk2Ljg5Ny0yMTYtMjE2UzEzNi44OTcsNDAsMjU2LDQwICAgIHMyMTYsOTYuODk3LDIxNiwyMTZTMzc1LjEwMyw0NzIsMjU2LDQ3MnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM2OC45OTMsMjg1Ljc3NmMtMC4wNzIsMC4yMTQtNy4yOTgsMjEuNjI2LTI1LjAyLDQyLjM5M0MzMjEuNDE5LDM1NC41OTksMjkyLjYyOCwzNjgsMjU4LjQsMzY4ICAgIGMtMzQuNDc1LDAtNjQuMTk1LTEzLjU2MS04OC4zMzMtNDAuMzAzYy0xOC45Mi0yMC45NjItMjcuMjcyLTQyLjU0LTI3LjMzLTQyLjY5MWwtMzcuNDc1LDEzLjk5ICAgIGMwLjQyLDEuMTIyLDEwLjUzMywyNy43OTIsMzQuMDEzLDU0LjI3M0MxNzEuMDIyLDM4OS4wNzQsMjEyLjIxNSw0MDgsMjU4LjQsNDA4YzQ2LjQxMiwwLDg2LjkwNC0xOS4wNzYsMTE3LjA5OS01NS4xNjYgICAgYzIyLjMxOC0yNi42NzUsMzEuMTY1LTUzLjU1LDMxLjUzMS01NC42ODFMMzY4Ljk5MywyODUuNzc2eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSIxNjgiIGN5PSIxODAuMTIiIHI9IjMyIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L2NpcmNsZT4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPGNpcmNsZSBjeD0iMzQ0IiBjeT0iMTgwLjEyIiByPSIzMiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            />
          </button>
        </div>
        <input type="text" class="form-control" placeholder="Mesajını gir.." />
        <div class="add-send-buttons">
          <div class="btn btn-light">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3MS42NDEgNDcxLjY0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDMxLjY2Niw0OS40MTJjLTUxLjY5Mi01MC41NzgtMTM0LjMzLTUwLjU2Ny0xODYuMDA5LDAuMDI1TDI4LjkxMSwyNjYuMTg0Yy0zOS4xOTIsNDAuMTE2LTM4LjQ0MywxMDQuNDA3LDEuNjczLDE0My41OTkgICAgYzM5LjQ1NiwzOC41NDgsMTAyLjQ3LDM4LjU0OCwxNDEuOTI2LDBsMTk2LjI2Ny0xOTYuMjY3YzI1LjUxNS0yNS41MTUsMjUuNTE1LTY2Ljg4NCwwLTkyLjM5OSAgICBjLTI1LjUxNS0yNS41MTUtNjYuODg0LTI1LjUxNS05Mi4zOTksMEw4OC42NDQsMzA4Ljg1Yy02LjU0OCw2Ljc4LTYuMzYsMTcuNTg0LDAuNDIsMjQuMTMyYzYuNjE0LDYuMzg4LDE3LjA5OSw2LjM4OCwyMy43MTMsMCAgICBMMzAwLjUxLDE0NS4yNDljMTIuNDQ5LTExLjkyNiwzMi4yMDktMTEuNTAxLDQ0LjEzNCwwLjk0OGMxMS41NjUsMTIuMDczLDExLjU2NSwzMS4xMTQsMCw0My4xODdMMTQ4LjM3OCwzODUuNjUgICAgYy0yNi41MTQsMjYuMTM3LTY5LjE5NywyNS44MzEtOTUuMzM0LTAuNjgzYy0yNS44NzMtMjYuMjQ2LTI1Ljg3My02OC40MDUsMC05NC42NTFMMjY5Ljc5LDczLjU2OSAgICBjMzguNjA4LTM4LjYyMiwxMDEuMjE0LTM4LjYzMywxMzkuODM2LTAuMDI2YzM4LjYyMiwzOC42MDcsMzguNjMzLDEwMS4yMTQsMC4wMjYsMTM5LjgzNkwxOTIuOTA1LDQzMC4xMjYgICAgYy03LjE1OSw2LjEzMS03Ljk5MywxNi45MDUtMS44NjIsMjQuMDY0YzYuMTMxLDcuMTU5LDE2LjkwNSw3Ljk5MywyNC4wNjQsMS44NjJjMC42NjgtMC41NzIsMS4yOS0xLjE5NCwxLjg2Mi0xLjg2MiAgICBsMjE2Ljc0Ny0yMTYuNzQ3QzQ4NS4wNzMsMTg0Ljk1NCw0ODQuMTU2LDEwMC43NjksNDMxLjY2Niw0OS40MTJ6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
            />
          </div>
          <div class="btn btn-success">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA3LjYwOCw0LjM5NWMtNC4yNDMtNC4yNDQtMTAuNjA5LTUuNTQ5LTE2LjE3Ny0zLjMyMUw5LjQzLDE5My44NzJjLTUuNTE1LDIuMjA2LTkuMjA4LDcuNDU4LTkuNDIsMTMuMzk1ICAgIGMtMC4yMTEsNS45MzYsMy4xMDEsMTEuNDM3LDguNDQ1LDE0LjAyOWwxOTAuMDY4LDkyLjE4MWw5Mi4xODIsMTkwLjA2OGMyLjUxNCw1LjE4NCw3Ljc2NCw4LjQ1NSwxMy40OTMsOC40NTUgICAgYzAuMTc4LDAsMC4zNTctMC4wMDMsMC41MzYtMC4wMWM1LjkzNS0wLjIxMSwxMS4xODktMy45MDQsMTMuMzk0LTkuNDE5bDE5Mi44LTQ4MS45OTggICAgQzUxMy4xNTYsMTUuMDAxLDUxMS44NTEsOC42MzgsNTA3LjYwOCw0LjM5NXogTTUyLjA5NCwyMDkuMTE4TDQzNC43Miw1Ni4wNjlMMjA2LjY5MSwyODQuMDk2TDUyLjA5NCwyMDkuMTE4eiBNMzAyLjg4Myw0NTkuOTA3ICAgIGwtNzQuOTc5LTE1NC41OTlsMjI4LjAzLTIyOC4wMjdMMzAyLjg4Myw0NTkuOTA3eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.empty-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chat {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e6e6e6;
}
.chat-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  padding: 15px 27px;
}
.chat-header-user {
  display: flex;
  align-items: center;
}
.chat-header-buttons li {
  margin-left: 0.5rem;
}
.chat-body {
  overflow: auto;
  padding: 25px;
}
.messages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .message-item {
    margin-bottom: 3rem;
  }

  .going-msg {
    margin-left: auto;

    .message-content {
      background-color: #4bbf73;
      color: #fff;
      border-radius: 7px;
      padding: 10px 20px;
    }
  }

  .coming-msg {
    margin-right: auto;

    .message-content {
      background: #ebebeb;
      border-radius: 7px;
      padding: 10px 20px;
    }
  }
}
.ps {
  position: relative;
  height: calc(100vh - 92px - 85px);
}
.chat-footer {
  max-height: 85px;
  border-top: 1px solid #e6e6e6;
  padding: 17px 30px;
}
form {
  input {
    border: 1px solid #e6e6e6;
    border-radius: 7px;
    font-size: 14px;

    &:focus {
      border-color: #0f7457;
      box-shadow: none;
    }
  }
}

.add-send-buttons {
  display: flex;
}
</style>