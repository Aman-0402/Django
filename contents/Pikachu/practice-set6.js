/* =====================
   QUESTION DATA
   type: "single" | "multi" | "match"
   single -> options[], correct: index
   multi  -> options[], correct: [indices]
   match  -> pairs: [{ term, options[], correct: index }]
===================== */
const questions = [
    { type: "single", tag: "Flask", text: "True/False: A developer states that Flask is a microframework and relies on extensions for many advanced features.", options: ["True", "False"], correct: 0, explanation: "Flask is a microframework. It provides only the basics (routing, request handling) and relies on third-party extensions like Flask-Login, Flask-SQLAlchemy, Flask-Mail etc. for advanced features." },

    { type: "multi", tag: "Django", text: "A developer uses Django ModelForm. Select TWO benefits.", options: ["Validation", "Auto fields", "No models", "Manual HTML only"], correct: [0, 1], explanation: "Django ModelForm automatically generates form fields from a model (Auto fields) and provides built-in validation. \"Manual HTML only\" is the opposite of what ModelForm does, and \"No models\" is wrong since ModelForm is directly tied to models." },

    { type: "multi", tag: "Flask", text: "SQLAlchemy model class is modified. Select TWO migration-related actions.", options: ["Apply migration", "Restart OS", "Generate migration", "Delete DB"], correct: [0, 2], explanation: "When a SQLAlchemy model changes, you first generate a migration (flask db migrate) then apply it (flask db upgrade). Restarting OS and deleting DB are never correct migration steps." },

    { type: "match", tag: "General", text: "An e-commerce site displays personalized content. Match the template feature with its use.", pairs: [
        { term: "Rendered Page", options: ["Render Dynamic HTML", "Pass Data", "Flask Templating", "Add Logic to Template"], correct: 0 },
        { term: "Context Variable", options: ["Render Dynamic HTML", "Pass Data", "Flask Templating", "Add Logic to Template"], correct: 1 },
        { term: "Jinja2", options: ["Render Dynamic HTML", "Pass Data", "Flask Templating", "Add Logic to Template"], correct: 2 },
        { term: "Django Template", options: ["Render Dynamic HTML", "Pass Data", "Flask Templating", "Add Logic to Template"], correct: 0 },
        { term: "Template Tag", options: ["Render Dynamic HTML", "Pass Data", "Flask Templating", "Add Logic to Template"], correct: 3 }
    ], explanation: "Rendered Page and Django Template both render dynamic HTML. Context Variable passes data from view to template. Jinja2 is Flask's templating engine. Template Tags add logic like loops and conditions inside templates." },

    { type: "single", tag: "Django", text: "A trainee adds a new field to a Django model. Which command should be executed first to generate migration files?", options: ["python manage.py createsuperuser", "python manage.py migrate", "python manage.py makemigrations", "python manage.py runserver"], correct: 2, explanation: "makemigrations must always run first — it scans model changes and creates migration files. migrate comes second to apply those files to the database." },

    { type: "multi", tag: "General", text: "Before deployment, select TWO testing goals.", options: ["Catch defects", "Remove database", "Verify features", "Increase CSS size"], correct: [0, 2], explanation: "The purpose of testing before deployment is to catch bugs/defects and verify that all features work as expected. Removing database and increasing CSS size are not testing goals." },

    { type: "single", tag: "Django", text: "After changing a model, what command runs first?", options: ["runserver", "makemigrations", "startapp", "collectstatic"], correct: 1, explanation: "After any model change, makemigrations must run first to generate the migration file reflecting the changes. Then migrate applies it to the database." },

    { type: "multi", tag: "Flask", text: "Flask code uses @app.route('/home'). Select TWO effects.", options: ["Creates DB", "Runs tests", "Connects view", "Registers URL"], correct: [2, 3], explanation: "@app.route('/home') is a decorator that registers the URL /home with Flask's routing system and connects it to the view function defined below it." },

    { type: "multi", tag: "General", text: "While testing locally, select TWO commands that run development servers.", options: ["collectstatic", "python manage.py runserver", "flask run", "flask migrate"], correct: [1, 2], explanation: "python manage.py runserver starts Django's development server and flask run starts Flask's development server. collectstatic is for collecting static files and flask migrate handles database migrations." },

    { type: "multi", tag: "Django", text: "A Django team configures URLs. Select TWO responsibilities of URL routing.", options: ["Store sessions", "Map URL to view", "Dispatch requests", "Compile CSS"], correct: [1, 2], explanation: "Django's URL routing system maps incoming URLs to the appropriate view functions and dispatches requests to them. It does not store sessions or compile CSS." },

    { type: "match", tag: "General", text: "A software company is selecting technologies for a new web platform. Match each requirement with the correct framework feature.", pairs: [
        { term: "Built-in Admin Panel", options: ["Django", "Flask"], correct: 0 },
        { term: "Extension Based Design", options: ["Django", "Flask"], correct: 1 },
        { term: "Rapid Enterprise Development", options: ["Django", "Flask"], correct: 0 },
        { term: "Batteries Included", options: ["Django", "Flask"], correct: 0 },
        { term: "Lightweight Framework", options: ["Django", "Flask"], correct: 1 }
    ], explanation: "Django comes with a built-in admin panel, is batteries-included (ORM, auth, admin all built-in), and suits rapid enterprise development. Flask is lightweight and uses an extension-based design where you add only what you need." },

    { type: "single", tag: "Django", text: "True/False: A registration page sends form data through a POST request and Django processes it in a view.", options: ["True", "False"], correct: 0, explanation: "This is standard Django form handling. The HTML form submits via POST, Django's view receives the request, processes the form data, validates it, and saves it to the database." },

    { type: "single", tag: "Django", text: "A developer uses: products = Product.objects.filter(stock__lt=10) then print(products.count()). What is the purpose of this query?", options: ["Update stock values to 10", "Delete products with stock less than 10", "Retrieve products with stock less than 10", "Retrieve products with stock greater than 10"], correct: 2, explanation: "__lt is Django ORM's lookup for \"less than\". So stock__lt=10 filters products where stock is less than 10. .count() then prints how many such products exist." },

    { type: "single", tag: "Django", text: "True/False: A company maps the URL products/ to a Django view using urlpatterns in urls.py.", options: ["True", "False"], correct: 0, explanation: "In Django, urls.py contains urlpatterns — a list that maps URL patterns to view functions. Mapping products/ to a view via urlpatterns is exactly how Django routing works." },

    { type: "single", tag: "General", text: "True/False: A portal implements login, logout, and registration features to control access to protected pages.", options: ["True", "False"], correct: 0, explanation: "This describes standard authentication flow. In both Django (django.contrib.auth) and Flask (Flask-Login), you implement login, logout, and registration to control access to protected/private pages." },

    { type: "multi", tag: "Flask", text: "A team prepares a clean environment before starting a Flask app. Select TWO good practices.", options: ["Create virtual env", "Delete system Python", "Deploy first", "Install dependencies"], correct: [0, 3], explanation: "Best practice is to create a virtual environment (python -m venv venv) to isolate project packages, then install dependencies into it (pip install -r requirements.txt). Deleting system Python would break the OS and deploying first makes no sense before setup." },

    { type: "single", tag: "Flask", text: "Flask ORM mapping is handled by?", options: ["Gunicorn", "Jinja2", "Werkzeug", "SQLAlchemy"], correct: 3, explanation: "SQLAlchemy (via Flask-SQLAlchemy) handles ORM mapping in Flask — it maps Python classes to database tables. Jinja2 is the templating engine, Werkzeug is the WSGI utility library, and Gunicorn is a production WSGI server." },

    { type: "single", tag: "Flask", text: "True/False: A Flask application uses the @app.route decorator to associate a URL with a view function.", options: ["True", "False"], correct: 0, explanation: "@app.route('/path') is a decorator that binds a URL path to the function defined below it, making that function the handler (view) for that URL." },

    { type: "single", tag: "Flask", text: "A Flask application contains:\nclass Student(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    name = db.Column(db.String(50))\nWhat does this class represent?", options: ["A migration file", "A database table", "A template", "A route"], correct: 1, explanation: "In Flask-SQLAlchemy, a class that inherits from db.Model represents a database table. Each instance of the class is a row, and each db.Column is a column in that table." },

    { type: "single", tag: "General", text: "Employee objects are stored without raw SQL. Which feature?", options: ["ORM", "Templates", "Middleware", "Signals"], correct: 0, explanation: "ORM (Object Relational Mapper) allows you to interact with the database using Python objects instead of raw SQL queries. Django's ORM and SQLAlchemy (Flask) both handle this." },

    { type: "multi", tag: "General", text: "Developers compare Django and Flask. Select TWO correct statements.", options: ["Flask forces MVC", "Flask is microframework", "Django has no ORM", "Django is batteries included"], correct: [1, 3], explanation: "Flask is a microframework — minimal and flexible. Django is \"batteries included\" — it ships with ORM, admin, auth, forms, and more built-in. Flask does NOT force MVC and Django absolutely HAS an ORM." },

    { type: "single", tag: "Flask", text: "User.query.filter_by(role='admin').all() returns?", options: ["One user", "Admin users list", "Deletes users", "Count"], correct: 1, explanation: "filter_by(role='admin') filters records where role is 'admin', and .all() returns all matching records as a list. So it returns a list of all admin users." },

    { type: "single", tag: "Flask", text: "True/False: A Flask team uses SQLAlchemy so database tables can be represented as Python classes.", options: ["True", "False"], correct: 0, explanation: "This is the core purpose of SQLAlchemy's ORM — database tables are defined as Python classes (models), and rows are instances of those classes. This makes database operations more Pythonic." },

    { type: "multi", tag: "General", text: "A page should render dynamic content. Select TWO template capabilities.", options: ["Loop over data", "Create tables", "Compile Python", "Display variables"], correct: [0, 3], explanation: "Both Django templates and Jinja2 (Flask) support looping over data ({% for item in items %}) and displaying variables ({{ variable }}). Templates do not create database tables or compile Python code." },

    { type: "multi", tag: "General", text: "A registration form is submitted. Select TWO correct statements about POST.", options: ["Sends body data", "Read-only", "Used for create/update", "Always cached"], correct: [0, 2], explanation: "POST sends data in the request body (not in the URL like GET). It is used for creating or updating data. POST is not read-only (that's GET) and is never cached by default." },

    { type: "single", tag: "Django", text: "Django JSON API creation commonly uses?", options: ["WTForms", "SQLite", "Django REST Framework", "Jinja2"], correct: 2, explanation: "Django REST Framework (DRF) is the standard tool for building JSON APIs in Django. It provides serializers, viewsets, routers, and authentication out of the box. WTForms is for Flask, SQLite is a database, Jinja2 is a template engine." },

    { type: "single", tag: "Flask", text: "Team wants lightweight framework with optional components. Which approach?", options: ["Serverless only", "CMS", "Desktop MVC", "Microframework"], correct: 3, explanation: "A microframework like Flask is lightweight by design and lets you add only the components you need via extensions. Django (full framework) includes everything by default, while a microframework gives you the freedom to choose." },

    { type: "multi", tag: "Flask", text: "WTForms validates submitted data. Select TWO purposes.", options: ["Error handling", "Template compile", "Migration generation", "Input validation"], correct: [0, 3], explanation: "WTForms is a form validation library used with Flask. Its two main purposes are validating user input (checking required fields, data types, length etc.) and handling errors when validation fails." },

    { type: "single", tag: "Django", text: "True/False: A content manager updates blog articles through Django Admin without directly editing database records.", options: ["True", "False"], correct: 0, explanation: "Django Admin provides a web-based GUI for managing database records without writing SQL or directly accessing the database. Content managers can create, read, update, and delete records through the admin interface." },

    { type: "multi", tag: "Flask", text: "Deploying Flask to Heroku. Select TWO typical requirements.", options: ["Delete app.py", "requirements.txt", "Procfile", "Localhost only"], correct: [1, 2], explanation: "Heroku requires a Procfile to know how to start your app (e.g., web: gunicorn app:app) and a requirements.txt so it knows which packages to install. Deleting app.py would break the app and \"Localhost only\" is the opposite of deployment." },

    { type: "single", tag: "General", text: "True/False: A developer uses Django Forms and WTForms to validate user input before saving it to the database.", options: ["True", "False"], correct: 0, explanation: "Django Forms and WTForms both serve the purpose of validating user input on the server side before any data is saved to the database. This prevents invalid or malicious data from being stored." },

    { type: "single", tag: "Flask", text: "True/False: A booking website uses Jinja2 placeholders to display personalized customer information.", options: ["True", "False"], correct: 0, explanation: "Jinja2 uses {{ variable }} placeholders to display dynamic/personalized data passed from the Flask view into the template. This is the core purpose of Jinja2 templating." },

    { type: "single", tag: "Django", text: "True/False: A learner passes product information from a Django view into an HTML template for dynamic rendering.", options: ["True", "False"], correct: 0, explanation: "In Django, views pass data to templates using a context dictionary: return render(request, 'template.html', {'products': products}). The template then uses {{ products }} or loops to display the data dynamically." },

    { type: "single", tag: "General", text: "True/False: A trainee creates a virtual environment before installing Django packages to avoid dependency conflicts between projects.", options: ["True", "False"], correct: 0, explanation: "Virtual environments isolate project-specific packages. Without one, all projects share the same global Python packages, which can cause version conflicts. Creating a venv first is considered essential best practice." },

    { type: "single", tag: "Flask", text: "A travel booking website uses Flask and contains:\n@app.route('/offers')\ndef offers():\n    return \"Special Discounts\"\nWhat will be displayed when a user navigates to /offers?", options: ["Nothing", "Error page", "Special Discounts", "Route information"], correct: 2, explanation: "The @app.route('/offers') decorator maps the URL /offers to the offers() function. When a user visits /offers, Flask calls that function which returns the string \"Special Discounts\", and that string is displayed in the browser." },

    { type: "multi", tag: "Django", text: "A Django REST project exposes APIs. Select TWO outcomes.", options: ["HTML only", "JSON responses", "Serializer usage", "No routing"], correct: [1, 2], explanation: "Django REST Framework produces JSON responses (the standard format for APIs) and uses Serializers to convert Django model instances into JSON and validate incoming data. It does support routing and is not limited to HTML." },

    { type: "multi", tag: "Django", text: "A developer uses Book.objects.filter(author='Sam'). Select TWO truths.", options: ["Uses ORM", "Returns queryset", "Creates migration", "Drops table"], correct: [0, 1], explanation: "Book.objects.filter() uses Django's ORM to query the database without raw SQL. It returns a QuerySet — a lazy collection of matching objects. It does not create migrations or drop tables." },

    { type: "single", tag: "Flask", text: "True/False: A project uses Flask-Migrate to track and apply schema changes to the database.", options: ["True", "False"], correct: 0, explanation: "Flask-Migrate is an extension that wraps Alembic to handle database migrations in Flask. It tracks schema changes in migration files and applies them to the database using flask db migrate and flask db upgrade." },

    { type: "single", tag: "Flask", text: "Login persistence in Flask uses?", options: ["Alembic", "Flask-Login", "Celery", "Flask-Mail"], correct: 1, explanation: "Flask-Login is the extension that manages user session persistence in Flask. It handles login, logout, and remembering logged-in users across requests using sessions and cookies. Alembic is for migrations, Celery for task queues, Flask-Mail for emails." },

    { type: "match", tag: "General", text: "A QA team validates application quality. Match the tool with its primary use.", pairs: [
        { term: "Django REST Framework", options: ["REST API Development", "Unit Testing", "Build APIs", "Verify Test Conditions"], correct: 0 },
        { term: "Django TestCase", options: ["REST API Development", "Unit Testing", "Build APIs", "Verify Test Conditions"], correct: 1 },
        { term: "PyTest", options: ["REST API Development", "Unit Testing", "Build APIs", "Verify Test Conditions"], correct: 1 },
        { term: "Flask-RESTful", options: ["REST API Development", "Unit Testing", "Build APIs", "Verify Test Conditions"], correct: 2 },
        { term: "Assertion", options: ["REST API Development", "Unit Testing", "Build APIs", "Verify Test Conditions"], correct: 3 }
    ], explanation: "Django REST Framework and Flask-RESTful are both for building APIs. Django TestCase and PyTest are testing tools/frameworks for unit testing. Assertion is used inside tests to verify that a condition is true." }
];

