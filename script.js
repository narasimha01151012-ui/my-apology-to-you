function nextScene(sceneNumber){

    // Hide all scenes
    let scenes = document.querySelectorAll(".scene");
    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    // Show selected scene
    document.getElementById("scene" + sceneNumber).classList.add("active");
}

// YES button
function yes(){

    document.getElementById("result").innerHTML = `
    <h2 style="color:#ffb6d9;">❤️ Thank You ❤️</h2>

    <p>
    Your forgiveness means everything to me.<br><br>

    I promise to become a better person,
    respect your feelings,
    and never repeat my mistakes.<br><br>

    Thank you for giving me another chance. 🌹❤️
    </p>
    `;

    document.body.style.background =
    "linear-gradient(135deg,#ff5f9e,#ff89b5,#ffc0cb)";
}

// I Need Some Time button
function time(){

    document.getElementById("result").innerHTML = `
    <h2 style="color:#ffd6e8;">🌸 That's Okay ❤️</h2>

    <p>
    I understand...<br><br>

    Take all the time you need.<br><br>

    I'll respect your decision and patiently wait.<br><br>

    No matter what,
    I truly wish for your happiness. ❤️
    </p>
    `;
}
