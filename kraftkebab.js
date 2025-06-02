window.onload = function () {
    // Opret en container til quizzen
    const quizContainer = document.createElement("div");
    quizContainer.id = "quizContainer";
    quizContainer.style.textAlign = "center";
    quizContainer.style.margin = "20px auto";
    quizContainer.style.padding = "20px";
    quizContainer.style.border = "1px solid #ccc";
    quizContainer.style.borderRadius = "10px";
    quizContainer.style.width = "80%";
    quizContainer.style.maxWidth = "400px";
    quizContainer.style.backgroundColor = "#f9f9f9";
    document.body.appendChild(quizContainer);

    // Definer quiz-spørgsmålene
    const questions = [
        {
            question: "Hvad er dit favoritbrød?",
            options: ["Döner", "Pita", "Wrap", "Burger", "Ingen"],
            results: ["Döner", "Pita", "Wrap", "Burger", "Ingen"]
        },
        {
            question: "Hvad er dit foretrukne protein?",
            options: ["Kylling", "Oksekød", "Falafel", "Ingen"],
            results: ["Kylling", "Oksekød", "Falafel", "Ingen"]
        }
    ];

    // Definer kombinationer og deres tilsvarende navne
    const combinations = {
        "Döner-Kylling": "Nr. 1",
        "Döner-Oksekød": "Nr. 1",
        "Pita-Kylling": "Nr. 2",
        "Pita-Oksekød": "Nr. 2",
        "Ingen-Kylling": "Nr. 3",
        "Ingen-Oksekød": "Nr. 3",
        "Ingen-Falafel": "Nr. 4",
        "Wrap-Kylling": "Nr. 5",
        "Wrap-Oksekød": "Nr. 5",
        "Wrap-Falafel": "Nr. 7",
        "Burger-Kylling": "Nr. 8",
        "Burger-Oksekød": "Nr. 8",
        "Ingen-Kylling": "Nr. 9",
        "Ingen-Oksekød": "Nr. 9",
        "Ingen-Ingen": "Nr. 13" // Eksempel på en anden kombination
    };

    let currentQuestion = 0; // Hold styr på det aktuelle spørgsmål
    let selectedResults = []; // Gem brugerens valg

    // Funktion til at vise et spørgsmål
    function showQuestion() {
        // Ryd quiz-containeren (undtagen velkomstbeskeden)
        quizContainer.innerHTML = "<h2>Hvilken slags kebab er du?</h2>";

        // Tjek om der er flere spørgsmål
        if (currentQuestion < questions.length) {
            const question = questions[currentQuestion];

            // Vis spørgsmålet
            const questionText = document.createElement("p");
            questionText.textContent = question.question;
            quizContainer.appendChild(questionText);

            // Vis svarmulighederne som knapper
            question.options.forEach((option, index) => {
                const button = document.createElement("button");
                button.textContent = option;
                button.style.margin = "5px";
                button.style.padding = "10px 20px";
                button.style.border = "none";
                button.style.borderRadius = "5px";
                button.style.backgroundColor = "#ff5733";
                button.style.color = "white";
                button.style.cursor = "pointer";

                // Tilføj en klik-hændelse for at håndtere brugerens valg
                button.onclick = function () {
                    const result = question.results[index];
                    selectedResults.push(result); // Tilføj brugerens valg til listen
                    currentQuestion++; // Gå til næste spørgsmål
                    showQuestion(); // Vis det næste spørgsmål
                };

                quizContainer.appendChild(button);
            });
        } else {
            // Kombiner brugerens valg til en nøgle
            const resultKey = selectedResults.join("-");
            const kebabName = combinations[resultKey] || "Ukendt Kebab"; // Find navnet eller brug en standardværdi, som fortæller at det er en ukendt ret

            // Vis resultatet
            quizContainer.innerHTML = `
                <h2>Du er en <a href="http://saje82.web.dania-studerende.dk/kraftkebab/bestil-online/" target="_blank" style="color: #ff5733; text-decoration: none;">${kebabName}!</a></h2>
                <p>Klik på resultatet for at bestille.</p>
            `;
        }
    }

    // Start quizzen
    showQuestion();
};