/* =====================
   STATE
===================== */
let current = 0;
let score = 0;
let answered = [];

/* =====================
   DOM
===================== */
const examMain = document.getElementById("examMain");
const emptyState = document.getElementById("emptyState");
const qIndexEl = document.getElementById("qIndex");
const qTotalEl = document.getElementById("qTotal");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("scoreDisplay");
const finalOverlay = document.getElementById("finalOverlay");
const finalText = document.getElementById("finalText");
const retakeBtn = document.getElementById("retakeBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

/* =====================
   INIT
===================== */
function init() {
    answered = new Array(questions.length).fill(false);
    qTotalEl.textContent = questions.length;

    if (questions.length === 0) {
        emptyState.style.display = "block";
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    emptyState.style.display = "none";
    renderQuestion();
}

/* =====================
   RENDER
===================== */
function renderQuestion() {
    const q = questions[current];
    qIndexEl.textContent = current + 1;
    progressFill.style.width = `${((current + 1) / questions.length) * 100}%`;

    const wrap = document.createElement("div");
    wrap.className = "question-wrap";

    const tagRow = `<div class="q-tag-row"><span class="q-tag tag-${(q.tag || "general").toLowerCase()}">${q.tag || "General"}</span>${q.type === "multi" ? '<span class="q-hint">Select TWO</span>' : ""}${q.type === "match" ? '<span class="q-hint">Match each item</span>' : ""}</div>`;
    const textRow = `<div class="q-text">${escapeText(q.text)}</div>`;

    let bodyHtml = "";
    if (q.type === "single") {
        bodyHtml = `<div class="q-options">${q.options.map((opt, i) => `
            <button type="button" class="q-option" data-idx="${i}">
                <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
                <span>${opt}</span>
            </button>`).join("")}</div>`;
    } else if (q.type === "multi") {
        bodyHtml = `
            <div class="q-options multi">${q.options.map((opt, i) => `
                <label class="q-option q-checkbox" data-idx="${i}">
                    <input type="checkbox" value="${i}">
                    <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
                    <span>${opt}</span>
                </label>`).join("")}</div>
            <button type="button" class="check-btn" id="checkBtn" disabled>Check Answers</button>`;
    } else if (q.type === "match") {
        bodyHtml = `
            <div class="match-rows">${q.pairs.map((pair, i) => `
                <div class="match-row" data-idx="${i}">
                    <span class="match-term">${pair.term}</span>
                    <select class="match-select" data-idx="${i}">
                        <option value="" disabled selected>Choose match…</option>
                        ${pair.options.map((opt, oi) => `<option value="${oi}">${opt}</option>`).join("")}
                    </select>
                </div>`).join("")}</div>
            <button type="button" class="check-btn" id="checkBtn" disabled>Check Answers</button>`;
    }

    wrap.innerHTML = `${tagRow}${textRow}${bodyHtml}<div class="q-explanation-slot"></div>`;

    examMain.innerHTML = "";
    examMain.appendChild(wrap);

    const alreadyAnswered = answered[current];

    if (q.type === "single") {
        wrap.querySelectorAll(".q-option").forEach((btn) => {
            btn.addEventListener("click", () => handleSingleAnswer(btn, q, wrap));
        });
        if (alreadyAnswered) revealSingle(wrap, q, alreadyAnswered.selectedIdx);
    } else if (q.type === "multi") {
        const checkboxes = wrap.querySelectorAll('input[type="checkbox"]');
        const checkBtn = wrap.querySelector("#checkBtn");
        checkboxes.forEach((cb) => {
            cb.addEventListener("change", () => {
                const selectedCount = wrap.querySelectorAll('input[type="checkbox"]:checked').length;
                checkBtn.disabled = selectedCount === 0;
            });
        });
        checkBtn.addEventListener("click", () => handleMultiAnswer(wrap, q));
        if (alreadyAnswered) revealMulti(wrap, q, alreadyAnswered.selectedIdxs);
    } else if (q.type === "match") {
        const selects = wrap.querySelectorAll(".match-select");
        const checkBtn = wrap.querySelector("#checkBtn");
        selects.forEach((sel) => {
            sel.addEventListener("change", () => {
                const allFilled = [...selects].every((s) => s.value !== "");
                checkBtn.disabled = !allFilled;
            });
        });
        checkBtn.addEventListener("click", () => handleMatchAnswer(wrap, q));
        if (alreadyAnswered) revealMatch(wrap, q, alreadyAnswered.selectedIdxs);
    }

    prevBtn.disabled = current === 0;
    nextBtn.disabled = !alreadyAnswered;
    nextBtn.textContent = current === questions.length - 1 ? "Finish →" : "Next →";
}

function escapeText(text) {
    return text.replace(/\n/g, "<br>");
}

/* =====================
   SINGLE
===================== */
function handleSingleAnswer(btn, q, wrap) {
    if (answered[current]) return;
    const idx = parseInt(btn.dataset.idx);
    const isCorrect = idx === q.correct;

    answered[current] = { selectedIdx: idx, correctFlag: isCorrect };
    if (isCorrect) score++;
    scoreDisplay.textContent = score;

    revealSingle(wrap, q, idx);
    nextBtn.disabled = false;
}

function revealSingle(wrap, q, selectedIdx) {
    wrap.querySelectorAll(".q-option").forEach((btn) => {
        const i = parseInt(btn.dataset.idx);
        btn.disabled = true;
        if (i === q.correct) btn.classList.add("correct");
        else if (i === selectedIdx) btn.classList.add("wrong");
        if (i === selectedIdx) btn.classList.add("selected");
    });
    showExplanation(wrap, q);
}

/* =====================
   MULTI
===================== */
function handleMultiAnswer(wrap, q) {
    if (answered[current]) return;
    const checked = [...wrap.querySelectorAll('input[type="checkbox"]:checked')].map((cb) => parseInt(cb.value));
    const correctSet = [...q.correct].sort().join(",");
    const selectedSet = [...checked].sort().join(",");
    const isCorrect = correctSet === selectedSet;

    answered[current] = { selectedIdxs: checked, correctFlag: isCorrect };
    if (isCorrect) score++;
    scoreDisplay.textContent = score;

    revealMulti(wrap, q, checked);
    nextBtn.disabled = false;
}

function revealMulti(wrap, q, selectedIdxs) {
    wrap.querySelectorAll(".q-checkbox").forEach((label) => {
        const i = parseInt(label.dataset.idx);
        const input = label.querySelector("input");
        input.disabled = true;
        if (q.correct.includes(i)) label.classList.add("correct");
        else if (selectedIdxs.includes(i)) label.classList.add("wrong");
    });
    const checkBtn = wrap.querySelector("#checkBtn");
    if (checkBtn) checkBtn.remove();
    showExplanation(wrap, q);
}

/* =====================
   MATCH
===================== */
function handleMatchAnswer(wrap, q) {
    if (answered[current]) return;
    const selects = wrap.querySelectorAll(".match-select");
    const selectedIdxs = [...selects].map((s) => parseInt(s.value));
    const isCorrect = q.pairs.every((pair, i) => pair.correct === selectedIdxs[i]);

    answered[current] = { selectedIdxs, correctFlag: isCorrect };
    if (isCorrect) score++;
    scoreDisplay.textContent = score;

    revealMatch(wrap, q, selectedIdxs);
    nextBtn.disabled = false;
}

function revealMatch(wrap, q, selectedIdxs) {
    wrap.querySelectorAll(".match-row").forEach((row, i) => {
        const select = row.querySelector(".match-select");
        select.disabled = true;
        const isRowCorrect = q.pairs[i].correct === selectedIdxs[i];
        row.classList.add(isRowCorrect ? "correct" : "wrong");
        if (!isRowCorrect) {
            const correctLabel = document.createElement("span");
            correctLabel.className = "match-correct-hint";
            correctLabel.textContent = `✓ ${q.pairs[i].options[q.pairs[i].correct]}`;
            row.appendChild(correctLabel);
        }
    });
    const checkBtn = wrap.querySelector("#checkBtn");
    if (checkBtn) checkBtn.remove();
    showExplanation(wrap, q);
}

/* =====================
   SHARED
===================== */
function showExplanation(wrap, q) {
    if (q.explanation) {
        const slot = wrap.querySelector(".q-explanation-slot");
        slot.innerHTML = `<div class="q-explanation"><strong>💡 Explanation:</strong> ${q.explanation}</div>`;
    }
}

/* =====================
   NAVIGATION
===================== */
prevBtn.addEventListener("click", () => {
    if (current > 0) {
        current--;
        renderQuestion();
    }
});

nextBtn.addEventListener("click", () => {
    if (current < questions.length - 1) {
        current++;
        renderQuestion();
    } else {
        showFinal();
    }
});

function showFinal() {
    const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;
    finalText.textContent = `You scored ${score} out of ${questions.length} (${pct}%). ${pct >= 80 ? "🔥 Excellent!" : pct >= 60 ? "👍 Good job!" : "📚 Keep practising!"}`;
    finalOverlay.classList.remove("hidden");
}

retakeBtn.addEventListener("click", () => {
    current = 0;
    score = 0;
    answered = new Array(questions.length).fill(false);
    scoreDisplay.textContent = 0;
    finalOverlay.classList.add("hidden");
    renderQuestion();
});

/* =====================
   FULLSCREEN
===================== */
fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen();
    }
});

document.addEventListener("fullscreenchange", () => {
    fullscreenBtn.textContent = document.fullscreenElement ? "⤓" : "⛶";
});

init();
