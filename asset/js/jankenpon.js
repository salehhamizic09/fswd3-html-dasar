// fungsi untuk menampilkan pop-up box
function showPopup(message) {
  alert(message);
}

// fungsi untuk memulai permainan
function startGame() {
  var options = ["gunting", "batu", "kertas"];
  var playerChoice = prompt("Silahkan pilih gunting, batu, atau kertas:");
  var computerChoice = options[Math.floor(Math.random() * 3)];
  switch (playerChoice.toLowerCase()) {
    case "gunting":
      switch (computerChoice) {
        case "gunting":
          showPopup(
            "Seri! Kamu memilih gunting, dan komputer memilih gunting juga."
          );
          break;
        case "batu":
          showPopup(
            "Sayang sekali, kamu kalah. Kamu memilih gunting, dan komputer memilih batu."
          );
          break;
        case "kertas":
          showPopup(
            "Selamat, kamu menang! Kamu memilih gunting, dan komputer memilih kertas."
          );
          break;
      }
      break;
    case "batu":
      switch (computerChoice) {
        case "gunting":
          showPopup(
            "Selamat, kamu menang! Kamu memilih batu, dan komputer memilih gunting."
          );
          break;
        case "batu":
          showPopup("Seri! Kamu memilih batu, dan komputer memilih batu juga.");
          break;
        case "kertas":
          showPopup(
            "Sayang sekali, kamu kalah. Kamu memilih batu, dan komputer memilih kertas."
          );
          break;
      }
      break;
    case "kertas":
      switch (computerChoice) {
        case "gunting":
          showPopup(
            "Sayang sekali, kamu kalah. Kamu memilih kertas, dan komputer memilih gunting."
          );
          break;
        case "batu":
          showPopup(
            "Selamat, kamu menang! Kamu memilih kertas, dan komputer memilih batu."
          );
          break;
        case "kertas":
          showPopup(
            "Seri! Kamu memilih kertas, dan komputer memilih kertas juga."
          );
          break;
      }
      break;
    default:
      showPopup("Maaf, pilihan tidak valid.");
      break;
  }
}
