document.getElementById("supportForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let issue =
    document.getElementById("issue").value;

    document.getElementById("summary").innerHTML =
    `<h3>Auto Summary</h3>
    <p>Patient ${name} reported: ${issue}</p>`;
});