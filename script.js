function downloadJavaFile() {
    let filename = document.getElementById("filename").value.trim();
    let code = document.getElementById("javaCode").value;

    if (filename === "") {
        alert("Please enter a valid filename.");
        return;
    }

    let blob = new Blob([code], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename + ".java";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
