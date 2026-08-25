const start = new Date("2026-01-01T00:00:00");
const end = new Date("2027-01-01T00:00:00");

function updateProgress(){
  const now = new Date();
  const total = end - start;
  const elapsed = Math.min(Math.max(now - start, 0), total);
  const remaining = Math.max(end - now, 0);
  const percent = elapsed / total * 100;
  const days = Math.ceil(remaining / 86400000);

  document.getElementById("percent").textContent = percent.toFixed(2) + "%";
  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("daysLeft").textContent = days;
  document.getElementById("hoursLeft").textContent = String(Math.floor((remaining / 3600000) % 24)).padStart(2,"0");
  document.getElementById("progressText").textContent =
    `${percent.toFixed(1)}% de 2026 já passou. Ainda faltam ${days} dias para começar 2027.`;

  const s = Math.floor(remaining / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  document.getElementById("countdown").textContent =
    `${String(d).padStart(3,"0")}d ${String(h).padStart(2,"0")}h ${String(m).padStart(2,"0")}m ${String(sec).padStart(2,"0")}s`;

  document.getElementById("dateNow").textContent =
    now.toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric"}).toUpperCase();
}

updateProgress();
setInterval(updateProgress,1000);

const toast = document.getElementById("toast");
const aiCard = document.getElementById("aiCard");
aiCard.addEventListener("click",()=>{
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(()=>toast.classList.remove("show"),5000);
});
document.getElementById("closeToast").addEventListener("click",()=>toast.classList.remove("show"));
