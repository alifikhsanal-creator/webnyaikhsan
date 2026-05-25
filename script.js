function toggleMenu() {
      document.getElementById('menu').classList.toggle('active');
    }
    function toggleTheme() {
      document.body.classList.toggle('light');
    }
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
    hiddenElements.forEach((el) => observer.observe(el));
    
   function kirimData(){
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;
  console.log("Nama:", nama);
  console.log("Email:", email);
  console.log("Pesan:", pesan);
}
// Sosial Media
    function instagram(){
      window.open("https://www.instagram.com/alif.ikhsann_/#", "_blank");
    }

    function youtube(){
      window.open("http://www.youtube.com/@Animation_Mine611", "_blank");
    }

    function tiktok(){
      window.open("https://www.tiktok.com/@mnwrxv?is_from_webapp=1&sender_device=pc", "_blank");
    }