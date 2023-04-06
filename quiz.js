$(document).ready(function () {
    $('.button-3').remove()
    correct = [
        "Rome",
        "Zooey Deschanel",
        "Grand Canyon",
        "5,525 miles",
        "Mouna Loa",
        "21 January 1924",
        "Tennessee",
        "1960",
        "Le Louvre",
        "Madrid"
    ];
    questions = [
        "In which Italian city can you find the Colosseum?",
        "In the TV show New Girl, which actress plays Jessica Day?",
        "What is the largest canyon in the world?",
        "How long is the border between the United States and Canada?",
        "What is the largest active volcano in the world?",
        "When did Lenin die?",
        "In which US state did the Scopes Monkey Trial happen?",
        "When was the book 'To Kill a Mockingbird' by Harper Lee published?",
        "In which museum can you find Leonardo Da Vinci's Mona Lisa?",
        "In which city can you find the Prado Museum?"
    ];
    choice_options = [
        ["Venice", "Rome", "Naples", "Milan"],
        ["Zooey Deschanel", "Kaley Cuoco", "Jennifer Aniston", "Alyson Hannigan"],
        ["Verdon Gorge, France", "King's Canyon, Australia", "Grand Canyon, USA", "Iceland"],
        ["3,525 miles", "4,525 miles", "5,525 mile", "6,525 miles"],
        ["Mount Etna", "Mount Vesuvius", "Mouna Loa", "Mount Batur"],
        ["21 January 1924", "21 January 193", "21 January 1944", "21 January 1954"],
        ["Maryland", "South Dakota", "Indiana", "Tennesse"],
        ["1950", "1960", "1970", "1980"],
        ["Le Louvre", "Uffizi Museum", "British Museum", "Metropolitan Museum of Art"],
        ["Buenos Aires", "Barcelona", "Santiago", "Madrid"]
    ];
    quizBox = $("#quiz-box");
    for (let i = 0; i < 10; i++) {
        question = $('<div>', {
            'id': 'q_id' + i.toString(),
            'name': 'q_name_' + i.toString(),
            'class': 'question'
        })
        question.append("<p>" + (i + 1).toString() + " " + questions[i] + "</p>")
        for (let j = 0; j < choice_options[i].length; j++) {
            label = $('<label>')
            label.append($('<input>', {
                'type': 'radio',
                'name': 'q_opt_name_' + (i + 1).toString(),
                'value': choice_options[i][j],
                'id': 'q_opt_id_' + (i + 1).toString()
            }))
            label.append(choice_options[i][j])
            question.append(label)
        }
        quizBox.append(question)
    }
    quizBox.append('<button class="button-3">Check Answer</button>')
    reset = false;
    $('.button-3').click(function (event) {
        countCorrect = 0;
        asnweredAll = true
        for (let i = 0; i < 10; i++) {
            answer = $("input[name='q_opt_name_" + (i + 1).toString() + "']:checked").val();
            if (answer === undefined) {
                asnweredAll = false
                break
            }
            if (answer === correct[i]) countCorrect += 1;
        }
        $('#result').remove()
        if (!asnweredAll) {
            $("#quiz-box").append("<h2 id='result' style='color: red'> please, answer all questions !!!</h2>");
        } else {
            $("#quiz-box").append("<h2 id='result' style='color: red'>Result of the quiz is: " + countCorrect + "</h2>");
        }
    });
});



