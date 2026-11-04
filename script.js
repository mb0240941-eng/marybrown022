
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const loginPage = document.getElementById("loginPage");
  const dashboard = document.getElementById("dashboard");
  const loginError = document.getElementById("loginError");
  const actionMessage = document.getElementById("actionMessage");

  const TEST_USERNAME = "mary brown";
  const TEST_PASSWORD = "Brown123!";

  if (!loginForm || !loginPage || !dashboard ||
      !loginError || !actionMessage) {
    console.error("One or more required HTML elements are missing.");
    return;
  }

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document
      .getElementById("username")
      .value.trim()
      .toLowerCase();

    const password = document.getElementById("password").value;

    if (
      username === TEST_USERNAME &&
      password === TEST_PASSWORD
    ) {
      loginError.textContent = "";
      loginPage.classList.add("hidden");
      dashboard.classList.remove("hidden");

      document.getElementById("todayDate").textContent =
        new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        });

      actionMessage.textContent = "";
    } else {
      loginError.textContent =
        "Incorrect username or password. Please try again.";
    }
  });

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      dashboard.classList.add("hidden");
      loginPage.classList.remove("hidden");
      document.getElementById("password").value = "";
      actionMessage.textContent = "";
    });
  }

  const transferBtn = document.getElementById("transferBtn");
  if (transferBtn) {
    transferBtn.addEventListener("click", function () {
      actionMessage.textContent =
        "Transfers are currently unavailable because an outstanding balance of -$10,000.00 must be cleared before transfer services can resume.";
    });
  }

  const withdrawBtn = document.getElementById("withdrawBtn");
  if (withdrawBtn) {
    withdrawBtn.addEventListener("click", function () {
      actionMessage.textContent =
        "“Withdrawals are currently unavailable due to an outstanding balance of -$10,000.00 on the account.”";
    });
  }
});
