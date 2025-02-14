// Show a custom-styled welcome message
Swal.fire({
    title: "Welcome!",
    text: "Welcome to my Resume!",
    icon: "success",
    confirmButtonText: "OK",
    background: "#f0f0f0",  // Light background to match your resume
    color: "#571845",  // Dark purple text
    confirmButtonColor: "#571845",  // Button color matching theme
    iconColor: "#571845"  // Success icon color
}).then(() => {
    // Show the second message after the user clicks OK
    Swal.fire({
        title: "Feedback",
        text: "If you see any mistake, feel free to ask me! I will fix this.",
        icon: "info",
        background: "#f0f0f0",
        color: "#571845",
        confirmButtonColor: "#571845",
        iconColor: "#571845",
        confirmButtonText: "Got it!"
    });
});
