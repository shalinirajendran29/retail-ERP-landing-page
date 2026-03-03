// Wait until page loads
document.addEventListener("DOMContentLoaded", function() {

    // Show form when button clicked
    document.getElementById("demoBtn").addEventListener("click", function() {
        document.getElementById("formContainer").style.display = "block";
        document.getElementById("formContainer").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("cancelBtn").addEventListener("click", function () {
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("demoForm").reset();
});

    // EmailJS Initialize
    emailjs.init("Okxs_6Es2Bg3KD17F");

    // Form Submit
    document.getElementById("demoForm").addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("service_3ulb8xl", "template_i0bj52q", this)
        .then(function() {
            alert("Demo Request Sent Successfully!");
            document.getElementById("demoForm").reset();
        })
        .catch(function(error) {
            alert("Failed to send!");
            console.log(error);
        });
    });

});