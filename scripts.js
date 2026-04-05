let projectData = {};

async function loadProjects() {
  const res = await fetch("projects.json");
  projectData = await res.json();
}

function openProject(id) {
  const project = projectData.projects.find(p => p.id === id);
  if (!project) return;

  const popup = document.getElementById("popup");

  popup.innerHTML = `
    <div class="popup-content">
      <img src="${project.logo}" class="logo">
      <h2>${project.name}</h2>
      <p class="meta">${project.year} • ${project.platform}</p>
      <p>${project.description}</p>

      <div class="buttons">
        ${project.buttons.map(btn => `
          <a href="${btn.link}" target="_blank">${btn.title}</a>
        `).join("")}
      </div>

      <div class="updates">
        <button class="dropdown-toggle" onclick="toggleUpdates()">Update Log ▼</button>
        <div class="dropdown" id="updateList">
          ${project.updates.map(u => `
            <div class="update">
              <strong>${u.name}</strong>
              <span>${u.date}</span>
              <p>${u.description}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <button class="close" onclick="closePopup()">Close</button>
    </div>
  `;

  popup.classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

function toggleUpdates() {
  document.getElementById("updateList").classList.toggle("open");
}

// Load on start
loadProjects();
